/** EXTERNALS **/

import { createMemo, onMount } from 'solid-js';
import {
    map, pipe, sort, sum, take, takeLast, values,
} from 'rambda';

/** LOCALS **/

import SuperheroCards from '@/components/SuperheroCards';
import SuperheroDialog from '@/containers/Dialog/Superhero';
import { superheroes } from '@/stores/Superheroes';
import css from './Ranking.module.css';

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
    onMount(function () {
        document.title = 'Ranking | SuperheroAPI with SolidJS';
    });

    const sortedHeroes = createMemo(function () {
        const sortedByPowerstatsDSC = sortByPowerstatsDSC(superheroes() ?? []);

        return {
            top10Heroes: take(10, sortedByPowerstatsDSC),
            worst10Heroes: takeLast(10, sortedByPowerstatsDSC),
        };
    });

    return (
        <div>
            <h2>Best 10</h2>

            <div class={css.superheroes}>
                <SuperheroCards superheroes={sortedHeroes().top10Heroes} />
            </div>

            <h2>Worst 10</h2>

            <div class={css.superheroes}>
                <SuperheroCards superheroes={sortedHeroes().worst10Heroes} />
            </div>

            <SuperheroDialog />
        </div>
    );
};

export default Tierlist;
