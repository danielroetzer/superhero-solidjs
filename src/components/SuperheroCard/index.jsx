/** EXTERNALS **/

/** LOCALS **/

import { openDialog } from '@/stores/Dialog';
import css from './SuperheroCard.module.css';

/** HELPERS **/

/** MAIN **/

const SuperheroCard = function (props) {
    return (
        <div class={css.root} onClick={() => openDialog(props.id)}>
            <img src={props.img.src} alt={props.img.alt} />
            <p>
                {props.name}
            </p>
        </div>
    );
};

export default SuperheroCard;
