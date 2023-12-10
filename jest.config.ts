export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
   moduleNameMapper: {
     "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ['/node_modules/(?!swiper|ssr-window|dom7)'],
};
