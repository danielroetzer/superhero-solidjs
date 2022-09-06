/** EXTERNALS **/

import { lazy } from 'solid-js';
import { Routes, Route } from 'solid-app-router';

/** LOCALS **/

const Home = lazy(() => import('@/pages/Home'));
const Tierlist = lazy(() => import('@/pages/Tierlist'));
const About = lazy(() => import('@/pages/About'));

/** HELPERS **/

/** MAIN **/

export default function () {
    const basePath = import.meta.env.BASE_URL;

    return (
        <Routes>
            <Route path={`${basePath}`} element={<Home />} />
            <Route path={`${basePath}tierlist`} element={<Tierlist />} />
            <Route path={`${basePath}about`} element={<About />} />
        </Routes>
    );
}
