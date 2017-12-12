var keyFound = false;

var story = {
    // nice gifs
    // https://imgur.com/r/Cyberpunk/T1vLm
    1: {
        sentence: "> Welcome to the city of the future. In this game you are going to live the life you want and decide all the choices yourself. \n\nGoodluck..",
        options: {
            1: [ "Start the game", 2]
        },
        image: "./assets/img/scenes/scene1.gif"
    },
    2: {
        sentence: "> You're the person on the left, you're currently in the local cafe.\nThe person on the right is Sam, you really wanna murder Sam and you can kill him right now with the knife in your hand or leave him for a bit..",
        options: {
            1: [ "Murder Sam right now.", 3],
            2: [ "Leave him for now and go to home.", 10]
        },
        image: "./assets/img/scenes/scene2.gif"
    },
    3: {
        sentence: "> You just murdered Sam and took his body to the backside of the cafe.",
        options: {
            1: [ "Continue", 4],
        },
        image: "./assets/img/scenes/scene3.gif"
    },
    4: {
        sentence: "> Your biggest enemy is down and you're currently on the train station on your way to work. On the walls it already says that you're wanted..\nGet out of here, as soon as possible!",
        options: {
            1: [ "Continue", 5],
        },
        image: "./assets/img/scenes/scene4.gif",
    },
    5: {
        sentence: "> You just arrived at your work. Go inside and act like nothing happend or stay outside and take a look at the highway.",
        options: {
            1: [ "Go inside and act like nothing happend.", 6],
            2: [ "Stay outside and take a look at the highway.", 7]
        },
        image: "./assets/img/scenes/scene5.gif"
    },
    6: {
        sentence: "> Jack is calling you, he has some important news for you.",
        options: {
            1: [ "Take your phone and accept the call.", 8]
        },
        image: "./assets/img/scenes/scene6.gif"
    },
    7: {
        sentence: "...",
        options: {
            1: [ "Go inside the building.", 6]
        },
        image: "./assets/img/scenes/scene7.gif"
    },
    8: {
        sentence: "> Jack is very worried and is telling you that the police are on their way to get you, cause you murdered someone!..",
        options: {
            1: [ "Continue", 9]
        },
        image: "./assets/img/scenes/scene8.gif"
    },
    9: {
        sentence: "Oh no! The police arrived and is about to arrest you!..",
        image: "./assets/img/scenes/scene9.gif"
    },
    10: {
        sentence: "You came home and play a game with your little brother..",
        image: "./assets/img/scenes/scene10.gif",
        options: {
            1: [ "Continue", 11]
        }
    },
    11: {
        sentence: "It's time to go to work, take your flying car and lets go!",
        image: "./assets/img/scenes/scene11.png",
        options: {
            1: [ "Continue", 12]
        }
    },
    12: {
        sentence: "Almost there..",
        image: "./assets/img/scenes/scene12.gif",
        options: {
            1: [ "Continue", 13]
        }
    },
    13: {
        sentence: "You arrived at your work and you found a closed door, you really wanna conquer the world, which is possible when you've accessed this secret room with important secret information.",
        image: "./assets/img/scenes/scene13.gif",
        options: {
            1: [ "Try to access the door", 14],
            2: [ "Search the key", 15],
        }
    },
    14: {
        sentence: "",
        image: "./assets/img/scenes/scene14.gif",
        options: {
            1: [ "Try it again", 14],
            2: [ "Search the key", 15],
        }
    },
    15: {
        sentence: "You gave up searching for the key, you thought about copying the key pattern!",
        image: "./assets/img/scenes/scene15.gif",
        options: {
            1: [ "Continue", 16]
        }
    },
    16: {
        sentence: "Goodjob! You copied the key, you should be able to open the secret door now..",
        image: "./assets/img/scenes/scene16.gif",
        options: {
            1: [ "Go to door and try to access it.", 14]
        }
    },
    17: {
        sentence: "You're now in the secret room.. but there is another person! Kill him!",
        image: "./assets/img/scenes/scene17.gif",
        options: {
            1: [ "Continue.", 18]
        }
    },
    18: {
        sentence: "You succesfully entered the secret room and gained access to all the secret information, you conquered the world!",
        image: "./assets/img/scenes/scene18.gif",
        options: {
            1: [ "End the game.", 19]
        }
    },
    19: {
        sentence: "Thank you for playing this game, I hope you enjoyed! :)",
        image: "./assets/img/scenes/scene19.gif",
        options: {
            1: [ "Start again.", 1]
        }
    },
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
    if (keyFound == true) {
        keyStatus = "  yay! You found the correct key and unlocked the door, goodjob.";
    } else {
        keyStatus = "Oops! You don't have the key to unlock the secret door, try to find the key.";
    }

    if (currentScene == 14) {
        story[14]["sentence"] = keyStatus;
    }

    if (currentScene == 16) {
        keyFound = true;
    }

    if (currentScene == 14 && keyFound == true) {
        story[14]["options"][1] = [ "Enter the door.", 17];
        story[14]["options"][2] = null;
    }
    if (story[currentScene]["sentence"].length > letter) {
        var split = story[currentScene]["sentence"].split("");
        var p = document.getElementById("text");
        p.innerHTML += split[letter].replace(/(?:\r\n|\r|\n)/g, '<br />');
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
