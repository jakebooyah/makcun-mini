cc.Class({
    extends: cc.Component,

    properties: {
        wheel: cc.Node
    },

    // use this for initialization
    onLoad() {
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.onTouchBegan.bind(this),
            onTouchMoved: this.onTouchMoved.bind(this),
            onTouchEnded: this.onTouchEnded.bind(this)
        }, this.node);
    },

    onTouchBegan(touch) {
        cc.log('onTouchBegan');
        this._isTouching = true;
        this._touchLocation = touch.getLocation();

        return true;
    },

    onTouchEnded(touch, event) {
        cc.log('onTouchEnded');
        const location = touch.getLocation();
        this.rotateToPoint(location);

        this._isTouching = false;
        this._touchLocation = null;

        return true;
    },

    onTouchMoved(touch, event) {
        cc.log('onTouchMoved');
        const location = touch.getLocation();
        this.rotateToPoint(location);

        return true;
    },

    rotateToPoint(location) {
        const delta = location.x - this._touchLocation.x;

        this._touchLocation = location;

        cc.log(this.node.rotation);
        this.node.rotation = this.node.rotation + delta * 0.1;
        cc.log(this.node.rotation);
    }
});
