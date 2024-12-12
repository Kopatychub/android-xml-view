// @ts-nocheck

const path = require('path');
const fs = require('fs');

const resolutions = require('../config/phones.json')

document.addEventListener('DOMContentLoaded', () => {

    createPhones();
    
});

function createPhones() {
    const phoneList = document.querySelector('#phone-list');

    if (!phoneList) {
        console.error('Element with id "phone-list" not found.');
        return;
    }

    resolutions.resolutions.forEach(element => {
        let opt = document.createElement('option');
        opt.value = element.name;
        document.querySelector("h1").innerHTML = `${element.name} (${element.width}x${element.height})`;

        phoneList.add(opt);
    });
}
