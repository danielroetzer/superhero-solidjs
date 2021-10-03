/** EXTERNALS **/

import { lazy } from 'solid-js';
import { Routes, Route } from 'solid-app-router';

/** LOCALS **/

const Home = lazy(() => import('@/pages/Home'));
const Tierlist = lazy(() => import('@/pages/Tierlist'));

/** HELPERS **/

/** MAIN **/

export default function () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tierlist" element={<Tierlist />} />
        </Routes>
    );
}
