document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('registerBtn');
    const loginBtn = document.getElementById('loginBtn');
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

    registerBtn.addEventListener('click', () => {
        registrationForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    loginBtn.addEventListener('click', () => {
        loginForm.classList.remove('hidden');
        registrationForm.classList.add('hidden');
    });

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Registration successful!');
        registrationForm.reset();
        loginForm.classList.remove('hidden');
        registrationForm.classList.add('hidden');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login successful!');
        loginForm.reset();
        registrationForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });
});
