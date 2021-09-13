/*
 * Button Component
 *
 */

import React from "react"
import PropTypes from "prop-types"

const Button = props => {
    return (
        <button className={`button button${props.modifier}`}>
            {props.text}
        </button>
    )
}

Button.defaultProps = {
    text: "",
    modifier: "",
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    modifier: PropTypes.oneOf(["", "--delete", "--add"]),
}

export default Button
