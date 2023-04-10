document.addEventListener("DOMContentLoaded", () => {
    const saveBtn = document.getElementById("save");
    const importBtn = document.getElementById("import");
    const exportBtn = document.getElementById("export");
    const undoBtn = document.getElementById("undo");
    const redoBtn = document.getElementById("redo");
    const previewBtn = document.getElementById("preview");
	
	const scenesBtn = document.getElementById("scenes");
    const charactersBtn = document.getElementById("characters");
    const dialoguesBtn = document.getElementById("dialogues");
    const backgroundsBtn = document.getElementById("backgrounds");
    const musicBtn = document.getElementById("music");
    const soundEffectsBtn = document.getElementById("sound-effects");
	
	let currentScene = null;
	let currentDialog = null;

    saveBtn.addEventListener("click", () => {
        // Funkcja zapisująca projekt
    });

    importBtn.addEventListener("click", () => {
        // Funkcja importująca zasoby
    });

    exportBtn.addEventListener("click", () => {
        // Funkcja eksportująca grę
    });

    undoBtn.addEventListener("click", () => {
        // Funkcja cofająca ostatnią akcję
    });

    redoBtn.addEventListener("click", () => {
        // Funkcja przywracająca ostatnią cofniętą akcję
    });

    previewBtn.addEventListener("click", () => {
        // Funkcja wyświetlająca podgląd gry
    });
	
	scenesBtn.addEventListener("click", () => {
        // Funkcja zarządzająca scenami
    });

    charactersBtn.addEventListener("click", () => {
        // Funkcja zarządzająca postaciami
    });

    dialoguesBtn.addEventListener("click", () => {
        // Funkcja zarządzająca dialogami
    });

    backgroundsBtn.addEventListener("click", () => {
        // Funkcja zarządzająca tłami
    });

    musicBtn.addEventListener("click", () => {
        // Funkcja zarządzająca muzyką
    });

    soundEffectsBtn.addEventListener("click", () => {
        // Funkcja zarządzająca efektami dźwiękowymi
    });
	
	function addScene() {
		const scene = document.createElement("div");
		scene.classList.add("scene");
		scene.addEventListener("click", () => {
			currentScene = scene;
			selectScene(scene);
		});
		document.getElementById("scene-container").appendChild(scene);
	}

	function addDialog() {
		if (!currentScene) {
			alert("Proszę najpierw wybrać scenę.");
			return;
		}

		const dialog = document.createElement("div");
		dialog.classList.add("dialog");
		dialog.innerText = "Nowy dialog";
		dialog.addEventListener("click", (e) => {
			e.stopPropagation();
			currentDialog = dialog;
			selectDialog(dialog);
		});
		currentScene.appendChild(dialog);
	}

	function selectScene(scene) {
		const scenes = document.getElementsByClassName("scene");
		for (let i = 0; i < scenes.length; i++) {
			scenes[i].classList.remove("selected");
		}
		scene.classList.add("selected");
	}

	function selectDialog(dialog) {
		const dialogs = document.getElementsByClassName("dialog");
		for (let i = 0; i < dialogs.length; i++) {
			dialogs[i].classList.remove("selected");
		}
		dialog.classList.add("selected");

		document.getElementById("dialog-properties").style.display = "block";
		document.getElementById("dialog-text").value = dialog.innerText;
	}

	document.getElementById("scenes").addEventListener("click", addScene);
	document.getElementById("dialogues").addEventListener("click", addDialog);
	document.getElementById("update-dialog").addEventListener("click", () => {
		if (currentDialog) {
			currentDialog.innerText = document.getElementById("dialog-text").value;
		}
});

let currentScene = null;
let scenes = [];
let sceneCounter = 0;

function addScene() {
    const scene = document.createElement("div");
    scene.classList.add("scene");
    scene.innerText = "Nowa scena";
    scene.addEventListener("click", () => {
        currentScene = scene;
        selectScene(scene);
    });
    workspace.appendChild(scene);
}

function selectScene(scene) {
    const scenes = document.getElementsByClassName("scene");
    for (let i = 0; i < scenes.length; i++) {
        scenes[i].classList.remove("selected");
    }
    scene.classList.add("selected");

    document.getElementById("scene-properties").style.display = "block";
	document.getElementById("scene-name").value = sceneData.name;
}

document.getElementById("scenes").addEventListener("click", addScene);
document.getElementById("update-scene").addEventListener("click", () => {
    if (currentScene) {
        currentScene.setAttribute("data-name", document.getElementById("scene-name").value);
        // Tutaj dodamy obsługę zmiany tła sceny
    }
});

function updateScene() {
    if (currentScene) {
        const sceneNumber = parseInt(currentScene.getAttribute("data-number"));
        const sceneData = scenes.find((scene) => scene.number === sceneNumber);

        if (sceneData) {
            sceneData.name = document.getElementById("scene-name").value;
            currentScene.innerText = sceneData.name;
            // Tutaj dodamy obsługę zmiany tła sceny
        }
    }
}

document.getElementById("update-scene").addEventListener("click", updateScene);