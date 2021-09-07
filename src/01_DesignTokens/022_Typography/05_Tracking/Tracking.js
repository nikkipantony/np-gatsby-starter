import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Canvas } from "@storybook/addon-docs"

const Tracking = () => {
    const data = useStaticQuery(graphql`
        query TrackingQuery {
            designTokensJson(name: { eq: "$tracking" }) {
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
                        flexDirection: "column",
                    }}
                >
                    {data.designTokensJson.mapValue.map(node => (
                        <p
                            style={{
                                textTransform: "capitalize",
                                letterSpacing: `${node.compiledValue}`,
                                fontWeight: 700,
                                fontSize: "2rem",
                                marginBottom: "16px",
                            }}
                        >
                            {node.name} Tracking
                            <span
                                className={`ally-canvas__figure-caption`}
                                style={{
                                    letterSpacing: "0",
                                    paddingLeft: "6px",
                                }}
                            >
                                {node.name} | {node.compiledValue}
                            </span>
                        </p>
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
                                    tracking({node.name})
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
                                        letter-spacing: tracking(
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

export default Tracking
