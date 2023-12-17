
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




