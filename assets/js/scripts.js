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
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('#grid-container');
    const modal = document.createElement('div');
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.zIndex = '1';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.overflow = 'auto';
    modal.style.backgroundColor = 'rgba(0,0,0,0.4)';
    modal.innerHTML = `
        <div style="background-color: #fff; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 60%; max-width: 600px; border-radius: 5px; box-shadow: #787675 2px 2px 2px; text-align: center;">
            <span id="close-modal" style="color: #aaa; float: right; font-size: 28px; font-weight: bold;">&times;</span>
            <p>Thank you for your submission, Your hiring manager will contact you shortly!</p>
        </div>
    `;
    document.body.appendChild(modal);

    const closeModal = document.getElementById('close-modal');
    closeModal.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        modal.style.display = 'block';
    });
});

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