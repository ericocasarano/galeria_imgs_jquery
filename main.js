$(document).ready(function() {
    //Manipulando Elementos JS
    //console.log(document.querySelector('header button'));

    //Manipulando Elementos JQuery
    //console.log($('header button'));
    //console.log($('#btn-cancelar'));

    //Evento no JS
    /*document.querySelector('header button').addEventListener('click',function(){
        alert('teste');
    })*/

    //Forma 01 de chamar um evento no JQuery
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    })

    //Forma 02 de chamar um evento no JQuery
    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoImagemNova = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display:none;"></li>');
        $(`<img src="${enderecoImagemNova}">`).appendTo(novoItem);
        $(`
        <div class="overlay-imagem-link">
        <a href="${enderecoImagemNova}" title="Ver imagem em tamanho real" target="_blank">
            Ver imagem em tamanho real
        </a>
        </div>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(2000);
    $('#endereco-imagem-nova').val('');        
    })
})
