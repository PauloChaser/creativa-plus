export function initVideo () {
  initPlay()
  initStop()

  const videos = document.querySelectorAll('.js-video');

  [...videos].forEach((video) => initVideoControls(video))
}

function initVideoControls(video) {
  const container = video.closest('.js-video-wrap');

  if (!container) {
    return
  }

  const videoPlay = container.querySelector('.js-video-play');
  const videoPause = container.querySelector('.js-video-pause');
  const videoTimeCurrent = container.querySelector('.js-video-time-current');
  const videoTimeTotal = container.querySelector('.js-video-time-total');
  const videoProgressbar = container.querySelector('.js-video-progressbar');

  videoPlay.addEventListener('click', function() {
    videoPlay.classList.remove('videoContainer__controlPlay--active');
    videoPause.classList.add('videoContainer__controlPause--active');
    video.play()
  })

  videoPause.addEventListener('click', function() {
    videoPlay.classList.add('videoContainer__controlPlay--active');
    videoPause.classList.remove('videoContainer__controlPause--active');
    video.pause()
  })

  video.addEventListener("timeupdate", () => {
    const progress = (video.currentTime / video.duration) * 100;
    const totalMinutes = Math.floor(video.duration / 60).toString().padStart(2, '0');
    const totalSeconds = Math.floor(video.duration % 60).toString().padStart(2, '0');

    const currentMinutes = Math.floor(video.currentTime / 60).toString().padStart(2, '0');
    const currentSeconds = Math.floor(video.currentTime % 60).toString().padStart(2, '0');

    videoTimeCurrent.innerText = `${currentMinutes}:${currentSeconds}`
    videoTimeTotal.innerText = `${totalMinutes}:${totalSeconds}`

    videoProgressbar.style.width = `${progress}%`
  })
}

function initPlay() {
  const playButtons = document.querySelectorAll('.js-play');

  [...playButtons].forEach((button) => {
    button.addEventListener('click', function(e) {
      e.preventDefault();

      const id = button.rel;
      const videoSrc = button.href;
      const video = document.getElementById(id);

      if (!video) {
        return
      }

      video.src = videoSrc;

      video.play();
    })
  })
}

function initStop() {
  const playButtons = document.querySelectorAll('.js-stop');

  [...playButtons].forEach((button) => {
    button.addEventListener('click', function(e) {
      e.preventDefault();

      const id = button.rel;
      const video = document.getElementById(id);

      if (!video) {
        return
      }

      video.pause()
    })
  })
}
