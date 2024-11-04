document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('register-btn');
    const loginBtn = document.getElementById('login-btn');
    const registerSection = document.getElementById('register-section');
    const loginSection = document.getElementById('login-section');
    const title = document.getElementById('title');

    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSection(registerSection);
        closeSection(loginSection);
    });

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSection(loginSection);
        closeSection(registerSection);
    });

    title.addEventListener('mouseover', () => {
        title.classList.add('animate');
    });

    title.addEventListener('mouseout', () => {
        title.classList.remove('animate');
    });

    if (localStorage.getItem('username')) {
        registerBtn.style.display = 'none';
        loginBtn.textContent = 'Logout';
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            alert('You have logged out.');
            location.reload();
        });
    }
});

function toggleSection(section) {
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        setTimeout(() => section.classList.add('open'), 10); // delay adding class for animation
    } else {
        section.classList.remove('open');
        setTimeout(() => section.style.display = 'none', 500); // delay hiding for animation
    }
}

function closeSection(section) {
    section.classList.remove('open');
    setTimeout(() => section.style.display = 'none', 500); // delay hiding for animation
}

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Зберігання даних в localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful!');
    location.reload();
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Перевірка даних з localStorage
    if (localStorage.getItem('username') === username && localStorage.getItem('password') === password) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password');
    }
}
