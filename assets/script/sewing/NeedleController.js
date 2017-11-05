const HEIGHT = 312.5;
const DURATION = 3;
const INTSPEED = 200;
const MAXSPEED = 500;
const THRESHOLD = 300;

cc.Class({
    extends: cc.Component,

    properties: {
        paused: true,
    },

    onLoad() {
        this.init();
    },

    init() {
        this.speed = INTSPEED;
        this.direction = 'up';
        this.paused = false;
    },

    setEnable(bool) {
        this.paused = !bool;
    },

    isSuccess() {
        if (Math.abs(this.node.y) > THRESHOLD) {
            this.speedUp();
            return true;
        } else {
            this.resetSpeed();
            return false;
        }
    },

    speedUp() {
        const currentSpeed = Math.abs(this.speed);
        const newSpeed = currentSpeed + 50;
        if (newSpeed > MAXSPEED) {
            this.speed = MAXSPEED;
        } else {
            this.speed = newSpeed;
        }
    },

    resetSpeed() {
        this.speed = INTSPEED;
    },

    update(dt) {
        if (this.paused) return;

        if (this.node.y > HEIGHT) {
            this.direction = 'down';
        } else if (this.node.y < HEIGHT * -1) {
            this.direction = 'up';
        }

        if (this.direction == 'up') {
            this.speed = Math.abs(this.speed);
        } else if (this.direction == 'down') {
            this.speed = Math.abs(this.speed) * -1;
        }

        this.node.y = this.node.y + this.speed * dt;
    }
});
