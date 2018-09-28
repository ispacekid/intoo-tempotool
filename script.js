var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'rgba(0, 0, 0, .5)',
  progressColor: 'rgba(0, 0, 0, 1)',
  height: 128,
  scrollParent: true,
  splitChannels: true,
  backend: 'MediaElement',
  mediaControls: true,
  plugins: [
    WaveSurfer.regions.create(),
    WaveSurfer.timeline.create({
      container: '#wave-timeline'
    })
  ]
});

wavesurfer.load('./music.mp3');

// Format time
var formatTime = function (time) {
    return [
        Math.floor((time % 3600) / 60), // minutes
        ('00' + Math.floor(time % 60)).slice(-2) // seconds
    ].join(':');
};

// Show current time
wavesurfer.on('audioprocess', function () {
  $('.waveform-counter').text( formatTime(wavesurfer.getCurrentTime()) );
});

// Show clip duration
wavesurfer.on('ready', function () {
  $('.waveform-duration').text( formatTime(wavesurfer.getDuration()) );
});

// Zoom
var zoomLevel = document.querySelector('#zoomLevel');
zoomLevel.oninput = function () {
  var zoomTo = Number(zoomLevel.value);
  wavesurfer.zoom(zoomTo);
};

wavesurfer.on('ready', function () {
  wavesurfer.play();
  wavesurfer.addRegion({
    start: 0,
    end: 0.419297,
    color: 'rgba(0, 0, 0, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 0.419297,
    end: 2.06095,
    color: 'rgba(244, 67, 54, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 2.06095,
    end: 3.70258,
    color: 'rgba(33, 150, 243, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 3.70258,
    end: 5.34463,
    color: 'rgba(76, 175, 80, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 5.34463,
    end: 6.98646,
    color: 'rgba(255, 193, 7, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 6.98646,
    end: 8.62907,
    color: 'rgba(244, 67, 54, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 8.62907,
    end: 10.2723,
    color: 'rgba(33, 150, 243, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 10.2723,
    end: 11.9166,
    color: 'rgba(76, 175, 80, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 11.9166,
    end: 13.5609,
    color: 'rgba(255, 193, 7, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 13.5609,
    end: 15.2053,
    color: 'rgba(244, 67, 54, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 15.2053,
    end: 16.8474,
    color: 'rgba(33, 150, 243, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 16.8474,
    end: 18.49,
    color: 'rgba(76, 175, 80, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 18.49,
    end: 20.1331,
    color: 'rgba(255, 193, 7, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 20.1331,
    end: 21.7762,
    color: 'rgba(244, 67, 54, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 21.7762,
    end: 23.4193,
    color: 'rgba(33, 150, 243, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 23.4193,
    end: 25.0628,
    color: 'rgba(76, 175, 80, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 25.0628,
    end: 26.7061,
    color: 'rgba(255, 193, 7, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 26.7061,
    end: 28.3494,
    color: 'rgba(244, 67, 54, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 28.3494,
    end: 29.9929,
    color: 'rgba(33, 150, 243, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 29.9929,
    end: 31.637,
    color: 'rgba(76, 175, 80, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 31.637,
    end: 33.281,
    color: 'rgba(255, 193, 7, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 33.281,
    end: 34.9252,
    color: 'rgba(244, 67, 54, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 34.9252,
    end: 36.5695,
    color: 'rgba(33, 150, 243, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 36.5695,
    end: 38.2138,
    color: 'rgba(76, 175, 80, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 38.2138,
    end: 39.8581,
    color: 'rgba(255, 193, 7, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 39.8581,
    end: 41.5026,
    color: 'rgba(244, 67, 54, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 41.5026,
    end: 43.1465,
    color: 'rgba(33, 150, 243, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 43.1465,
    end: 44.7902,
    color: 'rgba(76, 175, 80, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 44.7902,
    end: 46.434,
    color: 'rgba(255, 193, 7, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 46.434,
    end: 48.0776,
    color: 'rgba(244, 67, 54, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 48.0776,
    end: 49.7207,
    color: 'rgba(33, 150, 243, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 49.7207,
    end: 51.3642,
    color: 'rgba(76, 175, 80, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 51.3642,
    end: 53.0074,
    color: 'rgba(255, 193, 7, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 53.0074,
    end: 54.6507,
    color: 'rgba(244, 67, 54, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 54.6507,
    end: 56.2936,
    color: 'rgba(33, 150, 243, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 56.2936,
    end: 57.9366,
    color: 'rgba(76, 175, 80, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 57.9366,
    end: 59.5808,
    color: 'rgba(255, 193, 7, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 59.5808,
    end: 61.2258,
    color: 'rgba(244, 67, 54, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 61.2258,
    end: 62.8715,
    color: 'rgba(33, 150, 243, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 62.8715,
    end: 64.5171,
    color: 'rgba(76, 175, 80, 0.25)',
    drag: false,
    resize: false
  });
  wavesurfer.addRegion({
    start: 64.5171,
    end: 66.1626,
    color: 'rgba(255, 193, 7, 0.25)',
    drag: false,
    resize: false
  });
});
