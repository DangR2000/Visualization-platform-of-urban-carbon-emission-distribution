<template>
	<div>
		<div class="block">
			<span class="demonstration"></span>
			<el-cascader v-model="value" :options="options" @change="pass()" class="width"></el-cascader>
		</div>
	</div>
</template>

<script>
import {treeDataFormat} from "@/utils/treeDataFormat.js";
	import caseinfo from "@/api/case.js";
export default {
	name: 'List',
	data() {
		return {
			value: [],
			options: []
		};
	},
	mounted() {
		this.baseRegion();
	},
	methods: {
		pass() {
			this.$emit('getArea', this.value);
		},
		baseRegion() {
			if(this.$store.getters.getBaseRegion.length>0){
				this.options = this.$store.getters.getBaseRegion;
			}else{
				caseinfo.baseRegion().then(res => {
					if (res.data.code == 0) {
						this.options = treeDataFormat(res.data.baseRegion,0);
						this.$store.commit('setBaseRegion', treeDataFormat(res.data.baseRegion,0)); 
					} else {
						alert(res.data.msg);
					}
				});
			}
		},
	}
};
</script>
<style scoped>
.width {
	width: 275px;
}
</style>
