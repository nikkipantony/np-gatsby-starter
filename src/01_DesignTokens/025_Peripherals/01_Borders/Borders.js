import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Canvas } from "@storybook/addon-docs"

const Borders = () => {
    const data = useStaticQuery(graphql`
        query BordersQuery {
            designTokensJson(name: { eq: "$borders" }) {
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
                style={{
                    margin: "0",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                    }}
                >
                    {data.designTokensJson.mapValue.map(node => (
                        <figure
                            style={{
                                margin: "0 50px 10px 30px",
                                minWidth: "280px",
                                maxWidth: "280px",
                            }}
                        >
                            <div
                                style={{
                                    height: "120px",
                                    width: "100%",
                                    backgroundColor: "#fcfcfc",
                                    borderRadius: 0,
                                    border: `${node.compiledValue}`,
                                }}
                            ></div>
                            <figcaption
                                className={`ally-canvas__figure-caption`}
                            >
                                {node.name} | {node.compiledValue}
                            </figcaption>
                        </figure>
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
                                    border({node.name})
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
                                        border: border(
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

export default Borders
