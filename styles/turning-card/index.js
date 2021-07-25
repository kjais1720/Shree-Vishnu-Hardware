const para = document.querySelector("p")
const card = document.querySelector('.card')

card.addEventListener('mouseenter',()=>{

    console.log('working')
    // para.style.transform = 'rotateX(0deg)';
    card.classList.add('active')
})


card.addEventListener('mouseleave',()=>{

    console.log('working')
    // para.style.transform = 'rotateX(90deg)';
    card.classList.remove('active')
})