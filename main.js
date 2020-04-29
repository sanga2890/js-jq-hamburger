// Scrivere il codice necessario per far comparire la lista del menu cliccando sull'icona hamburger che compare nella "versione mobile" della pagina;

// richiamo la classe dell'icone dell'hamburger e la associo al click;
$('.fas').click(function(){
    // funzione che si avvia con il click e che sostituisce il display none con il display block;
    $('.hamburger-menu').show();
})
// richiamo la classe dell'icona della X e la associo sempre al click del mouse;
$('.close').click(function(){
    // funzione che si avvia con il click e che sostituisce il display block della classe richiamata;
    $('.hamburger-menu').hide();
})
