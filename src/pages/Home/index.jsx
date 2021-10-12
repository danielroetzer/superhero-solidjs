/** EXTERNALS **/

import { onMount } from 'solid-js';

/** LOCALS **/

import SuperheroCards from '@/components/SuperheroCards';
import SuperheroDialog from '@/containers/Dialog/Superhero';
import { superheroes } from '@/stores/Superheroes';
import css from './Home.module.css';

/** HELPERS **/

/** MAIN **/

const Home = function () {
    onMount(function () {
        document.title = 'Home | SuperheroAPI with SolidJS';
    });

    return (
        <div class={css.root}>
            <SuperheroCards superheroes={superheroes()} />

            <SuperheroDialog />
        </div>
    );
};

export default Home;
