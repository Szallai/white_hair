/**
 * Egyedi JS kód
 * Szallai Krisztian
 */
(function() {
    'use strict';

    window.addEventListener('load', function() {
		validation();
    }, false);

    document.addEventListener('DOMContentLoaded', function() {
        var registerButton = document.getElementById('register');
        if (registerButton) {
            registerButton.addEventListener('click', function(event) {
                validation();
				var form = document.getElementById('registration');
            if (form.checkValidity()) {
                console.log("Az űrlap érvényes, elküldés megtörténhet.");
				var alertMessage = `
                    <div class="alert">
                        <div class="alert-header">
                            <strong class="mr-auto">Sikeres regisztráció!</strong>
                        </div>
                        <div class="alert-body">
                            Gratulálunk, sikeresen regisztráltál.
                        </div>
                    </div>
                `;

                var formContainer = document.querySelector('.form-message');
                formContainer.innerHTML = alertMessage;

                setTimeout(function() {
                    formContainer.innerHTML = '';
					event.preventDefault();
					form.reset();
					var formControl = $('.form-control');

					formControl.each(function(index, element) {
						var input = $(element);
						input.removeClass('is-valid');
						input.next('.valid-icon').remove();
					});
                }, 5000);
            }
				
            });
        }
    });
	function validation() {
        var inputs = document.getElementsByClassName('form-control');
        var email1 = $('#inputEmail');
        var email2 = $('#inputEmail2');
        var emailMismatchMessage = 'Az email címek nem egyeznek meg';
        var InputMismatchMessage = 'A szöveges mező nem megfelelő!';

        var validation = Array.prototype.filter.call(inputs, function(input) {
            input.addEventListener('blur', function(event) {
                $(input).nextAll('.errortext, .invalid-icon').remove();

                input.classList.remove('is-invalid');
                input.classList.remove('is-valid');
                $(input).next('.valid-icon').remove();

                if (input.checkValidity() === false) {
                    input.classList.add('is-invalid');
                    if ($(input).next('.invalid-icon').length === 0) {
                        $('<span>', {
                            class: 'invalid-icon',
                        }).insertAfter(input);
                    }
                    if ($(input).next('.errortext').length === 0) {
                        $('<span>', {
                            class: 'errortext',
                            text: InputMismatchMessage,
                        }).insertAfter(input);
                    }
                } else {
                    input.classList.add('is-valid');
                    $(input).next('.invalid-icon').remove();
                    $(input).next('.errortext').remove();
                    if ($(input).next('.valid-icon').length === 0) {
                        $('<span>', {
                            class: 'valid-icon',
                        }).insertAfter(input);
                    }
                }

                if (email1.val() && email2.val() && email1.val() !== email2.val()) {
					email1.next('.errortext').remove();
					email2.next('.errortext').remove();
					email1.next('.invalid-icon').remove();
					email2.next('.invalid-icon').remove();
					email1.next('.valid-icon').remove();
					email2.next('.valid-icon').remove();
									
                    email1.addClass('is-invalid');
                    email2.addClass('is-invalid');
					if(input.id == "InputEmail") {
						if (email1.next('.invalid-icon').length === 0) {
							$('<span>', {
								class: 'invalid-icon',
							}).insertAfter(input);
						}

						if (email1.next('.errortext').length === 0) {
							$('<span>', {
								class: 'errortext',
								text: emailMismatchMessage,
							}).insertAfter(input);
						}
					} else {
						if (email2.next('.invalid-icon').length === 0) {
							$('<span>', {
								class: 'invalid-icon',
							}).insertAfter(input);
						}

						if (email2.next('.errortext').length === 0) {
							$('<span>', {
								class: 'errortext',
								text: emailMismatchMessage,
							}).insertAfter(input);
						}						
					}
                } else {
                 }
            }, false);
        });
	}


})();


