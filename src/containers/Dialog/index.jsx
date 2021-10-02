/** EXTERNALS **/


import { Show, onCleanup, onMount, splitProps } from 'solid-js';
import { Portal } from 'solid-js/web';


/** LOCALS **/


import { closeDialog } from '@/stores/Dialog';
import css from './Dialog.module.css';
import { createEffect } from 'solid-js';


/** HELPERS **/


/** MAIN **/


const Dialog = function(props) {
    const [local, others] = splitProps(props, ["children"]);

    return (
        <Show when={others.isOpen}>
            <Portal mount={document.getElementById('dialog')}>
                <div class={css.overlay} onClick={closeDialog}>
                    <div class={css.dialog}>
                        {local.children}
                    </div>
                </div>
            </Portal>
        </Show>
    );
};

export default Dialog;
