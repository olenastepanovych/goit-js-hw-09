const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: '' };


const updateStorage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
}


form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    updateStorage();
});


form.addEventListener('submit', (event) => {
    event.preventDefault();


    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!email || !message) {
        alert('Please fill in all fields');
        return;
    }

    console.log({ email, message });


    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
    form.reset();
});


