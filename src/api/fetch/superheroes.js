/** EXTERNALS **/


/** LOCALS **/


/** HELPERS **/


/** MAIN **/


export default async function() {
    if (sessionStorage.superheroes) return JSON.parse(sessionStorage.superheroes);

    const superheroes = (await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')).json();

    superheroes.then(function(result) {
        sessionStorage.setItem('superheroes', JSON.stringify(result));
    });

    return superheroes;
}
