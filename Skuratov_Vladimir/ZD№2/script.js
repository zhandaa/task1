// Скрипт для плавного скролла к секциям при клике на элементы навигации
$(document).ready(function () {
    // Плавный скролл к секциям
    $(".navbar-nav a, .btn-primary").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Скрипт для отправки данных формы на сервер (здесь имитация)
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Получение данных из формы
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Здесь можно отправить данные на сервер, например, через AJAX

    // Вывод сообщения об успешной отправке (в данном случае, в консоль)
    console.log("Данные отправлены:\nИмя: " + name + "\nEmail: " + email + "\nСообщение: " + message);

    // Очистка формы
    document.getElementById("contactForm").reset();
});
