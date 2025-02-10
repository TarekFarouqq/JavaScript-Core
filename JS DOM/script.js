let imgArray = ["/images/1.jpg","/images/2.jpg","/images/3.jpg","/images/4.jpg"];


let slider = document.createElement("img");
document.body.append(slider);
slider.src= "/images/5.jpg"
slider.classList.add("sliderTransform");


let timerId = startSliding(slider);

