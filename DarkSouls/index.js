// Declarations

const options = document.querySelectorAll('.menu_option')
const menu_select_audio = new Audio('sounds/CURSOL_SELECT.wav.mp3')
const menu_start_audio = new Audio('sounds/menu_start.mp3')
const menu_ok_audio = new Audio('sounds/CURSOL_OK.wav.mp3')
const dark_logo = document.getElementById('dark_logo')
const copyright_text = document.getElementById('copyright')
const start_button = document.getElementById('start_button')
const menu = document.getElementById('menu_options')
let defaultOption = 0

// Load

window.addEventListener('load', () => {
    start_button.style.transitionDuration = '1s'
    copyright_text.style.transitionDuration = '1s'
    start_button.style.opacity = '1'
    copyright_text.style.opacity = '1'

    dark_logo.style.transitionDuration = '5s'
    dark_logo.style.opacity = '1'
    dark_logo.style.height = '180px'
})

// Start

const startMenu = () => {
    menu_start_audio.play()
    start_button.style.display = 'none'
    menu.style.display = 'block'

    setInterval(() => {
        options[defaultOption].classList.add('active_option')
    },50)
}

document.addEventListener('keydown', event => {
    if (event.key == 'Enter' && start_button.style.display != 'none'){
        startMenu()
    }
})

start_button.addEventListener('click', () => {
    startMenu()
})

// Changing Selected Option

const selectOption = option => {
    options.forEach(option => {
        option.classList.remove('active_option')
    })
    options[option].classList.add('active_option')
}

const selectDown = () => {
    if (defaultOption == options.length - 1){
        defaultOption = 0
        selectOption(defaultOption)
    }else {
        defaultOption ++
        selectOption(defaultOption)
    }
}

const selectUp = () => {
    if (defaultOption == 0){
        defaultOption = options.length - 1
        selectOption(defaultOption)
    }else {
        defaultOption --
        selectOption(defaultOption)
    }
}

document.addEventListener('keydown', event => {
    if ((event.key == 'ArrowDown' || event.key == 's') && menu.style.display == 'block'){
        options.forEach(option => {
            option.classList.remove('active_option')
        })

        menu_select_audio.currentTime = 0
        menu_select_audio.play()
        selectDown()
    }else if ((event.key == 'ArrowUp' || event.key == 'w') && menu.style.display == 'block'){
        options.forEach(option => {
            option.classList.remove('active_option')
        })

        menu_select_audio.currentTime = 0
        menu_select_audio.play()
        selectUp()
    }
})  

// Option Selectioning

options.forEach(option => {
    document.addEventListener('keydown', event => {
        if (event.key == 'Enter' && menu.style.display == 'block' && option.classList.contains('active_option')){
            menu_ok_audio.play()
        }
    })

    option.addEventListener('click', () => {
        if (menu.style.display == 'block'){
            menu_ok_audio.play()
        }
    })
})