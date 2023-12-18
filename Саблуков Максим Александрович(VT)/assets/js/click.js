
function openModal(message) {
    let modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;

    let modal = document.getElementById('myModal');
    modal.style.display = 'block';

    setTimeout(function() {
        modal.style.display = 'none';
    }, 3000);
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

sendButton.on("click", function(event) {
    event.preventDefault();
    let form = $('.telegram-form')[0];
    let submit = $('.submit', form);

    submit.val('Отправка...');
    $('input, textarea', form).attr('disabled', '');

    let data = new FormData(form);

    $.ajax({
        url: './assets/js/ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if (myXhr.upload) {
                myXhr.upload.addEventListener('progress', function(e) {
                    if (e.lengthComputable) {
                        let percentage = (e.loaded / e.total) * 100;
                        percentage = percentage.toFixed(0);
                        submit.html(percentage + '%');
                    }
                }, false);
            }

            return myXhr;
        },
        success: function(data) {
            openModal('Ваш запрос отправлен');
        },
        
        error: function(jqXHR, textStatus) {
            openModal('Ошибка сервера. Попробуйте повторить попытку');
        },

        complete: function() {
            form.reset();
            submit.text('SEND');
            $('input, textarea', form).removeAttr('disabled');
        }
    });
});



