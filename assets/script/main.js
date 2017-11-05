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
        cc.audioEngine.stopAll();
        const delegates = this.delegates = {};

        delegates.reputationController = this.reputationControllerHolder.getComponent('Reputation');
        delegates.cashController = this.cashControllerHolder.getComponent('Cash');
        delegates.infoController = this.infoControllerHolder.getComponent('InfoController');
        delegates.regionsController = this.regionsControllerHolder.getComponent('RegionsController');
        delegates.scrollerController = this.scrollerControllerHolder.getComponent('Scroller');
        delegates.scrollerController.regionsController = delegates.regionsController;

        delegates.cashController.init();
        delegates.reputationController.init();
        delegates.regionsController.init();
        delegates.infoController.init(delegates.cashController, delegates.regionsController);


        const path = cc.url.raw('resources/audio/menu_bgm.mp3');
        cc.audioEngine.play(path, true);
    },

    onRegionSelect() {
        this.delegates.regionsController.selectRegion(this._onRegionSelected.bind(this));

        const path = cc.url.raw('resources/audio/state.mp3');
        cc.audioEngine.play(path);
    },

    _onRegionSelected(selectedRegion) {
        cc.log('Selected Region ' + selectedRegion);
        this.delegates.infoController.showInfoForState(selectedRegion);
    },

    unlockState() {
        this.delegates.infoController.unlockState(this.delegates.cashController);
    },
});
