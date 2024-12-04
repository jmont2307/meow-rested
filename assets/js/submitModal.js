document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('#container form');
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

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            modal.style.display = 'block';
        });
    }
});
