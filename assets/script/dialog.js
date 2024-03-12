'use strict';
const query = (selector) => document.querySelector(selector);
const event = (on, evt, call) => on.addEventListener(evt, call);
const toggle = (selector, cls, force) => query(selector).classList.toggle(cls, force);

const dialogContainer = ".dialog";

const login = query('ul.nav li:last-child > a');
login.removeAttribute("target");
event(login, 'click', () => toggleDialog());



function toggleDialog() {
    toggle('.dialog', "open");
    toggle('.overlay', "open");
}

function createOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    event(overlay, 'click', () => toggleDialog());
}
createOverlay();

const signin = query('input[type="button"]');
const email = query('input[type="email"]');
const password = query('input[type="password"]');