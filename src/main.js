import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/catalog.css'
import '../styles/components/contactus.css';;
import '../styles/components/footer.css';
import '../styles/utils.css';


import { initializeBackToTopButton } from './utils/backToTop';
initializeBackToTopButton();

const contactUS_wrapper = document.querySelector('.contactus__form');
const contactUS_btnPopup = document.querySelector('.contactusform');
const contactUS_iconClose = document.querySelector('.contactus__icon-close');

contactUS_btnPopup.addEventListener('click', ()=>{
    contactUS_wrapper.classList.add('contactus__active-popup');
});

contactUS_iconClose.addEventListener('click', ()=>{
    contactUS_wrapper.classList.remove('contactus__active-popup');
});

document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
    });

    if (response.ok) {
        alert('Form submitted successfully!');
    } else {
        alert('Error submitting form.');
    }
});