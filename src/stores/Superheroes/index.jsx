/** EXTERNALS **/


import { createSignal } from "solid-js";


/** LOCALS **/


/** HELPERS **/


const initialValue = localStorage.getItem('superheroes')
    ? JSON.parse(localStorage.getItem('superheroes'))
    : [];


/** MAIN **/


export const [superheroes, setSuperheroes] = createSignal(initialValue);

export const getSuperhero = (id) => superheroes().find(hero => hero.id === id);
