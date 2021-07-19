/*
 * SASS + BEM Page
 *
 */

import React from "react"
import Seo from "../09_Utilities/SEO"
import Layout from "../06_Templates/MainLayout/MainLayout"

const SassBemPage = () => (
    <Layout>
        <Seo title="SASS + BEM" />
        <section className="default-page-layout__grid">
            <div className="default-page-layout__column">
                <h1>Learn about using Sass with the BEM naming convention</h1>
                <p>
                    There are many different ways to write styling in Gatsby and
                    React, some of which you can read about in the{" "}
                    <a
                        href="https://www.gatsbyjs.org/docs/styling/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Gatsby Docs Styling Pages
                    </a>
                    .
                </p>

                <p>
                    For this starter I have chosen to use{" "}
                    <a
                        href="https://sass-lang.com/guide#topic-3"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nested Sass (SCSS)
                    </a>{" "}
                    with the{" "}
                    <a
                        href="http://getbem.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        BEM Naming Convention
                    </a>{" "}
                    because for me I find it the easiest way to scope and create
                    maintainable modular styles for React components as well as
                    global styling for design consistency.
                </p>
                <p>
                    You can look through this starter repository for example
                    code, but I have also collected together some articles that
                    can be referred to for more information about using this
                    styling technique below.
                </p>
                <ul>
                    <li>
                        <a
                            href="https://css-tricks.com/using-sass-control-scope-bem-naming/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Using Sass to Control Scope With BEM Naming by Andy
                            Bell
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://medium.com/@andrew_barnes/bem-and-sass-a-perfect-match-5e48d9bc3894"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            BEM and Sass: A Perfect Match by Andy Barnes
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://seesparkbox.com/foundry/bem_by_example"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            BEM by Example by Nathan Rambeck
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://codeburst.io/understanding-css-bem-naming-convention-a8cca116d252"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Understanding CSS BEM by Cem Eygi
                        </a>
                    </li>
                </ul>
            </div>
            <div className="default-page-layout__column">
                <div className="default-page-layout__icons default-page-layout__icons--two-icons">
                    <div className="default-page-layout__icon"></div>
                    <div className="default-page-layout__icon"></div>
                </div>
            </div>
        </section>
    </Layout>
)

export default SassBemPage
