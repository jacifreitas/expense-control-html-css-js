function onChangeEmail(){
    toggleButtonsDisable();
    toggleEmailErrors();    
  }

  function onChangePassword(){
    toggleButtonsDisable();
    togglePasswordError();
  }

  function login(){
    window.location.href = "pages/home/home.html";
    
  }

  function register(){
    window.location.href = "pages/register/register.html";
  }

  function isEmailValid(){
      const email = form.email().value;
      if(!email){
          return false;
      }
      return validateEmail(email);
  }

  function isPasswordValid(){
      const password = form.password().value;
      if(!password){
          return false;
      }
      return true;
  }

  function toggleEmailErrors(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
   
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";

    }

  function togglePasswordError(){
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
  }

  function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    form.recoverPassword().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
  }

  const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    recoverPassword: () => document.getElementById('recover-password-button'),
    loginButton: () => document.getElementById('login-button')

  }
