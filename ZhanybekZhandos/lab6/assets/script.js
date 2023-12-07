const form = document.querySelector('#form');
if(form) {
  let result;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let response = await fetch('./../ajax.php', {
      method: "POST",
      body: formData,
    });
    result = await response.json();
    if (result.success) {
      form.style.display='none';
      form.nextElementSibling.style.display = 'flex';
    } else {
      console.log('Не удалось получить успешный ответ от сервера');
    }
    return await result;
  });
}

const btnGetData = document.querySelector('#btnGetData');
const dataContainer = document.querySelector('#dataContainer');
if (btnGetData && dataContainer) {
  btnGetData.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('./../data.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if(data) {
              data.forEach(item => {
                var container = document.createElement('div');
                container.classList.add('d-flex', 'gap-3');
                container.innerHTML = '<h5>' + item.name + '</h5>' +
                '<p>Age: ' + item.age + '</p>' +
                '<p>City: ' + item.city + '</p>';
                dataContainer.appendChild(container);
              });

            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

});
}
