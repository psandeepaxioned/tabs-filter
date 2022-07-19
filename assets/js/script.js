/* Author: 

*/

/* Author: 

*/
const types = document.querySelectorAll('.types');
const images = document.querySelectorAll('.images');

for(let i=0; i<types.length;i++){
    types[i].addEventListener('click',function(){
        for (j=0;j<types.length;j++){
            types[j].classList.remove('active');
        }
        this.classList.add('active');

        const dataFilter = this.getAttribute('data-filter')

        for(let k=0; k<images.length;k++){
            images[k].classList.remove('active');
            images[k].classList.add('hide');

            if(images[k].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
                images[k].classList.remove('hide');
                images[k].classList.add('active');
            }
        }
    })
}










































