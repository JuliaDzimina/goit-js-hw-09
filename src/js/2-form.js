const LS_KEY = "feedback-form-state";
const form = document.querySelector('form');

//Event listener
form.addEventListener('input', () => {
    const obj = {
        email: form.elements.email.value.trim(),
        message:  form.elements.message.value.trim()
    }   
saveToLS(LS_KEY, obj)
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const obj = {
        email: form.elements.email.value.trim(),
        message:  form.elements.message.value.trim()
    }

    if(obj.email === '' || obj.message === ''){
        return
    }
    console.log(obj);

    localStorage.removeItem(LS_KEY);
    form.reset();
});

// Local Storage
function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
};

function loadFromLS(key) {
    const data = localStorage.getItem(key); 
  
    try {
      const result = JSON.parse(data);
      return result;
    } catch (error) {
      return data;
    }
};

// Restore date input
function restoreData(){
    const {email, message} = loadFromLS(LS_KEY) || {};
    form.elements.email.value = email || '';
    form.elements.message.value = message || '';
};
restoreData();

