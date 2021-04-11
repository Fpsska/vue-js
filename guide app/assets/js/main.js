const h = Vue.h;

const app = Vue.createApp({

    data() {
        return {
            title: "Install new bios version on MB",
            textFirst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum asperiores praesentium tenetur temporibus illum undevoluptatum dolores ipsam ratione quos sit, tempora quo fugit, eum facere modi, distinctio sed odio.",
            textSecond: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum asperiores praesentium tenetur temporibus illum undevoluptatum dolores.",
            textThird: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum asperiores praesentium tenetur temporibus illum.",
            textForth: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum asperiores praesentium.",
            textFifth: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",

            stageFirst: "Download bios",
            stageSecond: "Formatting USB",
            stageThird: "Upload bios-file on USB",
            stageForth: "Reboot PC",
            stageFifth: "Select USB in bios",
        }
    },
    // ./data
    methods: {
        getActive() {
            let circleBtn = document.querySelectorAll(".stages__button");

            circleBtn.forEach(element => {
                element.addEventListener("click", function () {
                    element.classList.toggle("active");
                });
                if (element.classList.contains("active")) {
                    element.classList.toggle("active");
                } else {
                    element.classList.remove("active");
                }
            });

        },

    },
    // ./methods
    render() {
        return h("div", {
            class: "card center"
        }, [
            h("h1", {
                class: "card__title"
            }, this.title),
            h("p", {
                class: "card__descpt"
            }, this.textFirst),

            h("div", {
                class: "stages"
            }, [
                h("div", {
                    class: "stage__lvl stage__lvl_1"
                }, [
                    h("button", {
                        class: "btn stages__button",
                        onClick: this.getActive,
                    }),
                    h("h2", {
                        class: "stages__text"
                    }, this.stageFirst),
                ]),

                h("div", {
                    class: "stage__lvl stage__lvl_2"
                }, [
                    h("button", {
                        class: "btn stages__button"
                    }),
                    h("h2", {
                        class: "stages__text"
                    }, this.stageSecond),
                ]),

                h("div", {
                    class: "stage__lvl stage__lvl_3"
                }, [
                    h("button", {
                        class: "btn stages__button"
                    }),
                    h("h2", {
                        class: "stages__text"
                    }, this.stageThird),
                ]),

                h("div", {
                    class: "stage__lvl stage__lvl_4"
                }, [
                    h("button", {
                        class: "btn stages__button"
                    }),
                    h("h2", {
                        class: "stages__text"
                    }, this.stageForth),
                ]),

                h("div", {
                    class: "stage__lvl stage__lvl_5"
                }, [
                    h("button", {
                        class: "btn stages__button"
                    }),
                    h("h2", {
                        class: "stages__text"
                    }, this.stageFifth),
                ]),
            ]),
            // ./stages

            h("nav", {
                class: "buttons"
            }, [
                h("button", {
                    class: "btn danger",
                    onClick: this.getActive,
                }, "prev"),
                h("button", {
                    class: "btn primary"
                }, "next")
            ]),
            // ./nav
        ])
        // ./card
    }
    // ./render
});


app.mount("#app");
