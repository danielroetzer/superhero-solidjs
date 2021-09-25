/** EXTERNALS **/


import { For, createResource } from "solid-js";


/** LOCALS **/


import css from './Home.module.css';
import SuperheroCard from '@/components/SuperheroCard';
import fetchSuperheroes from '@/API/fetch/superheroes';


/** HELPERS **/


/** MAIN **/


const Home = function() {
    const [superheroes] = createResource(fetchSuperheroes);

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
