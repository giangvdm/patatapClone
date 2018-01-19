var keyData = {
    a: {
        sound: new Howl({
            src: ['assets/sounds/confetti.mp3']
        }),
        color: "rgb(79, 165, 225)"
    },
    b: {
        sound: new Howl({
            src: ['assets/sounds/bubbles.mp3']
        }),
        color: "rgb(235, 11, 212)"
    },
    c: {
        sound: new Howl({
            src: ['assets/sounds/clay.mp3']
        }),
        color: "rgb(32, 129, 107)"
    },
    d: {
        sound: new Howl({
            src: ['assets/sounds/dotted-spiral.mp3']
        }),
        color: "rgb(64, 212, 100)"
    },
    e: {
        sound: new Howl({
            src: ['assets/sounds/flash-3.mp3']
        }),
        color: "rgb(150, 101, 4)"
    },
    f: {
        sound: new Howl({
            src: ["assets/sounds/flash-1.mp3"]
        }),
        color: "rgb(30, 135, 121)"
    },
    g: {
        sound: new Howl({
            src: ["assets/sounds/glimmer.mp3"]
        }),
        color: "rgb(162, 90, 14)"
    },
    h: {
        sound: new Howl({
            src: ["assets/sounds/flash-2.mp3"]
        }),
        color: "rgb(18, 36, 103)"
    },
    i: {
        sound: new Howl({
            src: ["assets/sounds/piston-2.mp3"]
        }),
        color: "rgb(205, 74, 187)"
    },
    j: {
        sound: new Howl({
            src: ["assets/sounds/piston-3.mp3"]
        }),
        color: "rgb(224, 92, 123)"
    },
    k: {
        sound: new Howl({
            src: ["assets/sounds/prism-1.mp3"]
        }),
        color: "rgb(55, 49, 29)"
    },
    l: {
        sound: new Howl({
            src: ["assets/sounds/prism-3.mp3"]
        }),
        color: "rgb(67, 38, 230)"
    },
    m: {
        sound: new Howl({
            src: ["assets/sounds/moon.mp3"]
        }),
        color: "rgb(229, 192, 218)"
    },
    o: {
        sound: new Howl({
            src: ["assets/sounds/prism-2.mp3"]
        }),
        color: "rgb(226, 51, 96)"
    },
    p: {
        sound: new Howl({
            src: ["assets/sounds/pinwheel.mp3"]
        }),
        color: "rgb(166, 231, 129)"
    },
    q: {
        sound: new Howl({
            src: ["assets/sounds/piston-1.mp3"]
        }),
        color: "rgb(136, 226, 174)"
    },
    r: {
        sound: new Howl({
            src: ["assets/sounds/strike.mp3"]
        }),
        color: "rgb(231, 155, 0)"
    },
    s: {
        sound: new Howl({
            src: ["assets/sounds/splits.mp3"]
        }),
        color: "rgb(106, 144, 35)"
    },
    t: {
        sound: new Howl({
            src: ["assets/sounds/timer.mp3"]
        }),
        color: "rgb(76, 223, 60)"
    },
    u: {
        sound: new Howl({
            src: ["assets/sounds/ufo.mp3"]
        }),
        color: "rgb(105, 115, 82)"
    },
    v: {
        sound: new Howl({
            src: ["assets/sounds/veil.mp3"]
        }),
        color: "rgb(210, 242, 248)"
    },
    w: {
        sound: new Howl({
            src: ["assets/sounds/wipe.mp3"]
        }),
        color: "rgb(177, 172, 11)"
    },
    x: {
        sound: new Howl({
            src: ["assets/sounds/suspension.mp3"]
        }),
        color: "rgb(205, 227, 180)"
    },
    y: {
        sound: new Howl({
            src: ["assets/sounds/squiggle.mp3"]
        }),
        color: "rgb(177, 210, 4)"
    },
    z: {
        sound: new Howl({
            src: ["assets/sounds/zig-zag.mp3"]
        }),
        color: "rgb(168, 178, 92)"
    }
};

var circles = [];

function onKeyDown(event) {
    if (keyData[event.key]) {
        var randomPoint = new Point(view.size.width, view.size.height) * Point.random();
        var newCircle = new Path.Circle(randomPoint, 360);
        newCircle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();
        circles.push(newCircle);
    }
}

function onFrame(event) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(0.9);
        if (circles[i].area < 1) {
            circles[i].remove();
            circles.splice(i, 1);
            i--;
        }
    }
}