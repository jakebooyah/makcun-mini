import { model, setData } from 'Model';
const preFix = 'Reputation: ';

cc.Class({
    extends: cc.Component,

    properties: {
        reputationLabel: cc.Label
    },

    getCash() {
        return model.cash;
    },

    setCash(newValue) {
        setData('reputation', newValue);
        this.reputationLabel.string = preFix + newValue;
    }
});
