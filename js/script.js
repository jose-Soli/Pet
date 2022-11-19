'use strict';


/*-----------------------------------*\
    # add event on element
\*-----------------------------------*/

const addEvenOnElem = function (elem, type, callback) {

    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

/*-----------------------------------*\
    # variable
\*-----------------------------------*/

const header_button = document.querySelector('[data-header-button]');
const nav_link = document.querySelectorAll('[data-nav-link]');
const navbar = document.querySelector('[data-navbar]');

const toggleNavbar = function () {
    navbar.classList.toggle('active');
    header_button.classList.toggle('active');
}

/*-----------------------------------*\
    # Calls function
\*-----------------------------------*/

addEvenOnElem(header_button, 'click', toggleNavbar);
addEvenOnElem(nav_link, 'click', toggleNavbar);

/*-----------------------------------*\
    # When you do scroll
\*-----------------------------------*/
const header = document.querySelector('[data-header]');
const backTop = document.querySelector('[data-back-to]');

const addEventOnScroll = function () {
    if (window.scrollY > 100) {
        header.classList.add('active');
        backTop.classList.add('active')
    } else {
        header.classList.remove('active');
        backTop.classList.remove('active')
    }
}

addEvenOnElem(window, 'scroll', addEventOnScroll);




