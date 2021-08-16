<template>
	<div>
		<el-row class="gn-header1">
			<el-col :span="12">
				<div class="grid-content">
					<img class="logo" :src="logo" />
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content top-end">
					<div class="login-btn">
						<span v-show="!login">登录</span>
						<span v-show="login">
							<i class="el-icon-user-solid"></i>
							<span>Admin</span>
						</span>
					</div>
					<ul class="ul1">
						<li>设置</li>
						<li>提示</li>
						<li>退出</li>
					</ul>
					<div class="zy-btn">
						<button class="br on">中</button>
						<button>英</button>
					</div>
				</div>
			</el-col>
		</el-row>
		<el-row class="gn-header2">
			<el-col :span="24">
				<div class="grid-content menu-main">
					<ul>
						<li>新建方案</li>
						<li>历史方案</li>
						<li>
							<el-dropdown trigger="click">
								<span class="el-dropdown-link">
									计算<i class="el-icon-arrow-down el-icon--right"></i>
								</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>黄金糕</el-dropdown-item>
									<el-dropdown-item>狮子头</el-dropdown-item>
									<el-dropdown-item>螺蛳粉</el-dropdown-item>
									<el-dropdown-item>双皮奶</el-dropdown-item>
									<el-dropdown-item>蚵仔煎</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</li>
						<li>分析</li>
						<li>报告</li>
					</ul>
				</div>
			</el-col>
		</el-row>
	</div>


</template>

<script>
	export default {
		name: 'TopMenu',
		data() {
			return {
				logo: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3814449598,1919400880&fm=26&gp=0.jpg",
				menus: [{
						name: "新建方案"
					},
					{
						name: "历史方案"
					},
					{
						name: "计算"
					},
					{
						name: "分析"
					},
					{
						name: "报告"
					},
				],
				currentIndex: 0,
				login: true
			}
		},
		mounted: function() {},
		methods: {
			tabSelect(index, e) {
				this.currentIndex = index;
				this.$emit('change', index);
			}
		},
	}
</script>

<style scoped lang="scss">
	.gn-header1 {
		background-color: #3C86D8;
		height: 60px;

		.logo {
			height: 40px;
			margin-top: 10px;
			margin-left: 20px;
		}
	}

	.gn-header2 {
		background-color: #fff;
		height: 60px;
	}

	.grid-content {
		min-height: 36px;
	}

	.menu-main {
		ul {
			display: block;

			// overflow: hidden;
			li {
				float: left;
				margin: 0 20px;
				font-size: 16px;
				line-height: 60px;
				cursor: pointer;
			}

			li.on {
				color: #3C86D8;
			}
		}
	}

	.top-end {
		display: flex;
		justify-content: flex-end;
		color: #fff;

		.zy-btn {
			display: flex;
			justify-content: center;
			height: 30px;
			width: 80px;
			border: 1px solid #fff;
			border-radius: 4px;
			margin-right: 40px;
			margin-top: 15px;
		}

		.zy-btn button {
			width: 40px;
			border-radius: 4px;
			text-align: center;
			font-size: 14px;
			color: #3C86D8;
			background-color: #fff;
			line-height: 30px;
		}

		.zy-btn button.on {
			background-color: #3C86D8;
			color: #fff
		}

		.br {
			border-right: 1px solid #3C86D8;
		}

		.ul1 {
			display: inline-block;
			margin-right: 20px;
		}

		.ul1 li {
			float: left;
			line-height: 60px;
			padding: 0 10px;
			position: relative;
		}

		.ul1 li::after {
			display: block;
			content: "";
			position: absolute;
			top: 50%;
			left: 0;
			width: 1px;
			height: 10px;
			margin-top: -5px;
			background-color: #fff;
		}

		.login-btn {
			margin-right: 10px;
			font-size: 16px;
			line-height: 60px;

			.el-icon-user-solid {
				font-size: 20px;
				color: #fff;
			}
		}
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}

	.demonstration {
		display: block;
		color: #8492a6;
		font-size: 14px;
		margin-bottom: 20px;
	}
</style>
