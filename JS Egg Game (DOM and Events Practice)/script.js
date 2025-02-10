    const egg = document.createElement('div');
    egg.classList.add('falling-egg');
    document.body.appendChild(egg);
    const basket = document.createElement('div');
    basket.classList.add('basket');
    document.body.appendChild(basket);

   
    let eggLeftRight = Math.random() * (window.innerWidth - egg.offsetWidth); 
    let eggTopBottom = 0; 
    let basketLeftRight = window.innerWidth / 2; 

    egg.style.left = `${eggLeftRight}px`;
    egg.style.top =`${eggTopBottom}px`;
    basket.style.left = `${basketLeftRight}px`;

    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft' && basketLeftRight > 0) {
            basketLeftRight -= 30; 
        } else if (event.key === 'ArrowRight' && basketLeftRight < window.innerWidth - basket.offsetWidth - 10) {
            basketLeftRight += 30; 
        }
        basket.style.left = `${basketLeftRight}px`;
    });

   

    let eggSpeed = 7 ;

    const fallInterval = setInterval(() => {

      eggTopBottom += eggSpeed;
        egg.style.top = `${eggTopBottom}px`;

      const eggBottom = eggTopBottom + egg.offsetHeight;
      const basketTop = basket.offsetTop;
      const eggCenter = eggLeftRight + egg.offsetWidth / 2;
      const basketLeft = basketLeftRight;
      const basketRight = basketLeftRight + basket.offsetWidth;

        /* in this condition (eggBottom >= basketTop) i am checking 
         if the egg passed the boundries of the basket vertically topbottom
          but this condition (eggCenter >= basketLeft && eggCenter <= basketRight) check if the egg fall 
          in the boundries of the basket horizintally  leftright*/
        if (eggBottom >= basketTop && eggCenter >= basketLeft && eggCenter <= basketRight) {
            egg.remove();
            clearInterval(fallInterval); 
          }

        
        if (eggTopBottom > window.innerHeight - 70) {
            egg.style.backgroundImage = 'url("/images/Uovo_sorridente.png")';
            egg.style.backgroundSize = 'cover';
            clearInterval(fallInterval); 
           }
    }, 50);
