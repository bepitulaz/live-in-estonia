# Live In Estonia 🇪🇪

This repository contains the source code of [liveinestonia.com](https://www.liveinestonia.com), a photo blog project about living in Estonia by [Asep Bagja Priandana](https://www.asepbagja.com).

You can fork and use the source code for your photo blog too.

## Tech stack

- Google Photos as a content management system.
- Next.js as a static site generator
- Node.js version >= 16 

You can deploy it anywhere. Live In Estonia is deployed on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## How to use this project

Before using this project, you must have a Google Photos account.

### 1. Preparing Google Photos as CMS

1. Create an album.
2. Upload all your photos to that newly created album.
3. You can put the description of the photo from Info menu.
4. Get the ID for that album.
5. Put it in `.env` file (don't forget to rename it from `.env.example`).

> **Note**
>
> There is no easy way to get the album ID without writing a code to fetch [this endpoint](https://developers.google.com/photos/library/guides/list#listing-albums).

### 2. Preparing Google OAuth credential

You can follow the guide from Google about how to get the access credential from Google Cloud Platform: [the guide](https://developers.google.com/workspace/guides/create-credentials).

> **Note**
>
> When creating the credential choose "Desktop application" instead of "Web application".

Download `google-secret.json` file from this process, and put it in the root of this repository.

### 3. Fetching all photos

This project is using Static Site Generator feature of Next.js. Thus, we need to prepare the data before building Next.js

1. Fetch all photos from Google Photos by running `yarn get-photos`. Follow the authentication process that happens when you run that CLI command.
2. After the process is completed, you will have `posts.json` file inside `data` directory.

### 4. Running the project on your local machine

You can run it by using `yarn dev` command.

## Future plan

Enhance `yarn get-photos` command to get the `album ID` easily without put it inside `.env` file.

## License

This project is licensed under MIT, you can use it freely and as it is.

Happy photo blogging! 📸😄