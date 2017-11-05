import { COLOURS, REGIONS, REGIONSPREFER, SCENE, GAMEREPUTATION, GAMEBASEWIN, GAMEBONUSWINPERSTAR, GAMEPENALTYPERMISTAKE } from 'Constants';
import { model, setData } from 'Model';

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
        needleHolder: cc.Node,
        touchNode: cc.Node,
        progressBar: cc.ProgressBar,
        success: 0,
        failed: 0,
        bonus: 0,
        spriteFrames: [cc.SpriteFrame],
        bonusHolder: cc.Node,
        summaryHolder: cc.Node,
        bar1: cc.Node,
        bar2: cc.Node
    },

    onLoad() {
        this.bonusController = this.bonusHolder.getComponent('BonusController');
        this.summaryController = this.summaryHolder.getComponent('SummaryController');
        this.needleController = this.needleHolder.getComponent('NeedleController');
        this.needleController.init();
        this.setEnable(true);
    },

    setEnable(bool) {
        if (bool) {
            this.touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        } else {
            this.touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        }
    },

    //when fingger touch it
    onTouchBegan(touch) {
        const success = this.needleController.isSuccess();

        if (success) {
            this.success++;

            const right = 3;
            const left = -3;

            this.bar1.runAction(cc.sequence(
                cc.moveTo(0.1, cc.p(right, this.bar1.y)),
                cc.moveTo(0.1, cc.p(left, this.bar1.y)),
                cc.moveTo(0.1, cc.p(right, this.bar1.y)),
                cc.moveTo(0.1, cc.p(left, this.bar1.y)),
                cc.moveTo(0.1, cc.p(0, this.bar1.y)),
            ));

            this.bar2.runAction(cc.sequence(
                cc.moveTo(0.1, cc.p(right, this.bar2.y)),
                cc.moveTo(0.1, cc.p(left, this.bar2.y)),
                cc.moveTo(0.1, cc.p(right, this.bar2.y)),
                cc.moveTo(0.1, cc.p(left, this.bar2.y)),
                cc.moveTo(0.1, cc.p(0, this.bar2.y)),
            ));

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

        return true;
    },

    showBonus() {
        this.needleController.setEnable(false);

        const id = SCENE.id;
        const name = REGIONS[id];
        const prefer = REGIONSPREFER[name];
        const randomPrize = prefer[Math.floor(Math.random() * prefer.length)];
        const randomPrize1 = COLOURS[Math.floor(Math.random() * COLOURS.length)];
        const randomPrize2 = COLOURS[Math.floor(Math.random() * COLOURS.length)];
        const options = [COLOURS.indexOf(randomPrize), COLOURS.indexOf(randomPrize1), COLOURS.indexOf(randomPrize2)];
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

        this.needleController.setEnable(true);
    },

    gameOver() {
        this.needleController.setEnable(false);

        const id = SCENE.id;
        const name = REGIONS[id];
        const repBonus = model.reputation;
        const bonus = this.bonus;
        const missed = this.failed;
        const earned = GAMEBASEWIN[name] +
            GAMEBONUSWINPERSTAR[name] * bonus -
            GAMEPENALTYPERMISTAKE[name] * missed;
        const realEarning = earned < 0 ? 0 : earned * (100 + repBonus) / 100;
        const repEarned = GAMEREPUTATION[name];

        setData('reputation', model.reputation + repEarned);
        setData('cash', model.cash + realEarning);

        this.summaryController.init(repBonus, bonus, missed, realEarning, repEarned, this.backToMain);
    },

    backToMain() {
        cc.director.loadScene('main');
    },
});
