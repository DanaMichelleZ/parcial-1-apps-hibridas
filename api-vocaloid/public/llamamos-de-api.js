document.addEventListener("DOMContentLoaded", function () {
    const vocaloidList = document.getElementById("vocaloid-list");

    vocaloidList.innerHTML = "";

    fetch("/vocaloids")
        .then(response => response.json())
        .then(data => {

            data.forEach(vocaloid => {
                const vocaloidElement = document.createElement("li");
                vocaloidElement.classList.add("vocaloid-item");

                vocaloidElement.innerHTML = `
                    <h2>${vocaloid.nombre}</h2>
                    <img src="${vocaloid.imagenPerfil}" alt="${vocaloid.nombre} - Imagen de perfil" />
                `;
                vocaloidList.appendChild(vocaloidElement);
            });
        })
        .catch(error => {
            console.error("Error al obtener los vocaloids:", error);
            vocaloidList.innerHTML = "<p>Error al cargar los vocaloids.</p>";
        });
});
