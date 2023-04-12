

(function() {
    
var detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit' , handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    
    // getting the form value
    var desName = event.target.elements['name'].value;
    var desDestination = event.target.elements['location'].value;
    var desPhoto = event.target.elements['photo'].value;
    var desDescription = event.target.elements['description'].value;
    
    for (var i = 0; i < detailsForm.length; i++) {
      
        detailsForm.elements[i].value = '';
        
    }
    
    var destCard = createDestinationCard(desName, desDestination, desPhoto, desDescription);


    /*
     var whisListContainer = document.querySelector('#destinations_container');

    if (whisListContainer.children.length === 0) {
        document.querySelector('title').innerHTML = "My Wish List";
    } 
  */

    document.querySelector('#destinations_container').appendChild(destCard);

}

function createDestinationCard(name, location, photoUrl, description){

    var card = document.createElement('div');
    card.className = "card";

    var img = document.createElement('img');
    img.setAttribute('alt', name);

    var constantPhotoUrl = "images/signpost.jpg";
    if(photoUrl.length === 0){
        img.setAttribute('alt', constantPhotoUrl);
    }else{
        img.setAttribute('alt', photoUrl);

    }
    card.appendChild(img);

    var cardBody = document.createElement('div');
    cardBody.className = "card-body";

    var cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    var cardSubtitle = document.createElement('h4');
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if(description.length !== 0){
        var cardText = document.createElement('p');
        cardText.className = "card-test";
        cardText.innerText = description;
        cardBody.appendChild(cardText);

    }

    var cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.innerHTML = "Remove";

    cardDeleteBtn.addEventListener('click', removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);
    return card;


}
function removeDestination(event) {
    var card = event.target.parentElement.parentElement;
    card.remove();
}
})();