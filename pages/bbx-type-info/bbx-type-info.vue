<template>
	<view>
		<u-navbar
			:title=title
			:autoBack="true"
		>
		</u-navbar>
		<u-list
		style='margin-top: 50px;'
			@scrolltolower="scrolltolower"
		>
			<u-list-item
				v-for="(item, index) in paperList"
				:key="index"
				style='height: 80px;'
			>
			<navigator class="item" hover-class="none" :url="'/pages/details/details?id=' + item.docid">
				<u-cell
					:title=item.doctitle
				>
					<u-avatar
						slot="icon"
						shape="square"
						size="125"
						:src="item.pic_url"
						customStyle="margin: -3px 5px -3px 0"
					></u-avatar>
				</u-cell>
				<view>
					<view class="info">
						<view class="price" style="margin-left: 90px;"><u-icon v-if="item.is_collect==1"  name="star-fill" color="red" size="28"></u-icon><u-icon v-else  name="star"  size="28"></u-icon></view>
						<view class="slogan">{{item.doc_creator_name}}</view>
					</view>
				</view>
				</navigator>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'文章列表',
				type:0,
				paperList:[]
			}
		},
		onLoad(e) {
			if(e){
				this.title = e.title,
				this.type = e.type
			}
			this.getPages()
		},
		methods: {
			scrolltolower() {
				this.loadmore()
			},
			loadmore() {
				for (let i = 0; i < 30; i++) {
					this.indexList.push({
						url: this.urls[uni.$u.random(0, this.urls.length - 1)]
					})
				}
			},
			getPages(){
				let httpData = {
					limit:9,
					type:this.type,
					order:'desc',
					offset:0
				}
				uni.request({
					url:'/api/doc/get_type_docinfo',
					method:'POST',
					data:httpData,
					success: (res) => {
						this.paperList = res.data.data.docs
						
						console.log('文章分类',this.paperList)
					}
				})

			},
		}
	}
</script>

<style lang="scss">
.info{
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-top: -30px;
	width: 92%;
	padding: 10upx 4% 10upx 4%;
	
	.price{
		color: #e65339;
		font-size: 30upx;
		font-weight: 600;
	}
	.slogan{
		color: #807c87;
		font-size: 24upx;
	}
}
</style>
