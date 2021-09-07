import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Canvas } from "@storybook/addon-docs"

const Tints = () => {
    const data = useStaticQuery(graphql`
        query TintsQuery {
            designTokensJson(name: { eq: "$tints" }) {
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
            <Canvas className={`ally-canvas`}>
                <div className={`ally-canvas__palette-wrapper`}>
                    {data.designTokensJson.mapValue.map(node => (
                        <div className={`ally-canvas__figure-wrapper`}>
                            <figure className={`ally-canvas__figure`}>
                                <div
                                    className={`ally-canvas__figure-display`}
                                    style={{
                                        background: "#18d14c",
                                    }}
                                >
                                    <div
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            backgroundColor: `#fff`,
                                            borderRadius: "2px",
                                            opacity: `${node.compiledValue}`,
                                        }}
                                    ></div>
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
                                    tint(brand-color(success), {node.name})
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
                                        background-color:
                                        tint(brand-color(success),
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

export default Tints
