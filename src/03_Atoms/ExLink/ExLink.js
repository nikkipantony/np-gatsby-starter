/*
 * ExLink Component
 *
 * Prop-types: https://www.npmjs.com/package/prop-types
 * Typechecking with Proptypes https://reactjs.org/docs/typechecking-with-proptypes.html
 * How to use prop-types: https://www.npmjs.com/package/prop-types#usage
 * Use target="_blank" with rel="noopener noreferrer" for security: https://mathiasbynens.github.io/rel-noopener
 */

import React from "react"
import PropTypes from "prop-types"
import Icon from "../Icon/Icon"

const ExLink = props => {
    return (
        <a
            className={`ex-link ex-link${props.modifier}`}
            href={props.to}
            rel="noopener noreferrer"
            target="_blank"
        >
            {props.text}{" "}
            <Icon
                name="open-in-new"
                title="Link will open in a new
                    tab"
                fill="midnight"
            />
        </a>
    )
}

ExLink.defaultProps = {
    to: "",
    text: "",
    modifier: "",
}

ExLink.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    modifier: PropTypes.oneOf(["", "--small"]),
}

export default ExLink
