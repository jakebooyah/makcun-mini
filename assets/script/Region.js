cc.Class({
    extends: cc.Component,

    properties: {
        selectHighlight: cc.Node
    },

    setHighlight(bool) {
        this.selectHighlight.active = bool;
    },
});