const submitForm = document.getElementById('search-form');
const dateValue = document.getElementById('search-date');
const timeValue = document.getElementById('search-time');
const driverType = document.getElementById('search-driver');
const passengerValue = document.getElementById('search-passenger');

const result = document.getElementById('search-result');

const getDriverType = (val) => {
   driverType.innerText = val; 
}

const getTime = (val) => {
    timeValue.innerText = val + ' WIB';
}
