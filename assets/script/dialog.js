'use strict';
const query = (selector) => document.querySelector(selector);
const event = (on, evt, call) => on.addEventListener(evt, call);
const dialogContainer = "dialog";
const dialog = query(dialogContainer);

event(document, 'click', (evt) => {
    //Temp testing
    if (evt.pageX < 800) return;
    if (dialog.open)
        dialog.close();
    else
        dialog.showModal();
    query('.dialog').classList.toggle("open", dialog.open);
});