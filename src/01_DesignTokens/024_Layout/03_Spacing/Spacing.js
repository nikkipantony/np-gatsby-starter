import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Canvas } from "@storybook/addon-docs"

const Spacing = () => {
    const data = useStaticQuery(graphql`
        query SpacingQuery {
            designTokensJson(name: { eq: "$spacing" }) {
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
                        <div
                            style={{
                                display: "flex",
                                alignContent: "center",
                            }}
                        >
                            <div
                                style={{
                                    height: "30px",
                                    width: `${node.compiledValue}`,
                                    backgroundColor: "#000013",
                                    marginBottom: "14px",
                                }}
                            ></div>
                            <p
                                className={`ally-canvas__figure-caption`}
                                style={{
                                    fontWeight: 700,
                                    margin: "auto 0 18px 14px",
                                    padding: "0",
                                }}
                            >
                                {node.name} | {node.compiledValue}
                            </p>
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
                                    spacing({node.name})
                                </span>
                            </td>
                            <td>
                                <div className="css-1521b8c">
                                    {node.compiledValue} / {""}
                                    {parseFloat(`${node.compiledValue}`, 10) *
                                        16}
                                    px
                                </div>
                                <div className="css-fimcbu"></div>
                            </td>
                            <td style={{ width: "0" }}>
                                <span>-</span>
                            </td>
                            <td style={{ width: "50% !important" }}>
                                <pre style={{ margin: 0 }}>
                                    <code>
                                        margin: spacing(
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

export default Spacing
