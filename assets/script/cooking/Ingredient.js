cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Sprite
    },

    init() {
        const moveTo = Math.random() > 0.5 ?
            cc.moveTo(1 + Math.random() * 2, cc.p(this.node.x, -500)) :
            cc.moveTo(1 + Math.random() * 2, cc.p(this.node.x, -500)).easing(cc.easeElasticIn(3.0));

        this.node.runAction(cc.sequence(
            moveTo,
            cc.callFunc(this._onDestroy, this))
        );
    },

    setOnDestroyCallBack(callback) {
        this._onDestroyCallback = callback;
    },

    setPotPosition(pos) {
        this.potPosition = pos;
    },

    setIngridient(type, spriteFrame) {
        this.type = type;
        this.sprite.spriteFrame = spriteFrame;
    },

    onPlayerTouch() {
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(
            cc.spawn(
                cc.moveTo(0.3, this.potPosition),
                cc.fadeOut(0.3)
            ),
            cc.callFunc(this._onRecieve, this)
        ));
    },

    _onRecieve() {
        const callback = this._onDestroyCallback;
        callback && callback(true, this.type);

        this.node.destroy();
    },

    _onDestroy() {
        const callback = this._onDestroyCallback;
        callback && callback(false, this.type);

        this.node.destroy();
    },
});
