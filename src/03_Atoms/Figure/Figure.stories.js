/*
 * Figure Component Story
 *
 * Serving static files via a directory: https://storybook.js.org/docs/configurations/serving-static-files/#2-via-a-directory
 * Help solving Gatsby/Storybook StaticQuery Issue: https://github.com/gatsbyjs/gatsby/issues/12007#issuecomment-467730610
 */

import React from "react"
import Component from "./Figure"

export default {
    title: "Atoms/Figure",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: "Figure component.",
            },
        },
    },
    argTypes: {
        filename: {
            description: "Image filename",
        },
        alt: {
            description: "Image alternative text",
        },
        figcaption: {
            description: "Image caption text",
        },
        modifier: {
            description: "Modifier options",
        },
        // Custom Line: {
        //     description: "Overwritten description",
        //     table: {
        //         type: {
        //             summary: "Something short",
        //             detail: "Something really really long",
        //         },
        //     },
        //     control: {
        //         type: null,
        //     },
        // },
    },
}

export const Figure = args => <Component {...args} />
Figure.args = {
    filename: "Gatsby.png",
    alt: "Gatsby Logo",
    figcaption: "The Gatsby Logo",
    modifier: "--maxWidth500",
}
