document.addEventListener('DOMContentLoaded', function () {
    var getDataButton = document.getElementById('getDataButton');
    getDataButton.addEventListener('click', fetchData);

    function fetchData() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'data.php', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var peopleData = JSON.parse(xhr.responseText);
                var resultElement = document.getElementById('result');
                displayData(resultElement, peopleData);
            }
        };
        xhr.send();
    }
    function displayData(element, data) {
        element.innerHTML = '';
        data.forEach(function (person) {
            var personInfo = document.createElement('div');
            personInfo.innerHTML = '<b>Name:</b> ' + person.name + '<br><b>Age:</b> ' + person.age + '<br><b>City:</b> ' + person.city + '<hr>';
            element.appendChild(personInfo);
        });
    }
});
