const sliderData = [
    {
        isActive: true,
        imageSrc: "./images/test0.gif",
        description: "Супер проект где я заработал мильен"
    },
    {
        imageSrc: "./images/test1.gif",
        description: "Мега стартап где я заработаю много деняг"
    }
];

let currentSliderIndex = 0;

window.onload = function () {
    const [leftArrow, rigtnArrow] = document.querySelectorAll(".slider__control")
    const sliderItemsContainer = document.querySelector(".slider__items")

    function renderSliderItems() {
        sliderData.map(it => {
            const item = document.createElement('div');
            item.classList.add('slider__item');
            item.style = `
                display: ${it.isActive ? 'flex' : 'none'};
                background: url(${it.imageSrc}) center center no-repeat;
                background-size: cover;`

            const itemText = document.createElement('div');
            itemText.classList.add('slider__text');
            itemText.innerHTML = it.description;

            item.appendChild(itemText)
            sliderItemsContainer.appendChild(item)
        })
    }

    function setNewSliderData() {

    }

    leftArrow.onclick = () => {
        --currentSliderIndex < 0 && (currentSliderIndex = sliderData.length - 1)
        setNewSliderData()
    }

    rigtnArrow.onclick = () => {
        ++currentSliderIndex > (sliderData.length - 1) && (currentSliderIndex = 0)
        setNewSliderData()
    }

    renderSliderItems()
}