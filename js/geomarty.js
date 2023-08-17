
//  input Function 

function inputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputValueConvert = inputValue.value;
    const valueConvert = parseFloat(inputValueConvert);
    return valueConvert;
}

//  display Function 

function valueDisplay(displayId, value) {
    document.getElementById(displayId).innerText = value;
}





function triangleCalculate() {
    const base = inputValue("base-input");
    const hight = inputValue("hight-input");
    const Triangle = 0.5 * base * hight;
    valueDisplay("triangle-display", Triangle);

}


function rectangleCalculate() {
    const w = inputValue("w-input");
    const i = inputValue("i-input");
    const rectangle = w * i;
    valueDisplay("rectangle-display", rectangle);
}

function parallelogramCalculate() {
    const base = inputValue("base-p-input");
    const hight = inputValue("hight-p-input");
    const parallelogram = base * hight;
    valueDisplay("parallelogram-display", parallelogram);
}


function RhombusCalculate() {
    const d = inputValue("d-input");
    const input = inputValue("d-inputValue");
    const Rhombus = 0.5 * d * input;
    valueDisplay("rhombus", Rhombus);
}

function PentagonCalculate() {
    const p = inputValue("p-input");
    const b = inputValue("b-input");
    const Pentagon = 0.5 * p * b;
    valueDisplay("Pentagon", Pentagon);
}

function EllipseCalculate() {
    const a = inputValue("a-input");
    const ab = inputValue("ab-input");
    const Ellipse = 3.14 * a * ab;
    const value = Ellipse.toFixed(2);
    valueDisplay("Ellipse", value);
}

