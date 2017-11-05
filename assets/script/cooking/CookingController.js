import { INGRIDIENT, REGIONS, REGIONSPREFER, SCENE } from 'Constants';

const MAXSCORE = 50;

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}

cc.Class({
    extends: cc.Component,

    properties: {
        ingridient: cc.Prefab,
        pot: cc.Node,
        playZone: cc.Node,
        progressBar: cc.ProgressBar,
        success: 0,
        failed: 0,
        bonus: 0,
        spriteFrames: [cc.SpriteFrame],
        isPaused: false,
        bonusHolder: cc.Node
    },

    onLoad() {
        this.bonusController = this.bonusHolder.getComponent('BonusCookingController');
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
        const id = SCENE.id;
        const name = REGIONS[id];
        const prefer = REGIONSPREFER[name];
        const randomPrize = prefer[Math.floor(Math.random() * prefer.length)];
        const randomPrize1 = INGRIDIENT[Math.floor(Math.random() * INGRIDIENT.length)];
        const randomPrize2 = INGRIDIENT[Math.floor(Math.random() * INGRIDIENT.length)];
        const options = [INGRIDIENT.indexOf(randomPrize), INGRIDIENT.indexOf(randomPrize1), INGRIDIENT.indexOf(randomPrize2)];
        shuffle(options);
        this.bonusController.init(
            {
                id: options[0],
                sf: this.spriteFrames[options[0]]
            },
            {
                id: options[1],
                sf: this.spriteFrames[options[1]]
            },
            {
                id: options[2],
                sf: this.spriteFrames[options[2]]
            },
            this.onBonusSelect.bind(this)
        );
    },

    onBonusSelect(selectid) {
        const id = SCENE.id;
        const name = REGIONS[id];
        const prefer = REGIONSPREFER[name];
        const selection = INGRIDIENT[selectid];

        if (prefer.indexOf(selection) != -1) {
            this.bonus++;
        }

        this.isPaused = false;
    },

    gameOver() {
        cc.log('gameover! success: ' + this.success + ' failed: ' + this.failed + 'bonus' + this.bonus);
        this.unschedule(this.spawnIngridient);
    },
});
