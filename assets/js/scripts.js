document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // Load checked state from localStorage
    checkboxes.forEach(checkbox => {
        const isChecked = localStorage.getItem(checkbox.id) === 'true';
        checkbox.checked = isChecked;
        if (isChecked) {
            checkbox.nextElementSibling.style.textDecoration = 'line-through';
        }
    });

    // Save checked state to localStorage
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            localStorage.setItem(checkbox.id, this.checked);
        });
    });
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                this.nextElementSibling.style.textDecoration = 'line-through';
            } else {
                this.nextElementSibling.style.textDecoration = 'none';
            }
        });
    });
});


// function to save the form data to local storage
    const inputs = document.querySelectorAll('#grid-container input[type="text"]');
    
    inputs.forEach(input => {
        input.addEventListener('change', function() {
        console.log(input.value);
        const savedValue = localStorage.getItem(input.value.trim());
        if (savedValue) {
            input.value = savedValue;
        }
        else {
            localStorage.setItem(input.parentElement.textContent, input.value);
        }
    });
});

const dateInputs = document.querySelectorAll('#grid-container input[type="date"]');
    
dateInputs.forEach(input => {
    input.addEventListener('change', function() {
    console.log(input.value);
    const savedValue = localStorage.getItem(input.value.trim());
    if (savedValue) {
        input.value = savedValue;
    }
    else {
        localStorage.setItem(input.parentElement.textContent, input.value);
    }
});
});

// function to check if all the fields are filled out
function formValidate(event){
    
    event.preventDefault()
    const name = document.getElementById('employee-name').value
    const empID = document.getElementById('employee-id').value
    const empPosition = document.getElementById('employee-position').value
    const startDate = document.getElementById('start-date').value

    let errorMessage = document.getElementById('error-message');
    if (!errorMessage) {
        errorMessage = document.createElement('p');
        errorMessage.id = 'error-message';
        errorMessage.style.color = 'red';
        document.getElementById('onboarding-form').appendChild(errorMessage);
    }

    if (!name || !empID || !empPosition || !startDate) {
        errorMessage.textContent = 'Please fill out all the fields';
        return false;
    } else {
        errorMessage.textContent = '';
    }
    document.getElementById('onboarding-form').submit();
    window.location.href = 'checklist.html';
}