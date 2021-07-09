
var app=new Vue({

	el:"#app",

	data:{
		nodeId:"",
		equipmentUuid:"",
		pointId:"",
		message:"hello"
	},
	methods:{
		GetnodeId:function(){
			that=this;
			axios.get("http://39.106.127.16:6793/node/info").then(
			function(response){
				console.log(response);
				console.log(response.data.data[0].nodeId);
				that.nodeId=response.data.data[0].nodeId;

			})

		},

		GetequipId:function(){
			that=this;
			axios.get("http://39.106.127.16:6793/equipment/node/"+this.nodeId+"/info").then(
			function(response){
				console.log(response);
				that.equipmentUuid=response.data.data[0].equipmentUuid;
			})

		},

		GetpointId:function(){
			that=this;
			axios.get("http://39.106.127.16:6793/point/"+this.equipmentUuid+"/detail").then(
			function(response){
				console.log(response);
				that.pointId=response.data.data[0].pointId;
			})
		},

		GetGraph:function(){
			that=this;
			axios.get("http://39.106.127.16:6793/trend/"+this.equipmentUuid+"/"+this.pointId+"/real_time").then(
			function(response){
				console.log(response);
			}
			)


		}

	}

})