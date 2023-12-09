const form = document.querySelector("form.feedback-form");
const submit = document.querySelector("button");
const email = document.querySelector("input").value;
const message = document.querySelector("textarea").value;



form.addEventListener("input", event => {
    localStorage.setItem("feedback-form-state", event.target.value);
});

form.addEventListener("message", event => {
    localStorage.setItem("feedback-form-state", event.target.value);
})
form.addEventListener("submit", event => {
    event.preventDefault;
    console.log(event.target);
    localStorage.removeItem("feedback-form-state");
    form.reset();
})
