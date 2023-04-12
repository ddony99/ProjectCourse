  // script for next image and previous image

        (function(){

            const myimage = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
            const currentImage = 0;
            const next = document.getElementById('next');
            const previous = document.getElementById('previous');
            
            next.addEventListener('click', function(){
                    (function nextImage(){
                        currentImage ++;
                        if(currentImage >  myimage.length - 1){
                            currentImage = 0;
                        }
                        
                        document.getElementById('myimage').src = myimage[currentImage];
                    }())
                })

            previous.addEventListener('click', function(){
                    (function previousImage(){
                
                        currentImage --;
                        if(currentImage < 0){
                            currentImage =  myimage.length - 1;
                        }
                    
                        document.getElementById('myimage').src = myimage[currentImage];
                    }())
                })
        })();