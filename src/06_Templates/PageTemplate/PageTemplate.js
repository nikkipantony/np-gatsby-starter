/*
 * Page Template Component
 *
 */

import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../MainLayout/MainLayout"
import Seo from "../../09_Utilities/SEO"

export default function Template({
    data, // This prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    return (
        <MainLayout>
            <Seo title={frontmatter.title} />
            <section className="page-template">
                <div
                    className="page-template__column"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
                <div className="page-template__column">
                    <div className="page-template__feature-image"></div>
                    <div className="page-template__icons">
                        <div className="page-template__icon"></div>
                        <div className="page-template__icon"></div>
                        <div className="page-template__icon"></div>
                        <div className="page-template__icon"></div>
                        <div className="page-template__icon"></div>
                        <div className="page-template__icon"></div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                type
                path
                title
            }
        }
    }
`
