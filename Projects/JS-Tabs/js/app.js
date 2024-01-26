"use strict"

const elTabs = document.querySelectorAll('.tabs-menu li')
const elTabsContent = document.querySelectorAll('.tabs-content div')

elTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        elTabsContent.forEach((tabBox) => {
            tabBox.classList.remove('active');
        })
        elTabs.forEach((tab) => {
            tab.classList.remove('active');
        })

        elTabsContent[index].classList.add('active');
        elTabs[index].classList.add('active');
    })
})