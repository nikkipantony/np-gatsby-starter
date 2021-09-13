/*
 * Icon Component Story
 *
 */

import React from "react"
import Component from "./Icon"

export default {
    title: "Atoms/Icon",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: "Icon component.",
            },
        },
    },
    argTypes: {
        name: {
            description: "Icon name",
            defaultValue: "open-in-new",
        },
        title: {
            description: "Icon title",
            defaultValue: "Link will open in a new tab",
        },
        fill: {
            description: "Icon fill color",
            defaultValue: "midnight",
            control: {
                type: "select",
                defaultValue: "Hello",
            },
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

export const Icon = args => <Component {...args} />
