<template>
    <ir-tabs :navs="navs" @navChange=change :multiple="true">
        <template v-slot:page1>
            <view>
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

        <template v-slot:page2>
            <view>page2</view>
        </template>
    </ir-tabs>
</template>

<script>
    export default {
        data() {
            return {
                navs: ['收藏', '文章管理'],
				title:'文章列表',
				type:0,
				paperList:[]
            }
        },
		methods:{
			change(cur){
				console.log(cur)
			}
		}
    }
</script>