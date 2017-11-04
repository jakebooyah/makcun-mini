import { model, setData } from 'Model';
import { REGIONS } from 'Constants';

cc.Class({
    extends: cc.Component,

    properties: {
        tint: cc.Node,
        content: cc.Node,
        stateNameLabel: cc.Label,
    },

    showInfoForState(stateId) {
        const sateName = this.stateNameLabel.string = REGIONS[stateId];

        this.content.active = true;
        this.tint.active = true;
    },

    hideInfo() {
        this.content.active = false;
        this.tint.active = false;
    }
});
