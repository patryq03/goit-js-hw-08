const e=document.querySelector("form.feedback-form");document.querySelector("button"),document.querySelector("input").value,document.querySelector("textarea").value;e.addEventListener("input",(e=>{localStorage.setItem("feedback-form-state",e.target.value)})),e.addEventListener("message",(e=>{localStorage.setItem("feedback-form-state",e.target.value)})),e.addEventListener("submit",(t=>{t.preventDefault,console.log(t.target),localStorage.removeItem("feedback-form-state"),e.reset()}));
//# sourceMappingURL=03-feedback.4952f9b3.js.map
