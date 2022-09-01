export default function getPopUp() {
    document.querySelector('.blackout').classList.add('active');
    document.querySelector('.popup').classList.add('active');
    let close = document.querySelector('.close');

    close.onclick = function () {
        document.querySelector('.blackout').classList.remove('active');
        document.querySelector('.popup').classList.remove('active');
    }
}