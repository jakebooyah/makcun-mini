cc.Class({
    extends: cc.Component,

    properties: {
        regions: [cc.Node]
    },

    hightlightRegion(id) {
        this.regions[this._highlightedRegion].setHighlight(false);
        this._highlightedRegion = id;
        this.regions[id].setHighlight(true);
    }
});
