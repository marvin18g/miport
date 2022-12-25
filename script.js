const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        hola.style.color = 'black';
        navbarNav.style.color = 'black'
        body.style.color = 'black';
        gt.style.color = 'black'
        gtt.style.color = 'black'
        gttt.style.color = 'black'
        gtttt.style.color = 'black'
        
        body.style.transition = '2s';
    }else{
        body.style.background = '#333';
        body.style.color = 'white';
        hola.style.color = 'white';
        gt.style.color = 'white';
        gtt.style.color = 'white';
        gttt.style.color = 'white';
        gtttt.style.color = 'white';
        
        body.style.transition = '2s';
    }
});






















