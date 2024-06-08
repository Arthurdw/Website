---
title: Creating a personal website and blog with VuePress
author: Arthur De Witte
date: 2024-06-08
category:
    - English
    - Technology
tag:
    - HOWEST
    - Vue
---

As I come to the end of my studies for the bachelors degree at [HOWEST](https://www.howest.be) university, we have to create a personal website and blog. On this website we should report the events that we attended, the projects we worked on, and the experiences we had during our studies.

In fact, the website you are reading this article from right now is most likely the one I created for this assignment. I chose to use [VuePress](https://vuepress.vuejs.org) to build my website, and I must say, I am quite pleased with the results.

## Why VuePress?

The last three months, I had to do an internship and perform research for my thesis. Luckily my internship place [H.Essers](https://www.essers.com/) an international transport and logistics company wanted me to do research into the different kind of web solutions and their advantages and disadvantages. During that process I have gained a great liking to Vue, and therefore I chose to use VuePress for my personal website; as it is built on top of Vue and statically pre-generated. For other future projects I will most likely use SvelteKit or NuxtJS. If you want to know more about my research, feel free to [read the paper](https://l.ardw.be/ngws).

## How did I build this website?

As I didn't have much time left before the required deadline for this assignment I decided to use the [VuePress Theme Hope](https://theme-hope.vuejs.press/). This is a fully customizable VuePress theme that is easy to set up and use. I was able to quickly get my website up and running, and I was able to customize it to my liking with minimal effort.

### Get started with VuePress

To get started, you will need [Node.js](https://nodejs.org) installed on your system. I also used [pnpm](https://pnpm.io) as my package manager, but you can use npm or yarn if you prefer. Once you have Node.js installed, you can create a new VuePress project by running the following commands in your terminal:

```bash
pnpm create vuepress-theme-hope my-docs
```

Then you can navigate to the newly created directory and start the development server with the following command:

```bash
pnpm docs:dev
```

And voilà! You now have a VuePress website up and running. You can start customizing the theme and adding content to your heart's content.

### Deploying your VuePress website

I hosted my website with [Netlify](https://www.netlify.com/), which is a great platform for hosting static websites. Netlify has a free tier that is perfect for personal websites, and it provides continuous deployment, custom domains, and other great features. I highly recommend using Netlify to host your VuePress website.

#### Netlify setup

Connect your GitHub repository to Netlify, and set up a new site. Your build command should be `pnpm docs:build`, and your publish directory should be `src/.vuepress/dist`. Once you have configured these settings, Netlify will automatically deploy your website whenever you push changes to your repository.

Also make sure that your node version is set to at least node 18, this can be done by setting the `NODE_VERSION` environment variable in the Netlify settings.

## Conclusion

In conclusion, creating a personal website and blog with VuePress has been a rewarding experience. VuePress offers a seamless integration with Vue, making it a powerful tool for building static websites. The VuePress Theme Hope provided a customizable and user-friendly theme, allowing me to quickly set up and customize my website to my liking. With the help of Netlify, deploying and hosting my VuePress website was a breeze. Overall, VuePress has proven to be a reliable and efficient choice for creating a personal website and blog. I look forward to exploring other web solutions like SvelteKit and NuxtJS for future projects. Happy coding!