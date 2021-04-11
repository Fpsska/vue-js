const cardApp = {
    data() {                    // метод для работы с даннымы Vue
        return {
            counter: 0,
            title: "Список покупок",
            placeholderText: "Введите наименование товара...",
            inputValue: "",
            notes: [],
        };
    },
    // /.DATA
    methods: {
        inputChangeHendler(event) {
            this.inputValue = event.target.value;
        },
        addNewNote() {          // добавление нового элемента в массив
            if (this.inputValue !== "") {
                this.notes.push(this.inputValue);
                this.inputValue = "";
            }
        },
        deleteNote(index) {
            this.notes.pop(this.inputValue);
            // this.notes.pop(index, 1);
            // this.notes.splice(index, 1);
        }
    },
    // /.METHODS
    watch: {
        inputValue(value) {
            if (value.length > 15) {
                this.inputValue = "";
            }
        }
    },
    // /.WATCH
}

Vue.createApp(cardApp).mount("#app");

const fullBtn = document.querySelector(".btn--fullscreen");

fullBtn.addEventListener("click", () => {
    activateFullscreen(document.documentElement);
    deactivateFullscreen(document.documentElement);
    fullBtn.classList.toggle("active");
});

fullBtn.addEventListener('keydown', (event) => {
    if (event.code === "Escape") {
        fullBtn.classList.remove("active");
    }
});

function activateFullscreen(element) {
    if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    }
    else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
    else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function deactivateFullscreen() {
    if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
// /.API FULLSCREEN