cc.Class({
    extends: cc.Component,

    properties: {
        regionsControllerHolder: cc.Node,
        scrollerControllerHolder: cc.Node,
    },

    // use this for initialization
    onLoad() {
        this.regionsController = this.regionsControllerHolder.getComponent('RegionsController');
        this.regionsController.setOnRegionSelect(this.onRegionSelect.bind(this));

        this.scrollerController = this.scrollerControllerHolder.getComponent('Scroller');
        this.scrollerController.regionsController = this.regionsController;
    },

    onRegionSelect(selectedRegion) {
        cc.log('Selected Region' + selectedRegion);
    }
});
