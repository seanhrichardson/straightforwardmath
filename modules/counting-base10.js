//TODO: implement centerX and centerY
function countingBase10(svg, width, height, centerX, centerY, number, shapeList, shapeDetails) {
    calls = 0;
    //normalize shapeList:
    if (number < shapeList.length) {
        var i;
        for (i = number; i < shapeList.length; i++) {
            shapeList[i].remove();
        }
        shapeList.splice(number);
    }
    else if (number > shapeList.length) {
        for (i = shapeList.length; i < number; i++) {
            shapeDetails(svg, shapeList);
            shapeList[i].attr("transform",  "translate(" + centerX + "," + centerY + ") scale(0)");
        }
    }
    else {}

    var dotCount = 0;

    function dot(x, y, size) {
        shapeList[dotCount].transition()
            .ease(d3.easeLinear)
            .duration(1000)
            .attr("transform",  "translate(" + x + "," + y + ") scale(" + 2*size + ")");
        dotCount += 1;
    }
    
    //(x,y): center of square. SIZE: side-length
    function draw(x, y, width, height, number, exp) {
        var i,j;
        var vert, horiz;
        exp%2 == 0 ? horiz = 2 : horiz = 5;
        exp%2 == 0 ? vert = 5 : vert = 2;
        var spacingX = width/horiz;
        var spacingY = height/vert;
        var x0 = (x-width/2)+0.5*spacingX;
        var y0 = (y-height/2)+0.5*spacingY;
        //var exp = Math.floor(Math.log(number)/Math.log(10));
        if (exp == 0) {
            var dotRad = 0.8*0.5*Math.min(spacingX, spacingY);
            for (i = 0; i < number; i++) {
                calls++;
                dot(
                    x0+(i%2)*spacingX,
                    y0+Math.floor(i/2)*spacingY,
                    dotRad
                );
            }
        }
        else {
            for (i = 0; i < Math.floor(number/10**(exp)); i++) {
                draw(
                    x0+(i%horiz)*spacingX,
                    y0+Math.floor(i/horiz)*spacingY,
                    0.8*spacingX,
                    0.8*spacingY,
                    10**exp,
                    exp-1
                );
            }        
        }
        
    }

    divs = Math.floor(Math.log(number+0.5)/Math.log(10))+1;

    for (i = divs-1; i >= 0; i--) {
        draw((divs-i-0.5)*width/divs, height/2, 0.8*width/divs, 0.8*height, number%(10**(i+1)), i);
    }

    //draw(SIZE / 2, SIZE / 2, SIZE, SIZE, num, Math.floor(Math.log(number)/Math.log(10)));
}