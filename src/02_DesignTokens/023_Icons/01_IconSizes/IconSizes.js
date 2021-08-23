import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const IconSizes = () => {
    const data = useStaticQuery(graphql`
        query IconSizesQuery {
            designTokensJson(name: { eq: "$icon-sizes" }) {
                name
                mapValue {
                    name
                    compiledValue
                }
            }
        }
    `)

    const VariableName = data.designTokensJson.name // Variable name
    const Name = VariableName.substring(1) // Remove `$` from variable name
    const TokenName = Name.replace(/-/g, " ") // Replace hyphens `-` with space ` `

    const Title = {
        textTransform: "capitalize",
        marginTop: "80px",
        lineHeight: "1",
    }

    return (
        <section>
            <h3 style={Title}>{TokenName}</h3>
            <p>Description.</p>

            <div>
                {data.designTokensJson.mapValue.map(node => (
                    <div
                        style={{
                            display: "flex",
                            paddingBottom: "20px",
                        }}
                    >
                        <div
                            style={{
                                width: `${node.compiledValue}`,
                                height: `${node.compiledValue}`,
                                backgroundColor: "#000013",
                                margin: "auto 0",
                            }}
                        ></div>
                        <p
                            style={{
                                fontWeight: 700,
                                margin: "auto 0 auto 14px",
                                padding: "0",
                            }}
                        >
                            icon-size({node.name})
                        </p>
                    </div>
                ))}
            </div>

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
                                    icon-size({node.name})
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
                                        width: icon-size(
                                        {node.name});
                                    </code>
                                </pre>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default IconSizes
