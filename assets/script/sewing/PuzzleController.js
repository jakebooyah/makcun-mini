function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

cc.Class({
    extends: cc.Component,

    properties: {
        puzzleindex: 0
    },

    // use this for initialization
    onLoad() {
        this.ranNums = Array.from(Array(53).keys())
        shuffleArray(this.ranNums);
    },

    next() {
        const name = 'puzzles_piece' + (this.ranNums[this.puzzleindex] + 1);
        this.node.getChildByName(name).active = true;
        this.puzzleindex++;
    },

    showAll() {
        let children = this.node.children;
        for (var i = 0; i < children.length; ++i) {
            children[i].active = true;
        }
    },
});
