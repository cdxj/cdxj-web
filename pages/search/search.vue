<template>
	<view>
		<!-- <u-navbar placeholder=true leftIconSize='20px' leftText="搜索" :backTextStyle="backTextColor" backIconColor="#fff"  :titleStyle ="background"></u-navbar> -->
		<f-navbar title="搜索"  fontColor="#fff" gradient="linear-gradient(-90deg, #e4d002, #ff570a)">
		</f-navbar>
		<view style="margin: 14px;">
			<u-search @search="search()" @custom='search' style='margin-bottom: 14px;' :placeholder='placeholder' searchIconSize='30px' v-model="keyword" :actionStyle="actionStyle"></u-search>
			<view >
				<view class="title">历史记录 <u-icon @click=clear style="display:inline-block;margin-left: 10px" name="trash" size="32"></u-icon></view>
			</view>
		</view>
	</view>
</template>

<script>
import fNavbar  from '@/uni_modules/f-navbar/components/f-navbar/f-navbar.vue';
export default {
	data() {
		return {
			placeholder:'请输入关键词搜索',
			background: {
				'background-image': 'linear-gradient(45deg, #ff570a, #e4d002)'
			},
			keyword:'',
			backTextColor: {
				'color': '#ffffff'
			},
			actionStyle:{
				'color':'#39CCCC',
			}
		}
	},
	onLoad(e) {
		if(e){
			// 替换搜索框内容
			console.log('请搜索与'+e+'相关内容')
		}
	},
	methods:{
		clear(){
			console.log('清楚')
		},
		search(){
			console.log('search',this.keyword)
			this.keyword=''
		},
		
	}
}
</script>

<style lang="scss" scoped>
	.title{
		font-size: 32rpx;
		font-weight: 700;
	}
</style>
