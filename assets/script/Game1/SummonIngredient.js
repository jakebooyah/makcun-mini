cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        IngridientList: [cc.Prefab],
        pot: cc.Node

    },

    // use this for initialization
    onLoad: function () {
        //this.IngridientList[0].getComponent('Ingredient').setIngridient(true);
        //this.IngridientList[1].getComponent('Ingredient').setIngridient(false);
        this.schedule(this.SpawnIngridient, 3);
    },

    SpawnIngridient(){//summon ingridient
        let summonIngrident = cc.instantiate(this.IngridientList[Math.round(Math.random()*7)]);//get the random ingridient
        summonIngrident.setPosition(this.GetNewPosition());
        summonIngrident.getComponent('Ingredient').setPotPosition(this.pot.getPosition());
        this.node.addChild(summonIngrident);

    },

    GetNewPosition(){//position of where the object summon
        let randX = (1334/3*Math.random())+1334/4;
        let randY = 750/2;
        return cc.p(randX, randY);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
