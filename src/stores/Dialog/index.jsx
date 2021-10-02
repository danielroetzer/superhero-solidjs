/** EXTERNALS **/


import { createSignal } from 'solid-js';


/** LOCALS **/


/** HELPERS **/


const initialValue = null


/** MAIN **/


export const [dialogId, setDialogId] = createSignal(initialValue);
export const closeDialog = () => setDialogId(null);
