let bg = $("#particles-js");
$(document).on('keydown',()=>{
$(bg).css('background-color',getRandomColor);
})

$(".img").on("click",function(){
    var name = $(this).attr("name");
    const initiale = name.charAt(0).toUpperCase();
    const nameCapitalized = initiale + name.slice(1);
    $("#titre").text(nameCapitalized);


    $(this).toggleClass('flash');

    var music = $(this).attr("name");
    music +=".mp3";
    playMusic(music);
});

$('#btn').on('click',function(){
    var artiste = $('#input').val();
    var music = artiste + ".mp3";
    playMusic(music);

})

function playMusic(music){
    var audio = new Audio(music);
            audio.play();
}

function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){

color = color + letters[Math.floor(Math.random()* letters.length)]
    }
return color;
}