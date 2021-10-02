/** EXTERNALS **/


import { For, createResource } from "solid-js";


/** LOCALS **/


import { superheroes } from '@/stores/Superheroes';
import css from './Home.module.css';
import SuperheroCard from '@/components/SuperheroCard';


/** HELPERS **/


/** MAIN **/


const Home = function() {
    return (
        <div class={css.root}>
            <For each={superheroes()} fallback={<div>Loading...</div>}>
                {function(superhero) {
                    return (
                        <SuperheroCard
                            name={superhero.name}
                            img={{
                                src: superhero.images.xs,
                                alt: superhero.name,
                            }}
                        />
                    )
                }}
            </For>
        </div>
    );
};

export default Home;
