var app = new Vue({

	el: "#app",

	data: {
		e1: true,
		eclc1: false,
		e2: true,
		eclc2: false,
		e3: true,
		eclc3: false,
		e4: true,
		eclc4: false,
		series: [],
		xclc: true,
		yclc: false,
		nodeId: "",
		equipmentUuid: "",
		pointId: [],
		isy12: "",
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
		isstop: false,
		wavetime: "",
		myChart1: null,
		detaf: "",
		datay: [],
		hideright: true,

		hideleft: true

	},
	mounted: function() {

		this.GetnodeId();
		this.timer = setInterval(this.GetnodeId, 5000);

	},
	methods: {

		hidelclick: function() {
			this.hideleft = !this.hideleft;
			const element = document.getElementById("change");
			if (this.hideleft == false && this.hideright == true) {
				element.style.left = "0%"
				const element1 = document.getElementById("divmiddle");
				element1.style.width = "79.5%";
				myChart1.resize();
				myChart2.resize();
				myChart3.resize();
				myChart4.resize();
			} else if (this.hideleft == false && this.hideright == false) {
				element.style.left = "0%"
				const element1 = document.getElementById("divmiddle");
				element1.style.width = "99%";
				myChart1.resize();
				myChart2.resize();
				myChart3.resize();
				myChart4.resize();
			} else if (this.hideleft == true && this.hideright == true) {
				element.style.left = "15.5%"
				const element1 = document.getElementById("divmiddle");
				element1.style.width = "63%";
				myChart1.resize();
				myChart2.resize();
				myChart3.resize();
				myChart4.resize();
			} else {
				element.style.left = "15.5%"
				const element1 = document.getElementById("divmiddle");
				element1.style.width = "80%";
				myChart1.resize();
				myChart2.resize();
				myChart3.resize();
				myChart4.resize();
			}


			// if(this.hideleft==false)
			// {
			// 	if(this.hideright==false)
			// 	{
			// 		element.style.left="0%"
			// 		const element1 = document.getElementById("divmiddle");
			// 		element1.style.width="90%";
			// 		myChart1.resize();
			// 		myChart2.resize();
			// 		myChart3.resize();
			// 		myChart4.resize();
			// 	}
			// 	else{
			// 		element.style.left="0%"
			// 		const element1 = document.getElementById("divmiddle");
			// 		element1.style.width="79.5%";
			// 		myChart1.resize();
			// 		myChart2.resize();
			// 		myChart3.resize();
			// 		myChart4.resize();
			// 	}


			// }
			// else
			// {
			// 	element.style.left="15.5%"
			// 	const element1 = document.getElementById("divmiddle");
			// 	element1.style.width="63%";
			// 	myChart1.resize();
			// 	myChart2.resize();
			// 	myChart3.resize();
			// 	myChart4.resize();
			// }


		},


		hiderclick: function() {
			this.hideright = !this.hideright;
			const element = document.getElementById("change1");
			if (this.hideright == false && this.hideleft == false) {
				element.style.right = "0%"
				const element1 = document.getElementById("divmiddle");
				element1.style.width = "99%";
				myChart1.resize();
				myChart2.resize();
				myChart3.resize();
				myChart4.resize();
			}
			else if(this.hideright==false&&this.hideleft==true)
			{
				element.style.right = "0%";
				const element1 = document.getElementById("divmiddle");
				element1.style.width = "80%";
				myChart1.resize();
				myChart2.resize();
				myChart3.resize();
				myChart4.resize();
			}
			else if(this.hideright==true&&this.hideleft==false)
			{
				element.style.right = "18.5%";
				const element1 = document.getElementById("divmiddle");
				element1.style.width = "79.5%";
				myChart1.resize();
				myChart2.resize();
				myChart3.resize();
				myChart4.resize();
			}
			else{
				element.style.right = "18.5%";
				const element1 = document.getElementById("divmiddle");
				element1.style.width = "63%";
				myChart1.resize();
				myChart2.resize();
				myChart3.resize();
				myChart4.resize();
			}

			// if (this.hideright == false) {
			// 	if (this.hideleft == false) {
			// 		element.style.right = "0%"
			// 		const element1 = document.getElementById("divmiddle");
			// 		element1.style.width = "90%";
			// 		myChart1.resize();
			// 		myChart2.resize();
			// 		myChart3.resize();
			// 		myChart4.resize();
			// 	} else {
			// 		element.style.right = "0%"
			// 		const element1 = document.getElementById("divmiddle");
			// 		element1.style.width = "80%";
			// 		myChart1.resize();
			// 		myChart2.resize();
			// 		myChart3.resize();
			// 		myChart4.resize();
			// 	}


			// } else {
			// 	element.style.right = "18.5%"
			// 	const element1 = document.getElementById("divmiddle");
			// 	element1.style.width = "63%";
			// 	myChart1.resize();
			// 	myChart2.resize();
			// 	myChart3.resize();
			// 	myChart4.resize();
			// }

		},

		getG4: function(spectrumX, spectrumY) {
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
						dataZoom: {
							yAxisIndex: 'none'
						},
						restore: {},
						saveAsImage: {},
						myFull: {
							show: true,
							title: '全屏',
							icon: "path://M628.053333 628.053333a32 32 0 0 1 45.226667 0l158.72 158.634667V693.333333l0.298667-4.352A32 32 0 0 1 896 693.333333v181.333334l-0.341333 3.84a21.333333 21.333333 0 0 1-20.992 17.493333h-181.333334l-4.352-0.298667a32 32 0 0 1-27.648-31.701333l0.298667-4.352a32 32 0 0 1 31.701333-27.648h93.44l-158.72-158.72-3.114666-3.584a32 32 0 0 1 3.114666-41.642667z m-232.106666 0a32 32 0 0 1 3.114666 41.642667l-3.114666 3.584-158.72 158.72h93.44a32 32 0 0 1 31.701333 27.648l0.298667 4.352a32 32 0 0 1-27.648 31.701333L330.666667 896H149.333333a21.333333 21.333333 0 0 1-20.992-17.493333L128 874.666667v-181.333334a32 32 0 0 1 63.701333-4.352l0.298667 4.352v93.354667l158.72-158.634667a32 32 0 0 1 45.226667 0zM874.666667 128a21.333333 21.333333 0 0 1 20.992 17.493333L896 149.333333v181.333334a32 32 0 0 1-63.701333 4.352L832 330.666667V237.312L673.28 395.946667a32 32 0 0 1-48.341333-41.642667l3.114666-3.584 158.72-158.72h-93.44a32 32 0 0 1-31.701333-27.648L661.333333 160a32 32 0 0 1 27.648-31.701333L693.333333 128h181.333334zM330.666667 128l4.352 0.298667a32 32 0 0 1 27.648 31.701333l-0.298667 4.352a32 32 0 0 1-31.701333 27.648H237.226667l158.72 158.72 3.114666 3.584a32 32 0 0 1-48.341333 41.642667L192 237.312V330.666667l-0.298667 4.352A32 32 0 0 1 128 330.666667V149.333333l0.341333-3.84A21.333333 21.333333 0 0 1 149.333333 128h181.333334z",

							onclick: function(e) {

								const element = document.getElementById("main4");
								that.eclc4 = !that.eclc4;
								console.log("我点击全屏");
								console.log(element.style.height);
								//console.log(that.e1);
								if (that.eclc4 == true) {
									that.e1 = false;
									that.e2 = false;
									that.e3 = false;
									element.style.height = "100%";
									myChart4.resize();



								} else {
									that.e1 = true;
									that.e2 = true;
									that.e3 = true;
									element.style.height = "25%";
									myChart4.resize();
								}

							},

						}

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
		},

		getG3: function(spectrumX, spectrumY) {
			var option = {
				backgroundColor: '#303749',

				title: [{
						top: '5',
						left: 'center',
						text: "波形图",
						textStyle: {
							//文字颜色
							color: "#ffb052",

						}
					},

					{
						top: '5',
						left: '70%',
						text: "[" + this.wavetime + "]",
						textStyle: {
							//文字颜色
							color: "#ffb052",
							fontSize: 15,

						}
					},

					{
						top: '5',
						left: '20%',
						text: "Δf= " + this.detaf + "Hz",
						textStyle: {
							//文字颜色
							color: "#ffb052",
							fontSize: 15,

						}
					},

				],


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
						dataZoom: {
							yAxisIndex: 'none'
						},
						restore: {},
						saveAsImage: {},
						myFull: {
							show: true,
							title: '全屏',
							icon: "path://M628.053333 628.053333a32 32 0 0 1 45.226667 0l158.72 158.634667V693.333333l0.298667-4.352A32 32 0 0 1 896 693.333333v181.333334l-0.341333 3.84a21.333333 21.333333 0 0 1-20.992 17.493333h-181.333334l-4.352-0.298667a32 32 0 0 1-27.648-31.701333l0.298667-4.352a32 32 0 0 1 31.701333-27.648h93.44l-158.72-158.72-3.114666-3.584a32 32 0 0 1 3.114666-41.642667z m-232.106666 0a32 32 0 0 1 3.114666 41.642667l-3.114666 3.584-158.72 158.72h93.44a32 32 0 0 1 31.701333 27.648l0.298667 4.352a32 32 0 0 1-27.648 31.701333L330.666667 896H149.333333a21.333333 21.333333 0 0 1-20.992-17.493333L128 874.666667v-181.333334a32 32 0 0 1 63.701333-4.352l0.298667 4.352v93.354667l158.72-158.634667a32 32 0 0 1 45.226667 0zM874.666667 128a21.333333 21.333333 0 0 1 20.992 17.493333L896 149.333333v181.333334a32 32 0 0 1-63.701333 4.352L832 330.666667V237.312L673.28 395.946667a32 32 0 0 1-48.341333-41.642667l3.114666-3.584 158.72-158.72h-93.44a32 32 0 0 1-31.701333-27.648L661.333333 160a32 32 0 0 1 27.648-31.701333L693.333333 128h181.333334zM330.666667 128l4.352 0.298667a32 32 0 0 1 27.648 31.701333l-0.298667 4.352a32 32 0 0 1-31.701333 27.648H237.226667l158.72 158.72 3.114666 3.584a32 32 0 0 1-48.341333 41.642667L192 237.312V330.666667l-0.298667 4.352A32 32 0 0 1 128 330.666667V149.333333l0.341333-3.84A21.333333 21.333333 0 0 1 149.333333 128h181.333334z",

							onclick: function(e) {

								const element = document.getElementById("main3");
								that.eclc3 = !that.eclc3;
								console.log("我点击全屏");
								console.log(element.style.height);
								//console.log(that.e1);
								if (that.eclc3 == true) {
									that.e1 = false;
									that.e2 = false;
									that.e4 = false;
									element.style.height = "100%";
									myChart3.resize();



								} else {
									that.e1 = true;
									that.e2 = true;
									that.e4 = true;
									element.style.height = "25%";
									myChart3.resize();
								}

							},

						}

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
			myChart3.off('click');
			myChart3.setOption(option);
			that = this;
			myChart3.on('click', function(params) {

				console.log("jjjjjjjjjjjjj");
				console.log(params.name);
				// this.datay.push(params.value);
				// if(this.datay.length==2)
				// {
				// 	this.detaf=1/Math.abs(this.data[0]-this.data[1]);

				// }

				if (that.datay.length < 1) {
					that.datay.push(params.name);

					console.log(that.datay);

				} else {

					that.datay.push(params.name);
					console.log(that.datay);
					that.detaf = 1 / Math.abs(that.datay[0] - that.datay[1]);
					that.detaf = Math.floor(that.detaf * 100) / 100;
					that.getG3(that.waveX, that.waveY);
					that.datay.shift();

				}


			})

		},

		getG2: function(spectrumX, spectrumY) {
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
						dataZoom: {
							yAxisIndex: 'none'
						},
						restore: {},
						saveAsImage: {},
						myFull: {
							show: true,
							title: '全屏',
							icon: "path://M628.053333 628.053333a32 32 0 0 1 45.226667 0l158.72 158.634667V693.333333l0.298667-4.352A32 32 0 0 1 896 693.333333v181.333334l-0.341333 3.84a21.333333 21.333333 0 0 1-20.992 17.493333h-181.333334l-4.352-0.298667a32 32 0 0 1-27.648-31.701333l0.298667-4.352a32 32 0 0 1 31.701333-27.648h93.44l-158.72-158.72-3.114666-3.584a32 32 0 0 1 3.114666-41.642667z m-232.106666 0a32 32 0 0 1 3.114666 41.642667l-3.114666 3.584-158.72 158.72h93.44a32 32 0 0 1 31.701333 27.648l0.298667 4.352a32 32 0 0 1-27.648 31.701333L330.666667 896H149.333333a21.333333 21.333333 0 0 1-20.992-17.493333L128 874.666667v-181.333334a32 32 0 0 1 63.701333-4.352l0.298667 4.352v93.354667l158.72-158.634667a32 32 0 0 1 45.226667 0zM874.666667 128a21.333333 21.333333 0 0 1 20.992 17.493333L896 149.333333v181.333334a32 32 0 0 1-63.701333 4.352L832 330.666667V237.312L673.28 395.946667a32 32 0 0 1-48.341333-41.642667l3.114666-3.584 158.72-158.72h-93.44a32 32 0 0 1-31.701333-27.648L661.333333 160a32 32 0 0 1 27.648-31.701333L693.333333 128h181.333334zM330.666667 128l4.352 0.298667a32 32 0 0 1 27.648 31.701333l-0.298667 4.352a32 32 0 0 1-31.701333 27.648H237.226667l158.72 158.72 3.114666 3.584a32 32 0 0 1-48.341333 41.642667L192 237.312V330.666667l-0.298667 4.352A32 32 0 0 1 128 330.666667V149.333333l0.341333-3.84A21.333333 21.333333 0 0 1 149.333333 128h181.333334z",

							onclick: function(e) {

								const element = document.getElementById("main2");
								that.eclc2 = !that.eclc2;
								console.log("我点击全屏");
								console.log(element.style.height);
								//console.log(that.e1);
								if (that.eclc2 == true) {
									that.e1 = false;
									that.e3 = false;
									that.e4 = false;
									element.style.height = "100%";
									myChart2.resize();



								} else {
									that.e1 = true;
									that.e3 = true;
									that.e4 = true;
									element.style.height = "25%";
									myChart2.resize();
								}

							},

						}

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
		},


		getG1: function(spectrumX, seri) {
			// this.myChart1 = echarts.init(document.getElementById('main1'));
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
						dataZoom: {
							yAxisIndex: 'none'
						},
						restore: {},
						saveAsImage: {},

						myFull: {
							show: true,
							title: '全屏',
							icon: "path://M628.053333 628.053333a32 32 0 0 1 45.226667 0l158.72 158.634667V693.333333l0.298667-4.352A32 32 0 0 1 896 693.333333v181.333334l-0.341333 3.84a21.333333 21.333333 0 0 1-20.992 17.493333h-181.333334l-4.352-0.298667a32 32 0 0 1-27.648-31.701333l0.298667-4.352a32 32 0 0 1 31.701333-27.648h93.44l-158.72-158.72-3.114666-3.584a32 32 0 0 1 3.114666-41.642667z m-232.106666 0a32 32 0 0 1 3.114666 41.642667l-3.114666 3.584-158.72 158.72h93.44a32 32 0 0 1 31.701333 27.648l0.298667 4.352a32 32 0 0 1-27.648 31.701333L330.666667 896H149.333333a21.333333 21.333333 0 0 1-20.992-17.493333L128 874.666667v-181.333334a32 32 0 0 1 63.701333-4.352l0.298667 4.352v93.354667l158.72-158.634667a32 32 0 0 1 45.226667 0zM874.666667 128a21.333333 21.333333 0 0 1 20.992 17.493333L896 149.333333v181.333334a32 32 0 0 1-63.701333 4.352L832 330.666667V237.312L673.28 395.946667a32 32 0 0 1-48.341333-41.642667l3.114666-3.584 158.72-158.72h-93.44a32 32 0 0 1-31.701333-27.648L661.333333 160a32 32 0 0 1 27.648-31.701333L693.333333 128h181.333334zM330.666667 128l4.352 0.298667a32 32 0 0 1 27.648 31.701333l-0.298667 4.352a32 32 0 0 1-31.701333 27.648H237.226667l158.72 158.72 3.114666 3.584a32 32 0 0 1-48.341333 41.642667L192 237.312V330.666667l-0.298667 4.352A32 32 0 0 1 128 330.666667V149.333333l0.341333-3.84A21.333333 21.333333 0 0 1 149.333333 128h181.333334z",

							onclick: function(e) {

								const element = document.getElementById("main1");
								that.eclc1 = !that.eclc1;
								console.log("我点击全屏");
								console.log(element.style.height);
								//console.log(that.e1);
								if (that.eclc1 == true) {
									that.e2 = false;
									that.e3 = false;
									that.e4 = false;
									element.style.height = "100%";
									myChart1.resize();



								} else {
									that.e2 = true;
									that.e3 = true;
									that.e4 = true;
									element.style.height = "25%";
									myChart1.resize();
								}

							},

						}

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



			}
			myChart1.setOption(option);
		},


		Graphclear() {
			myChart1.clear();
			myChart2.clear();
		},

		clearall() {
			myChart1.clear();
			myChart2.clear();
			myChart3.clear();
			myChart4.clear();
		},

		xclick: function() {

			this.xclc = !this.xclc;
			this.Graphclear();
			this.time = [];
			this.y1 = [];
			this.y12 = [];
			this.y2 = [];
			this.series = [];
			// getG1(this.time, this.series);
			// getG2(this.time, this.y2);
			if (this.xclc == false && this.yclc == false) {
				this.clearall();
			}
			this.GetnodeId();

		},

		yclick: function() {

			this.yclc = !this.yclc;
			this.Graphclear();
			this.time = [];
			this.y1 = [];
			this.y12 = [];
			this.y2 = [];
			this.series = [];
			if (this.xclc == false && this.yclc == false) {
				this.clearall();
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

				this.Graphclear();
				this.Graphclear();
				this.time = [];
				this.y1 = [];
				this.y12 = [];
				this.y2 = [];
				this.series = [];
				this.GetnodeId();
				this.timer = setInterval(this.GetnodeId, 5000);
			}
		},


		GetnodeId: function() {
			this.datay = [];
			this.detaf = "";
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
						that.clearall();
						that.getG1(this.time, this.series);
						that.getG2(this.time, this.y2);
						that.getG3(that.waveX, that.waveY);
						that.getG4(that.spectrumX, that.spectrumY);
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

			axios.get("http://39.106.127.16:6793/trend/" + this.equipmentUuid + "/" + this.pointId[
					0] +
				"/real_time").then(
				function(response) {

					thats = that;
					axios.get("http://39.106.127.16:6793/trend/" + that.equipmentUuid + "/" +
						that
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
					var times = year + "-" + month + "-" + day + " " + hour + ":" + minu + ":" +
						sec;
					that.wavetime = times;
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
					that.getG1(that.time, that.series);
					that.getG2(that.time, that.y2);
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


					that.getG3(that.waveX, that.waveY);
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
					that.getG4(that.spectrumX, that.spectrumY);


				}
			)


		},



	}

})
