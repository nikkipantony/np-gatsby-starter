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
        },
        text: {
            description: "Link text",
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

export const ExternalLink = args => <Component {...args} />
ExternalLink.args = {
    to: "/",
    text: "ExLink",
    modifier: "",
}
