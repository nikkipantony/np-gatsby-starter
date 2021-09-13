/*
 * ExLink Component Story
 *
 */

import React from "react"
import Component from "./ExLink"

export default {
    title: "Atoms/External Link",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: "External link component.",
            },
        },
    },
    argTypes: {
        to: {
            description: "Link to destination",
            defaultValue: "/",
        },
        text: {
            description: "Link text",
            defaultValue: "ExLink",
        },
        modifier: {
            description: "Modifier options",
            control: {
                type: "select",
                labels: {
                    "": "no modifier",
                },
            },
        },
    },
}

export const ExternalLink = args => <Component {...args} />
