/** EXTERNALS **/

/** LOCALS **/

import { createMemo } from 'solid-js';
import Dialog from '@/containers/Dialog';
import { getSuperhero } from '@/stores/Superheroes';
import { dialogId } from '@/stores/Dialog';

/** HELPERS **/

/** MAIN **/

const SuperheroDialog = function () {
    const superhero = createMemo(function () {
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
