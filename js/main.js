const openBtn = document.getElementById('modalBtn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

openBtn.onclick = () => {
    modal.style.display = 'block';
}

closeBtn.onclick = () => {
    modal.style.display = 'none';
}