**⚠️ Please note: This project is still currently a work in progress and the first version has not yet been released. ⚠️**

# Ally Design System Starter Kit

<div>
<img alt="Gatsby" src="./src/08_Images/logos/GatsbyIconLogo.png" width="50" />
<img alt="Storybook" src="./src/08_Images/logos/StorybookIconLogo.png" width="50" />
<img alt="Figma" src="./src/08_Images/logos/FigmaIconLogo.png" width="50" />
<img alt="React" src="./src/08_Images/logos/ReactIconLogo.png" width="50" />
<img alt="Sass" src="./src/08_Images/logos/SassIconLogo.png" width="50" />
<img alt="BEM" src="./src/08_Images/logos/BEMIconLogo.png" width="50" />
<img alt="GraphQL" src="./src/08_Images/logos/GraphQLIconLogo.png" width="50" />
<img alt="Atomic Design" src="./src/08_Images/logos/AtomicDesignIconLogo.png" width="50" />
<img alt="Prettier" src="./src/08_Images/logos/PrettierIconLogo.png" width="50" />
<img alt="Markdown" src="./src/08_Images/logos/MarkdownIconLogo.png" width="50" />
</div>

## 👋 Introduction

The Ally Design System Starter Kit is built with Gatsby (v3) and Storybook (v6) with a custom project architecture inspired by Brad Frost's Atomic Design Methodology.

This starter kit aims to help create an enjoyable and productive developer experience for building Design System based projects while prioritising Web Accessibility and Performance.

## 💨 Getting Started

1. **Make sure you have the Gatsby CLI installed.**

    If you don't already have the Gatsby CLI installed, install it using npm.

    ```
    npm install -g gatsby-cli
    ```

2. **Create a new project using this starter kit.**

    Use the Gatsby CLI to create a new project, specifying this starter.

    ```
    gatsby new your-new-projects-name https://github.com/ally-design-system/ally-design-system-starter-kit
    ```

3. **Change directories to your new project.**

    Navigate into your new project’s directory.

    ```
    cd your-new-projects-name
    ```

4. **Start developing.**

    Your now ready to start it up.

    There are three development environments to the Ally Design System Starter Kit:

    - Gatsby to power your site/app
    - Storybook to power the visual testing environment
    - Storybook Docs that powers your final design system documentation

    Each of these has its own development command:

    To start developing the Gatsby site use:

    ```
    npm run dev-g
    ```

    For developing in the Storybook visual testing environment use:

    ```
    npm run dev-s
    ```

    And for just developing the Storybook Docs powered design system use:

    ```
    npm run dev-d
    ```

    You can also have all three of these environments running simultaneously if needed.

5. **Open the source code and start editing!**

    After running `npm run dev-g` your Gatsby site will be served at `http://localhost:8008`.

    You'll also see a second link when running at `http://localhost:8008/___graphql` for GraphiQL.

    GraphiQL is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Introducing GraphiQL Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

    After running `npm run dev-s` your project's Storybook powered visual testing environment will open in your default browser at: `http://localhost:6006`.

    And `npm run dev-d` will run your design system powered by Storybook Docs in development mode at: `http://localhost:5005`.

6. **Building and Previewing Builds**

    Once happy with your project you can build your project using the following commands.

    To build the Gatsby site:

    ```
    npm run build-g
    ```

    To build the Storybook powered visual testing environment:

    ```
    npm run build-s
    ```

    To build the Storybook Docs powered design system:

    ```
    npm run build-d
    ```

    And then you can preview the builds using a local server:

    To serve the Gatsby site at `http://localhost:8080`:

    ```
    npm run serve-g
    ```

    To serve the Storybook powered visual testing environment at `http://localhost:8081`:

    ```
    npm run serve-s
    ```

    To serve the Storybook Docs powered design system at `http://localhost:8082`:

    ```
    npm run serve-d
    ```

## 🗺️ Kit Features

The starter kit will include:

-   An extended Atomic Design project architecture using Design Tokens.
-   A Storybook powered visual testing environment.
-   A Storybook Docs powered design system
-   Unit testing with Jest and CircleCI (This may not be included in the first version of the kit).
-   Sass powered Design Token maps and functions.
-   Nested Sass(Scss) using the BEM naming convention.
-   Markdown files as the content source for pages and posts by default but can be extended to use a CMS of choice.
-   Pre-built UI components including:
    -   `SEO` component.
    -   `SkipLink` component.
    -   `Header` component.
    -   Responsive `Menu` navigation component.
    -   `Footer` component.
    -   Default CSS-Grid `PageTemplate`.
    -   Default CSS-Grid `PostTemplate`.
    -   Possibly being extended with further base components in the future including a `Modal` component.

## 🎓 Learning Gatsby and Storybook

You can find loads of useful information about Gatsby from their very well-written documentation at: [gatsbyjs.org/docs](https://www.gatsbyjs.org/docs) and for information about Storybook head over to the Storybook docs at: [storybook.js.org/docs](https://storybook.js.org/docs/react/get-started/introduction).

## 🚀 Deployment

Ready to deploy your project and make it live?

**`Deploy to Netlify`**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ally-design-system/ally-design-system-starter-kit)

**`Deploy to Vercel (formerly ZEIT Now)`**

[![Deploy to ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/ally-design-system/ally-design-system-starter-kit)
