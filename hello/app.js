const text = document.querySelector('.texte');/*définition des constantes qui utilise une méthode pour récupérer un élément*/

text.addEventListener('mouseenter', () => {
    text.classList.add('anim');/*permet d'exécutuer le style apporté au selecteur flou de la constante sélectionné*/
})
text.addEventListener('mouseleave', () => {
    text.classList.remove('anim');/*permet d'arréter le style apporté au selecteur flou de la constante sélectionné*/
})