document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('mobile');
    const captchaInput = document.getElementById('captcha');
    const agreeCheckbox = document.getElementById('agree');
    const captchaDisplay = document.querySelector('.captcha-code');

    // Function to generate a random 4-digit number for the captcha
    function generateCaptcha() {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }
    captchaDisplay.textContent = generateCaptcha();
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        let isValid = true;
        const enteredCaptcha = captchaInput.value;
        const correctCaptcha = captchaDisplay.textContent;

        // Validation checks
        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            isValid = false;
        }

        if (mobileInput.value.trim() === '' || !/^\d{10}$/.test(mobileInput.value.trim())) {
            alert('Please enter a valid 10-digit mobile number.');
            isValid = false;
        }

        if (enteredCaptcha !== correctCaptcha) {
            alert('Incorrect captcha. Please try again.');
            captchaDisplay.textContent = generateCaptcha(); 
            isValid = false;
        }

        if (!agreeCheckbox.checked) {
            alert('You must agree to the terms and privacy policy.');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            console.log('Form data:', {
                name: nameInput.value,
                mobile: mobileInput.value,
                captcha: captchaInput.value,
            });
            contactForm.reset(); 
        }
    });
});