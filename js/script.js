// Navbar
const toggleNavBtn = document.querySelector('.toggle-btn');
const toggleNav = document.querySelector('.toggle-nav');
const navCloseBtn = document.querySelector('.close-btn');

toggleNavBtn.addEventListener('click', function(){
    toggleNav.classList.toggle('active');
});
navCloseBtn.addEventListener('click', function(){
    toggleNav.classList.remove('active');
});

// Experience and Skills
const skills = document.querySelectorAll('.xp-row-2-item');
console.log(skills);

for(let i = 0; i < skills.length; i++){
    skills[i].addEventListener('mouseover', function(){
        this.classList.add('active');
    });
    skills[i].addEventListener('mouseout', function(){
        this.classList.remove('active');
    })
}

// Footer
const footerText = document.querySelectorAll('.footer-item p');

for(let i = 0; i < footerText.length; i++){
    footerText[i].addEventListener('mouseover', function(){
        this.classList.add('active');
    });
    footerText[i].addEventListener('mouseout', function(){
        this.classList.remove('active');
    })
}