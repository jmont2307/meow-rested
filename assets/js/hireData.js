// hireData.js

//local storage
function getDataFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    if (dataContainer) {
        dataContainer.innerHTML = JSON.stringify(data, null, 2);
    }
}

//Retrieves data from local storage
document.addEventListener('DOMContentLoaded', () => {
    const data = getDataFromLocalStorage('yourDataKey');
    if (data) {
        displayData(data);
    } else {
        console.log('No data found in local storage');
    }
});