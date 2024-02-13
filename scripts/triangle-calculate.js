function calculateTriangleArea() {
    //get triangle base value:

    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    //get triangle height value:

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)

    // calculation

    const area = 0.5 * base * height;
    // console.log(area);

    // display triangle area:
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

}