import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Arthurdw - Freelance Software Engineer",
  description:
    "Arthur De Witte is a passionate full-stack freelance software engineer whom is interested in developing proper, clean and stable code! He likes to utilize Rust, Python, JavaScript/TypeScript for this. Building API's, Websites and scripts are no challenge!",

  head: [
    [
      "script",
      {
        defer: true,
        "data-domain": "arthurdw.com",
        src: "https://analytics.arthurdw.com/js/script.js",
      },
    ],
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
