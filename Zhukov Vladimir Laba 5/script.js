document.addEventListener('DOMContentLoaded', function() {
    var photo = document.querySelector('.me img');

    photo.addEventListener('mouseenter', function() {
        this.style.borderColor = '#e74c3c'; // Изменяем цвет рамки при наведении
    });

    photo.addEventListener('mouseleave', function() {
        this.style.borderColor = '#3498db'; // Возвращаем исходный цвет рамки
    });
});