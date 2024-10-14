// Import the data to customize and insert them into the page
const fetchData = () => {
    fetch("customize.json")
      .then((data) => data.json())
      .then((data) => {
        const dataArr = Object.keys(data);
        dataArr.forEach((customData) => {
          if (data[customData] !== "") {
            if (customData === "imagePath") {
              document
                .querySelector(`[data-node-name*="${customData}"]`)
                .setAttribute("src", data[customData]);
            } else {
              document.querySelector(`[data-node-name*="${customData}"]`).innerText =
                data[customData];
            }
          }
        });
        animationTimeline();
      });
  };
  
  // Animation Timeline
  const animationTimeline = () => {
    const tl = new TimelineMax();
  
    // Split characters for animation
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];
  
    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
      .split("")
      .join("</span><span>")}</span>`;
  
    hbd.innerHTML = `<span>${hbd.innerHTML.split("").join("</span><span>")}</span>`;
  
    const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg",
    };
  
    const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg",
    };
  
    tl
      .to(".container", 0.1, {
        visibility: "visible",
      })
      .from(".one", 0.7, {
        opacity: 0,
        y: 10,
      })
      .from(".two", 0.4, {
        opacity: 0,
        y: 10,
      })
      .to(
        ".one",
        0.7,
        {
          opacity: 0,
          y: 10,
        },
        "+=2.5"
      )
      .to(
        ".two",
        0.7,
        {
          opacity: 0,
          y: 10,
        },
        "-=1"
      )
      .from(".three", 0.7, {
        opacity: 0,
        y: 10,
      })
      .to(
        ".three",
        0.7,
        {
          opacity: 0,
          y: 10,
        },
        "+=2"
      )
      .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
      })
      .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
      })
      .staggerTo(
        ".hbd-chatbox span",
        0.05,
        {
          visibility: "visible",
        },
        0.05
      )
      .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
      })
      .to(
        ".four",
        0.5,
        {
          scale: 0.2,
          opacity: 0,
          y: -150,
        },
        "+=0.7"
      )
      .from(".idea-1", 0.7, ideaTextTrans)
      .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-2", 0.7, ideaTextTrans)
      .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-3", 0.7, ideaTextTrans)
      .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
      })
      .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-4", 0.7, ideaTextTrans)
      .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
      .from(
        ".idea-5",
        0.7,
        {
          rotationX: 15,
          rotationZ: -10,
          skewY: "-5deg",
          y: 50,
          z: 10,
          opacity: 0,
        },
        "+=0.5"
      )
      .to(
        ".idea-5 .smiley",
        0.7,
        {
          rotation: 90,
          x: 8,
        },
        "+=0.4"
      )
      .to(
        ".idea-5",
        0.7,
        {
          scale: 0.2,
          opacity: 0,
        },
        "+=2"
      )
      .staggerFrom(
        ".idea-6 span",
        0.8,
        {
          scale: 3,
          opacity: 0,
          rotation: 15,
          ease: Expo.easeOut,
        },
        0.2
      )
      .staggerTo(
        ".idea-6 span",
        0.8,
        {
          scale: 3,
          opacity: 0,
          rotation: -15,
          ease: Expo.easeOut,
        },
        0.2,
        "+=1"
      )
      .staggerFromTo(
        ".baloons img",
        2.5,
        {
          opacity: 0.9,
          y: 1400,
        },
        {
          opacity: 1,
          y: -1000,
        },
        0.2
      )
      .from(
        ".lydia-dp",
        0.5,
        {
          scale: 3.5,
          opacity: 0,
          x: 25,
          y: -25,
          rotationZ: -45,
        },
        "-=2"
      )
      .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
      })
      .staggerFrom(
        ".wish-hbd span",
        0.7,
        {
          opacity: 0,
          y: -50,
          rotation: 150,
          skewX: "30deg",
          ease: Elastic.easeOut.config(1, 0.5),
        },
        0.1
      )
      .staggerFromTo(
        ".wish-hbd span",
        0.7,
        {
          scale: 1.4,
          rotationY: 150,
        },
        {
          scale: 1,
          rotationY: 0,
          color: "#ff69b4",
          ease: Expo.easeOut,
        },
        0.1,
        "party"
      )
      .from(
        ".wish h5",
        0.5,
        {
          opacity: 0,
          y: 10,
          skewX: "-15deg",
        },
        "party"
      )
      .staggerTo(
        ".eight svg",
        1.5,
        {
          visibility: "visible",
          opacity: 0,
          scale: 80,
          repeat: 3,
          repeatDelay: 1.4,
        },
        0.3
      )
      .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
      })
      .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
      .to(
        ".last-smile",
        0.5,
        {
          rotation: 90,
        },
        "+=1"
      )
      .set(".custom-song-button", { display: "block" })
      .from(".custom-song-button", 0.5, {
        opacity: 0,
        y: 10,
      });
  };
  
  // Play Custom Song on Button Click
  const playSongButton = document.getElementById("play-song-button");
  playSongButton.addEventListener("click", () => {
    // Create a popup window to play the custom song
    const music = document.getElementById("background-music");
    music.pause();
    const songPopup = window.open("", "Custom Song", "width=400,height=200");
    songPopup.document.write(`
      <html>
        <head>
          <title>Our Special Song</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              text-align: center; 
              background: linear-gradient(135deg, #de7acd 0%, #58a7c9 100%);
              padding: 20px; 
            }
            h2 { color: #a18cd1; }
            audio { margin-top: 20px; }
          </style>
        </head>
        <body>
          <h2>Special Song for you</h2>
          <p>Click play to listen to my song.</p>
          <audio controls autoplay>
            <source src="audio/custom-song.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </body>
      </html>
    `);
  });
  
  // Restart Animation on click
  const replayBtn = document.getElementById("replay");
  replayBtn.addEventListener("click", () => {
    animationTimeline();
  });
  
  // Event listener for starting the experience
  document.getElementById("start-overlay").addEventListener("click", () => {
    // Hide the start overlay
    document.getElementById("start-overlay").style.display = "none";
    // Start the background music
    const music = document.getElementById("background-music");
    music.play();
    // Fetch data and start animation
    fetchData();
  });
  