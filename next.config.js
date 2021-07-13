const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },

  images: {
    domains: ["res.cloudinary.com", "m.media-amazon.com", "help.audible.in"],
  },

  env: {
    firebase_config_api_key: process.env.FIREBASE_CONFIG_API_KEY,
    firebase_authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebase_projectId: process.env.FIREBASE_PROJECT_ID,
    firebase_storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebase_messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
    firebase_appId: process.env.FIREBASE_APP_ID,
  },
});
