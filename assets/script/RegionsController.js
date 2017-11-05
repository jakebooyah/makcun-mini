import { model, setData } from 'Model';
import { REGIONS } from 'Constants';

cc.Class({
    extends: cc.Component,

    properties: {
        regions: [cc.Node],
        _highlightedRegion: 0
    },

    init() {
        for (let index = 0; index < REGIONS.length; index++) {
            const name = REGIONS[index];
            this.regions[index].getComponent('Region').setIsUnlock(model[name]);
        }

        this.hightlightRegion(0, true);
    },

    updateRegion(id) {
        const name = REGIONS[id];
        this.regions[id].getComponent('Region').setIsUnlock(model[name]);
    },

    selectRegion(callback) {
        const selected = this._selected = this._highlightedRegion;
        this.regions[selected].getComponent('Region').playSelectedAnim(() => {
            callback && callback(selected);
        });
    },

    hightlightRegion(id, muted = false) {
        const path = cc.url.raw('resources/audio/state.mp3');
        if (!muted) cc.audioEngine.play(path);
        this.regions[this._highlightedRegion].getComponent('Region').setHighlight(false);
        this._highlightedRegion = id;
        this.regions[id].getComponent('Region').setHighlight(true);
    },

    next() {
        let next = this._highlightedRegion + 1;
        if (next >= this.regions.length) next = 0;
        this.hightlightRegion(next);
    },

    previous() {
        let prev = this._highlightedRegion - 1;
        if (prev < 0) prev = this.regions.length - 1;
        this.hightlightRegion(prev);
    }
});
