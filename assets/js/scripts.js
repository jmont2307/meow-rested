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
