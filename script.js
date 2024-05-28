

//Déclaration des éléments html en code script
let cardbody = Array.from(document.getElementsByClassName('card-group'));
let counter = document.querySelectorAll('.quantity');
let plus = Array.from(document.getElementsByClassName('fas fa-plus-circle'));
let moin = Array.from(document.getElementsByClassName('fas fa-minus-circle'));
let deleteButtons = document.querySelectorAll('.fas.fa-trash-alt');
let heartIcons = document.querySelectorAll('.fas.fa-heart');
let unitprice =Array.from( document.querySelector('.unit-price'));


//fonction plus
for (let i = 0; i < cardbody.length; i++) {
    plus[i].addEventListener('click', function() {
        counter[i].innerText++;
    })
    //fonction minus
moin[i].addEventListener('click', function() {if (counter[i].innerHTML >0) {

    counter[i].innerHTML--;
}
});

//suprimer le produit
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function() {
        let cardBody = this.parentElement.parentElement.parentElement;
        cardBody.remove();
    });
}
//changer la couleure du coeur
heartIcons[i].addEventListener('click', function() {
        // Changer la couleur de l'icône de cœur en rouge
                this.style.color = 'red'
    });
