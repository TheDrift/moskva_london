const $Moscow = document.querySelector('.Moscow');
const $Vaduz = document.querySelector('.Vaduz');
const $London = document.querySelector('.London');
const $block = document.querySelector('.block');
const $logo = document.querySelector('.logo');
const $text = document.querySelector('.text');

$Moscow.addEventListener('click' , e => {
    e.preventDefault()
    $block.classList.add('active')
    $logo.innerHTML = 'Moscow'
    $text.innerHTML = 'что-то умное про москву, придумайте сами'
})

$Vaduz.addEventListener('click' , e => {
    e.preventDefault()
    $block.classList.add('active')
    $logo.innerHTML = 'Vaduz'
    $text.innerHTML = 'что такое вадуз?'
})

$London.addEventListener('click' , e => {
    e.preventDefault()
    $block.classList.add('active')
    $logo.innerHTML = 'London'
    $text.innerHTML = 'я уеду жить в Лондон '
})