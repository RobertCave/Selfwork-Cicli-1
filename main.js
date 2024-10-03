// Selfwork Cicli 1
// Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente.

let tabellina;
let elemento;

while (true) {
    
    tabellina = parseInt(prompt ("Inserisci un numero da uno a 10: "));

    if (tabellina >1 && tabellina <=10) {
        // opera
        console.log(`Ecco la tabellina del ${tabellina} :`);
        console.log("------------------------");


        for (let index = 1; index <= 10; index++) {
            elemento = tabellina * index;
            console.log(`${index} x ${tabellina} = ${elemento}`);
        }
        
        break;

    }
    alert(`Attenzione!\n\nIl numero scelto deve essere compresto tra 1 e 10 e non ${tabellina}`);
    
} 
