/*
 * Gatsby Page
 *
 */

import React from "react"
import Seo from "../09_Utilities/SEO"
import Layout from "../06_Templates/MainLayout/MainLayout"

const GatsbyPage = () => (
    <Layout>
        <Seo title="Learn about Gatsby" />
        <section className="default-page-layout__grid">
            <div className="default-page-layout__column">
                <h1>Learn About Gatsby</h1>
                <p>
                    Gatsby is a free and open source framework based on{" "}
                    <a
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>{" "}
                    that helps developers build blazing fast websites and apps.
                </p>
                <p>
                    It offers the power of modern web technologies without the
                    headaches like React.js,{" "}
                    <a
                        href="https://webpack.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Webpack
                    </a>
                    , modern JavaScript and CSS as well as{" "}
                    <a
                        href="https://graphql.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GraphQL
                    </a>{" "}
                    to pull in data from anywhere.
                </p>
                <p>
                    Find out more by visiting:{" "}
                    <a
                        href="https://www.gatsbyjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        gatsbyjs.org
                    </a>
                </p>
            </div>
            <div className="default-page-layout__column">
                <div className="default-page-layout__feature-image"></div>
                <div className="default-page-layout__icons default-page-layout__icons--three-icons">
                    <div className="default-page-layout__icon"></div>
                    <div className="default-page-layout__icon"></div>
                    <div className="default-page-layout__icon"></div>
                </div>
            </div>
        </section>
    </Layout>
)

export default GatsbyPage
