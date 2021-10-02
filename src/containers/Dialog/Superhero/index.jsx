/** EXTERNALS **/


/** LOCALS **/


import Dialog from '@/containers/Dialog';
import { getSuperhero } from '@/stores/Superheroes';
import { dialogId } from '@/stores/Dialog';
import { createMemo } from 'solid-js';


/** HELPERS **/


/** MAIN **/


const SuperheroDialog = function() {
    const superhero = createMemo(function() {
        if (dialogId() === null) return null;

        return getSuperhero(dialogId());
    });

    return (
        <Dialog isOpen={dialogId() !== null}>
            {JSON.stringify(superhero())}
        </Dialog>
    );
};

export default SuperheroDialog;
