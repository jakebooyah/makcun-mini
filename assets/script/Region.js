cc.Class({
    extends: cc.Component,

    properties: {
        selectHighlight: cc.Node
    },

    setHighlight(bool) {
        this.selectHighlight.active = bool;
        this.node.zIndex = bool ? 1 : 0;
    },

    playSelectedAnim(callback) {
        this._onSelectAnim = callback;
        this.node.zIndex = 1;
        this.node.runAction(cc.sequence(
            cc.spawn(
                cc.scaleTo(0.7, 1.3),
                cc.fadeTo(0.7, 128)
            ),
            cc.callFunc(this.onSelectAnimComplete, this)
        ));
    },

    onSelectAnimComplete() {
        const onSelectAnim = this._onSelectAnim;
        onSelectAnim && onSelectAnim();
        this._onSelectAnim = null;

        this.node.zIndex = 0;
        this.node.scale = 1;
        this.node.opacity = 255;
    }
});