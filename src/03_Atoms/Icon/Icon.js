/*
 * Icon Component
 *
 * Help (with example) from: https://github.com/parcel-bundler/parcel/issues/2246
 * SVG `symbol` a Good Choice for Icons by Chris Coyier: https://css-tricks.com/svg-symbol-good-choice-icons
 * Creating an SVG Icon System with React by Sarah Drasner: https://css-tricks.com/creating-svg-icon-system-react
 * Accessible SVGs by Heather Migliorisi https://css-tricks.com/accessible-svgs/
 */

import React from "react"
import PropTypes from "prop-types"
import IconsSprite from "./IconSprite.svg"

const Icon = props => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            focusable="false"
            className={`icon icon${props.modifier} ${props.fill}`}
        >
            <title>{props.title}</title>
            <use xlinkHref={`${IconsSprite}#${props.name}`} />
        </svg>
    )
}

Icon.defaultProps = {
    name: "",
    title: "",
    fill: "",
    modifier: "",
}

Icon.propTypes = {
    name: PropTypes.oneOf([
        "a11y",
        "burger-menu",
        "close",
        "cookie",
        "home",
        "mail",
        "map-marker",
        "message",
        "open-in-new",
        "privacy-lock",
    ]),
    title: PropTypes.string.isRequired,
    fill: PropTypes.oneOf(["midnight", "snow"]),
    modifier: PropTypes.oneOf(["", "--small"]),
}

export default Icon
