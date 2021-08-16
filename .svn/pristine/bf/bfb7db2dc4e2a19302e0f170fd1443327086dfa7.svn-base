<template>
	<div class="bg-grey">
		<GnMenu @change="change" />
		<el-row>
			<el-col :span="18">
				<div class="grid-content margin10">左侧</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content margin10">右侧</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	// @ is an alias to /src
	import GnMenu from '@/components/home/GnMenu.vue'

	export default {
		name: 'map',
		components: {
			GnMenu
		},
		data() {
			return {

			}
		},
		methods: {
			change(index) {
				console.log(index)
			}
		}
	}
</script>
<style scoped>
	.bg-grey {
		width: 100%;
		height: 100%;
		background-color: #f0f0f0;
	}

	.w150 {
		width: 150px;
	}
	.margin10{
		margin: 10px;
	}
	.grid-content{
		padding: 10px;
		background-color: #fff;
		border-radius: 6px;
		box-shadow: 0 0 4px 0 rgba(0,0,0,.45);
	}
</style>
