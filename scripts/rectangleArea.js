function calculateRectangleArea() {
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthValue = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthValue);
    
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthValue = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthValue);

    const area = length * width;

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}