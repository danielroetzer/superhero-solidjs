/** EXTERNALS **/

import { For } from 'solid-js';

/** LOCALS **/

import SuperheroCard from '@/components/SuperheroCard';

/** HELPERS **/

/** MAIN **/

const SuperheroCards = function (props) {
    return (
        <For each={props.superheroes}>
            {function (superhero) {
                return (
                    <SuperheroCard
                        id={superhero.id}
                        name={superhero.name}
                        img={{
                            src: superhero.images.sm,
                            alt: superhero.name,
                        }}
                    />
                );
            }}
        </For>
    );
};

export default SuperheroCards;
