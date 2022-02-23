/*======= Reviews Object =======*/
const reviews = [
    {
        id: 1,
        name: 'Sarah Jane',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempore, molestias unde sequi veniam recusandae dolorem alias, vitae aut ipsa, dignissimos qui a laudantium inventore.',
        img: './img/person-2.jpg'
    },
    {
        id: 2,
        name: 'Molly Mae',
        review: 'Vitae doloribus harum cum aperiam aliquid sapiente nisi quas sint blanditiis pariatur, dignissimos facilis officia nam vero soluta exercitationem!',
        img: './img/person-1.jpg'
    },
    {
        id: 3,
        name: 'Mary Jane',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempore, molestias unde sequi veniam recusandae dolorem alias, vitae aut ipsa, dignissimos qui a laudantium inventore.',
        img: './img/person-3.jpg'
    },
    {
        id: 4,
        name: 'Kitty Kat',
        review: 'Vitae doloribus harum cum aperiam aliquid sapiente nisi quas sint blanditiis pariatur, dignissimos facilis officia nam vero soluta exercitationem!',
        img: './img/person-4.jpg'
    },
    {
        id: 5,
        name: 'Samantha',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempore, molestias unde sequi veniam recusandae dolorem alias, vitae aut ipsa, dignissimos qui a laudantium inventore.',
        img: './img/person-5.jpg'
    }
]

/*======= Select Elements =======*/
const nav = document.querySelector('nav');
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');

const reviewImg = document.querySelector('.review-image');
const reviewName = document.querySelector('.name');
const reviewRev = document.querySelector('.review');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let i=0;
/*======= Event Listeners =======*/
toggleBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('show-links')
})

navLink.forEach(link=>{
    link.addEventListener('click',()=>{
        navLinks.classList.remove('show-links');
    })
})

nextBtn.addEventListener('click',()=>{
    i++;
    if(i>=reviews.length){
        i=0;
    }
    let review = reviews[i]
    reviewImg.src = review.img;
    reviewName.textContent = review.name;
    reviewRev.textContent = review.review;


})

prevBtn.addEventListener('click',()=>{
    i--;
    if(i<0){
        i=reviews.length-1;
    }
    let review = reviews[i]
    reviewImg.src = review.img;
    reviewName.textContent = review.name;
    reviewRev.textContent = review.review;


})
/*======= Functions =======*/

/*======= Preloaders =======*/
window.addEventListener('scroll',()=>{
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;
    if(scrollHeight>navHeight){
        nav.classList.add('active-nav');
        navLinks.classList.add('active-links')
    }
    else{
        nav.classList.remove('active-nav');
        navLinks.classList.remove('active-links')
    }
})