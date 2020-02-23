/*jshint esversion: 6 */

"use strict";

document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('hamburger').classList.toggle('open');
    document.getElementById('nav').classList.toggle('open');
});
