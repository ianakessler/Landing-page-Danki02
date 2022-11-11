

function createFlexMosaico(foto, texto){
    return`
    
    <div class="flex-mosaico">

        <div style="background-image: url(../images/mosaico${foto}.jpg);"  class="item1"></div>

        <div class="item2">
            <p>${texto}</p>
        </div>

    </div>

    `
}



var innerMosaico = document.getElementById('mosaico-js');
var txtMosaico = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta voluptate voluptatem libero maiores tempora, perferendis totam, omnis tempore eius animi obcaecati eveniet pariatur natus fugit veniam, delectus accusamus iure laboriosam!'

innerMosaico.innerHTML += `

    ${createFlexMosaico('1',txtMosaico)} 


    ${createFlexMosaico('2',txtMosaico)}
    

    ${createFlexMosaico('3',txtMosaico)}
    

    ${createFlexMosaico('4',txtMosaico)}

`


