/*
 * Menu (Mobile) Component Stories
 *
 */

import React from "react"
import Component from "./MenuMobile"

export default {
    title: "Molecules/Menu Mobile",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: "Menu Mobile component.",
            },
        },
    },
    argTypes: {
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

export const MenuMobile = args => <Component {...args} />
