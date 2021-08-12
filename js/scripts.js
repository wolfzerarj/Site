
//mensagem de boas vindas
    $(function(){
        var mensagem = 'Seja Bem vindo(a), sinta-se a vontade para entrar em contato !';
        alert(mensagem);
    })
//Código da barra de navegação para mobile
    var menuBar = document.querySelector('.icon-menu');
    menuBar.addEventListener('click',(e)=>{
        e.preventDefault();
        let menuMobile = document.querySelector('.menumobile ul');
        if(menuMobile.classList.contains('show_menu')){
            menuMobile.classList.remove('show_menu');
        }else{
        menuMobile.classList.add('show_menu')
         }
        /*alert( 'clicado');*/

});  