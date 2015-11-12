var Candy = {};
Candy.Boot = function(game){};
Candy.Boot.prototype = {
  preload: function(){
    // preload the loading indicator first before anything else
    this.load.image('preloaderBar', 'img/loading-bar.png');
  },
  create: function(){
    // set scale options
    this.input.maxPointers = 1;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.forceOrientation(true);
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.updateLayout(true);
    // start the Preloader state
    this.state.start('Preloader');
  }
};
