import PlausibleProvider from "next-plausible";
import React, { useEffect } from 'react';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    document.body.className = pageProps.isDark ? 'dark-mode' : 'font-inter text-base text-gray-800 bg-white antialiased font-feature-default';
  });

  return (
    <PlausibleProvider domain="liveinestonia.com" trackOutboundLinks={true}>
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
