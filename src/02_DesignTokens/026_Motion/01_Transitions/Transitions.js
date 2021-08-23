import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Transitions = () => {
    const data = useStaticQuery(graphql`
        query TransitionsQuery {
            designTokensJson(name: { eq: "$transitions" }) {
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
                    display: "flex",
                    flexWrap: "wrap",
                    marginBottom: "-40px",
                    width: "100%",
                    marginLeft: "-30px",
                    width: "calc(100% + 80px)",
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
                            className="ally-design-tokens-motion"
                            style={{
                                display: "grid",
                                justifyContent: "center",
                                alignContent: "center",
                                fontWeight: "700",
                                height: "120px",
                                width: "100%",
                                borderRadius: "3px",
                                border: "#000013 solid 3px",
                                transition: `background-color ${node.compiledValue}`,
                                cursor: "crosshair",
                            }}
                        >
                            Hover To View
                        </div>
                        <figcaption
                            style={{
                                color: "#000013",
                                fontSize: "1.125rem",
                                fontWeight: "700",
                                textAlign: "left",
                                padding: "1rem 0 2.5rem",
                            }}
                        >
                            transition({node.name})
                        </figcaption>
                    </figure>
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
                                    transition({node.name})
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
                                        transition: background-color transition(
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

export default Transitions
