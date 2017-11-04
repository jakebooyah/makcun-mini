cc.Class({
    extends: cc.Component,

    properties: {
        selectHighlight: cc.Node
    },

    setHighlight(bool) {
        this.selectHighlight.active = bool;
    },

    playSelectedAnim(callback) {
        this._onSelectAnim = callback;
        this.node.runAction(cc.sequence(
            cc.spawn(
                cc.scaleTo(1.3, 0.3),
                cc.fadeOut(0.3)
            ),
            cc.callFunc(this.onSelectAnimComplete, this)
        ));
    },

    onSelectAnimComplete() {
        const onSelectAnim = this._onSelectAnim;
        onSelectAnim && onSelectAnim();
        this._onSelectAnim = null;
    }
});