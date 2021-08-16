<template>
	<div>
		<NavMenu />
		<div id="echart"></div>

	</div>
</template>
<script>
	let echarts = require('../../assets/js/myEcharts.js');
	import NavMenu from "@/components/index/NavMenu.vue";
	export default {
		name: "echart",
		components: {
			NavMenu,
		},
		data() {
			return {
				
			};
		},
		mounted() {
			this.echart()
		},

		methods: {
			echart(){
				var c=document.getElementById('echart');
				var myChart = echarts.init(echart);
				var option;
				option = {
				    title: {
				        text: 'RAB用地碳排放占比饼状图',
				        left: 'center'
				    },
				    tooltip: {
				        trigger: 'item'
				    },
				    legend: {
				        orient: 'vertical',
				        left: 'left',
				    },
				    series: [
				        {
				            type: 'pie',
				            radius: '50%',
				            data: [
				                {value: 1048, name: '居住R'},
				                {value: 735, name: '公服A'},
				                {value: 580, name: '商业B'},
				            ],
				            emphasis: {
				                itemStyle: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
				};
				option && myChart.setOption(option);
			}
		}
	};
</script>

<style scoped>
	#echart{
		position: absolute;
		top: 50%;
		margin-top: -12%;
		width: 100%;
		height: 60vh;												
	}
</style>
