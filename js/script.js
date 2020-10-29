const sliderData = [
    {
        isActive: true,
        imageSrc: "./images/test0.gif",
        description: "Супер проект где я заработал мильен"
    },
    {
        imageSrc: "./images/test1.gif",
        description: "Мега стартап где я заработаю много деняг"
    },
    {
        imageSrc: "https://res.cloudinary.com/equities-com/image/upload/v1/contributor_46890/iStock-624494794_enlqgs",
        description: "Мега стартап где я заработаю много деняг"
    },
    {
        imageSrc: "https://www.dictionary.com/e/wp-content/uploads/2017/09/green_shades4-790x310.jpg",
        description: "Мега стартап где я заработаю много деняг"
    },
    {
        imageSrc: "https://cf.bstatic.com/images/hotel/max1024x768/215/215173096.jpg",
        description: "Мега стартап где я заработаю много деняг"
    }
];

let currentSliderIndex = 0;

window.onload = function () {
    const [leftArrow, rigtnArrow] = document.querySelectorAll(".slider__control")
    const sliderItemsContainer = document.querySelector(".slider__items")
    let items = document.querySelectorAll(".slider__item")

    function renderSliderItems() {
        sliderData.map(it => {
            const item = document.createElement('div');
            item.classList.add('slider__item');
            item.style = `
                position: ${it.isActive ? 'relative' : 'absolute'};
                opacity: ${it.isActive ? '1' : '0'};
                background: url(${it.imageSrc}) center center no-repeat;
                background-size: cover;
            `

            const itemText = document.createElement('div');
            itemText.classList.add('slider__text');
            itemText.innerHTML = it.description;

            item.appendChild(itemText)
            sliderItemsContainer.appendChild(item)
        })
        items = document.querySelectorAll(".slider__item")
    }

    function selectSlite(delta) {
        items.forEach( (it, i ) =>{
            if(i === currentSliderIndex) {
                it.style.display = "flex"
                it.style.opacity = "1"
                it.style.transform = `translateX(0%)`
                it.style.position = `relative`
                it.style.zIndex = `1`
            } else if(i === currentSliderIndex+ delta){
                it.style.transform = `translateX(${ -delta * 110}%)`
            }else {
                it.style.zIndex = `2`
                it.style.transform = `translateX(${ delta * 110}%)`
                it.style.position = `absolute`
                it.style.opacity = "0"
            }
        })
        
    }

    leftArrow.onclick = () => {
        --currentSliderIndex < 0 && (currentSliderIndex = sliderData.length - 1 )
        selectSlite(-1)
    }

    rigtnArrow.onclick = () => {
        ++currentSliderIndex > (sliderData.length - 1 ) && (currentSliderIndex = 0)
        selectSlite(1)
    }

    renderSliderItems()
}