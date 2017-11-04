import { model, setData } from 'Model';
const postFix = ' $';

cc.Class({
    extends: cc.Component,

    properties: {
        cashLabel: cc.Label
    },

    getCash() {
        return model.cash;
    },

    setCash(newValue) {
        setData('cash', newValue);
        this.cashLabel.string = newValue + postFix;
    }
});
