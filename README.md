<!-- Warning -->

⚠️ **Please Note: This project is still currently a work in progress and the first version has not yet been released** ⚠️

<!-- /Warning -->

<!-- Hero  -->

# Ally Design System Starter Kit

<!-- Tech Logos -->
<div style="margin: 20px 0 10px" >
    <img alt="Gatsby Logo" src="./src/08_Images/logos/GatsbyIconLogo.png" width="32" style="margin-right: 5px" />
    <img alt="Storybook Logo" src="./src/08_Images/logos/StorybookIconLogo.png" width="32" style="margin-right: 5px" />
    <img alt="Figma Logo" src="./src/08_Images/logos/FigmaIconLogo.png" width="32" style="margin-right: 5px" />
    <img alt="React JS Logo" src="./src/08_Images/logos/ReactIconLogo.png" width="32" style="margin-right: 5px" />
    <img alt="Sass Logo" src="./src/08_Images/logos/SassIconLogo.png" width="32" style="margin-right: 5px" />
    <img alt="BEM Logo" src="./src/08_Images/logos/BEMIconLogo.png" width="32" style="margin-right: 5px" />
    <img alt="GraphQL Logo" src="./src/08_Images/logos/GraphQLIconLogo.png" width="32" style="margin-right: 5px" />
    <img alt="Atomic Design Logo" src="./src/08_Images/logos/AtomicDesignIconLogo.png" width="32" style="margin-right: 5px" />
    <img alt="Prettier Logo" src="./src/08_Images/logos/PrettierIconLogo.png" width="32" style="margin-right: 5px" />
    <!-- TODO - Update to MDX When fully working  -->
    <img alt="Markdown Logo" src="./src/08_Images/logos/MarkdownIconLogo.png" width="32" />
</div>

<!-- /Tech Logos -->

<!-- Repo Info Shields https://shields.io -->

![Version](https://img.shields.io/github/package-json/v/nikkipantony/ally-design-system-starter-kit?color=%23ffd700&label=%20Version&style=flat-square) <span style="margin-right: 5px" ></span>
![Open issues](https://img.shields.io/github/issues/nikkipantony/ally-design-system-starter-kit?color=%23ffd700&label=Open%20Issues&style=flat-square) <span style="margin-right: 5px" ></span>
![Closed issues](https://img.shields.io/github/issues-closed/nikkipantony/ally-design-system-starter-kit?color=%23ffd700&label=Closed%20Issues&style=flat-square)
<span style="margin-right: 5px" ></span>
![Stars](https://img.shields.io/github/stars/nikkipantony/ally-design-system-starter-kit?color=%23ffd700&label=Stars&style=flat-square) <span style="margin-right: 5px" ></span>
![License](https://img.shields.io/github/license/nikkipantony/ally-design-system-starter-kit?color=%23ffd700&label=%20License&style=flat-square)

<!-- ![Contributors](https://img.shields.io/github/contributors/nikkipantony/ally-design-system-starter-kit?color=%23ffd700&label=Contributors&style=flat-square) -->
<!-- /Repo Info Shields -->

<!-- /Hero  -->

---

<div style="margin: 40px 0"></div>

<!-- Table of Contents -->

**Table of Content**

1. [👋 Introduction](#introduction)
    <!-- 1. [👋 Demo](#demo)
    1. [👋 Docs](#docs) -->
2. [💨 Getting started](#getting-started)
    - [⚙️ Prerequisites](#prerequisites)
    - [🔽 Installation](#installation)
    - [👨‍💻 Development](#development)
    - [🧱 Build](#build)
    - [📚 Docs](#docs) <!-- Remove docs section from here once Ally docs are complete -->
3. [🎁 Kit Features](#kit-features)
    <!-- 4.  [👋 Contributing](#contributing) -->
    <!-- 5. [👋 License](#license) -->
    <!-- 6. [👋 Contact](#contact) -->
    <!-- 7. [👋 Acknowledgements](#acknowledgements) -->
4. [🚀 Deployment](#deployment)
5. [💖 Built with Ally badge](#built-with-ally-badge)

<!-- /Table of Contents -->

---

<div style="margin: 40px 0"></div>

<!-- Introduction Section -->

👋

## Introduction

The Ally Design System Starter Kit is powered by Gatsby (v3) and Storybook (v6) with a custom project architecture inspired by Brad Frost's Atomic Design Methodology.

This starter kit aims to help create an enjoyable and productive developer / designer experience for building Design System based projects while prioritising Web Accessibility and Performance.

<!-- ### Demo

This is a live demo of how Ally comes straight out of the box.
<a href="https://ally.github.io">ally.github.io</a> -->

<!-- ### Docs

Ally's docs for Developers can be found at: <a href="https://ally.github.io/getting-started/developers">ally.github.io/getting-started/developers</a> and for Designers at: <a href="https://ally.github.io/getting-started/designers">ally.github.io/getting-started/designers</a> -->

<!-- Further information can be found about Gatsby in their docs at: <a href="https://gatsbyjs.com/docs">gatsbyjs.com/docs</a> and about Storybook at: <a href="https://storybook.js.org/docs">storybook.js.org/docs</a>. -->

<!-- /Introduction Section -->

---

<div style="margin: 40px 0"></div>

<!-- Getting Started Section -->

💨

## Getting Started

<!-- This is how to get started with Ally as a developer. If you are a designer see the `Getting Started` section in the docs that can be found at: <a href="https://ally.github.io/getting-started">ally.github.io/getting-started</a> -->

This is how to get started with Ally as a developer. If you are a designer the `Getting Started` section in the docs has not yet been written but will be before the first release.

⚙️

### Prerequisites

#### _1. You will need to have the Gatsby CLI installed_

If you do not already have the Gatsby CLI installed, you can install it globally using npm.

    npm install -g gatsby-cli

🔽

### Installation

#### _1. Create a new repository from this starter kit._

Do this by simply clicking the `'Use this template'` button at the top right of this page, then follow the onscreen directions.

#### _2. Setup your project locally._

Clone your project repository locally using your preferred method. To use Git type the following in your command line or alternatively use GitHub Desktop by clicking `'code'` then `'Open with GitHub Desktop'`.

    git clone https://github.com/<user or organization>/<repo name>

👨‍💻

### Development

Your now ready to spin up your development environment.

There are 3 development environments to the Ally Design System Starter Kit:

-   Gatsby to power your site/app environment
-   Storybook to power the visual testing environment
-   Storybook Docs that powers your final design system documentation

Each of these has its own development command:

To start developing in the Gatsby environment at `http://localhost:8008` and to gain access to GraphiQL at `http://localhost:8008/___graphql` use:

    npm run dev-g

For developing in the Storybook powered visual testing environment at `http://localhost:6006` which also first generates your `design-tokens.json` file use:

    npm run dev-s

You can also generate your `design-tokens.json` file by running:

    npm run gen-dt

And for just developing in the Storybook Docs powered design system environment at `http://localhost:5005` use:

    npm run dev-d

_Note:_ You can also have all three of these environments running simultaneously if needed.

🧱

### Build

Once happy with your project you can build your project using the following commands.

To build your Gatsby website/app run:

    npm run build-g

To build the Storybook powered visual testing environment:

    npm run build-s

To build the Storybook Docs powered design system:

    npm run build-d

Then if you wish to you are able to preview the builds using a local server using the following commands.

To serve your Gatsby website/app at `http://localhost:8080`:

    npm run serve-g

To serve your Storybook powered visual testing environment at `http://localhost:8081`:

    npm run serve-s

To serve your Storybook Docs powered design system at `http://localhost:8082`:

    npm run serve-d

📚

### Docs

For further documentation see:

<!-- -   Ally Design System docs at [ally.github.io](https://ally.github.io) -->

-   Gatsby docs at [gatsbyjs.org/docs](https://www.gatsbyjs.org/docs)
-   Storybook docs at [storybook.js.org/docs](https://storybook.js.org/docs/react/get-started/introduction)
-   Atomic Design at [atomicdesign.bradfrost.com](https://atomicdesign.bradfrost.com)

<!-- /Getting Started Section -->

---

<div style="margin: 40px 0"></div>

<!-- Kit Features Section -->

🎁

## Kit features

When released the Ally starter kit will include:

-   An Atomic Design project architecture.
-   Gatsby powered development environment and plugins.
-   Storybook powered visual testing environment and plugins.
-   Storybook Docs powered Design System.
-   Design Tokens JSON file generated from SASS(SCSS) values.
-   Unit testing with Jest and CircleCI (This may not be included in the first version of the kit).
-   Styling written in nested SASS(SCSS) using the BEM naming convention.
-   Markdown files as the content source for pages by default but can be extended to use any CMS of your choice.
-   Pre-built base React UI components (A11y compliant) including:
    -   `SEO` component.
    -   `SkipLink` component.
    -   `Header` component.
    -   `Menu` navigation component.
    -   `Footer` component.
    -   Default `PageTemplate`.
    -   `Modal` component.

<!-- /Kit Features Section -->

<!-- ## Contributing -->
<!-- ## License -->
<!-- ## Contact -->
<!-- ## Acknowledgements -->

---

<div style="margin: 40px 0"></div>

<!-- Deployment Section -->

🚀

## Deployment

Ready to deploy your project and make it live?

As Ally is powered by Gatsby and Storybook, both of which build static sites you can choose from many great and affordable services to deploy to.

This is a collection of a few services to choose from but there are also plenty more out there.

---

### Vercel

[vercel.com](https://vercel.com)

<!-- replace  <username> and <project_name> with your repositories details to deploy -->

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/zeit/<username>/<project_name>)

---

### Netlify

[netlify.com](https://www.netlify.com)

<!-- replace  <username> and <project_name> with your repositories details to deploy -->

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/<username>/<project_name>)

---

### Heroku

[heroku.com](https://heroku.com)

<!-- replace  <username> and <project_name> with your repositories details to deploy -->

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/<username>/<project_name>)

---

### Cloudflare Workers

[workers.cloudflare.com](https://workers.cloudflare.com)

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/<username>/<project_name>)

---

### Deploy to Render

<!-- replace  <username> and <project_name> with your repositories details to deploy -->

[render.com](https://render.com)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/<username>/<project_name>)

---

### Digital Ocean

[digitalocean.com](https://digitalocean.com)

<!-- replace  <username> and <project_name> with your repositories details to deploy -->

[![Deploy to Digital Ocean](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/<username>/<project_name>)

---

### Run on Google Cloud

[cloud.google.com/storage/docs/hosting-static-website](https://cloud.google.com/storage/docs/hosting-static-website)

<!-- No need to add your repo URL for Google Cloud -->

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)

---

### Firebase

[firebase.google.com/products/hosting](https://firebase.google.com/products/hosting)

---

### GitHub pages

[pages.github.com](https://pages.github.com)

---

### Surge

[surge.sh](https://surge.sh)

<!-- /Deployment Section -->

---

<div style="margin: 40px 0"></div>

<!-- Built with Ally Badge -->

💖

## Built with Ally badge

Share some love for the Ally Design System Starter Kit by keeping this badge at the end of your project's README.

Thanks, and I hope you enjoy building with Ally.

<!-- /////////////// //\\ || || \\// /////////////// -->
<!-- Built with Ally Design System Starter Kit Badge -->

<div style="margin: 40px 0 20px">
    <img alt="Gatsby" src="./src/08_Images/logos/GatsbyIconLogo.png" width="24" />&nbsp;
    <img alt="Storybook" src="./src/08_Images/logos/StorybookIconLogo.png" width="24" />&nbsp;
    <img alt="Figma" src="./src/08_Images/logos/FigmaIconLogo.png" width="23" />&nbsp;
    <img alt="React" src="./src/08_Images/logos/ReactIconLogo.png" width="24" />&nbsp;
    <img alt="Sass" src="./src/08_Images/logos/SassIconLogo.png" width="24" />&nbsp;
    <img alt="BEM" src="./src/08_Images/logos/BEMIconLogo.png" width="24" />&nbsp;
    <img alt="GraphQL" src="./src/08_Images/logos/GraphQLIconLogo.png" width="24" />&nbsp;
    <img alt="Atomic Design" src="./src/08_Images/logos/AtomicDesignIconLogo.png" width="24" />&nbsp;
    <img alt="Prettier" src="./src/08_Images/logos/PrettierIconLogo.png" width="24" />&nbsp;
    <img alt="Markdown Logo" src="./src/08_Images/logos/MarkdownIconLogo.png" width="24" />
<div>

_Built with the [Ally Design System Starter Kit](https://github.com/ally-design-system/ally-design-system-starter-kit) 💨_

<!-- /Built with Ally Design System Starter Kit Badge -->
<!-- /////////////// //\\ || || \\// //////////////// -->

<!-- /Built with Ally Badge -->
