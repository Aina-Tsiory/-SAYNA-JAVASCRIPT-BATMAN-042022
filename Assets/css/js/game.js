$("window").ready(function() {
    $(".boutons a").hover(function() {
        $(this).css("font-weight", "bold");
        $(this).css("text-decoration", "underline");
        $(this).css("color", "white");
    }, function() {
        $(this).css("font-weight", "lighter");
        $(this).css("text-decoration", "none");
        $(this).css("color", "white");
    });

    $("#demarrer a").hover(function() {
        $(this).css("font-weight", "bold");
        $(this).css("color", "white");
    }, function() {
        $(this).css("font-weight", "lighter");
        $(this).css("color", "white");
    });

    $("#demarrer p").hover(function() {
        $(this).css("background", "rgb(193,2,19)");
        $(this).css("background", "linear-gradient(90deg, rgba(193,2,19,1) 1%, rgba(73,41,41,1) 51%, rgba(75,74,75,1) 100%)");
    }, function() {
        $(this).css("background", "rgb(75, 74, 75)");
        $(this).css("background", "linear-gradient(90deg, rgba(75, 74, 75, 1) 0%, rgba(73, 41, 41, 1) 50%, rgba(193, 2, 19, 1) 100%)");
    });

    $(".logo").hover(function() {
        $(this).css("border", "solid 2px yellow");
    }, function() {
        $(this).css("border", "none");
    })


});


let totalImage = [
    "../assets/Illustrations/Home/Batslider1.png",
    "../assets/Illustrations/Home/Batslider2.png",
    "../assets/Illustrations/Home/Batslider3.png",
    "../assets/Illustrations/Home/Batslider4.png",
    "../assets/Illustrations/Home/Batslider5.png",
    "../assets/Illustrations/Home/Batslider6.png",
    "../assets/Illustrations/Home/Batslider7.png",
    "../assets/Illustrations/Home/Batslider8.png",
    "../assets/Illustrations/Home/Batslider9.png",
    "../assets/Illustrations/Home/Batslider10.png"
]

let image = $(".contenue-image");

let i = 0;
setInterval(function() {
    i = (i + 1) % totalImage.lenght;
    $(document).ready(function() {
        image.fadeOut(3000, () => {
            image.attr("src", totalImage[i]);
            image.fadeIn(3000);
        });
    }, 1000);
})

let totalVideo = [
    "../assets/Illustrations/Home/Batslider1.png",
    "../assets/Illustrations/Home/Batslider2.png",
    "../assets/Illustrations/Home/Batslider3.png",
    "../assets/Illustrations/Home/Batslider4.png",
    "../assets/Illustrations/Home/Batslider5.png",
    "../assets/Illustrations/Home/Batslider6.png",
    "../assets/Illustrations/Home/Batslider7.png",
    "../assets/Illustrations/Home/Batslider8.png",
    "../assets/Illustrations/Home/Batslider9.png",
    "../assets/Illustrations/Home/Batslider10.png"
]

let video = $(".contenue-video");