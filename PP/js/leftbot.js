var leftbot=new Vue({
			el:"#leftbot",
			data:{
				show1:false,
				show2:false,
				show3:false,
				show4:false,
			},
			methods:{
				click1:function(){
					this.show1=!this.show1;
				},
				click2:function(){
					this.show2=!this.show2;
				},
				click3:function(){
					this.show3=!this.show3;
				},
				click4:function(){
					this.show4=!this.show4;
				}
			}
		})