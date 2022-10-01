<template>
    <ir-tabs :navs="navs" @navChange=change :multiple="true">
        <template v-slot:page1>
            <view>
				<u-list
				style='margin-top: 0px;'
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
									<view class="price" style="margin-top: 30px;margin-left: 80px;"><u-icon  @click="collect(item,index)" name="star-fill" color="red" size="38"></u-icon></view>
									<view class="slogan">{{item.doc_creator_name}}</view>
								</view>
							</view>
						</navigator>
					</u-list-item>
				</u-list>
			</view>
        </template>

        <template v-slot:page2>
            <view>page2</view>
        </template>
    </ir-tabs>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
 export default {
	computed:{
	 	...mapState(['userInfo','paperList']),
	},
        data() {
            return {
                navs: ['收藏', '文章管理'],
				title:'文章列表',
				type:0,
				pageSize:0,
				limit:3
            }
        },
		onShow(){
			this.pageSize=0
			this.$store.commit('clearPL')
			this.getData()
		},
		onReachBottom() {
			this.pageSize++;
			this.getData()
			console.log(this.pageSize)
			// this.loadmore()
		},
		methods:{
			collect(paper,i,e){
				var ev = e || window.event;
				  if(ev && ev.stopPropagation) {
				    //非IE浏览器
				    ev.stopPropagation();
				  } else {
				    //IE浏览器(IE11以下)
				    ev.cancelBubble = true;
				  }
				  if(this.userInfo.session==null){
				  	uni.showToast({
				  		title: "请先登录",
				  		duration: 1000,
				  	})
				  	return 
				  }
				  this.paperList[i].is_collect=this.paperList[i].is_collect==0?1:0
				  let httpData = {
				  	user_id :this.userInfo.userId,
				  	doc_id : paper.docid,
				  	status:this.paperList[i].is_collect==0?2:1
				  }
				  
				  uni.request({
				  	url:'/api/doc/collect_doc',
				  	withCredentials:true,
				  	header:{
				  		'Xj-Token':this.userInfo.session
				  	},
				  	method:'POST',
				  	data:httpData,
				  	
				  	success: (res) => {
				  		
				  		uni.showToast({
				  			title: "操作成功",
				  			duration: 1000, 
				  		})
						if(this.paperList[i].is_collect==0){
							this.$store.commit('deletePaper',i)
						}
				  	},
				  	fail:(e)=>{
				  		uni.showToast({
				  			title: e,
				  			duration: 1000,
				  		})
				  	}
				  	
				  })
			},
			getData(offset=5){
				let httpData = {
					user_id :this.userInfo.userId,
					offset:this.pageSize*this.limit,
					limit:this.limit
				}
				
				uni.request({
					url:'/api/doc/get_collect_docs',
					withCredentials:true,
					header:{
						'Xj-Token':this.userInfo.session
					},
					method:'POST',
					data:httpData,
					
					success: (res) => {
						this.$store.commit('setPaperList',res.data.data.docs)
					},
					fail:(e)=>{
						uni.showToast({
							title: e,
							duration: 1000,
						})
					}
					
				})
			},
			change(cur){
				if(cur==0){
					this.$store.commit('clearPL')
					this.pageSize=0
					this.getData()
				}else{
					
					console.log('文章管理')
				}
			}
		}
    }
</script>
<style scoped lang="scss">
	.info{
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		// border: 1px solid red;
		margin-top: -60px;
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