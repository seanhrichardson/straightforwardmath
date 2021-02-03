//will provide a 1x1 shape centered at (0,0)

function shapeFunction(shape,color) {
    if (shape == "circle") {
        return circleColor(color);
    }
    else if (shape == "triangle") {
        return triangleColor(color);
    }
    else if (shape == "square") {
        return squareColor(color);
    }
    else if (shape == "diamond") {
        return diamondColor(color);
    }
    else if (shape == "star") {
        return starColor(color);
    }
    else {
        throw "the requested shape is not available";
    }
}

function circleColor(color) {
    function circleWithColor(svg, shapeList){
        var circle = svg.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 0.5)
            .attr("fill",color);
        shapeList.push(circle);
    }
    return circleWithColor;
}

function triangleColor(color) {
    function triangleWithColor(svg, shapeList) {
        var triangle = svg.append("polygon")
            .attr("points", "-0.5,0.5 0.5,0.5, 0,-0.5")
            .attr("style","fill:"+color);
        shapeList.push(triangle);
    }
    return triangleWithColor;
}

function squareColor(color) {
    function squareWithColor(svg, shapeList) {
        var square = svg.append("polygon")
            .attr("points", "-0.5,0.5 0.5,0.5, 0.5,-0.5 -0.5,-0.5") 
            .attr("style","fill:"+color);
        shapeList.push(square);
    }
    return squareWithColor;
}

function diamondColor(color) {
    function diamondWithColor(svg, shapeList) {
        var diamond = svg.append("polygon")
            .attr("points", "0,-0.5 -0.5,0 0,0.5 0.5,0")
            .attr("style","fill:"+color);
        shapeList.push(diamond);
    }
    return diamondWithColor
}

function starColor(color) {
    function starWithColor(svg, shapeList) {
        var star = svg.append("polygon")
        .attr("points", "0.0,-0.5 0.14694631307311828,-0.20225424859373686 0.47552825814757677,-0.15450849718747373 0.2377641290737884,0.07725424859373684 0.2938926261462366,0.40450849718747367 3.061616997868383e-17,0.25 -0.2938926261462365,0.4045084971874738 -0.23776412907378838,0.07725424859373689 -0.4755282581475768,-0.15450849718747361 -0.14694631307311834,-0.20225424859373684")
        .attr("style","fill:"+color);
        shapeList.push(star);
    }
    return starWithColor;
}

function circle(svg, shapeList) {
    var circle = svg.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 0.5)
        .attr("fill","black");
    shapeList.push(circle);
}


function triangle(svg, shapeList) {
    var triangle = svg.append("polygon")
        .attr("points", "-0.5,0.5 0.5,0.5, 0,-0.5");
    shapeList.push(triangle);
}

function square(svg, shapeList) {
    var square = svg.append("polygon")
        .attr("points", "-0.5,0.5 0.5,0.5, 0.5,-0.5 -0.5,-0.5");
    shapeList.push(square);
}

function diamond(svg,shapeList) {
    var diamond = svg.append("polygon")
        .attr("points", "0,-0.5 -0.5,0 0,0.5 0.5,0");
    shapeList.push(diamond);
}

function star(svg,shapeList) {
    var star = svg.append("polygon")
        .attr("points", "0.0,-0.5 0.14694631307311828,-0.20225424859373686 0.47552825814757677,-0.15450849718747373 0.2377641290737884,0.07725424859373684 0.2938926261462366,0.40450849718747367 3.061616997868383e-17,0.25 -0.2938926261462365,0.4045084971874738 -0.23776412907378838,0.07725424859373689 -0.4755282581475768,-0.15450849718747361 -0.14694631307311834,-0.20225424859373684");
    shapeList.push(star);
}