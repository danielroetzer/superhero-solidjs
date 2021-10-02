/** EXTERNALS **/


import { createResource } from "solid-js";
import { createStore } from "solid-js/store";
import { defaultTo } from 'rambda';


/** LOCALS **/


import fetchSuperheroes from '@/api/fetch/superheroes';
import { createSignal } from "solid-js";


/** HELPERS **/


const initialValue = localStorage.getItem('superheroes')
    ? JSON.parse(localStorage.getItem('superheroes'))
    : [];

console.log(initialValue);


/** MAIN **/


export const [superheroes, setSuperheroes] = createSignal(initialValue);


// export const [superheroes, setSuperheroes] = createSignal([]);

// const useSuperheroes = function() {
//     const [state, setState] = createStore(initialValue);

//     console.error(state.superheroes);

//     if (state.status === 'success') {
//         // return {
//         //     superheroes: state.superheroes,
//         // };
//         return [state, setState];
//     }

//     if (localStorage.superheroes) {
//         setState({
//             superheroes: JSON.parse(localStorage.superheroes),
//             status: 'success',
//         });
//     }
//     else {
//         const [superheroes] = createResource(fetchSuperheroes);

//         setState({
//             superheroes: defaultTo([], superheroes()),
//             status: 'success',
//         });

//         localStorage.superheroes = JSON.stringify(state.superheroes);
//     }

//     console.warn(state.superheroes);

//     return [state, setState];

//     // if (localStorage.superheroes) setState(JSON.parse(localStorage.superheroes));

// 	// createEffect(() => (localStorage.superheroes = JSON.stringify(state)));

//     // if (state.status === 'unfetched')
// };

// export default useSuperheroes;
