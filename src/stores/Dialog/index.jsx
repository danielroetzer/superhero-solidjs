/** EXTERNALS **/


import { createSignal } from 'solid-js';


/** LOCALS **/


/** HELPERS **/


const initialValue = null


/** MAIN **/


export const [dialogId, setDialogId] = createSignal(initialValue);

export const openDialog = function(id) {
    const contentWrapper = document.getElementById('content_wrapper');
    contentWrapper.style.top = `-${scrollY}px`;
    contentWrapper.style.position = 'fixed';

    setDialogId(id);
};

export const closeDialog = function() {
    const contentWrapper = document.getElementById('content_wrapper');
    const scrollY = contentWrapper.style.top;
    contentWrapper.style.position = '';
    contentWrapper.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    setDialogId(null);
};
