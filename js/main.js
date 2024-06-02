/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () => {
    const scrollup = document.getElementById('scroll-up')
    //when scroll is heigher than 350 viewport height, add show-scroll class
    this.scrollY >350 ? scrollup.classList.add('show-scroll')
                      : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data, .explore__data, .explore__user`)
sr.reveal(`.home__card`,{delay: 600, distance: '100px', interval: 200})
sr.reveal(`.about__data, .join__image`,{origin: 'right'})
sr.reveal(`.about__image, .join__data`,{origin: 'left'})
sr.reveal(`.popular__card`,{interval: 200})
sr.reveal(`.footer__container`,{origin:'top'})


/*=============== Sweet Alert ===============*/

let userEmails = [];
const formButton = document.getElementById('join-button');

const submitform = () => {
        console.log("Rana G");
    
        var email=document.getElementById("join-input").value;///get id with value 
        var emailpattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;////Regular expression
        if(emailpattern.test(email))
        {
           


            Swal.fire({
                
                icon: 'success',
                title: 'Congratulation !',
                text: 'Your mail have been sent.',
                iconColor: '#00cc00',      
                timer: 5000,
                inputAutoFocus: false
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById("join-input").value='';    /// Clear the input filed on clicking alert button
                }
            })
            console.log('before',userEmails);
            console.log(email);
            userEmails.push(email);
            console.log('after',userEmails)
            
        }
        else
        {
            Swal.fire({
                
                icon: 'error',
                iconColor: '#ff3333',      
                title: 'Invalid Email',
                text: 'Please Enter a valid Email.',
                inputAutoFocus: false
            })

        }
}

formButton.addEventListener("click", submitform);



