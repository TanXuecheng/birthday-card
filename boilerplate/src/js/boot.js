(function () {
  'use strict';

  function Boot() {}

  Boot.prototype = {
    preload: function () {
      this.load.image('preloader', 'img/preloader.gif'); 

      // preload the loading indicator first before anything else
      this.load.image('preloaderBar', 'img/loading-bar.png');
    },

    create: function () {
      // configure game
      this.game.input.maxPointers = 1;

      if (this.game.device.desktop) {
        this.game.scale.pageAlignHorizontally = true;
      } else {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.game.scale.minWidth =  480;
        this.game.scale.minHeight = 260;
        this.game.scale.maxWidth = 640;
        this.game.scale.maxHeight = 480;

        this.game.scale.forceOrientation(true);
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.updateLayout(true);
      }
      this.game.state.start('preloader');
    }
  };

  window['monster-wants-candy'] = window['monster-wants-candy'] || {};
  window['monster-wants-candy'].Boot = Boot;
}());

