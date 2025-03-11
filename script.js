document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded.");

    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const navbar = document.querySelector('.navbar');
    const timerSection = document.getElementById('timer-section');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === "group 4" && password === "webdeveloper") {
            console.log("Login successful!");
            loginContainer.style.display = 'none';
            navbar.classList.remove('d-none');
        } else {
            alert("Invalid username or password!");
        }
    });

    let timer;
    let seconds = 0;
    let isRunning = false;

    function updateDisplay() {
        document.getElementById('timer-display').textContent = new Date(seconds * 1000).toISOString().substr(14, 5);
    }

    document.getElementById('start-btn').addEventListener('click', function () {
        if (!isRunning) {
            isRunning = true;
            timer = setInterval(() => {
                seconds++;
                updateDisplay();
            }, 1000);
        }
    });

    document.getElementById('stop-btn').addEventListener('click', function () {
        clearInterval(timer);
        isRunning = false;
    });

    document.getElementById('reset-btn').addEventListener('click', function () {
        clearInterval(timer);
        isRunning = false;
        seconds = 0;
        updateDisplay();
    });

    document.getElementById('timer-btn').addEventListener('click', function () {
        timerSection.style.display = "block";
    });

    document.getElementById('theme-toggle').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
});
