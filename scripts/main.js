/**
 * Funcion que carga las habitaciones desde un json y las pintas al pulsar el link fotos
 */
function cargarHabitaciones(){
    var f = new Files('assets/habitaciones_data.js');
    var contar = 1;
    f.read(function (data) {
        let padre = document.getElementById('container-Index');
        padre.innerHTML = '';
        let div = document.createElement('div');
        let row = document.createElement('div');
        let rowTitulo = document.createElement('div');
        rowTitulo.className = ('row d-flex justify-content-center align-items-right');
        let tituloH1 = document.createElement('h1');
        let textoTituloCabecera = document.createTextNode("Fotos y descripcion habitaciones");
        tituloH1.style=' padding-top: 120px;';
        div.className = 'container';
        row.className = 'row align-items-center';
        let saltoLinea = document.createElement('br');
        let saltoLinea2 = document.createElement('br');
        let saltoLinea3 = document.createElement('br');
    
        tituloH1.appendChild(textoTituloCabecera);	
        
        padre.appendChild(tituloH1)
        padre.appendChild(saltoLinea);
        padre.appendChild(saltoLinea2);
        padre.appendChild(saltoLinea3);
    
        for (let i = 0; i < data.length; i++) {
            let colum = document.createElement('div');
            let divCard = document.createElement('div');
            let img = document.createElement('img');
            let cardBody = document.createElement('card-body');
            let h5 = document.createElement('h5');
            let p = document.createElement('p');
            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            let li2 = document.createElement('li');
            let li3 = document.createElement('li');
            let textoTitulo = document.createTextNode(data[i].nombreHabitacion + data[i].cod);
            let textoBody = document.createTextNode(data[i].informacion);
            img.src = "imagenesHabitaciones/"+ data[i].cod + ".jpg";
            divCard.className = 'card';
            divCard.style = 'width: 18rem';
            img.className = 'card-img-top';
            cardBody.className = 'card-body';
            h5.className = 'card-title';
            p.className = 'card-text';
            colum.className = 'col';
            ul.className = 'list-group list-group-flush';
            li1.className = 'list-group-item';
            li2.className = 'list-group-item';
            li3.className = 'list-group-item';
            
            h5.appendChild(textoTitulo);
            p.appendChild(textoBody);
            cardBody.appendChild(h5);
            cardBody.appendChild(p)
            divCard.appendChild(img);
            divCard.appendChild(cardBody)
            colum.appendChild(divCard);
            row.appendChild(colum);
            div.appendChild(row);
            padre.appendChild(div);
            
    
            
    
    
        }
    
    
    });
    }
    
    