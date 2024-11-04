document.getElementById("pingForm").onsubmit = function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma normal
    const url = document.querySelector('input[name="url"]').value; // Obtiene la URL ingresada
    fetch(`/ping`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ url }) // Envía la URL como parámetro
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("result").innerHTML = data; // Muestra el resultado en el div
    })
    .catch(error => {
        console.error('Error:', error);
    });
};
