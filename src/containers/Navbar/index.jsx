/** EXTERNALS **/

import { NavLink } from 'solid-app-router';

/** LOCALS **/

import css from './Navbar.module.css';
import './styles.css';

/** HELPERS **/

/** MAIN **/

const Navbar = function () {
    return (
        <div class={css}>
            <NavLink href="/" end class={css.nav_item}>Home</NavLink>
            <NavLink href="/tierlist" class={css.nav_item}>Tierlist</NavLink>
            <NavLink href="/about" class={css.nav_item}>About</NavLink>
        </div>
    );
};

export default Navbar;
