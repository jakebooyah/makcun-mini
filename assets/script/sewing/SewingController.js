cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        controller: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
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

    onTouchBegan(touch) {//when fingger touch it
        cc.log('onTouchBegan');
        this._isTouching = true;
        this._touchLocation = touch.getLocation();//get the location of a fingger
        let NeddleController = this.controller.getComponent('Neddle');
        NeddleController.SetDuration();
        return true;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
