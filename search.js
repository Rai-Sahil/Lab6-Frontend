const searchForm = document.getElementById('searchForm');
const result = document.getElementById('result');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const word = document.getElementById('searchWord').value;

    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    fetch(`https://lab6-backend-zj45.onrender.com/api/v1/definition/${word}`, options)
        .then(res => res.json())
        .then(res => {
            if (res.message) {
                result.textContent = res.message + ' with ' + res.total + ' requests';
            } else {
                console.log(res.definition);
                document.getElementById('definition').textContent = res.definition[0].definition;
                document.getElementById('wordLanguage').textContent = res.definition[0].wordLanguage;
                document.getElementById('definitionLanguage').textContent = res.definition[0].definitionLanguage;
                document.getElementById('requests').textContent = 'Definition retrieved with ' + res.total + ' requests';
            }
        })
        .catch(err => console.error(err));
});