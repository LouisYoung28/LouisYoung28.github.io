$(document).ready(function () {
    var span= $("<span></span>");
        span.attr("id", "span");
    var br = $("<br>");
    var div1 = $("<div id='clickme'>In: </div>");
            div1.attr("id", "div1");
    var div2 = $("<div>Out: </div>");
            div2.attr("id", "div2");
    var div3 = $("<div>Move </div>"); ///create span for x and span for y
            div3.attr("id", "div3");
            var xcoor = $("<span>X:  </span>");
                  xcoor.attr("span", "xcoor");
                  var ycoor = $("<span>Y: </span>");
                  ycoor.attr("span", "ycoor");

    var twitlogo = $('<img src="twitterlogo.png" width="100px" height="100px" />');
        twitlogo.attr("img", "twitlogo");
    var fblogo = $('<img src="facebook.png" width="100px" height="100px" />');
        fblogo.attr("img", "fblogo");
    var rdlogo = $('<img src="reddit.png" width="100px" height="100px" />');
        rdlogo.attr("img", "rdlogo");
    var lklogo = $('<img src="linkedin.png" width="100px" height="100px" />');
        lklogo.attr("img", "lklogo");
    var iglogo = $('<img src="instagram.png" width="100px" height="100px"/>');
        iglogo.attr("img", "iglogo");

    $("body").append(span, br, div1, div2, div3);
    span.append(twitlogo, fblogo, rdlogo, lklogo, iglogo); //add the images to the span
    div3.append(xcoor,ycoor) //add the X,Y coordinates to span 3
    imageOperations(twitlogo,"Twitter");
    imageOperations(fblogo, "Facebook");
    imageOperations(rdlogo, "Reddit");
    imageOperations(lklogo, "LinkedIn");
    imageOperations(iglogo, "Instagram");
    findXYposition(span, xcoor, ycoor);


function imageOperations(image, imgTitle) {
    image.on({
        mouseover: function () {
            div1.text("In: " + imgTitle);
            image.css('opacity', '0.5');
        },
        mouseleave: function () {
            div2.text("Out: " + imgTitle);
            image.css('opacity', '1.0');
        },
        dblclick: function () {
            if (imgTitle == "Twitter"){
                window.open('https://twitter.com/');
            } else if (imgTitle == "Facebook"){
                window.open('https://www.facebook.com/');
            } else if(imgTitle=="Reddit"){
                window.open('https://reddit.com/');
            } else if (imgTitle=="LinkedIn"){
                window.open('https://linkedin.com/');
            } else if(imgTitle=="Instagram"){
                window.open('https://instagram.com/')
            }
        },
        mousedown: function () {
            image.height(200).width(200);
        },
        mouseup: function () {
            image.height(100).width(100);
        }
    });
}
function findXYposition(span, xcoor, ycoor) {
    span.on({
        mousemove: function (event) {
            xcoor.text("X: " + event.pageX);
            ycoor.text(" Y: " + event.pageY);
        }
    });
}
})


