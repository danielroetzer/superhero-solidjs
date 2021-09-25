/** EXTERNALS **/


import { createMemo, createResource } from 'solid-js';
import { slice } from 'rambda';


/** LOCALS **/


import SuperheroCard from '@/components/SuperheroCard';
import fetchSuperheroes from '@/api/fetch/superheroes';


/** HELPERS **/


/** MAIN **/


const Tierlist = function() {
    const [superheroes] = createResource(fetchSuperheroes);

    // const top10 = slice(0, 10, superheroes() ?? []);
    const top10 = createMemo(function() {
        return slice(0, 10, superheroes() ?? []);
    });

    return (
        <div>
            <For each={top10()} fallback={<div>Loading...</div>}>
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

export default Tierlist;
