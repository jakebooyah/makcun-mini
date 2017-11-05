cc.Class({
    extends: cc.Component,

    properties: {
        repBonusValue: cc.Label,
        bonusValue: cc.Label,
        missedValue: cc.Label,
        earnedValue: cc.Label,
        repEarnedValue: cc.Label
    },

    init(repBonus, bonus, missed, earned, repEarned, callback) {
        this.onBackCallback = callback;
        this.repBonusValue.string = repBonus + '%';
        this.bonusValue.string = bonus;
        this.missedValue.string = missed;
        this.earnedValue.string = '$' + earned;
        this.repEarnedValue.string = repEarned;
        this.node.active = true;
    },

    onBack() {
        this.node.active = false;
        const callback = this.onBackCallback;
        callback && callback();
        this.onBackCallback = null;
    }
});
