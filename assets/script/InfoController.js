import { model, setData } from 'Model';
import { REGIONS, PRICES, INVESTPRICES, REGIONSPREFER, SCENE, GAMES } from 'Constants';

cc.Class({
    extends: cc.Component,

    properties: {
        tint: cc.Node,
        content: cc.Node,
        stateNameLabel: cc.Label,
        lockedStateLabel: cc.Label,
        priceLabel: cc.Label,
        actionLabel: cc.Label,
        preferLabel: cc.Label,
        button: cc.Node
    },

    init(cashController, regionsController) {
        this.cashController = cashController;
        this.regionsController = regionsController;
    },

    showInfoForState(stateId) {
        this.content.active = true;
        this.tint.active = true;
        this.stateId = stateId;
        const name = this.stateNameLabel.string = REGIONS[stateId];
        const isUnlock = this.isUnlock = model[name];
        this.lockedStateLabel.string = isUnlock ? 'unlocked' : 'locked';
        this.actionLabel.string = isUnlock ? 'invest' : 'unlock';
        this.priceLabel.string = '$ ' + (isUnlock ? INVESTPRICES[name] : PRICES[name]);

        let preferString = '';
        const preferArray = REGIONSPREFER[name];
        for (let index = 0; index < preferArray.length; index++) {
            preferString = preferString + '- ' + preferArray[index] + '\n';
        }

        this.preferLabel.string = preferString;
    },

    hideInfo() {
        this.content.active = false;
        this.tint.active = false;
    },

    onActionButton() {
        if (this.isUnlock) {
            this.invest();
        } else {
            this.unlockState(this.stateId);
        }
    },

    unlockState(stateId) {
        const name = this.stateNameLabel.string = REGIONS[stateId];
        const price = PRICES[name];

        if (price < this.cashController.getCash()) {
            this.cashController.setCash(this.cashController.getCash() - price);
            this.lockedStateLabel.string = 'unlocked';
            this.actionLabel.string = 'invest';
            this.isUnlock = 1;
            setData(name, 1);
            this.regionsController.updateRegion(stateId);
        } else {
            const ori = this.button.x;
            const right = this.button.x + 10;
            const left = this.button.x - 10;

            this.button.runAction(cc.sequence(
                cc.moveTo(0.1, cc.p(right, this.button.y)),
                cc.moveTo(0.1, cc.p(left, this.button.y)),
                cc.moveTo(0.1, cc.p(right, this.button.y)),
                cc.moveTo(0.1, cc.p(ori, this.button.y)),
            ))
            cc.log('poor!');
        }
    },

    invest() {
        const id = this.stateId;
        const name = REGIONS[id];
        const price = INVESTPRICES[name];

        if (price < this.cashController.getCash()) {
            this.cashController.setCash(this.cashController.getCash() - price);
            SCENE.id = id;
            cc.director.loadScene(GAMES[name]);
        } else {
            const ori = this.button.x;
            const right = this.button.x + 10;
            const left = this.button.x - 10;

            this.button.runAction(cc.sequence(
                cc.moveTo(0.1, cc.p(right, this.button.y)),
                cc.moveTo(0.1, cc.p(left, this.button.y)),
                cc.moveTo(0.1, cc.p(right, this.button.y)),
                cc.moveTo(0.1, cc.p(ori, this.button.y)),
            ))
            cc.log('poor!');
        }
    },
});
