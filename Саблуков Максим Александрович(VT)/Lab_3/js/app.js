
/* Modal*/
const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");
const sendButton = $(".work__title .btn");

modalCall.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll');

    setTimeout(function() {
        $(modalId).find(".modal__dialog").css({
            transform: "scale(1)"
        });
    }, 200);

    // Добавить класс "no-click" к кнопке "SEND"
    sendButton.addClass("no-click");
});

modalClose.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find(".modal__dialog").css({
        transform: "scale(0)"
    });

    setTimeout(function() {
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
        // Удалить класс "no-click" с кнопки "SEND"
        sendButton.removeClass("no-click");
    }, 200);
});

$(".modal").on("click", function(event) {
    let $this = $(this);

    $this.find(".modal__dialog").css({
        transform: "scale(0)"
    });

    setTimeout(function() {
        $this.removeClass('show');
        $("body").removeClass('no-scroll');
        // Удалить класс "no-click" с кнопки "SEND"
        sendButton.removeClass("no-click");
    }, 200);
});

$(".modal__dialog").on("click", function(event) {
    event.stopPropagation();
});

// Дополнительный код, чтобы предотвратить действие кнопки "SEND" при наличии класса "no-click"
sendButton.on("click", function(event) {
    if ($(this).hasClass("no-click")) {
        event.preventDefault();
        // Можно добавить какое-то дополнительное действие или просто ничего не делать
    }
});
