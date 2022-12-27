export default  class  Rectangle {
            constructor(hight, width) {
                this.hight = hight;
                this.width = width;
            }
            

            calcArea() {
                return this.hight * this.width;
            }
        }
        var square = new Rectangle(10, 10);

        // console.log("the area of Reactangle is " + square.calcArea());