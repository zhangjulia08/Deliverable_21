var video = document.querySelector("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
 });

document.querySelector("#pause").addEventListener("click", function() {
	console.log("pause video");
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down");
	video.playbackRate *= 0.9;
	console.log("video playback rate" + video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up");
	video.playbackRate /= 0.9;
	console.log("video playback rate" + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if (video.currentTime+10 > video.duration) {
		console.log("resetted to the start");
		video.currentTime = 0;
	}

	else {
		console.log("Skipped ahead 10 seconds");
		video.currentTime += 10;
	}
	console.log(video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function() {
	console.log("video mute");
	if (video.muted) {
		document.querySelector("#mute").innerHTML = "Mute";
	}

	else {
		document.querySelector("#mute").innerHTML = "Unmute";
	}

	video.muted =! video.muted;
	console.log("Video is muted: " + video.muted);
})

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	console.log("volume change");
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("style change");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("back to original");
})
