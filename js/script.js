let picturesCount = document.querySelectorAll('.lent img').length;

let frame = document.querySelector('.frame');

let ulTag = document.querySelector('ul');

let lent = document.querySelector('.lent');
lent.style.width = (picturesCount*100) + 'vw'

let left_btn = document.querySelector('.left-btn');
let right_btn = document.querySelector('.right-btn');

createDots();

let dots = document.querySelectorAll('li');
dots[0].classList.add('active');

let position = 0;
right_btn.addEventListener('click', function () {
    if (position < 100 * (picturesCount-1)) {
        position = position + 100;    
    }else{
        position = 0
    }

    setActive();

    lent.style.right = position + 'vw';    
})

left_btn.addEventListener('click', function () {
    if (position > 0) {
        position = position - 100;        
    }else{
        position = 100 * (picturesCount-1);            
    }

    setActive();

    lent.style.right = position + 'vw';    
})

function timeFunc() {
    if (position < 100 * (picturesCount-1)) {
        position = position + 100;    
    }else{
        position = 0
    }

    lent.style.right = position + 'vw';    

    setActive();
}

function createDots() {
    for (let i = 0; i < picturesCount; i++) {
        let li = document.createElement('li');
        
        li.addEventListener('click', function () {
            position = i * 100;
    
            lent.style.right = position + 'vw';   
                        
            setActive();
        });    

        ulTag.appendChild(li);
    }    
}

function setActive() {
    let activeIndex = position / 100;

    dots.forEach((e) => {
        e.classList.remove('active')
    })

    dots[activeIndex].classList.add('active');
}

let timer;

timer = setInterval(timeFunc,3000)

lent.addEventListener('mouseenter', function () {    
    clearInterval(timer);
})

lent.addEventListener('mouseleave', function () {
    timer = setInterval(timeFunc,3000)
})


