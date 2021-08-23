import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ZLayers = () => {
    const data = useStaticQuery(graphql`
        query ZLayersQuery {
            designTokensJson(name: { eq: "$zlayers" }) {
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

            <div
                style={{
                    marginBottom: "30px",
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
                                width: `${node.compiledValue}rem`,
                                backgroundColor: "#000013",
                                marginBottom: "14px",
                            }}
                        ></div>
                        <p
                            style={{
                                color: "#000013",
                                fontSize: "1rem",
                                fontWeight: "700",
                                lineHeight: "30px",
                                paddingLeft: "14px",
                            }}
                        >
                            spacing({node.name})
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
                                    zlayer({node.name})
                                </span>
                            </td>
                            <td>
                                <div className="css-1521b8c">
                                    Z Index {node.compiledValue}
                                </div>
                                <div className="css-fimcbu"></div>
                            </td>
                            <td style={{ width: "0" }}>
                                <span>-</span>
                            </td>
                            <td style={{ width: "50% !important" }}>
                                <pre style={{ margin: 0 }}>
                                    <code>
                                        z-index: zlayer(
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

export default ZLayers
