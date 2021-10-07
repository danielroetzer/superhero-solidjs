/** EXTERNALS **/

import { For, onMount } from 'solid-js';

/** LOCALS **/

import SuperheroDialog from '@/containers/Dialog/Superhero';
import { superheroes } from '@/stores/Superheroes';
import css from './Home.module.css';
import SuperheroCard from '@/components/SuperheroCard';

/** HELPERS **/

/** MAIN **/

const Home = function () {
    onMount(function () {
        document.title = 'Home | SuperheroAPI with SolidJS';
    });

    return (
        <div class={css.root}>
            <For each={superheroes()} fallback={<div>Loading...</div>}>
                {function (superhero) {
                    return (
                        <SuperheroCard
                            id={superhero.id}
                            name={superhero.name}
                            img={{
                                src: superhero.images.xs,
                                alt: superhero.name,
                            }}
                        />
                    );
                }}
            </For>

            <SuperheroDialog />
        </div>
    );
};

export default Home;
