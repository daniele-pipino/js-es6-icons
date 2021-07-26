/*Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
Milestone 2
Coloriamo le icone per tipo
Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone */

// creare un template in html
// 1- Ciclare per ogni elemento nell'array delle card
// 2- riprodurre il template per ogni oggetto


// recupero elemento html

const renderIcons = (obj) => {

    // recupero elemento html
    const display = document.querySelector('#display .row')



    // ciclo per stampare ogni carta 
    let iconTemplate = '';
    icons.forEach((icon, index) => {

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
                    <i class="${icon.family} ${icon.prefix}${icon.name} fa-2x"></i>
                    <h6>${icon.name}</h6>
                </div>
            </div>
        </div>
        `
    })

    // stampa in pagina
    display.innerHTML = iconTemplate;
}

renderIcons(icons);


// name: 'cat',
// prefix: 'fa-',
// type: 'animal',
// family: 'fas',