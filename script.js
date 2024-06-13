let cont = document.querySelector(".slides-section");
let slides = document.querySelectorAll(".slides");

//Making slides appear on hover on container
cont.addEventListener("mouseover", () => {
    slides.forEach(slide => {
        slide.style.opacity = 1;
        slide.style.top = "60%";
    });
});

cont.addEventListener("mouseout", () => {
    slides.forEach(slide => {
        slide.style.opacity = 0;
        slide.style.top = "500px";
    });
});

//Making a card fullscreen on click
async function main() {
    let sl = document.querySelectorAll(".slide");
    let locations = ["Taj Mahal", "Humayun's Tomb", "Golden Temple", "Sahara Desert", "Hawa Mahal"];

    let descriptions = ["The Taj Mahal is an iconic ivory-white marble mausoleum in Agra, India, renowned for its stunning beauty and architectural grandeur, built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.", "Humayun's Tomb, located in Delhi, India, is a stunning 16th-century Mughal mausoleum renowned for its intricate Persian-style architecture and beautifully landscaped gardens, serving as a precursor to the Taj Mahal.", "The Golden Temple, also known as Harmandir Sahib, is a stunning and revered Sikh gurdwara located in Amritsar, India, renowned for its gold-covered exterior and serene, spiritual ambiance.", "The Sahara Desert, the world's largest hot desert, spans across Northern Africa, known for its vast stretches of sand dunes, extreme temperatures, and rich cultural history.", "The Hawa Mahal, also known as the 'Palace of Winds,' is an iconic five-story palace in Jaipur, India, renowned for its unique pink sandstone façade and intricate latticework, designed to allow royal women to observe street festivals without being seen."];

    let loc = document.querySelector(".loc");
    let des = document.querySelector(".des");
    let more = document.querySelector("#more-content");
    for (let index = 0; index < sl.length; index++) {
        sl[index].addEventListener("click", () => {
            let image = window.getComputedStyle(sl[index]).backgroundImage;
            let content = document.querySelector(".content");
            let container = document.querySelector(".container");
            container.style.overflow = "scroll";
            content.style.backgroundImage = image;
            des.innerHTML = descriptions[index];
            loc.innerHTML = locations[index];
            more.style.opacity = 1;
            more.style.height = "100%";
            document.querySelector("button").style.opacity = 1;
        });
    }
}

document.title = "Wonders of India";






