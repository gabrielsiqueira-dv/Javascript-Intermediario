const quadrado = document.getElementById('quadrado');
quadrado.addEventListener('click', function(){
    if(quadrado.classList.contains('azul')){
        quadrado.classList.remove('azul')
    }else{
        quadrado.classList.add('azul')
    }
    
})