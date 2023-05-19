$("document").ready(() => {
    // as soon as page loads change styling of selected menu item
    $("#btn1").css("background-color", "var(--cerise)");
    $("#btn1>a").css("color", "var(--eerie-black)");

    // change style and img src
    $("#change-css-btn").click(() => {
        $("#canvas--events").css({
            "background-color": "var(--celestial-blue",
            border: "8px dotted var(--cerise)"
        });
        $("li:even, h2").css("font-style", "italic");
        $("li:odd").css("font-weight", "bold");
        $("p").css("background-color", "white")
        $("img").attr("src", "img/pexels-beyzaa-yurtkuran-16130228.jpg")
    })

    // fadeToggle
    $("#toggle-fade-btn").click(() => {
        $("p").fadeToggle()

    })



}
)






