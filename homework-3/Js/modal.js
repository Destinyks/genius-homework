const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

// Функция для переключения видимости модального окна
const toggleModal = () => {
    modal.classList.toggle('is-hidden');
};

// Добавление обработчиков событий для кнопок открытия и закрытия
modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);