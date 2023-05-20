$("document").ready(() => {
    // as soon as page loads change styling of current page menu item
    $("#btn1").css("background-color", "var(--gunmetal)");
    $("#btn1>a").css("color", "white");

    // change style and img src attribite
    $("#change-css-btn").click(() => {
        // click is deprecated, use on("click", function () {...} - see fadeToggle below
        // .on( events [, selector ] [, data ], handler )

        // add as object with key-value pairs.
        $(".demo-container").css({
            "background-color": "var(--teal",
            border: "8px dotted black"
        });

        // select multiple with comma
        $("ol>li:even, .demo-container>h2").css("font-style", "italic");
        $("ol>li:odd").css("font-weight", "bold");

        // note different approaches for applying styling to p
        $(".demo-container p:first").css("background-color", "yellow")
        $(".demo-container p").eq(1).attr("style", "background-color: aqua;")

        // replace value of src attribute of img
        $(".demo-container>img").attr("src", "img/demo-images/pexels-beyzaa-yurtkuran-16130228.jpg")

        // Render image in info container instead of text
        const image1 = $('<img src="img/code-images/01-css.png" alt="jQuery code" id="info1">');
        $("#info1").replaceWith((image1))
    })

    // fadeToggle
    $("#toggle-fade-btn").on("click", () => {
        // .on( "click" [, optional eventData ], handler )
        // eventData - An object containing data that will be passed to the event handler.

        $("p").fadeToggle()
        const lastLiItem = $("li").eq($("li").length - 1)   // just for illustration - can use "li:last"
        const secondLiItem = $("li:nth(5)")
        // can use ("li:eq(5)") - deprecated OR as above - const secondLiItem = $("li").eq(5)

        // Note that both fade methods run simultaneously
        lastLiItem.fadeToggle(4000)
        secondLiItem.fadeToggle(2000)

        const image2 = $('<img src="img/code-images/02-fadeToggle.png" alt="jQuery code" id="info1">');
        $("#info1").replaceWith((image2))
    })
}
)






