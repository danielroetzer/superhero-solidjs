/** EXTERNALS **/

/** LOCALS **/

/** HELPERS **/

/** MAIN **/

export default async () => (await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')).json();
