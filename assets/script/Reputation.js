import { model, setData } from 'Model';
const preFix = 'Reputation: ';

cc.Class({
    extends: cc.Component,

    properties: {
        reputationLabel: cc.Label
    },

    init() {
        this.setReputation(this.getReputation());
    },

    getReputation() {
        return model.reputation;
    },

    setReputation(newValue) {
        setData('reputation', newValue);
        this.reputationLabel.string = preFix + newValue;
    }
});
