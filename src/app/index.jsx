/** EXTERNALS **/


/** LOCALS **/


import Router from '@/containers/Router';
import Navbar from '@/containers/Navbar';
import css from './app.module.css';


/** HELPERS **/


/** MAIN **/


function App() {
    return (
        <div class={css.root}>
            <Navbar />
            <div class={css.content_wrapper}>
                <Router />
            </div>
        </div>
    );
}

export default App;
