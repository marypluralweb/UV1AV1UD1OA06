BasicGame.Preloader = function (game) {

    this.initExtends();

    BasicGame.PreloaderBase.call(game);
};

BasicGame.Preloader.prototype = Object.create(BasicGame.PreloaderBase.prototype);
BasicGame.Preloader.prototype.constructor = BasicGame.Preloader;

BasicGame.Preloader.prototype.initExtends = function() {
    for(var name in this.extends) {
        BasicGame.Preloader.prototype[name] = this.extends[name];
    }
};

BasicGame.Preloader.prototype.extends = {

	preload: function () {

		this.initPreloaderBase();

        this.load.image('arrow', 'GLOBAL/images/arrow.png');
        this.load.atlas('clickAnimation', 'GLOBAL/images/click_animation.png', 'GLOBAL/images/click_animation.json');
		
			
		//INITIAL
		this.load.image('initialText', 'images/initialText.png');
		this.load.image('marca', 'images/marca.png');
	
		// SCENE

		this.load.image('background', 'images/background.png');
		this.load.image('quadroTutorial', 'images/quadro_tutorial.png');
		this.load.image('quadro1', 'images/quadro1.png');
		this.load.image('quadro2', 'images/quadro2.png');
		this.load.image('quadro3', 'images/quadro3.png');


		// CHARACTER ANIMATION
		this.load.atlas('etiquetas', 'images/etiquetas.png', 'images/etiquetas.json');


		// GAMEPLAY
		this.load.image('pergunta1', 'images/texto_p1.png');
		this.load.image('pergunta2', 'images/texto_p2.png');
		this.load.image('pergunta3', 'images/texto_p3.png');

		this.load.image('imgResumo', 'images/resumo_img.png');
		
		this.load.audio('soundP1', ['sound/JC-UV1AV1UD1OA06-Por-P1.mp3']);
		this.load.audio('soundP2', ['sound/JC-UV1AV1UD1OA06-Por-P2.mp3']);
		this.load.audio('soundP3', ['sound/JC-UV1AV1UD1OA06-Por-P3.mp3']);


		this.load.audio('soundDica', ['sound/JC-UV1AV1UD1OA06-Por-DICA.mp3']);
		this.load.audio('soundFinal', ['sound/JC-UV1AV1UD1OA06-Por-FINAL.mp3']);
		this.load.audio('soundResumo', ['sound/JC-UV1AV1UD1OA06-Por-RESUMO.mp3']);
		this.load.audio('soundIntro', ['sound/JC-UV1AV1UD1OA06-Por-INTRO.mp3']);

		this.load.audiosprite("soundEtiquetas", "sound/output.mp3", "sound/output.json"); 

	},

	update: function () {

        var decoded = this.cache.isSoundDecoded('soundIntro');
        if (decoded && this.ready == false && this.effectFinished && BasicGame.Pontuacao != null)
        {
            this.initGame();
        }
    }
};
