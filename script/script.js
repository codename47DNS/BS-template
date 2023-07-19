// Dynamic Navbar Toggler
$(document).ready(function() {
    $("#nav-icon").click(function() {
        $("#mobile-menu").collapse("toggle");
    });
});

// Typing Animation
$(document).ready(function() {
    var string = "BE STYLISH";
    var i = 0;

    if(i < string.length) {
        var a = setInterval(function() {
            document.querySelector(".add-header").innerHTML += string.charAt(i);
            i++;

            if(i == string.length) {
                clearInterval(a);
            }
        },200);
    }
});

// Search Box Collapse
$(document).ready(function() {
    $("#search-icon").click(function() {
        $("#search-box").collapse("toggle");
    });

    $("#search-box").on("show.bs.collapse",function() {
        $("#header-slider h1").animate({"margin-top":"50px"})
    })

    $("#search-box").on("hide.bs.collapse",function() {
        $("#header-slider h1").animate({"margin-top":"0px"})
    })
}); 

// Client Slider
$(document).ready(function() {
    $("#next-client").click(function() {
        $("#client-slider").carousel("next");
    });

    $("#prev-client").click(function() {
        $("#client-slider").carousel("prev");
    });
});


// Count Animation

$(window).scroll(function() {
    if(sessionStorage.getItem("user_scroll") == null) {
        if($("#people-say").attr("class") == "col-md-6 px-5 wow animated") {
            sessionStorage.setItem("user_scroll","active");
            animation();
        }
    }
})

function animation() {
    $(document).ready(function() {
        var num = 0;

        var repeat = setInterval(function() {
            num += 1;
            $("#num-1").html(num+"+");

            if(num == 500) {
                clearInterval(repeat);
            }
        },7)
    });

    $(document).ready(function() {
        var num = 0;

        var repeat = setInterval(function() {
            num += 1;
            $("#num-2").html(num+"+");

            if(num == 700) {
                clearInterval(repeat);
            }
        },5)
    });

    $(document).ready(function() {
        var num = 0;

        var repeat = setInterval(function() {
            num += 1;
            $("#num-3").html(num+"+");

            if(num == 450) {
                clearInterval(repeat);
            }
        },6.5)
    });

    $(document).ready(function() {
        var num = 0;

        var repeat = setInterval(function() {
            num += 1;
            $("#num-4").html(num+"+");

            if(num == 100) {
                clearInterval(repeat);
            }
        },10)
    });
}