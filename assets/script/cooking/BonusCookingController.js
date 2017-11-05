cc.Class({
    extends: cc.Component,

    properties: {
        sprite1: cc.Sprite,
        sprite2: cc.Sprite,
        sprite3: cc.Sprite,
    },

    init(item1, item2, item3, onSelectCallback) {
        this._onSelectCallback = onSelectCallback;
        this.sprite1.spriteFrame = item1.sf;
        this.sprite2.spriteFrame = item2.sf;
        this.sprite3.spriteFrame = item3.sf;

        this.options = [item1.id, item2.id, item3.id];

        this.node.active = true;
    },

    button1Select() {
        this.selected = this.options[0];
        this.done();
    },

    button2Select() {
        this.selected = this.options[1];
        this.done();
    },

    button3Select() {
        this.selected = this.options[2];
        this.done();
    },

    done() {
        this.node.active = false;

        const callback = this._onSelectCallback;
        callback && callback(this.selected);
        this._onSelectCallback = null;
    },
});
