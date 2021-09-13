/*
 * Main Layout Template Story
 *
 */

import React from "react"
import Component from "./MainLayout"

export default {
    title: "Templates/Main Layout",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: "Main layout template.",
            },
            source: {
                code: "<MainLayout> </MainLayout>",
            },
        },
        argTypes: {
            table: {
                table: {
                    show: "false",
                },
            },
        },
    },
}

export const MainLayout = args => <Component {...args} />
