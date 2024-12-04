document.addEventListener('DOMContentLoaded', (event) => {
    const getEmployeeName = () => {
        return localStorage.getItem('employeeName') || 'Employee';
    };

    const employeeName = getEmployeeName();

    const modal = document.createElement('div');
    modal.style.display = 'block';
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
            <span id="close-modal" style="color: #aaa; float: right; font-size: 28px; font-weight: bold; cursor: pointer;">&times;</span>
            <p>Welcome, ${employeeName}</p>
        </div>
    `;
    document.body.appendChild(modal);

    const closeModal = () => {
        modal.style.display = 'none';
    };

    document.getElementById('close-modal').onclick = closeModal;

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    };

    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
