/*
 * Menu (Desktop) Component
 *
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link
 * Gatsby Active Link: https://www.gatsbyjs.org/docs/gatsby-link/#add-custom-styles-for-the-currently-active-link
 */

import React from "react"
import PropTypes from "prop-types"
import NavLink from "../../03_Atoms/NavLink/NavLink"

const MenuDesktop = props => {
    return (
        <ul className={`menu-desktop menu-desktop${props.modifier}`}>
            <li className="menu-desktop__item">
                <NavLink to="/" text="Home" />
            </li>
            <li className="menu-desktop__item">
                <NavLink to="/gatsby/" text="Gatsby" />
            </li>
            <li className="menu-desktop__item">
                <NavLink to="/sass-bem/" text="SASS + BEM" />
            </li>
            <li className="menu-desktop__item">
                <NavLink to="/markdown/" text="Markdown" />
            </li>
            <li className="menu-desktop__item">
                <NavLink to="/style-guide/" text="Style Guide" />
            </li>
        </ul>
    )
}

MenuDesktop.defaultProps = {
    modifier: "",
}

MenuDesktop.propTypes = {
    modifier: PropTypes.oneOf([""]),
}

export default MenuDesktop
