//some flashy presentation
//credits to Professor Rocco
let startBtn = document.querySelector('#open')
let closeBtn = document.querySelector('#close')
let  showFarm = function(){
farm.style.setProperty(`display`,`block`)
}
let closeFarm = function(){
farm.style.setProperty(`display`,`none`)
}
startBtn.addEventListener('click', showFarm)
closeBtn.addEventListener('click', closeFarm)


//ORIGIN OF MY CODE

// let audio = document.querySelector(`#audioFile`)
// let playBtn = document.querySelector(`#play`)

// let playTheMusic = function(){
//     audio.play()
// }

// playBtn.addEventListener(`click`, playTheMusic)

// linking the audio file
let chknMusic = document.querySelector(`#chickenSound`)
let cowMusic = document.querySelector(`#cowSound`)
let horseMusic = document.querySelector(`#horseSound`)
let pigMusic = document.querySelector(`#pigSound`)
let duckMusic = document.querySelector(`#duckSound`)

// it plays when a picture is played
let cowMoo = document.querySelector(`#cowPic`)
let chickenCrow = document.querySelector(`#chknPic`)
let horseNeigh = document.querySelector(`#horsePic`)
let pigOink = document.querySelector(`#pigPic`)
let duckQuack = document.querySelector(`#duckPic`)

//functions
let playCow = function(){
    cowMusic.play()
}
let playCrow = function(){
    chknMusic.play()
}
let playHorse = function(){
    horseMusic.play()
}
let playPig = function(){
    pigMusic.play()
}
let playDuck = function(){
    duckMusic.play()
}

//event listeners when the picture are clicked the function will run
chickenCrow.addEventListener(`click`, playCrow)
cowMoo.addEventListener(`click`, playCow)
horseNeigh.addEventListener(`click`, playHorse)
pigOink.addEventListener(`click`, playPig)
duckQuack.addEventListener(`click`, playDuck)
