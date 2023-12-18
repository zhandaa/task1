$('.telegram-form').on('submit', function (event) {
    event.stopPropagation();
    event.preventDefault();
    
    sendButton.on("click", function(event) {
        event.preventDefault();
        let form = $('.telegram-form')[0];
        let submit = $('.submit', form);
    
        submit.val('Отправка...');
        $('input, textarea', form).attr('disabled', '');
    
        let data = new FormData(form);
        });
    

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]');

    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled','');

    data.append( 'name',  $('[name="name"]', form).val() );
    data.append( 'Phone', $('[name="Phone"]', form).val() );
    data.append( 'Email', $('[name="email"]', form).val() );
    data.append( 'Text', $('[name="text"]', form).val() );

    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });

    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                        percentage = percentage.toFixed(0);
                        $('.submit', form).html( percentage + '%' );
                    }
                }, false );
            }

            return myXhr;
        },
        success: function(data) {
            // После успешной отправки
            openModal('Ваш запрос отправлен');
        },
        
        error: function(jqXHR, textStatus) {
            // При возникновении ошибки
            openModal('Ошибка сервера. Попробуйте повторить попытку');
        },

        complete: function() {
            // Восстановление кнопки и полей после завершения запроса
            form.reset();
            submit.text('SEND');
            $('input, textarea', form).removeAttr('disabled');
        }
    });
});

