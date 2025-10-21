const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

const fullName = document.querySelector('[data-testid="test-contact-name"]');
const email = document.querySelector('[data-testid="test-contact-email"]');
const subject = document.querySelector('[data-testid="test-contact-subject"]');
const message = document.querySelector('[data-testid="test-contact-message"]');

const errorName = document.querySelector('[data-testid="test-contact-error-name"]');
const errorEmail = document.querySelector('[data-testid="test-contact-error-email"]');
const errorSubject = document.querySelector('[data-testid="test-contact-error-subject"]');
const errorMessage = document.querySelector('[data-testid="test-contact-error-message"]');

function validateName() {
  if (fullName.value.trim() === '') {
    showError(errorName, 'Full name is required');
    return false;
  }
  clearError(errorName);
  return true;
}

function validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === '') {
    showError(errorEmail, 'Email address is required');
    return false;
  }
  if (!emailPattern.test(email.value.trim())) {
    showError(errorEmail, 'Please enter a valid email address (e.g., name@example.com)');
    return false;
  }
  clearError(errorEmail);
  return true;
}

function validateSubject() {
  if (subject.value.trim() === '') {
    showError(errorSubject, 'Subject is required');
    return false;
  }
  clearError(errorSubject);
  return true;
}

function validateMessage() {
  if (message.value.trim() === '') {
    showError(errorMessage, 'Message is required');
    return false;
  }
  if (message.value.trim().length < 10) {
    showError(errorMessage, 'Message must be at least 10 characters long');
    return false;
  }
  clearError(errorMessage);
  return true;
}

function showError(element, errorText) {
  element.textContent = errorText;
  element.style.display = 'block';
  element.previousElementSibling.classList.add('error');
}

function clearError(element) {
  element.textContent = '';
  element.style.display = 'none';
  element.previousElementSibling.classList.remove('error');
}

fullName.addEventListener('blur', validateName);
email.addEventListener('blur', validateEmail);
subject.addEventListener('blur', validateSubject);
message.addEventListener('blur', validateMessage);

fullName.addEventListener('input', () => {
  if (fullName.value.trim() !== '') clearError(errorName);
});
email.addEventListener('input', () => {
  if (email.value.trim() !== '') clearError(errorEmail);
});
subject.addEventListener('input', () => {
  if (subject.value.trim() !== '') clearError(errorSubject);
});
message.addEventListener('input', () => {
  if (message.value.trim() !== '') clearError(errorMessage);
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  successMessage.classList.add('hidden');
  
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isSubjectValid = validateSubject();
  const isMessageValid = validateMessage();
  
  if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
    successMessage.classList.remove('hidden');
    
    form.reset();
    
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 5000);
  } else {
    const firstError = document.querySelector('.error-message[style*="display: block"]');
    if (firstError) {
      firstError.previousElementSibling.focus();
    }
  }
});

