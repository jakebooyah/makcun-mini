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
        CorrectNode: cc.Node,
        WrongNode: cc.Node,
        Duration: 0,
        Speed: 750,
        RightIngredient: true,
        
    },

    // use this for initialization
    onLoad: function () {
        let JumpDown = cc.moveTo(this.Duration,cc.p(this.node.x,-this.Speed)); 
        this.node.runAction(cc.sequence(JumpDown, cc.callFunc(this._onFinish, this)));
    },

    setOnDestroyCallBack(callback) {
        this._onDestroy = callback;
    },

    onPlayerTouch() {
        this.node.stopAllActions();
         
        let MoveNode = cc.moveTo(this.Duration/2,cc.p(this.potPosition)).easing(cc.easeCubicActionOut());
        this.node.runAction(cc.sequence(MoveNode,cc.callFunc(this._onRecieve,this)))
    },

    _onRecieve(){
        if(this.RightIngredient == true)
        {
            this.CorrectNode.active = true;
        }
        else{
            this.WrongNode.active = true;
        }
    },

    _onFinish() {
        const callback = this._onDestroy;
        callback && callback();
        this.node.destroy();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
