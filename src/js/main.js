import cardDis from '../tamplates/card.hbs';
import menur from './menu.json';


const listRef = document.querySelector('.js-menu')
const buttonRef = document.querySelector('.theme-switch__toggle')
const bodyRef = document.querySelector('BODY')
    

buttonRef.addEventListener('change', changeTheme)  

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function clickGallary(menur) {
    return menur.map(cardDis).join('')
}
listRef.insertAdjacentHTML('afterbegin', clickGallary(menur))

local();

function changeTheme() {
    if (!bodyRef.hasAttribute('class')) {
        bodyRef.setAttribute('class', Theme.DARK)
        updateLocal(Theme.DARK)
    } else if (bodyRef.getAttribute('class') === Theme.DARK) {
        changeThameFun(Theme.DARK, Theme.LIGHT)
        updateLocal(Theme.LIGHT)
    } else if(bodyRef.getAttribute('class') === Theme.LIGHT){
        changeThameFun(Theme.LIGHT, Theme.DARK)
        updateLocal(Theme.DARK)
    }
    
}

function updateLocal(theme) {
    localStorage.setItem('Theme', theme)
}

function changeThameFun(one, two) {
    bodyRef.classList.replace(one, two)
}

function local() {
    if (localStorage.getItem('Theme') === Theme.DARK) {
        buttonRef.checked = true;
        changeTheme()
    }
}