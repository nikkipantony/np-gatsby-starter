/*
 * Menu (Desktop) Component Story
 *
 */

import React from "react"
import Component from "./MenuDesktop"

export default {
    title: "Molecules/Menu Desktop",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: "Menu Desktop component.",
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

export const MenuDesktop = args => <Component {...args} />
