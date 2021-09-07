import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Canvas } from "@storybook/addon-docs"

const Opacity = () => {
    const data = useStaticQuery(graphql`
        query OpacityQuery {
            designTokensJson(name: { eq: "$opacities" }) {
                name
                mapValue {
                    name
                    compiledValue
                }
            }
        }
    `)

    return (
        <>
            <Canvas
                className={`ally-canvas`}
                style={{
                    margin: "0",
                }}
            >
                <div
                    className={`ally-canvas__palette-wrapper`}
                    style={{
                        display: "inline-flex",
                        flexWrap: "wrap",
                        justifyContent: "spaceBetween",
                        width: "100%",
                    }}
                >
                    {data.designTokensJson.mapValue.map(node => (
                        <div className={`ally-canvas__figure-wrapper`}>
                            <figure className={`ally-canvas__figure`}>
                                <div
                                    className={`ally-canvas__figure-display`}
                                    style={{
                                        display: "grid",
                                        opacity: `${node.compiledValue}`,
                                        background: "#18d14c",
                                    }}
                                >
                                    <div style={{ margin: "auto" }}>
                                        <p>
                                            <b>Opacity</b>
                                        </p>
                                    </div>
                                </div>
                                <figcaption
                                    className={`ally-canvas__figure-caption`}
                                >
                                    {node.name} | {node.compiledValue}
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </div>
            </Canvas>

            <table
                className="docblock-argstable css-6hhrgj"
                style={{ textAlign: "left" }}
            >
                <thead className="docblock-argstable-head">
                    <tr>
                        <th>Token</th>
                        <th>Value</th>
                        <th>Default</th>
                        <th style={{ width: "50% !important" }}>Use</th>
                    </tr>
                </thead>
                <tbody className="docblock-argstable-body">
                    {data.designTokensJson.mapValue.map(node => (
                        <tr>
                            <td className="css-4lbn0a">
                                <span className="css-in3yi3">
                                    opacity({node.name})
                                </span>
                            </td>
                            <td>
                                <div className="css-1521b8c">
                                    <span>{node.compiledValue}</span>
                                </div>
                                <div className="css-fimcbu"></div>
                            </td>
                            <td style={{ width: "0" }}>
                                <span>-</span>
                            </td>
                            <td style={{ width: "50% !important" }}>
                                <pre style={{ margin: 0 }}>
                                    <code>
                                        opacity: opacity(
                                        {node.name});
                                    </code>
                                </pre>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Opacity
