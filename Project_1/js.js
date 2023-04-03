// регистрация плагинов
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// подключаем плавный скрол
ScrollSmoother.create({
	// оболочка в чем плавает
	wrapper: '.wrapper',
	// то что будет плавать
	content: '.content',
	// скорость скрола
	smoot: 1.5,
	effects: true,
})



// if (ScrollTrigger.isTouch !==1){} для мобильный версий сайта


// до скрола{} и после скрола{}
gsap.fromTo('.hero-section',{ opacity: 1},{
	opacity: 0,
	scrollTrigger:{
		trigger: '.main-header',
		start:'top',
		end: '900',
		scrub: true,
	}
})

// создаем пременную itemsL
let itemsL = gsap.utils.toArray('.gusion__left .gusion__item')

// создаём цикл где item переберается в itemsL и присваевает gsap

itemsL.forEach( item => {
	gsap.fromTo(item , {x: -350,opacity: 0.2},{
		opacity: 1, x: 100 ,
		scrollTrigger:{
			trigger: item,
			
			scrub: true
		}
	} )
})

let itemsR = gsap.utils.toArray('.gusion__right .gusion__item')

itemsR.forEach( itemr => {
	gsap.fromTo(itemr , {x: 350,opacity: 0.2},{
		opacity: 1, x: -100 ,
		scrollTrigger:{
			trigger: itemr,
			// для возвращения к исходу
			scrub: true
		}
	} )
})



