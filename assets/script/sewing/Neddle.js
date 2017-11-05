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

        Height: 0,
        Duration: 0,
        time: 4,
    },

    // use this for initialization
    onLoad: function () {
        
        this.MoveAction = this.SetMoveAction();//move Neddle
        this.node.runAction(this.MoveAction);
        
    },

    SetMoveAction(){
        let MoveUp = cc.moveTo(this.Duration,cc.p(this.node.x,this.Height)).easing(cc.easeCubicActionOut());//move up
        let MoveDown = cc.moveTo(this.Duration,cc.p(this.node.x,- this.Height)).easing(cc.easeCubicActionOut());//move down

        return cc.repeatForever( cc.sequence(MoveUp,MoveDown));
    },

    SetDuration(){
        this.CheckRange= this.Height-(this.Height/6);
        cc.log(this.node.getPosition());
        if(this.node.y>this.CheckRange||this.node.y<-this.CheckRange)
        {
            if(this.time>0){
                this.Duration = (this.Duration)/2;
                cc.log(this.Duration);
                this.node.stopAllActions();
                this.node.runAction(this.SetMoveAction());
                this.time--;
            }
        }else
        {
            if(this.time<5){
                this.Duration = (this.Duration)*2;
                cc.log(this.Duration);
                this.node.stopAllActions();
                this.node.runAction(this.SetMoveAction());
                this.time++;
            }
        }
        
        
    },
    
    

    // called every frame, uncomment this function to activate update callback
    /*update: function () {
        this.node.runAction(this.MoveAction);
     },*/
});
