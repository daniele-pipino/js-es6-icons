/*Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
Milestone 2
Coloriamo le icone per tipo
Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone */

// creare un template in html
// 1- Ciclare per ogni elemento nell'array delle card
// 2- riprodurre il template per ogni oggetto


const renderIcons = (obj) => {

    // recupero elemento html
    const display = document.querySelector('#display .row');

    // ciclo per stampare ogni carta 
    let iconTemplate = '';

    obj.forEach((icon, index) => {

        // gestione offset
        if (index % 5 == 0) {
            hasOffset = 'offset-md-1';        // Ho riguardato l'esempio di Marco
        } else {
            hasOffset = '';
        };

        iconTemplate += `
        <div class="col-sm-4 col-md-2 ${hasOffset}">
            <div class="card">
               <div class="card-body text-center">
                    <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.type}-color fa-2x"></i>
                    <h6>${icon.name}</h6>
                </div>
            </div>
        </div>
        `
    });

    // stampa in pagina
    display.innerHTML = iconTemplate;
}

renderIcons(icons);

// gestione filtro

let filter = document.getElementById('type-filter');

filter.addEventListener('change', () => {
    // recupero value select
    const filterValue = filter.value;
    console.log(filterValue);


    // gestione casi
    if (filterValue === 'all') {
        renderIcons(icons);
        return;
    }

    const filteredIcon = icons.filter((icon) => filterValue === icon.type);
    renderIcons(filteredIcon);
});