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

        delegates.regionsController = this.regionsControllerHolder.getComponent('RegionsController');
        delegates.regionsController.setOnRegionSelect(this.onRegionSelect.bind(this));

        delegates.scrollerController = this.scrollerControllerHolder.getComponent('Scroller');
        delegates.scrollerController.regionsController = delegates.regionsController;

        delegates.reputationController = this.reputationControllerHolder.getComponent('Reputation');
        delegates.cashController = this.cashControllerHolder.getComponent('Cash');
        delegates.moreInfoController = this.moreInfoControllerHolder.getComponent('MoreInfoController');
    },

    onRegionSelect(selectedRegion) {
        cc.log('Selected Region' + selectedRegion);
    }
});
