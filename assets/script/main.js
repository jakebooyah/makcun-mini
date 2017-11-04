cc.Class({
    extends: cc.Component,

    properties: {
        regionsControllerHolder: cc.Node,
        scrollerControllerHolder: cc.Node,
        cashControllerHolder: cc.Node,
        reputationControllerHolder: cc.Node,
        infoControllerHolder: cc.Node,
    },

    // use this for initialization
    onLoad() {
        const delegates = this.delegates = {};

        delegates.reputationController = this.reputationControllerHolder.getComponent('Reputation');
        delegates.cashController = this.cashControllerHolder.getComponent('Cash');
        delegates.infoController = this.infoControllerHolder.getComponent('InfoController');
        delegates.regionsController = this.regionsControllerHolder.getComponent('RegionsController');
        delegates.scrollerController = this.scrollerControllerHolder.getComponent('Scroller');
        delegates.scrollerController.regionsController = delegates.regionsController;

        delegates.cashController.init();
        delegates.reputationController.init();
    },

    onRegionSelect() {
        this.delegates.regionsController.selectRegion(this._onRegionSelected.bind(this));
    },

    _onRegionSelected(selectedRegion) {
        cc.log('Selected Region ' + selectedRegion);
        this.delegates.infoController.showInfoForState(selectedRegion);
    }
});
