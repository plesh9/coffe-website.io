let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

const changeNav = (entries, observer) => {
	entries.forEach((entry) => {
		if(entry.isIntersecting && entry.intersectionRatio >= 0.55) {
			document.querySelectorAll('.nav-link').forEach(e => e.classList.remove('active'));
			var id = entry.target.getAttribute('id');
			var newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
		}
	});
}

const options = {
	threshold: 0.55
}

const observer = new IntersectionObserver(changeNav, options);

const sections = document.querySelectorAll('section');
sections.forEach((section) => {
	observer.observe(section);
});
//
const content = document.querySelectorAll('section').forEach(e => e.classList.add('animation'))


const the_animation = document.querySelectorAll(".animation");

const scroll_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animation");
      } else {
        entry.target.classList.remove("scroll-animation");
      }
    });
  },
  { threshold: 0.3 }
);

for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  scroll_observer.observe(elements);
}
