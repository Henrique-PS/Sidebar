const idsArray = [
  'menu-button',
  'logo',
  'vet-infos',
  'vet-infos',
  'sidebar-footer',
  'sidebar-header'
]

const classesArray = [
  'openMenu',
  'logo',
  'vetInfos-hide',
  'vet-infos',
  'flexBox-menu',
  'flexBox-menu'
]

const menuButton = document.getElementById('menu-button')
const sidebar = document.querySelector('.sidebar')
const textMenu = document.querySelectorAll('.text-menu')

menuButton.onclick = () => {
  for (let i = 0; i < idsArray.length; i++) {
    const identities = document.getElementById(idsArray[i])
    identities.classList.toggle(classesArray[i])
  }
  sidebar.classList.toggle('menu')
  textMenuVisible()
}

let textMenuVisible = () => {
  for (let i = 0; i < textMenu.length; i++) {
    textMenu[i].classList.toggle('hideText-menu')
  }
}
