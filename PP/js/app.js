function getG4(spectrumX, spectrumY, textname, xname, yname) {
	var option = {
		backgroundColor: '#303749',
		title: {
			top: '5',
			left: 'center',
			text: textname,
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
		xAxis: {
			name: xname,
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
			name: yname,
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

function getG3(spectrumX, spectrumY, textname, xname, yname) {
	var option = {
		backgroundColor: '#303749',
		title: {
			top: '5',
			left: 'center',
			text: textname,
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
		xAxis: {
			name: xname,
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
			name: yname,
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

function getG2(spectrumX, spectrumY, textname, xname, yname) {
	var option = {
		backgroundColor: '#303749',
		title: {
			top: '5',
			left: 'center',
			text: textname,
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
		xAxis: {
			name: xname,
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
			name: yname,
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


function getG1(spectrumX, Y1, Y2, textname, xname, yname) {
	var option = {
		backgroundColor: '#303749',
		title: {
			top: '5',
			left: 'center',
			text: textname,
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
		xAxis: {
			name: xname,
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
			name: yname,
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
			name: "X",
			/* data: [150, 230, 224, 218, 135, 147, 260], */
			data: Y1,
			type: 'line',
			color: '#00FF00'


		},

		{
			name: "Y",
			/* data: [150, 230, 224, 218, 135, 147, 260], */
			data: Y2,
			type: 'line',
			color: '#ff1a1a'


		},

		]
	}
	myChart1.setOption(option);
}



/* var cbx=document.getElementsByName("p");
console.log(cbx[0].value);
 */



var app = new Vue({

	el: "#app",

	data: {

		xclc: true,
		yclc: false,
		nodeId: "",
		equipmentUuid: "",
		pointId: "",
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
		imgurl2: "../images/downsan"

	},
	mounted: function () {

		this.GetnodeId();
		this.timers = setInterval(this.GetnodeId, 5000);

	},
	methods: {

		Get: function () {
			// this.GetnodeId();
			if (this.xclc || this.yclc) {

				this.GetnodeId();

			}


		},

		xclick: function () {

			this.xclc = !this.xclc;
			this.time = [];
			this.y1 = [];
			this.y12 = [];
			getG1(this.time, this.y1, this.y12, "实时趋势图", "[时间]", "[mm/s2]")
		},

		yclick: function () {

			this.yclc = !this.yclc;
			this.time = [];
			this.y1 = [];
			this.y12 = [];
			getG1(this.time, this.y1, this.y12, "实时趋势图", "[时间]", "[mm/s2]")
		},
		click1: function () {
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
		click2: function () {
			if (this.show3)
				this.show3 = !this.show3;
			if (this.show4)
				this.show4 = !this.show4;
			if (this.show5)
				this.show5 = !this.show5;
			this.show2 = !this.show2;
		},
		click3: function () {
			if (this.show4)
				this.show4 = !this.show4;
			if (this.show5)
				this.show5 = !this.show5;
			this.show3 = !this.show3;
		},
		click4: function () {
			if (this.show5)
				this.show5 = !this.show5;
			this.show4 = !this.show4;
		},
		click5: function () {
			this.show5 = true;
		},


		GetnodeId: function () {
			that = this;
			axios.get("http://39.106.127.16:6793/node/info").then(
				function (response) {
					/* console.log(response); */
					console.log("获得nodeid");
					console.log(response.data.data[0].nodeId);
					that.nodeId = response.data.data[0].nodeId;
					if (that.xclc || that.yclc) {
						if (that.isfirst) {
							that.GetGraph2();
							that.GetGraph3();
							that.GetGraph4();
						} else {
							that.GetequipId();
							that.isfirst = true;
						}


					}





				})

		},

		GetequipId: function () {
			that = this;
			axios.get("http://39.106.127.16:6793/equipment/node/" + this.nodeId + "/info").then(
				function (response) {
					console.log("获得equipid");
					/* console.log(response); */
					that.equipmentUuid = response.data.data[0].equipmentUuid;
					that.GetpointId();

				})

		},

		GetpointId: function () {
			that = this;
			axios.get("http://39.106.127.16:6793/point/" + this.equipmentUuid + "/detail").then(
				function (response) {
					console.log(response);
					that.pointId = response.data.data[0].pointId;
					console.log("获得pointid");
					that.GetGraph2();
					that.GetGraph3();
					that.GetGraph4();

				})
		},




		GetGraph2: function () {
			that = this;
			axios.get("http://39.106.127.16:6793/trend/" + this.equipmentUuid + "/" + this.pointId +
				"/real_time").then(
					function (response) {
						console.log(response);
						/* 				console.log(response.data.data.waveValue.waveX) */
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
						that.y12.push(isy2);
						getG1(that.time, that.y1, that.y12, "实时趋势图", "[时间]", "[mm/s2]");
						getG2(that.time, that.y2, "转速趋势图", "[时间]", "[r/min]");
						console.log("获得图");
					}
				)
		},


		GetGraph3: function () {
			that = this;
			axios.get("http://39.106.127.16:6793/trend/" + this.equipmentUuid + "/" + this.pointId +
				"/real_time").then(
					function (response) {
						console.log(response);
						/* 				console.log(response.data.data.waveValue.waveX) */
						that.waveX = response.data.data.waveValue.waveX;
						that.waveY = response.data.data.waveValue.waveY;
						getG3(that.waveX, that.waveY, "波形图", "[秒]", "[um]");
						/* 					var dtime = new Date();
											console.log(dtime); */
						console.log("获得图");
					}
				)


		},


		GetGraph4: function () {
			that = this;
			axios.get("http://39.106.127.16:6793/trend/" + this.equipmentUuid + "/" + this.pointId +
				"/real_time").then(
					function (response) {
						/* 				console.log(response);
										console.log(response.data.data.spectrumValue.spectrumX) */
						that.spectrumX = response.data.data.spectrumValue.spectrumX;
						that.spectrumY = response.data.data.spectrumValue.spectrumY;
						getG4(that.spectrumX, that.spectrumY, "频谱图", "[Hz]", "[um]");

					}
				)


		},



	}

})
