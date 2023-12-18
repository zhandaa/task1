function fetchData() {
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
      var data = JSON.parse(xhr.responseText);
      var dataContainer = document.getElementById('dataShow');
      dataContainer.innerHTML = '';
      data.forEach(function (item) {
        var p = document.createElement('p');
        p.textContent = item; 
        dataContainer.appendChild(p);
      });
    };

  xhr.open('GET', './../data.php', true);

  xhr.send();
}

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