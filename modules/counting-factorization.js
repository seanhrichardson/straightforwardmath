function countingFactorization(svg, width, height, centerX, centerY, number, shapeList, shapeDetails) {
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

    var list = primeFactorList(number);

    function dot(x, y, size) {
        shapeList[dotCount].transition()
            .ease(d3.easeLinear)
            .duration(1000)
            .attr("transform",  "translate(" + x + "," + y + ") scale(" + 2*size + ")");
        dotCount += 1;
    }
        
    function polygon(n, depth, size, x, y, f) {
        var step = 2 * Math.PI / n;
        var init = n === 2 ? Math.PI
                 : n === 4 ? Math.PI / 4
                           : 3 * Math.PI / 2;
        var dot_radius = (2 * size) / (n + 2);
        var radius = (n * size) / (n + 2);
        var delta_y = n % 2 === 0 ? 0 
                    : (radius / 2) * (1 - Math.cos(Math.PI / n));
        
        for (var i = 0; i < n; ++i) {
            f(
                x + Math.cos(init + step * i) * radius,
                y + Math.sin(init + step * i) * radius + delta_y,
                dot_radius
            );
        }
    }
    
    function draw(x, y, size, depth) {
        if (depth < 0) {
            dot(x, y, 0.75 * size);
        } else {
            polygon(list[depth], depth, size, x, y, function (x, y, size) {
                draw(x, y, size, depth - 1);            
            });
        }
    }
    draw(centerX, centerY, Math.min(width,height) / 2, list.length - 1);
}

// http://nayuki.eigenstate.org/res/calculate-prime-factorization-javascript.js

function primeFactorList(n) {
    if (n < 1)
        throw "Argument error";
    
    var result = [];
    while (n != 1) {
        var factor = smallestFactor(n);
        result.push(factor);
        n /= factor;
    }
    return result;
}

function smallestFactor(n) {
    if (n < 2)
        throw "Argument error";
    if (n % 4 == 0)
        return 4; // vjeux hack
    if (n % 2 == 0)
        return 2;
    var end = Math.floor(Math.sqrt(n));
    for (var i = 3; i <= end; i += 2) {
        if (n % i == 0)
            return i;
    }
    return n;
}