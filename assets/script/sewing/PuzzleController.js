function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i + 1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

cc.Class({
    extends: cc.Component,

    properties: {
        puzzleindex: 1
    },

    // // use this for initialization
    // onLoad() {
    //     const N = 53;
    //     this.ranNums = shuffle([Array.apply(null, { length: N }).map(Number.call, Number)]);
    // },

    next() {
        const name = 'puzzles_piece' + this.puzzleindex;
        this.node.getChildByName(name).active = true;
        this.puzzleindex++;
    },

    showAll() {
        this.node.children.forEach(function (child) {
            child.active = true;
        }, this);
    },
});
