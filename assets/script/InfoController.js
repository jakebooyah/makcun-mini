import { model, setData } from 'Model';
import { REGIONS } from 'Constants';

cc.Class({
    extends: cc.Component,

    properties: {
        tint: cc.Node,
        content: cc.Node,
        stateNameLabel: cc.Label,
        lockedStateLabel: cc.Label,
        actionLabel: cc.Label,
    },

    showInfoForState(stateId) {
        this.content.active = true;
        this.tint.active = true;

        const name = this.stateNameLabel.string = REGIONS[stateId];
        const isUnlock = model[name];
        this.lockedStateLabel.string = isUnlock ? 'unlocked' : 'locked';
        this.actionLabel.string = isUnlock ? 'invest' : 'unlock';
    },

    hideInfo() {
        this.content.active = false;
        this.tint.active = false;
    }
});
