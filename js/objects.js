class Shape {
/*
- shape : string
- color : string
- diameter : number
- HTML tag
- x : number
- y : number
- visible: boolean
- parentDiv
*/
    /*detailed constructor:*/
    constructor(diameter, color, shape, x, y, parentDiv) {
        this.diameter = diameter;
        this.color = color;
        this.shape = shape;
        this.x = x;
        this.y = y;
        this.parentDiv = parentDiv;
        this.tag = document.createElementNS(parentDiv, shape);
        if (shape == "circle") {
            this.tag.setAttributeNS(null, 'cx', x);
            this.tag.setAttributeNS(null, 'cy', y);
            this.tag.setAttributeNS(null, 'r', diameter/2);
            this.tag.setAttribute('class', 'black');
        }
        parentDiv.appendChild(this.tag);
        console.log("here!")
        console.log(this.tag);
    }

    update() {

    }
}

class Collection {
/*
- array
- number
- width
- height
*/
    /*empty constructor*/

    /*detailed constructor:*/
    constructor (width, height, shape, color, x, y) {

    }

    update() {

    }
}