import { REGIONS } from 'Constants';

cc.Class({
    extends: cc.Component,

    properties: {
        wheel: cc.Node,
        _lastUpdateRotation: 0
    },

    onLoad() {
        this.setEnable(true);
    },

    setEnable(bool) {
        if (bool) {
            this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
            this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
            this.node.on(cc.Node.EventType.TOUCH_ENDED, this.onTouchEnded, this);
        } else {
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
            this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
            this.node.off(cc.Node.EventType.TOUCH_ENDED, this.onTouchEnded, this);
        }
    },

    //get location is an event function for location

    onTouchBegan(touch) {//when fingger touch it
        cc.log('onTouchBegan');
        this._isTouching = true;
        this._touchLocation = touch.getLocation();//get the location of a fingger

        return true;
    },

    onTouchEnded(touch, event) {
        cc.log('onTouchEnded');//when fingger remove
        const location = touch.getLocation();//get the  current location
        this.rotateToPoint(location);//position of an object 

        this._isTouching = false;
        this._touchLocation = null;

        return true;
    },

    onTouchMoved(touch, event) {
        cc.log('onTouchMoved');
        const location = touch.getLocation();
        this.rotateToPoint(location);//update of an object position

        return true;
    },

    rotateToPoint(location) {
        const delta = location.x - this._touchLocation.x;
        this._touchLocation = location;
        this.node.rotation = this.node.rotation + delta;//update the scroll position
        this.checkSelection();
    },

    checkSelection() {
        const delta = this.node.rotation - this._lastUpdateRotation;
        const segmentAngle = 5;

        // cc.log(this.node.rotation);
        // cc.log(delta);

        if (Math.abs(delta * 0.1) > segmentAngle) {

            if (delta > 0) {
                this.regionsController.next();
            } else if (delta < 0) {
                this.regionsController.previous();
            }
            this._lastUpdateRotation = this.node.rotation;
        }
    },
});
