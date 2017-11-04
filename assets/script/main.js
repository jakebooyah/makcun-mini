cc.Class({
    extends: cc.Component,

    properties: {
        regionsControllerHolder: cc.Node,
        scrollerControllerHolder: cc.Node,
        cashControllerHolder: cc.Node,
        reputationControllerHolder: cc.Node,
        moreInfoControllerHolder: cc.Node,
    },

    // use this for initialization
    onLoad() {
        const delegates = this.delegates = {};

        delegates.reputationController = this.reputationControllerHolder.getComponent('Reputation');
        delegates.cashController = this.cashControllerHolder.getComponent('Cash');
        delegates.moreInfoController = this.moreInfoControllerHolder.getComponent('MoreInfoController');
        delegates.regionsController = this.regionsControllerHolder.getComponent('RegionsController');
        delegates.scrollerController = this.scrollerControllerHolder.getComponent('Scroller');
        delegates.scrollerController.regionsController = delegates.regionsController;
    },

    onRegionSelect() {
        this.delegates.regionsController.selectRegion(this._onRegionSelected.bind(this));
    },

    _onRegionSelected(selectedRegion) {
        cc.log('Selected Region' + selectedRegion);
    }
});
