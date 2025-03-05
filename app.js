// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaamigos=[];


function agregarAmigo(){
    let amigosingresados=document.getElementById('amigo').value;
    if(amigosingresados === ''){
        alert("Por favor, ingrese un nombre que no este vacio");
    }
    else{
        listaamigos.push(amigosingresados);
        mostrarAmigos();
        document.getElementById('amigo').value = '';
    }
}

function sortearAmigo(){
    if (listaamigos.length>0 ){
        let indice=Math.floor(Math.random() * listaamigos.length);
        let amigoescogido= listaamigos[indice];
        document.getElementById('listaAmigos').textContent = 'El amigo secreto sorteado es: ' + amigoescogido;
        listaAmigos.style.color = 'green';
    }
    else{
        alert("Por favor, ingrese otro amigo");
    }
}

function mostrarAmigos(){
    let lista=document.getElementById('listaAmigos');
    lista.innerHTML = '';
    listaamigos.forEach((amigo, index) => {
        let li = document.createElement('li');
       
        li.textContent = amigo;
        
        li.setAttribute('aria-labelledby', `amigo-${index}`);
        
        li.setAttribute('role', 'listitem');
        
        li.id = `amigo-${index}`;
        
        lista.appendChild(li);
      
    });
    
}