require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const isEmpty = require("lodash/isEmpty");
const debug = require("debug")("gphotos:googleAuth");
const googleAuth = require("./googleauth");

const secretPath = "google-secret.json";
const scopes = [
  "https://www.googleapis.com/auth/photoslibrary.readonly",
  "https://www.googleapis.com/auth/photoslibrary.sharing",
];

const secrets = JSON.parse(fs.readFileSync(secretPath));
const albumId = process.env.ALBUM_ID;

async function generateDataFromGooglePhotos(albumId) {
  let result = [];
  let accessToken = "";
  try {
    // get authenticated oAuth2 client
    const oAuth2Client = await googleAuth.generateOAuthClient(secrets, scopes);
    debug("oAuthClient received, getting events....");
    
    accessToken = oAuth2Client?.credentials?.access_token;
    if (Date.now() > oAuth2Client?.credentials?.expiry_date) {
      accessToken = await googleAuth.getAccessTokenFromRefreshToken(oAuth2Client, secrets);
    }
    
    // get the content of my album
    const bearer = `Bearer ${accessToken}`;
    const apiUrl = "/v1/mediaItems:search";
    const instance = axios.create({
      baseURL: "https://photoslibrary.googleapis.com/",
      timeout: 10000,
      headers: { Authorization: bearer },
    });
    const response = await instance.post(apiUrl, {
      pageSize: "100",
      albumId,
    });
    result = response.data.mediaItems;
  } catch (err) {
    console.error("ERROR: ", err.message);
  }
  return result;
}

function mapGooglePhotosMedia(photos) {
  const result = photos.map((photo) => {
    return {
      id: photo.id,
      imageUrl: `${photo.baseUrl}=w${photo.mediaMetadata.width}-h${photo.mediaMetadata.height}-no?authuser=0`,
      width: photo.mediaMetadata.width,
      height: photo.mediaMetadata.height,
      date: photo.mediaMetadata.creationTime,
      altText: isEmpty(photo.description)
        ? "No description yet."
        : photo.description,
      cameraInfo: photo.mediaMetadata?.photo ?? {},
    };
  });

  return { posts: result };
}

async function main() {
  const photos = await generateDataFromGooglePhotos(albumId);
  const mappedData = mapGooglePhotosMedia(photos);
  const jsonContent = JSON.stringify(mappedData);

  fs.writeFile("data/posts.json", jsonContent, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    debug("JSON file has been saved.");
  });
}

main();
