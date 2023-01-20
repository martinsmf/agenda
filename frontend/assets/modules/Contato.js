import validator from "validator";
import FlashError from "./FlashError";

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;

    const nomeInput = el.querySelector('input[name="nome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');

    let error = false;

    for (let errorText of this.form.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    if (!nomeInput.value) {
      FlashError.criaErro(nomeInput, "Campo nome não pode ficar em branco.");
      error = true;
    }

    if (!emailInput.value && !telefoneInput.valeu) {
      FlashError.criaErro(
        emailInput,
        "E-mail ou Telefone devem ser informados."
      );
      FlashError.criaErro(
        telefoneInput,
        "Telefone ou E-mail devem ser informados."
      );
      error = true;
    }

    if (emailInput.value) {
      error = Contato.trueEmail(emailInput.value, emailInput);
    };


    if (!error) el.submit();
  }

  static trueEmail(email, emailInput) {
    let error = false;
    if (!validator.isEmail(email)) {
      FlashError.criaErro(emailInput, "E-mail invalido");
      error = true;
    }
    return error;
  }
}
