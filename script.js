let currentsong=new Audio();
let songul
async function getsongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }

    }
    return songs
}
const playmusic=(track)=>{
   currentsong.src="/songs/" +track
   currentsong.play()
    play.src="images/pause.svg"
    document.querySelector(".songinfo").innerHTML=track;
    document.querySelector(".duration").innerHTML="00:00/00.00";

}
async function main() {
    let songs = await getsongs()
    console.log(songs)
    songul = document.querySelector(".songplaylist").getElementsByTagName("ul")[0]
    for (const song of songs) {

        songul.innerHTML = songul.innerHTML + `
                        <li>
                            <img class="invert"src="images/music.svg">
                            <div class="one">
                                <p>${song.replaceAll("%20", " ")}</p>
                                <p>artist name</p>
                            </div>
                            <div class="playnow">
                            <span> play now</span>
                            <img class="invert" src="images/play.svg">
                            </div>
                        </li>`;
    }
    Array.from(document.querySelector(".songplaylist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click",element=>{
            console.log(e.querySelector(".one").firstElementChild.innerHTML);
            playmusic(e.querySelector(".one").firstElementChild.innerHTML.trim());
        })
        
    })
    play.addEventListener("click",()=>{
        if(currentsong.paused){
             currentsong.play()
             play.src="images/pause.svg"
        }
        else{
            currentsong.pause()
            play.src="images/play.svg"
        }
        play.addEventListener.style.position="fixed";
    })
    document.querySelector(".hamb").addEventListener("click",()=>{
        document.querySelector(".left").style.left="0";
    })
    document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".left").style.left="-110%";
    })
    previous.addEventListener("click",()=>{
        console.log(songul)
        let song1=document.getElementsByTagName("li")
        console.log(song1)
    })
    next.addEventListener("click",()=>{
        console.log(currentsong)
        console.log(songs)

    })
}
main()
