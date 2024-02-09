const l1 = document.querySelector('.box1');/*définition des constantes qui utilise une méthode pour récupérer un élément*/
const l2 = document.querySelector('.box2');/*définition des constantes qui utilise une méthode pour récupérer un élément*/
const l3 = document.querySelector('.box3');/*définition des constantes qui utilise une méthode pour récupérer un élément*/

l1.addEventListener('mouseenter', () => {
    l2.classList.add('flou');/*permet d'exécutuer le style apporté au selecteur flou de la constante sélectionné*/
    l3.classList.add('flou');/*permet d'exécutuer le style apporté au selecteur flou de la constante sélectionné*/
})
l1.addEventListener('mouseleave', () => {
    l2.classList.remove('flou');/*permet d'arréter le style apporté au selecteur flou de la constante sélectionné*/
    l3.classList.remove('flou');/*permet d'arréter le style apporté au selecteur flou de la constante sélectionné*/
})

l2.addEventListener('mouseenter', () => {
    l1.classList.add('flou');/*permet d'exécutuer le style apporté au selecteur flou de la constante sélectionné*/
    l3.classList.add('flou');/*permet d'exécutuer le style apporté au selecteur flou de la constante sélectionné*/
})
l2.addEventListener('mouseleave', () => {
    l1.classList.remove('flou');/*permet d'arréter le style apporté au selecteur flou de la constante sélectionné*/
    l3.classList.remove('flou');/*permet d'arréter le style apporté au selecteur flou de la constante sélectionné*/
})

l3.addEventListener('mouseenter', () => {
    l1.classList.add('flou');/*permet d'exécutuer le style apporté au selecteur flou de la constante sélectionné*/
    l2.classList.add('flou');/*permet d'exécutuer le style apporté au selecteur flou de la constante sélectionné*/
})
l3.addEventListener('mouseleave', () => {
    l1.classList.remove('flou');/*permet d'arréter le style apporté au selecteur flou de la constante sélectionné*/
    l2.classList.remove('flou');/*permet d'arréter le style apporté au selecteur flou de la constante sélectionné*/
})