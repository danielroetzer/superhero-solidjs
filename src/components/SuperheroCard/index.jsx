/** EXTERNALS **/


/** LOCALS **/


import { setDialogId } from '@/stores/Dialog';
import css from './SuperheroCard.module.css';


/** HELPERS **/


/** MAIN **/


const SuperheroCard = function(props) {
    return (
        <div class={css.root} onClick={() => setDialogId(props.id)}>
            <img src={props.img.src} alt={props.img.alt} />
            <p>
                {props.name}
            </p>
        </div>
    )
};

export default SuperheroCard;
