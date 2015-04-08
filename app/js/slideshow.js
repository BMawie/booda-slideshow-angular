
var s,
  portraitsGrid = {
    settings: {
      transitionGridIn: "transition.bounceIn"
    },
 
    init: function() {
      s = this.settings;
      this.loadPortraits();
      // this.initEvents();
    },
 
    loadPortraits: function() {
      setTimeout(function() {
        portraitsGrid.sequenceInOut(500, s.transitionGridIn, false, 800);
      }, 2000);
    },
 
    sequenceInOut: function(delaygrid, easegrid, backgrid, durationgrid) {
      $('.face').delay(delaygrid).velocity(easegrid, {
        stagger: 55,
        duration: durationgrid,
        backwards: backgrid,
        drag: true
      });
    }
 
  };
 
$(document).ready(function() {
  portraitsGrid.init();
});
