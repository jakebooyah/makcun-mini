cc.Class({
    extends: cc.Component,

    properties: {
        selectHighlight: cc.Node,

        highlightSprite: cc.Sprite,
        baseSprite: cc.Sprite,

        lockedHighlight: cc.SpriteFrame,
        locked: cc.SpriteFrame,
        unlockedHighlight: cc.SpriteFrame,
        unlocked: cc.SpriteFrame
    },

    setIsUnlock(bool) {
        if (bool) {
            this.highlightSprite.spriteFrame = this.unlockedHighlight;
            this.baseSprite.spriteFrame = this.unlocked;
        } else {
            this.highlightSprite.spriteFrame = this.lockedHighlight;
            this.baseSprite.spriteFrame = this.locked;
        }
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