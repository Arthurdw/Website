import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    {
      text: "Articles",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
