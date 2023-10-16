var olexeCard = document.querySelectorAll(".olexe-cardContainer")


function olexeFlipCard() {
    this.classList.toggle("flip180")
}

olexeCard.forEach(LXcard => {
    LXcard.addEventListener('click', olexeFlipCard)
})