// subscribe.js

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('subscribeForm');
  const submitButton = form.querySelector('button[type="submit"]');

  // Get all form inputs
  const nameInput = document.getElementById('sub-name');
  const emailInput = document.getElementById('sub-email');
  const passwordInput = document.getElementById('sub-password');
  const confirmPasswordInput = document.getElementById('sub-confirm-password');
  const ageInput = document.getElementById('sub-age');
  const preferencesInput = document.getElementById('sub-preferences');
  const termsInput = document.getElementById('terms');
  
  // Get all error message elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  const ageError = document.getElementById('ageError');
  const preferencesError = document.getElementById('preferencesError');
  const termsError = document.getElementById('termsError');

  // Password visibility toggle
  const passwordToggles = document.querySelectorAll('.password-toggle');
  
  passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const input = this.previousElementSibling;
      const icon = this.querySelector('i');
      
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('ri-eye-line');
        icon.classList.add('ri-eye-off-line');
        this.classList.add('show-password');
      } else {
        input.type = 'password';
        icon.classList.remove('ri-eye-off-line');
        icon.classList.add('ri-eye-line');
        this.classList.remove('show-password');
      }
    });
  });

  // Validation functions
  function validateName() {
    const name = nameInput.value.trim();
    if (name.length < 2 || name.length > 50) {
      nameError.textContent = 'Name must be between 2 and 50 characters';
      nameInput.classList.add('error');
      return false;
    }
    nameError.textContent = '';
    nameInput.classList.remove('error');
    return true;
  }

  function validateEmail() {
      const email = emailInput.value.trim();
    if (!email.includes('@') || !email.includes('.')) {
      emailError.textContent = 'Please enter a valid email address';
      emailInput.classList.add('error');
      return false;
    }
    emailError.textContent = '';
    emailInput.classList.remove('error');
    return true;
  }

  function validatePassword() {
    const password = passwordInput.value.trim();
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (password.length < 8 || password.length > 50) {
        passwordError.textContent = 'Password must be between 8 and 50 characters';
        passwordInput.classList.add('error');
        return false;
    }
    
    if (!hasUpperCase) {
        passwordError.textContent = 'Password must contain at least one uppercase letter';
        passwordInput.classList.add('error');
        return false;
    }
    
    if (!hasSpecialChar) {
        passwordError.textContent = 'Password must contain at least one special character';
        passwordInput.classList.add('error');
        return false;
    }
    
    passwordError.textContent = '';
    passwordInput.classList.remove('error');
    return true;
  }

  function validateConfirmPassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = 'Passwords do not match';
      confirmPasswordInput.classList.add('error');
      return false;
      }
    confirmPasswordError.textContent = '';
    confirmPasswordInput.classList.remove('error');
    return true;
  }

  function validateAge() {
    const age = parseInt(ageInput.value);
    if (isNaN(age) || age < 18 || age > 100) {
      ageError.textContent = 'Age must be between 18 and 100';
      ageInput.classList.add('error');
      return false;
    }
    ageError.textContent = '';
    ageInput.classList.remove('error');
    return true;
  }

  function validatePreferences() {
    if (!preferencesInput.value) {
      preferencesError.textContent = 'Please select an interest';
      preferencesInput.classList.add('error');
      return false;
    }
    preferencesError.textContent = '';
    preferencesInput.classList.remove('error');
    return true;
  }

  function validateTerms() {
    if (!termsInput.checked) {
      termsError.textContent = 'You must agree to the terms and conditions';
      return false;
    }
    termsError.textContent = '';
    return true;
  }

  // Add input event listeners for real-time validation
  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);
  confirmPasswordInput.addEventListener('input', validateConfirmPassword);
  ageInput.addEventListener('input', validateAge);
  preferencesInput.addEventListener('change', validatePreferences);
  termsInput.addEventListener('change', validateTerms);

  // Form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isAgeValid = validateAge();
    const isPreferencesValid = validatePreferences();
    const isTermsValid = validateTerms();

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && 
        isAgeValid && isPreferencesValid && isTermsValid) {

      submitButton.disabled = true;
      submitButton.textContent = 'Subscribing...';

      setTimeout(() => {
        alert('Thank you for subscribing!');
        form.reset();
        submitButton.disabled = false;
        submitButton.textContent = 'Subscribe Now';
      }, 4500);
      }
    });
  });
  

document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  if (burgerButton && nav) {
    burgerButton.addEventListener('click', function() {
      nav.classList.toggle('mobile-active');

      const burgerIcon = this.querySelector('i');
      if (burgerIcon.classList.contains('ri-menu-line')) {
        burgerIcon.classList.remove('ri-menu-line');
        burgerIcon.classList.add('ri-close-line');
      } else {
        burgerIcon.classList.remove('ri-close-line');
        burgerIcon.classList.add('ri-menu-line');
      }
    });
  }
});