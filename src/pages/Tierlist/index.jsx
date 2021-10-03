/** EXTERNALS **/

import { createMemo, For } from 'solid-js';
import {
    map, pipe, sort, sum, take, takeLast, values,
} from 'rambda';

/** LOCALS **/

import SuperheroCard from '@/components/SuperheroCard';
import SuperheroDialog from '@/containers/Dialog/Superhero';
import { superheroes } from '@/stores/Superheroes';

/** HELPERS **/

const sumPowerstats = function (heroes) {
    const powerstatsSum = pipe(
        values,
        sum,
    )(heroes.powerstats);

    return {
        ...heroes,
        powerstatsSum,
    };
};

const sortByPowerstatsDSC = function (heroes = []) {
    return pipe(
        map(sumPowerstats),
        sort((heroA, heroB) => heroB.powerstatsSum - heroA.powerstatsSum),
    )(heroes);
};

/** MAIN **/

const Tierlist = function () {
    const sortedHeroes = createMemo(function () {
        const sortedByPowerstatsDSC = sortByPowerstatsDSC(superheroes() ?? []);

        return {
            top10Heroes: take(10, sortedByPowerstatsDSC),
            worst10Heroes: takeLast(10, sortedByPowerstatsDSC),
        };
    });

    return (
        <div>
            Top10:
            <For each={sortedHeroes().top10Heroes} fallback={<div>Loading...</div>}>
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

            Worst10:

            <For each={sortedHeroes().worst10Heroes} fallback={<div>Loading...</div>}>
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

export default Tierlist;
