var story = {
    1: {
        sentence: "> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas in, eius molestias consequuntur sint odio obcaecati deserunt enim doloribus numquam cumque optio culpa alias, quo nobis est aut id. Neque?",
        options: {
            1: [ "Take the mouse.", 2],
            2: [ "Take the phone.", 3]
        },
        image: "https://www.pixilart.com/images/art/613a60ec0bf1df1.png"
    },
    2: {
        sentence: "> You took the mouse!",
        image: "https://ih0.redbubble.net/image.296727149.2403/flat,1000x1000,075,f.jpg"
    },
    3: {
        sentence: "> You took the phone!",
        image: "http://www.pngmart.com/files/1/Phone-PNG-File.png"
    }
}

var letter = 0;
var currentScene = 1;

window.onload = function () {
    animation();
}

if (story[currentScene].hasOwnProperty("image")) {
    var game = document.getElementById("game");
    image = story[currentScene]["image"];
    game.innerHTML = '<img src="' +  image + '" class="img" alt="img">';
}

function animation() {
    if (story[currentScene]["sentence"].length > letter) {
        var split = story[currentScene]["sentence"].split("");
        var p = document.getElementById("text");
        p.innerHTML += split[letter];
        letter++;

        if (letter == story[currentScene]["sentence"].length) {
            if (story[currentScene]["options"] != undefined) {
                var howManyOptions = Object.keys(story[currentScene]["options"]).length;
                for (var i = 1; i <= howManyOptions; i++) {
                    addButton(story[currentScene]["options"][i][1], story[currentScene]["options"][i][0]);
                }
            }
        } else {
            clearButtons();
        }
        requestAnimationFrame(animation);
    }
}

function next(value) {
    currentScene = value;
    if (story[currentScene].hasOwnProperty("image")) {
        var game = document.getElementById("game");
        image = story[currentScene]["image"];
        game.innerHTML = '<img src="' +  image + '" class="img" alt="img">';
    }

    letter = 0;
    document.getElementById("text").innerHTML = "";
    animation();
}

function addButton(value, value2) {
    var buttons = document.getElementById("buttons");
    buttons.innerHTML += '<button onclick="next(' + value + ')" id="button" class="button">' + value2 + '</button>';
}

function clearButtons() {
    var buttons = document.getElementById("buttons");
    buttons.innerHTML = '';
}
