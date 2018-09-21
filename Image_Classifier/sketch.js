let mobilenet;
let ant;

function setup() {
    createCanvas(640,480);
    ant = createImg("images/ant.jpg", () => {
        image(ant, 0, 0, width, height);
    });
    ant.hide();
    background(0);

    mobilenet = ml5.imageClassifier('MobileNet', () => {
        console.log("Model is ready");
        mobilenet.predict(ant, (err , results) => {
            let label = results[0].className;
            fill(0);
            textSize(64);
            text(label, 10, height - 100);
            createP(label);
        })
    });
}

function draw() {
}