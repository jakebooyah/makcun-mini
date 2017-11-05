const MAXSCORE = 50;

cc.Class({
    extends: cc.Component,

    properties: {
        ingridient: cc.Prefab,
        pot: cc.Node,
        playZone: cc.Node,
        progressBar: cc.ProgressBar,
        success: 0,
        failed: 0,
        spriteFrames: [cc.SpriteFrame],
        isPaused: false,
        bonusHolder: cc.Node
    },

    onLoad() {
        this.bonusController = this.bonusHolder.getComponent('BonusController');
        this.startGame();
    },

    startGame() {
        this.schedule(this.spawnIngridient, 0.5);
    },

    //summon ingridient
    spawnIngridient() {
        if (this.isPaused) return;

        const count = Math.random() > 0.5 ? 1 : 2;

        for (let index = 0; index < count; index++) {
            const summonIngrident = cc.instantiate(this.ingridient);
            summonIngrident.x = Math.random() * 200 * (Math.random() < 0.5 ? 1 : -1);
            summonIngrident.y = 500;

            const ingridientController = summonIngrident.getComponent('Ingredient');
            const worldPos = this.pot.convertToWorldSpace(cc.p(this.pot.getPosition()));
            const playZonePos = this.playZone.convertToNodeSpace(worldPos);
            ingridientController.setPotPosition(playZonePos);
            ingridientController.setOnDestroyCallBack(this.onIngridientDestroy.bind(this));
            const randomType = Math.round(Math.random() * 7);
            ingridientController.setIngridient(randomType, this.spriteFrames[randomType]);
            this.playZone.addChild(summonIngrident);
            ingridientController.init();
        }
    },

    onIngridientDestroy(isClicked, type) {
        cc.log(isClicked, type);
        if (isClicked) {
            this.shakePot();
            this.success++;

            this.progressBar.progress = this.success / MAXSCORE;
            if (this.success >= MAXSCORE) {
                this.gameOver();
            }

            //bonus game
            if (this.success == 15 || this.success == 30 || this.success == 45) {
                this.showBonus();
            };

        } else {
            this.failed++;
        }
    },

    shakePot() {
        const right = 5;
        const left = -5;
        this.pot.runAction(cc.sequence(
            cc.rotateTo(0.1, right),
            cc.rotateTo(0.1, left),
            cc.rotateTo(0.1, right),
            cc.rotateTo(0.1, left),
            cc.rotateTo(0.1, 0),
        ));
    },

    showBonus() {
        this.isPaused = true;
        this.bonusController.init();
    },

    gameOver() {
        cc.log('gameover! success: ' + this.success + ' failed: ' + this.failed);
        this.unschedule(this.spawnIngridient);
    },
});
