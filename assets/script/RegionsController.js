cc.Class({
    extends: cc.Component,

    properties: {
        regions: [cc.Node]
    },

    hightlightRegion(id) {
        this.regions[this._highlightedRegion].getComponent('Region').setHighlight(false);
        this._highlightedRegion = id;
        this.regions[id].setHighlight(true);
    },

    next() {
        let next = this._highlightedRegion + 1;
        if (next >= this.regions.length) next = 0;
        this.hightlightRegion(next);
    },

    previous() {
        let prev = this._highlightedRegion - 1;
        if (prev < 0) prev = this.regions.length - 1;
        this.hightlightRegion(next);
    }
});
