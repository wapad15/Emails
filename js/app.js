const email = document.querySelector('#email');
const subject = document.querySelector('#asunto');
const message = document.querySelector('#mensaje');
const btnSend = document.querySelector('#enviar');
const formulary = document.querySelector('#enviar-mail');
const resetBtn = document.getElementById('resetBtn');

function validateField() {
    validateSizeField(this);

    if (this.type === 'email')
        validateEmail(this);

    let errors = document.querySelectorAll('.error');
    if (email.value !== '' && subject.value !== '' && message !== '') {
        if (errors.length === 0) {
            btnSend.disabled = false;
        }
    }
}

function validateSizeField(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

function validateEmail(field) {
    if (field.value.indexOf('@') === -1) {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

function sendEmail() {
    formulary.addEventListener('submit', e => {
        e.preventDefault();
        let spinner = document.getElementById('spinner');
        let loaders = document.querySelector('#loaders');
        let iconSendEmail = document.createElement('img');

        iconSendEmail.src = '/img/mail.gif';
        iconSendEmail.style.display = 'block';
        iconSendEmail.style.width = '150px';

        spinner.style.display = 'initial';
        setTimeout(() => {
            spinner.style.display = 'none';
            loaders.appendChild(iconSendEmail);
            setTimeout(() => {
                iconSendEmail.remove();
                formulary.reset();
            }, 3000);
        }, 3000);
    });
}

function resetForm() {
    resetBtn.addEventListener('click', e => {
        e.preventDefault();
        formulary.reset();
    });
}

function main() {
    document
        .addEventListener('DOMContentLoaded', e => {
            btnSend.setAttribute('disabled', true);
        });

    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
    sendEmail();
    resetForm();
}

main();