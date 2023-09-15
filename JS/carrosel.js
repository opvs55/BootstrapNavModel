var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".carousel-item").width();
var scrollPosition = 0;
var isAnimating = false;


// Adicione suporte para navegação de teclado
$(document).on("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        $(".carousel-control-prev").trigger("click");
    } else if (e.key === "ArrowRight") {
        $(".carousel-control-next").trigger("click");
    }
});


$(".carousel-control-next").on("click", function () {
    if (!isAnimating && scrollPosition < (carouselWidth - (cardWidth * 4))) {
        isAnimating = true;
        scrollPosition += cardWidth;
        $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600, function () {
            isAnimating = false;
        });
    }
});

$(".carousel-control-prev").on("click", function () {
    if (!isAnimating && scrollPosition > 0) {
        isAnimating = true;
        scrollPosition -= cardWidth;
        $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600, function () {
            isAnimating = false;
        });
    }
});
