function getG4(spectrumX, spectrumY) {
	var option = {
		backgroundColor: '#303749',
		title: {
			top: '5',
			left: 'center',
			text: "频谱图",
			textStyle: {
				//文字颜色
				color: "#ffb052",

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
			itemHeight: 8, // 图例图形高度
			textStyle: {
				fontSize: 12,
				color: 'white'
			}
		},
		toolbox: {
			show: true,
			feature: {
			
				saveAsImage: {}
			}
		},
		xAxis: {
			name: "[Hz]",
			/* data: ['2021-01-02 16:00:02', '2021-02-02 16:00:02', '2021-03-02 16:00:02', '2021-04-02 16:00:02', '2021-05-02 16:00:02', '2021-06-02 16:00:02', '2021-07-02 16:00:02'], */
			data: spectrumX,
			splitLine: {

				show: true,
				lineStyle: {
					type: 'solid', //'dotted'虚线 'solid'实线，
					color: 'rgba(255,255,255,0.3)'
				},
			},
			type: 'category',
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: 'rgba(255,255,255,0.3)',
					width: '1.5' //坐标线的宽度
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff', //坐标值得具体的颜色

				}
			}

		},
		yAxis: {
			name: "[um]",
			// boundaryGap: [0.2, 0.2],
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dotted', //'dotted'虚线 'solid'实线，
					color: 'rgba(255,255,255,0.3)'
				},
			},
			type: 'value',
			//splitNumber: 3,
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: 'rgba(255,255,255,0.3)',
					width: '1.5' //坐标线的宽度
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff', //坐标值得具体的颜色

				}
			}
		},
		series: [{
			name: '',
			/* data: [150, 230, 224, 218, 135, 147, 260], */
			data: spectrumY,
			type: 'line',
			color: '#00FF00',
		}]
	}
	myChart4.setOption(option);
}

function getG3(spectrumX, spectrumY) {
	var option = {
		backgroundColor: '#303749',
		title: {
			top: '5',
			left: 'center',
			text: "波形图",
			textStyle: {
				//文字颜色
				color: "#ffb052",

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
			itemHeight: 8, // 图例图形高度
			textStyle: {
				fontSize: 12,
				color: 'white'
			}
		},
		toolbox: {
			show: true,
			feature: {
			
				saveAsImage: {}
			}
		},
		xAxis: {
			name: "[秒]",
			/* data: ['2021-01-02 16:00:02', '2021-02-02 16:00:02', '2021-03-02 16:00:02', '2021-04-02 16:00:02', '2021-05-02 16:00:02', '2021-06-02 16:00:02', '2021-07-02 16:00:02'], */
			data: spectrumX,
			splitLine: {

				show: true,
				lineStyle: {
					type: 'solid', //'dotted'虚线 'solid'实线，
					color: 'rgba(255,255,255,0.3)'
				},
			},
			type: 'category',
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: 'rgba(255,255,255,0.3)',
					width: '1.5' //坐标线的宽度
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff', //坐标值得具体的颜色

				}
			}

		},
		yAxis: {
			name: "[um]",
			// boundaryGap: [0.2, 0.2],
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dotted', //'dotted'虚线 'solid'实线，
					color: 'rgba(255,255,255,0.3)'
				},
			},
			type: 'value',
			//splitNumber: 3,
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: 'rgba(255,255,255,0.3)',
					width: '1.5' //坐标线的宽度
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff', //坐标值得具体的颜色

				}
			}
		},
		series: [{
			name: '',
			/* data: [150, 230, 224, 218, 135, 147, 260], */
			data: spectrumY,
			type: 'line',
			color: '#00FF00',
		}]
	}
	myChart3.setOption(option);
}

function getG2(spectrumX, spectrumY) {
	var option = {
		backgroundColor: '#303749',
		title: {
			top: '5',
			left: 'center',
			text: "转速趋势图",
			textStyle: {
				//文字颜色
				color: "#ffb052",

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
			itemHeight: 8, // 图例图形高度
			textStyle: {
				fontSize: 12,
				color: 'white'
			}
		},
		toolbox: {
			show: true,
			feature: {
			
				saveAsImage: {}
			}
		},
		
		
		xAxis: {
			name: "[时间]",
			/* data: ['2021-01-02 16:00:02', '2021-02-02 16:00:02', '2021-03-02 16:00:02', '2021-04-02 16:00:02', '2021-05-02 16:00:02', '2021-06-02 16:00:02', '2021-07-02 16:00:02'], */
			data: spectrumX,
			splitLine: {

				show: true,
				lineStyle: {
					type: 'solid', //'dotted'虚线 'solid'实线，
					color: 'rgba(255,255,255,0.3)'
				},
			},
			type: 'category',
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: 'rgba(255,255,255,0.3)',
					width: '1.5' //坐标线的宽度
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff', //坐标值得具体的颜色

				}
			}

		},
		yAxis: {
			name: "[r/min]",
			// boundaryGap: [0.2, 0.2],
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dotted', //'dotted'虚线 'solid'实线，
					color: 'rgba(255,255,255,0.3)'
				},
			},
			type: 'value',
			//splitNumber: 3,
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: 'rgba(255,255,255,0.3)',
					width: '1.5' //坐标线的宽度
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff', //坐标值得具体的颜色

				}
			}
		},
		series: [{
			name: '',
			/* data: [150, 230, 224, 218, 135, 147, 260], */
			data: spectrumY,
			type: 'line',
			color: '#00FF00',
		}]
	}
	myChart2.setOption(option);
}


function getG1(spectrumX, seri) {
	var option = {
		backgroundColor: '#303749',
		title: {
			top: '5',
			left: 'center',
			text: "实时趋势图",
			textStyle: {
				//文字颜色
				color: "#ffb052",

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
			data: ["X", "Y"],
			// y: 'bottom',
			bottom: '10%',
			x: 'center',
			// 图例样式修改
			itemWidth: 12,
			itemHeight: 8, // 图例图形高度
			textStyle: {
				fontSize: 12,
				color: 'white'
			}
		},
		toolbox: {
			show: true,
			feature: {
			
				saveAsImage: {}
			}
		},
		xAxis: {
			name: "[时间]",
			/* data: ['2021-01-02 16:00:02', '2021-02-02 16:00:02', '2021-03-02 16:00:02', '2021-04-02 16:00:02', '2021-05-02 16:00:02', '2021-06-02 16:00:02', '2021-07-02 16:00:02'], */
			data: spectrumX,
			splitLine: {

				show: true,
				lineStyle: {
					type: 'solid', //'dotted'虚线 'solid'实线，
					color: 'rgba(255,255,255,0.3)'
				},
			},
			type: 'category',
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: 'rgba(255,255,255,0.3)',
					width: '1.5' //坐标线的宽度
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff', //坐标值得具体的颜色

				}
			}

		},
		yAxis: {
			name: "[mm/s2]",
			// boundaryGap: [0.2, 0.2],
			splitLine: {
				show: true,
				lineStyle: {
					type: 'dotted', //'dotted'虚线 'solid'实线，
					color: 'rgba(255,255,255,0.3)'
				},
			},
			type: 'value',
			//splitNumber: 3,
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: 'rgba(255,255,255,0.3)',
					width: '1.5' //坐标线的宽度
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff', //坐标值得具体的颜色

				}
			}
		},

		series: seri


		//  [{
		// 		name: "X",
		// 		/* data: [150, 230, 224, 218, 135, 147, 260], */
		// 		data: Y1,
		// 		type: 'line',
		// 		color: '#00FF00'


		// 	},

		// 	{
		// 		name: "Y",
		// 		/* data: [150, 230, 224, 218, 135, 147, 260], */
		// 		data: Y2,
		// 		type: 'line',
		// 		color: '#ff1a1a'


		// 	},

		// ]
	}
	myChart1.setOption(option);
}


function Graphclear() {
	myChart1.clear();
	myChart2.clear();
}

function clearall() {
	myChart1.clear();
	myChart2.clear();
	myChart3.clear();
	myChart4.clear();
}

/* var cbx=document.getElementsByName("p");
console.log(cbx[0].value);
 */



var app = new Vue({

	el: "#app",

	data: {

		series: [],
		xclc: true,
		yclc: false,
		nodeId: "",
		equipmentUuid: "",
		pointId: [],
		isy12:"",
		spectrumX: [],
		spectrumY: [],
		waveX: [],
		waveY: [],
		timer: "",
		time: [],
		y1: [], //实时趋势图纵坐标
		y12: [], //第二个图的实时趋势
		y2: [], //转速纵坐标
		isfirst: false,
		message: "hhh",
		show1: false,
		show2: false,
		show3: false,
		show4: false,
		show5: false,
		imgurl1: "../images/rightsan",
		imgurl2: "../images/downsan",
		flag: 0,
		isstop: false

	},
	mounted: function() {

		this.GetnodeId();
		this.timer = setInterval(this.GetnodeId, 3000);

	},
	methods: {

		// Get: function() {
		// 	// this.GetnodeId();
		// 	if (this.xclc || this.yclc) {

		// 		this.GetnodeId();

		// 	}


		// },

		xclick: function() {

			this.xclc = !this.xclc;
			Graphclear();
			this.time = [];
			this.y1 = [];
			this.y12 = [];
			this.y2 = [];
			this.series = [];
			// getG1(this.time, this.series);
			// getG2(this.time, this.y2);
			if (this.xclc == false && this.yclc == false) {
				clearall();
			}
			this.GetnodeId();

		},

		yclick: function() {

			this.yclc = !this.yclc;
			Graphclear();
			this.time = [];
			this.y1 = [];
			this.y12 = [];
			this.y2 = [];
			this.series = [];
			if (this.xclc == false && this.yclc == false) {
				clearall();
			}
			this.GetnodeId();
			// getG1(this.time, this.series);
			// getG2(this.time, this.y2);
		},

		click1: function() {
			if (this.show2) {
				this.show2 = !this.show2;
			}
			if (this.show3)
				this.show3 = !this.show3;
			if (this.show4)
				this.show4 = !this.show4;
			if (this.show5)
				this.show5 = !this.show5;
			this.show1 = !this.show1;
		},
		click2: function() {
			if (this.show3)
				this.show3 = !this.show3;
			if (this.show4)
				this.show4 = !this.show4;
			if (this.show5)
				this.show5 = !this.show5;
			this.show2 = !this.show2;
		},
		click3: function() {
			if (this.show4)
				this.show4 = !this.show4;
			if (this.show5)
				this.show5 = !this.show5;
			this.show3 = !this.show3;
		},
		click4: function() {
			if (this.show5)
				this.show5 = !this.show5;
			this.show4 = !this.show4;
		},
		click5: function() {
			this.show5 = true;
		},


		stop: function() {
			this.isstop = !this.isstop;
			console.log(this.isstop);
			if (this.isstop) {
				clearInterval(this.timer);
			} else {

				Graphclear();
				Graphclear();
				this.time = [];
				this.y1 = [];
				this.y12 = [];
				this.y2 = [];
				this.series = [];
				this.GetnodeId();
				this.timer = setInterval(this.GetnodeId, 3000);
			}
		},
		GetnodeId: function() {
			that = this;
			axios.get("http://39.106.127.16:6793/node/info").then(
				function(response) {
					/* console.log(response); */
					console.log("获得nodeid");
					// console.log(response.data.data[0].nodeId);
					that.nodeId = response.data.data[0].nodeId;

					if (that.xclc == true || that.yclc == true) {
						if (that.isfirst) {
							that.GetGraph2();
							that.GetGraph3();
							that.GetGraph4();
						} else {
							that.GetequipId();
							that.isfirst = true;
						}
					} else {
						that.waveX = [];
						that.waveY = [];
						that.spectrumX = [];
						that.spectrumY = [];
						clearall();
						getG1(this.time, this.series);
						getG2(this.time, this.y2);
						getG3(that.waveX, that.waveY);
						getG4(that.spectrumX, that.spectrumY);
					}

				})

		},

		GetequipId: function() {
			that = this;
			axios.get("http://39.106.127.16:6793/equipment/node/" + this.nodeId + "/info").then(
				function(response) {
					console.log("获得equipid");
					console.log(response);
					that.equipmentUuid = response.data.data[0].equipmentUuid;
					that.GetpointId();

				})

		},

		GetpointId: function() {
			that = this;
			axios.get("http://39.106.127.16:6793/point/" + this.equipmentUuid + "/detail").then(
				function(response) {
					console.log(response);
					that.pointId.push(response.data.data[0].pointId);
					that.pointId.push(response.data.data[1].pointId);
					console.log("获得pointid");
					that.GetGraph2();
					that.GetGraph3();
					that.GetGraph4();

				})
		},




		GetGraph2: function() {
			that = this;

			axios.get("http://39.106.127.16:6793/trend/" + this.equipmentUuid + "/" + this.pointId[0] +
				"/real_time").then(
				function(response) {
					
					thats = that;
					axios.get("http://39.106.127.16:6793/trend/" + that.equipmentUuid + "/" + that
						.pointId[1] +
						"/real_time").then(
						function(response) {
							console.log("第二个");
							console.log(response);
							thats.isy12 = response.data.data.trendValue[0].all;
							// console.log(isy12);
							// thats.y12.push(isy12);

						}
					)
					console.log("第一个");
					console.log(response);
					/* 				console.log(response.data.data.waveValue.waveX) */

					console.log(that.isy12);
					var dtime = new Date();
					var year = dtime.getFullYear();
					var month = dtime.getMonth() + 1;
					var day = dtime.getDate();
					var hour = dtime.getHours();
					var minu = dtime.getMinutes();
					var sec = dtime.getSeconds();
					var times = year + "-" + month + "-" + day + " " + hour + ":" + minu + ":" + sec;
					that.time.push(times);
					isy2 = response.data.data.rev;
					that.y2.push(isy2);



					isy1 = response.data.data.trendValue[0].all;
					that.y1.push(isy1);
					that.y12.push(that.isy12);



					var yx1 = {
						name: "X",
						data: that.y1,
						type: 'line',
						color: '#00FF00'

					};
					var yy1 = {
						name: "Y",
						data: that.y12,
						type: 'line',
						color: '#ff1a1a'
					};


					that.series[0] = yx1;
					that.series[1] = yy1;

					if (that.xclc == true && that.yclc == false) {
						that.series.splice(1, 1);
					} else if (that.xclc == false && that.yclc == true) {
						that.series.splice(0, 1);
					} else if (that.xclc == false && that.yclc == false) {
						that.series.splice(1, 1);
						that.series.splice(0, 1);
					}

					// 				if(that.xclc==true&&that.yclc==true)
					// 				{
					// /* 					that.series[0]=yx1;
					// 					that.series[1]=yy1; */
					// 				}
					// 				else if(that.xclc==true&&that.yclc==false)
					// 				{

					// 				}

					// that.series[0]=yx1;
					// that.series[1]=yy1;
					/* 					that.series.push(yx1);
										that.series.push(yy1); */
					console.log(that.series);
					getG1(that.time, that.series);
					getG2(that.time, that.y2);
					console.log("获得图12");
				}
			)
		},



		GetGraph3: function() {
			that = this;
			axios.get("http://39.106.127.16:6793/trend/" + this.equipmentUuid + "/" + this.pointId +
				"/real_time").then(
				function(response) {
					console.log(response);
					/* 				console.log(response.data.data.waveValue.waveX) */
					that.waveX = response.data.data.waveValue.waveX;
					that.waveY = response.data.data.waveValue.waveY;
					getG3(that.waveX, that.waveY);
					/* 					var dtime = new Date();
										console.log(dtime); */
					console.log("获得图3");
				}
			)


		},


		GetGraph4: function() {
			that = this;
			axios.get("http://39.106.127.16:6793/trend/" + this.equipmentUuid + "/" + this.pointId +
				"/real_time").then(
				function(response) {
					/* 				console.log(response);
									console.log(response.data.data.spectrumValue.spectrumX) */
					that.spectrumX = response.data.data.spectrumValue.spectrumX;
					that.spectrumY = response.data.data.spectrumValue.spectrumY;
					getG4(that.spectrumX, that.spectrumY);


				}
			)


		},



	}

})
