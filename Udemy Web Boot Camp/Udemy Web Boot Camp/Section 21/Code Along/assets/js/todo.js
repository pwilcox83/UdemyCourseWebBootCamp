var keyData = {
    a:{
    color:"purple",
    sound = new Howl({src: ["assets/sounds/bubbles.mp3"]})
    },
    s:{
    color:"green",
    sound = new Howl({src: ["assets/sounds/clay.mp3"]})
    },
    s:{
    color:"yellow",
    sound = new Howl({src: ["assets/sounds/confetti.mp3"]})
    }};
    var circles = [];

    function onKeyDown(event){
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 500);
        newCircle.fillColor =  keyData[event.key].color;
        //keyData[event.key].sound.play();

        else{
            newCircle.fillColor = "orange";
        }

        circles.push(newCircle);
    }