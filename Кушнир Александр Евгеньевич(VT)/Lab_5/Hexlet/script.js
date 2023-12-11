function showModal(src) {
    document.getElementById('modalImage').src = src;
    document.querySelector('.modal').style.display = 'flex';
}

function hideModal() {
    document.querySelector('.modal').style.display = 'none';
}