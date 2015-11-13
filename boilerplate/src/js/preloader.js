(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {
    preload: function () {
       this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
      this.load.setPreloadSprite(this.asset);

/*      var GAME_WIDTH = 640;
      var GAME_HEIGHT = 960;

      // set background color and preload image
      this.stage.backgroundColor = '#B4D9E7';
      this.preloadBar = this.add.sprite((GAME_WIDTH-311)/2, (GAME_HEIGHT-27)/2, 'preloaderBar');
      this.load.setPreloadSprite(this.preloadBar);      */

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.loadResources();

      // this.ready = true;
    },

    loadResources: function () {
      // load your assets here
      // dummy
      this.load.image('dummy', 'img/dummy1.png');      
      this.load.image('dummy', 'img/dummy2.png');      
      this.load.image('dummy', 'img/dummy3.png');      
      this.load.image('dummy', 'img/dummy4.png');      
      this.load.image('dummy', 'img/dummy5.png');      

      // load images
      this.load.image('background', 'img/background.png');
      this.load.image('floor', 'img/floor.png');
      this.load.image('monster-cover', 'img/monster-cover.png');
      this.load.image('title', 'img/title.png');
      this.load.image('game-over', 'img/gameover.png');
      this.load.image('score-bg', 'img/score-bg.png');
      this.load.image('button-pause', 'img/button-pause.png');
      // load spritesheets
      this.load.spritesheet('candy', 'img/candy.png', 82, 98);
      this.load.spritesheet('monster-idle', 'img/monster-idle.png', 103, 131);
      this.load.spritesheet('button-start', 'img/button-start.png', 401, 143);      
    },

    create: function () {

    },

    update: function () {
      if (this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['monster-wants-candy'] = window['monster-wants-candy'] || {};
  window['monster-wants-candy'].Preloader = Preloader;
}());
