
// make a SlideImage 
(function(){
        
    var currentImage = 0;
    var myphotos = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
    var container = document.getElementById('content');
    var nextBtn = document.getElementById('next');
    var preBtn = document.getElementById('previous');

  
    //and call images to print and  links css 
    function slideImage(){
        var newSlide = document.createElement('img');
        newSlide.src = `slides/${myphotos[currentImage]}`;
        newSlide.className = 'fadeinimg';

        //make slide image not the all src imgae view only 2 see it on insperctor tools
        container.append(newSlide);
        if(container.children.length > 2){
            container.removeChild(container.children[0]);
        }
    }

    nextBtn.addEventListener('click', function(event){

        event.preventDefault();
        currentImage++;
        if(currentImage > myphotos.length - 1){
            currentImage = 0
        }
        slideImage();

    })

    preBtn.addEventListener('click',function(event){
        event.preventDefault();
        currentImage --;
        if(currentImage < 0){
            currentImage =  myphotos.length - 1;
        }
        slideImage();
    })
})();