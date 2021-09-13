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
            defaultValue: "Gatsby.png",
        },
        alt: {
            description: "Image alternative text",
            defaultValue: "Gatsby Logo",
        },
        figcaption: {
            description: "Image caption text",
            defaultValue: "The Gatsby Logo",
        },
        modifier: {
            description: "Modifier options",
            defaultValue: "--maxWidth500",
            control: {
                type: "select",
                labels: {
                    "": "no modifier",
                },
            },
        },
    },
}

export const Figure = args => <Component {...args} />
