document.addEventListener("DOMContentLoaded", function() {
    const pilotsList = document.getElementById("pilots-list");
    const selectedPilotsList = document.getElementById("selected-pilots-list");
    const costruttoreList = document.getElementById("costruttore-list");
    const selectedcostruttoreList = document.getElementById("selected-costruttore-list");

    // Lista di tutti i piloti della MotoGP
    const allPilots = [
        { name: " Marq Marquez", image: "https://i.ibb.co/LkGCVQw/marq.jpg",color: "gray" }, 
        { name: " Alex Marquez", image: "https://i.ibb.co/X38HzB2/alex.jpg" ,color: "gray"},
		{ name: "Francesco Bagnaia", image: "https://i.ibb.co/DQgWHDt/pecco.jpg",  color: "red" },
		{ name: " Enea Bastianini", image: "https://i.ibb.co/cT5ZtnT/bestia.jpg" ,color: "red"},
		{ name: " Jorge Martin", image: "https://i.ibb.co/kc68x10/martin.jpg" ,color: "purple"},
		{ name: " Franco Morbidelli", image: "https://i.ibb.co/nn3VHtY/morbido.jpg" ,color: "purple"},
		{ name: " Aleix Espargaro", image: "https://i.ibb.co/Kr8QWcS/esp.jpg" ,color: "green"},
		{ name: " Maverick Vinales", image: "https://i.ibb.co/5v0tNCQ/vinales.jpg" ,color: "green"},
		{ name: " Brad Binder", image: "https://i.ibb.co/m9xhSM0/binder.jpg" ,color: "orangered"},
		{ name: " Jack Miller", image: "https://i.ibb.co/tJPfgHP/miller.jpg" ,color: "orangered"},
		{ name: " Fabio Di Giannantonio", image: "https://i.ibb.co/CKxLxb0/diggia.jpg" ,color: "gold"},
		{ name: " Marco Bezzecchi", image: "https://i.ibb.co/9ww2BHR/bez.jpg" ,color: "gold"},
		{ name: " Pedro Acosta", image: "https://i.ibb.co/ryvhtnq/acosta.jpg" ,color: "firebrick"},
		{ name: "Adrián Fernández", image: "https://i.ibb.co/7Y5G1h8/a-fernandez.jpg" ,color: "firebrick"},
		{ name: " Takaaki Nakagami", image: "https://i.ibb.co/bBwbWpz/naka.jpg" ,color: "silver"},
		{ name: " Johann Zarco", image: "https://i.ibb.co/vkwDmL8/zarco.jpg" ,color: "silver"},
		{ name: " Miguel Oliveira", image: "https://i.ibb.co/q7JzjxP/oliveira.jpg" ,color: "darkturquoise"},
		{ name: " Raúl Fernández", image: "https://i.ibb.co/2Fz8d8H/fernandez.jpg" ,color: "darkturquoise"},
		{ name: " Luca Marini", image: "https://i.ibb.co/h7KQ4t8/maro.jpg" ,color: "orange"},
		{ name: " Joan Mir", image: "https://i.ibb.co/Mpdmgt0/mir.jpg" ,color: "orange"},
		{ name: " Fabio Quartararo", image: "https://i.ibb.co/ChvcRmq/quarta.jpg" ,color: "blue"},
		{ name: " Álex Rins", image: "https://i.ibb.co/CmkndY5/rins.jpg" ,color: "blue"},
    ];

    const allcostruttori = [
        { name: "Yamaha" },
        { name: "Ducati" },
        { name: "Honda" }
    ];
	
    // Popola la lista di piloti nella sezione di selezione del team
    allPilots.forEach(pilot => {
    const button = createButton(pilot.name, pilot.color);
        button.addEventListener("click", () => selectPilot(pilot));
        pilotsList.appendChild(button);
    });

    // Popola la lista di costruttori nella sezione di selezione del team
    allcostruttori.forEach(costruttore => {
        const button = createButton(costruttore.name);
        button.addEventListener("click", () => selectcostruttore(costruttore));
        costruttoreList.appendChild(button);
    });

    function createButton(label,color) {
    const button = document.createElement("button");
    button.textContent = label;
    button.style.backgroundColor = color;
    return button;
    }

    function selectPilot(pilot) {
        // Verifica se il pilota è già stato selezionato
        const isSelected = selectedPilotsList.querySelector(`li[data-pilot="${pilot.name}"]`);
        if (!isSelected) {
            if (selectedPilotsList.children.length < 4) {
                const listItem = document.createElement("li");
                const image = document.createElement("img");
                image.src = pilot.image;
                image.alt = pilot.name;
                image.style.maxWidth = "250px"; // Imposta la larghezza massima dell'immagine
                image.style.height = "auto"; // Imposta l'altezza in modo proporzionale
                listItem.appendChild(image);
                listItem.dataset.pilot = pilot.name;
                selectedPilotsList.appendChild(listItem);
            } else {
                alert("Puoi selezionare solo 4 piloti per il tuo team!");
            }
        } else {
            alert("Questo pilota è già nel tuo team!");
        }
    }

    function selectcostruttore(costruttore) {
        // Verifica se il costruttore è già stato selezionato
        const isSelected = selectedcostruttoreList.querySelector(`li[data-costruttore="${costruttore.name}"]`);
        if (!isSelected) {
            if (selectedcostruttoreList.children.length < 1) {
                const listItem = document.createElement("li");
                listItem.textContent = "Costruttore: " + costruttore.name;
                listItem.dataset.costruttore = costruttore.name;
                selectedcostruttoreList.appendChild(listItem);
            } else {
                alert("Puoi selezionare solo 1 costruttore per il tuo team!");
            }
        } else {
            alert("Questo costruttore è già nel tuo team!");
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const constructorButtons = document.querySelectorAll(".constructor-button");
    const selectedImage = document.getElementById("selected-image");

    constructorButtons.forEach(button => {
        button.addEventListener("click", function() {
            const imageUrl = this.getAttribute("data-image");
            selectedImage.src = imageUrl;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const squadButtons = document.querySelectorAll(".squad-button");
    const selectedTeamImage = document.getElementById("team-image");

    squadButtons.forEach(button => {
        button.addEventListener("click", function() {
            const imageUrl = this.getAttribute("data-image");
            selectedTeamImage.src = imageUrl;
        });
    });
});