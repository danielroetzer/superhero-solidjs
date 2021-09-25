/** EXTERNALS **/


import { lazy } from "solid-js";
import { Routes, Route } from "solid-app-router";


/** LOCALS **/


const Home = lazy(() => import('@/pages/Home/index.jsx'));
const Tierlist = lazy(() => import('@/pages/Tierlist/index.jsx'));


/** HELPERS **/


/** MAIN **/


export default function() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tierlist" element={<Tierlist />} />
        </Routes>
    );
};
