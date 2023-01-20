import validator from "validator";
import FlashError from "./FlashError";

export default class Login{
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;

    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;

    const emailInput = el.querySelector('input[name="email"]')
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;

    for (let errorText of this.form.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    if (!validator.isEmail(emailInput.value)) {
      FlashError.criaErro(emailInput, "Email invalido");
      error = true;
    }

    if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      FlashError.criaErro(
        passwordInput,
        "senha precisa ter entre 3 e 50 caracteres"
      );
      error = true;
    }

    if (!error) el.submit();
  }
  
}