const STORAGE_KEY = "feedback-form-state";

let formData = {
email: "",
message: "",
};

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const saveToLocalStorage = () => {
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const loadFromLocalStorage = () => {
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email.trim() || "";
    messageInput.value = formData.message.trim() || "";
}
};

loadFromLocalStorage();

form.addEventListener("input", (event) => {
formData[event.target.name] = event.target.value.trim();
saveToLocalStorage();
});

form.addEventListener("submit", (event) => {
event.preventDefault();

if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
}

console.log("Form submitted:", formData);


localStorage.removeItem(STORAGE_KEY);
form.reset();
formData = { email: "", message: "" };
});
