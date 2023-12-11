
const buttons = document.querySelectorAll('.section__button');
const modals = document.querySelectorAll('.modal');

const closeModal = () => {
    modals.forEach(modal => {
        modal.style.visibility = 'hidden';
        modal.style.opacity = 0;
    });
};

const openModal = (index) => {
    modals[index].style.visibility = 'visible';
    modals[index].style.opacity = 1;
};

buttons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Остановка всплытия события, чтобы не вызывался обработчик для document.body
        closeModal(); // Закрываем все модальные окна
        openModal(index); // Открываем нужное модальное окно
    });
});

document.body.addEventListener('click', closeModal); // Закрытие модальных окон при клике вне них