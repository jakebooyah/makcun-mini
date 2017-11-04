cc.Class({
    extends: cc.Component,

    properties: {
        regionsControllerHolder: cc.Node
    },

    // use this for initialization
    onLoad() {
        this.regionsController = this.regionsControllerHolder.getComponent('RegionsController');
    },

    
});
