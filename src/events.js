$("document").ready(() => {
    // as soon as page loads change styling of current page menu item
    $("#btn1").css("background-color", "var(--gunmetal)");
    $("#btn1>a").css("color", "white");

    // change style and img src attribite
    $("#change-css-btn").click(() => {
        // click is deprecated, use on("click", function () {...} - see fadeToggle below
        // .on( events [, selector ] [, data ], handler )

        // add as object with key-value pairs.
        $("#demo1").css({
            "background-color": "var(--teal",
            border: "8px dotted black"
        });

        // select multiple with comma
        $("#demo1 ol>li:even, #demo1>h2").css("font-style", "italic");
        $("#demo1 ol>li:odd").css("font-weight", "bold");

        // note different approaches for applying styling to p
        $("#demo1 p:first").css("background-color", "yellow")
        $("#demo1 p").eq(1).attr("style", "background-color: aqua;")

        // replace value of src attribute of img
        $("#demo1 img").attr("src", "img/demo-images/pexels-beyzaa-yurtkuran-16130228.jpg")

        // Render image in info container instead of text
        const image1 = $('<img src="img/code-images/01-css.png" alt="jQuery code" id="info1">');
        $("#info1").replaceWith((image1))
    })

    // fadeToggle
    $("#toggle-fade-btn").on("click", () => {
        // .on( "click" [, optional eventData ], handler )
        // eventData - An object containing data that will be passed to the event handler.

        $("p").fadeToggle()
        const lastLiItem = $("#demo1 li").eq($("#demo1 li").length - 1)   // just for illustration - can use "li:last"
        const secondItem = $("#demo1 li:nth(1)")
        // can use ("li:eq(1)") - deprecated OR as above - const secondLiItem = $("li").eq(1)

        // Note that both fade methods run simultaneously
        lastLiItem.fadeToggle(4000)
        secondItem.fadeToggle(2000)

        const image2 = $('<img src="img/code-images/02-fadeToggle.png" alt="jQuery code" id="info1">');
        $("#info1").replaceWith((image2))
    })


    // dblclick-btn
    const image3 = $('<img src="img/code-images/03-dbl-mouse-down-up.png" alt="jQuery code" id="info2">');
    $("#dblclick-btn").on("dblclick", () => {
        const newCrap = ('<p style="background-color: red">Just some random crap!</p>')
        const para4 = $("div#demo2 p:contains('Paragraph 4')").eq(0)
        // in div get all p elements with text, then select only one ???? 
        console.log(para4, newCrap)
        para4.before(newCrap)
        $("#info2").replaceWith((image3))

    })

    // Attach multiple event handlers simultaneously using a plain object.
    $("#mousedownup-btn").on({
        mousedown: () => {
            $("div#demo2 li").css({
                "list-style-type": "lower-greek",
                color: "red",
                "font-weight": 800,
            });
            $("#mousedownup-btn").css("background-color", "black")
        },
        mouseup: () => {
            $("div#demo2").html("<h2>Ain't gonna reset that man, you just refresh</h2>")
            $("#info2").replaceWith((image3))
        }
    })


}
)






