import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/intro",
  {
    link: "/posts/",
    icon: "pen-to-square",
    text: "Posts",
  },
]);
