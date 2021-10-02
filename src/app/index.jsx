/** EXTERNALS **/


import { createEffect, createResource } from 'solid-js';



/** LOCALS **/


import Router from '@/containers/Router';
import Navbar from '@/containers/Navbar';
import { superheroes, setSuperheroes } from '@/stores/Superheroes';
import fetchSuperheroes from '@/api/fetch/superheroes';
import css from './app.module.css';


/** HELPERS **/


/** MAIN **/


function App() {
    if (superheroes().length === 0) {
        const [fetchedSuperheroes] = createResource(fetchSuperheroes);

        createEffect(function() {
            if (fetchedSuperheroes()) {
                setSuperheroes(fetchedSuperheroes());
                localStorage.setItem('superheroes', JSON.stringify(fetchedSuperheroes()));
            }
        })
    }

    return (
        <div class={css.root}>
            <Navbar />
            <div class={css.content_wrapper} id="content_wrapper">
                <Router />
            </div>
        </div>
    );
}

export default App;
