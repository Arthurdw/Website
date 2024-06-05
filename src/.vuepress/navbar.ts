import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/intro",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: ["web32"],
  },
]);
