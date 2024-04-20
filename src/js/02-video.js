import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const timeFunction= (data)=>{
let resumeTime= data.seconds;
localStorage.setItem('videoplayer-current-time',resumeTime);
}

player.on('timeupdate', throttle(timeFunction,1000));
let timeResume=localStorage.getItem('videoplayer-current-time');

console.log(timeResume);
player.setCurrentTime(timeResume).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
