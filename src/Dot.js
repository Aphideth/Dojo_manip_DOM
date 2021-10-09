export default class Dot {
  // Step 1 : analyze the code of the constructor
  constructor(containerElement, color, size) {
    this.color = color;
    this.size = size;
    this.containerElement = containerElement;

    this.element = document.createElement("div");
    this.element.style.position = "absolute";
    this.element.style.zIndex = 1000;
    this.element.style.cursor = "move";

    this.containerElement.appendChild(this.element);

    this.setSize(size);
    this.setColor(color);
    this.move(0, 0);
  }

  // Step 2 : Analyze the code of the move method
  move(x, y) {
    // Step 5 : Adapt the move() method so that the element never leaves the frame
    this.x = x;
    this.y = y;
    if (x + this.size > 400) {
      this.element.style.left = 400 - this.size + "px";
    } else {
      this.element.style.left = x + "px";
    }
    if (y + this.size > 300) {
      this.element.style.top = 300 - this.size + "px";
    } else {
      this.element.style.top = y + "px";
    }
  }

  setSize(size) {
    this.size = size;
    this.element.style.width = size + "px";
    this.element.style.height = size + "px";
  }

  setColor(color) {
    this.color = color;
    this.element.style.backgroundColor = color;
  }

  // Step 3: Complete the setRadius method.
  setRadius(radius) {
    if (radius < 0) {
      this.element.style.borderRadius = 0 + "%";
    } else if (radius > 50) {
      this.element.style.borderRadius = 50 + "%";
    } else {
      this.element.style.borderRadius = radius + "%";
    }
  }
}
