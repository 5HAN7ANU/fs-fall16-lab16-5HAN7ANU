document.addEventListener('DOMContentLoaded', function(){
    var buttonArray = document.getElementsByName('button');
    var shapeName = document.getElementById('shapeName');
    var shapeWidth = document.getElementById('shapeWidth');
    var shapeHeight = document.getElementById('shapeHeight');
    var shapeRadius = document.getElementById('shapeRadius');
    var shapeArea = document.getElementById('shapeArea');
    var shapePerimeter = document.getElementById('shapePerimeter');
    var canvas = document.getElementById('canvas');
    var rectangleWidthInput = document.getElementById('rectangle-width');
    var rectangleHeightInput = document.getElementById('rectangle-height');
    var squareLengthInput = document.getElementById('square-Length');
    var circleRadiusInput = document.getElementById('circle-radius');
    var triangleHeightInput = document.getElementById('triangle-height');

    var position = function(width, height){
        var x = Math.random() * (600 - width).toFixed();
        var y = Math.random() * (600 - height).toFixed();
        var divPosition = 'position: absolute; left: ' + x + 'px; top: ' + y + 'px';
        return divPosition;
    }

    var Shape = function(name){
        this.name = name;
    }

    Shape.prototype.draw = function(){
        this.div = document.createElement('div');
        canvas.appendChild(this.div);
        this.div.addEventListener('click', this.describe.bind(this));
        this.div.addEventListener('dblclick', this.remove.bind(this));
    }

     Shape.prototype.describe = function(){
        shapeName.innerHTML = 'Name: ' + this.name;
        shapeWidth.innerHTML = 'Width: ' + this.width;
        shapeHeight.innerHTML = 'Height: ' + this.height;
        shapeRadius.innerHTML = 'Radius: ' + this.radius;
        shapeArea.innerHTML = 'Area: ' + this.area;
        shapePerimeter.innerHTML = 'Perimeter: ' + this.perimeter;
    }

    Shape.prototype.remove = function(){
        document.getElementById('canvas').removeChild(this.div);
        shapeName.innerHTML = '';
        shapeWidth.innerHTML = '';
        shapeHeight.innerHTML = '';
        shapeRadius.innerHTML = '';
        shapeArea.innerHTML = '';
        shapePerimeter.innerHTML = '';
    }

    var Rectangle = function(width, height){
        Shape.call(this, Rectangle);
        this.name = 'Rectangle';
        this.width = width;
        this.height = height;
        this.radius = 'N/A';
        this.area = width * height;
        this.perimeter = 2 * (Number(width) + Number(height));
        this.draw();
        this.div.id = 'rectangle'
        this.div.setAttribute('style', 'width: ' + width + 'px; height: ' + height + 'px; ' + position(width, height));
    }

    Rectangle.prototype = Object.create(Shape.prototype);
    Rectangle.prototype.constructor = Rectangle;

    //rectangle button
    buttonArray[0].addEventListener('click', function(){
        console.log('rectangle button clicked!');
        var rectangleWidth = rectangleWidthInput.value;
        var rectangleHeight = rectangleHeightInput.value;
        var newRectangle = new Rectangle(rectangleWidth, rectangleHeight);
        newRectangle.describe();
        rectangleWidthInput.value = '';
        rectangleHeightInput.value = '';
    });

    var Square = function(sideLength){
        Rectangle.call(this, Square);
        this.name = 'Square';
        this.width = sideLength;
        this.height = sideLength;
        this.radius = 'N/A';
        this.area = sideLength * sideLength;
        this.perimeter = sideLength * 4;
        this.draw();
        this.div.id = 'square';
        this.div.setAttribute('style', 'width: ' + sideLength + 'px; height: ' + sideLength + 'px; ' + position(sideLength, sideLength));
    }

    Square.prototype = Object.create(Rectangle.prototype);
    Square.prototype.constructor = Square;

    //square button
    buttonArray[1].addEventListener('click', function(){
        console.log('square button clicked!');
        var squareLength = squareLengthInput.value;
        var newSquare = new Square(squareLength);
        newSquare.describe();
        squareLengthInput.value = '';
    });

    var Circle = function(radius){
        Shape.call(this, Circle);
        this.name = 'Circle';
        this.width = 'N/A';
        this.height = 'N/A';
        this.radius = radius;
        this.area = Math.PI * radius * radius;
        this.perimeter = 2 * Math.PI * radius;
        this.draw();
        this.div.id = 'circle';
        this.div.setAttribute('style', 'width: ' + radius * 2 + 'px; height: ' + radius * 2 + 'px; ' + position((radius * 2), (radius * 2)));
    }

    Circle.prototype = Object.create(Shape.prototype);
    Circle.prototype.constructor = Circle;

    //circle button
    buttonArray[2].addEventListener('click', function(){
        console.log('circle button clicked!');
        var circleRadius = circleRadiusInput.value;
        var newCircle = new Circle(circleRadius);
        newCircle.describe();
        circleRadiusInput.value = '';
    });

    var Triangle = function(height){
        Rectangle.call(this, Triangle);
        this.name = 'Triangle';
        this.width = height;
        this.height = height;
        this.radius = 'N/A';
        this.area = (0.5 * height * height) / 2;
        this.perimeter = 2 * height * Math.sqrt(2 * height * height);
        this.draw();
        this.div.id = 'triangle';
        this.div.setAttribute('style', 'border-bottom: ' + height + 'px solid yellow; border-right: ' + height + 'px solid transparent; ' + position(height, height));
    }

    Triangle.prototype = Object.create(Rectangle.prototype);
    Triangle.prototype.constructor = Triangle;

    //triangle button
    buttonArray[3].addEventListener('click', function(){
        console.log('triangle button clicked!');
        var triangleHeight = triangleHeightInput.value;
        var newTriangle = new Triangle(triangleHeight);
        newTriangle.describe();
        triangleHeightInput.value = '';
    });
});