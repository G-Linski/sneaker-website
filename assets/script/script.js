'use strict';

/*
    Utility Functions
 */
function query(selector){
    return document.querySelector(selector);
}

function event(on, evt, call) {
    on.addEventListener(evt,call);
}

function toggle(selector, cls, force){
    query(selector).classList.toggle(cls, force);
}

/*
    Main Functions
*/

function disableScroll() {
    body.classList.add('scroll-disable');
    body.classList.remove('scroll-enable');
}

function enableScroll() {
    body.classList.remove('scroll-disable');
    body.classList.add('scroll-enable');
}

function toggleDialog() {
    toggle('.dialog', "open");
    toggle('.overlay', "open");
}

function createOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => {
        toggleDialog();
        enableScroll();
    });
}

/*
    Main
*/
const body = query('body');
const overlay = query('.overlay');
const signin = query('input[type="button"]');
const email = query('input[type="email"]');
const password = query('input[type="password"]');
const form = query('form[name="signin"]');
form.addEventListener("submit",()=>toggleDialog());
const login = query('ul.nav li:last-child > a');
login.addEventListener('click', () => {
    toggleDialog();
    disableScroll();
});
createOverlay();
