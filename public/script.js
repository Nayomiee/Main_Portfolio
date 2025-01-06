document.getElementById("transitionButton").addEventListener('click',function(){
    let card = document.getElementById("card");
    let page = document.getElementById("page");

    card.classList.add('hide');

    setTimeout(function(){
        card.style.display='none';
        page.classList.add('show');
    },1000);
})