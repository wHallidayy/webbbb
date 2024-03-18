document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.querySelector('input[type="password"]');

    passwordInput.addEventListener('focus', function() {
        document.body.style.background = 'linear-gradient(0deg, #636363, #8d8d8d)';
    });

    passwordInput.addEventListener('blur', function() {
        if (!this.value) {
            document.body.style.background = '';
        }
    });

    passwordInput.addEventListener('input', function() {
        if (this.value) {
            document.body.style.background = 'linear-gradient(0deg, #636363, #8d8d8d)';
        } else {
            document.body.style.background = ''; 
        }
    });
});
