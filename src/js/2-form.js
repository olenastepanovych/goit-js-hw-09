const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

// Об'єкт для збереження даних форми
let formData = { email: '', message: '' };

// Функція для оновлення локального сховища
const updateStorage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

// Завантажуємо дані з localStorage, якщо вони є
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
}

// Обробник події input (оновлення локального сховища)
form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    updateStorage();
});

// Обробник події submit
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Перевірка, чи всі поля заповнені
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!email || !message) {
        alert('Please fill in all fields');
        return;
    }

    console.log({ email, message });

    // Очищення localStorage та форми
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
    form.reset();
});


