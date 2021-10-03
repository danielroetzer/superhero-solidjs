/** EXTERNALS **/

import { NavLink } from 'solid-app-router';

/** LOCALS **/

import css from './Navbar.module.css';

/** HELPERS **/

/** MAIN **/

const Navbar = function () {
    return (
        <div class={css.root}>
            <NavLink href="/" end>Home</NavLink>
            <NavLink href="/tierlist">Tierlist</NavLink>
            <NavLink href="/about">About</NavLink>
        </div>
    );
};

export default Navbar;
