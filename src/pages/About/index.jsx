/** EXTERNALS **/

import { onMount } from 'solid-js';

/** LOCALS **/

import css from './About.module.css';

/** HELPERS **/

/** MAIN **/

const About = function () {
    onMount(function () {
        document.title = 'About | SuperheroAPI with SolidJS';
    });

    return (
        <div class={css.root}>
            GitHub: https://github.com/daniel-meisterlabs/superhero-solidjs
        </div>
    );
};

export default About;
