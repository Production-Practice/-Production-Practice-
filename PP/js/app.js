function getG(spectrumX,spectrumY)
{
	var option = {
		backgroundColor: '#303749',
		title: {
			top: '20',
			left: 'center',
			text: '频谱图',
			textStyle:{
				//文字颜色
				color:"#ffb052",
	
			}
		},
	
		grid: [{
			left: '7%',
			right: '7%',
			top: '21%',
			bottom: '27%'
		}],
		tooltip: {
			trigger: 'axis'
		},
	
		legend: {
	
			// y: 'bottom',
			bottom: '10%',
			x: 'center',
			// 图例样式修改
			itemWidth: 12,
			itemHeight: 8,            // 图例图形高度
			textStyle: {
				fontSize:12,
				color: 'white'
			}
		},
		xAxis: {
			name: 'Hz',
			/* data: ['2021-01-02 16:00:02', '2021-02-02 16:00:02', '2021-03-02 16:00:02', '2021-04-02 16:00:02', '2021-05-02 16:00:02', '2021-06-02 16:00:02', '2021-07-02 16:00:02'], */
			data:spectrumX,
			splitLine: {
	
				show: true,
				lineStyle: {
					type: 'solid',  //'dotted'虚线 'solid'实线，
					color: 'rgba(255,255,255,0.3)'
				},
			},
			type: 'category',
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: 'rgba(255,255,255,0.3)',
					width:'1.5'//坐标线的宽度
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff',//坐标值得具体的颜色
	
				}
			}
	
		},
		yAxis: {
			name: '[um]',
		   // boundaryGap: [0.2, 0.2],
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dotted',  //'dotted'虚线 'solid'实线，
					color: 'rgba(255,255,255,0.3)'
				},
			},
			type: 'value',
			//splitNumber: 3,
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: 'rgba(255,255,255,0.3)',
					width:'1.5'//坐标线的宽度
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff',//坐标值得具体的颜色
	
				}
			}
		},
		series: [{
			name: '电机架振动位移X',
			/* data: [150, 230, 224, 218, 135, 147, 260], */
			data:spectrumY,
			type: 'line',
			color: '#00FF00',
		}]
	}
	myChart.setOption(option);
}



var app=new Vue({

	el:"#app",

	data:{
		nodeId:"",
		equipmentUuid:"",
		pointId:"",
		spectrumX:[],
		spectrumY:[]
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
				console.log(response.data.data.spectrumValue.spectrumX)
				that.spectrumX=response.data.data.spectrumValue.spectrumX;
				that.spectrumY=response.data.data.spectrumValue.spectrumY;
				getG(that.spectrumX,that.spectrumY);
			}
			)


		},
		

	}

})