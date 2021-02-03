//implement centerX and centerY in code
function countingFit(svg, width, height, centerX, centerY, number, shapeList, shapeDetails) {
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

    //NOTE: SIZE NEEDS TO BE MULTIPLIED BY 2. FIX CODE LATER DOWN TO PREVENT THIS.
    function dot(x, y, size) {
        shapeList[dotCount].transition()
            .ease(d3.easeLinear)
            .duration(1000)
            .attr("transform",  "translate(" + x + "," + y + ") scale(" + 2*size + ")");
        dotCount += 1;
    }

    function spacing(width,height,m,n) {
        var dotRad, spacingX, spacingY;
        dotRad = 0.5*0.95*min(width/n,height/n);
        m == 1 ? spacingX = 0 : spacingX = (width-2*dotRad)/(m-1);
        n == 1 ? spacingY = 0 : spacingY = (height-2*dotRad)/(n-1);
        return [dotRad, spacingX, spacingY];
    }

    function plot(x,y,width,height,m,n,mf,nf,col,i) {
        // console.log("plotting...");
        // console.log("i: " + i + "\tx: " + x + "\ty: " + y + "\twidth: " + width + "\theight: " + height + "\tm: " + m + "\tn: " + n + "\tmf: " + mf + "\tnf: " + nf + "\tcol: " + col) 
        var dotRad, spacingX, spacingY, x0, y0;
        dotRad = 0.5*0.95*Math.min(width/mf,height/nf);
        mf == 1 ? spacingX = 0 : spacingX = (width-2*dotRad)/(mf-1);
        nf == 1 ? spacingY = 0 : spacingY = (height-2*dotRad)/(nf-1);
        //may need to change below to make n = 1 or m = 1 look good
        mf == 1 ? x0 = width/2  : x0 = (x-width/2)+dotRad;
        nf == 1 ? y0 = height/2 : y0 = (y-height/2)+dotRad;
        if (col) {
            //(m-1, (i-1)%n) location
            dot(
                x0+(m-1)*spacingX,
                y0+((i-1)%n)*spacingY,
                dotRad
            );
        }
        else {
            //((i-1)%m,n-1) location
            dot(
                x0+((i-1)%m)*spacingX,
                y0+(n-1)*spacingY,
                dotRad
            );
        }
    }

    function getFinal(x,y,width,height) {
        var m = 1; var n = 1; var col = true;
        var i;
        for (i = 2; i <= number; i++) {
            if (m*n < i) {
                if (Math.min(width/(m+1),height/n) >= Math.min(width/m,height/(n+1))) { m = m+1; }
                else { n = n+1; }
            }
        }
        return [m, n];
    }

    //(x,y): center of square. SIZE: side-length
    function draw(x, y, width, height) {
        var finalMN = getFinal(x,y,width,height)
        var m = 1; var n = 1; var col = true;
        var i;
        plot(x,y,width,height,m,n,finalMN[0],finalMN[1],col,1)
        for (i = 2; i <= number; i++) {
            if (m*n < i) {
                if (Math.min(width/(m+1),height/n) >= Math.min(width/m,height/(n+1))) {
                    m = m+1;
                    col = true;
                }
                else {
                    n = n+1;
                    col = false;
                }
            }
            plot(x,y,width,height,m,n,finalMN[0],finalMN[1],col,i)
        }
    }

    draw(width/2, height/2, width, height);
}