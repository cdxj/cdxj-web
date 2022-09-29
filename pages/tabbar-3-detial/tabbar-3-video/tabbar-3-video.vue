<template>
	<view class="content" style="margin-top: 80rpx;">
		<u-navbar
		            title="编辑中心"
		            :autoBack="true"
		        >
		        </u-navbar>
		<active-form v-model="formData" num></active-form>
		<view class="subform" @click="sub">发布</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ActiveForm from "@/components/active-form/active-form";
	export default {
		computed:{
			...mapState(['userInfo']),
		},
		components: {
			ActiveForm,
		},
		data() {
			return {
				formData: [
					{
						id: "kjjnsasd",
						placeholder: "",
						label: "标题",
						type: "text",
						disabled:false,
						rules: {
							name: "name",
							value: "",
							verify: true,
							errMess: "文章标题未填写",
							regexp:'^赵'  //正则校验
						},
					},
					{
						id: "asdfdfgd",
						label: "图片 ",
						type: "file",
						accept: 'image',//接受的文件类型，file只支持H5（只有微信小程序才支持把accept配置为all、media）  可选 all | media | image | file | video
						capture: ['album', 'camera'],// 图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头 String | Array
						maxCount: 2, //最大选择图片的数量
						sizeType: ['original', 'compressed'],//original 原图，compressed 压缩图，默认二者都有，H5无效
						compressed: true,//当accept为video时生效，是否压缩视频，默认为true  Boolean true    false
						camera: 'back', //当accept为video时生效，可选值为back或front   String  back    -
						multiple: true, //是否开启图片多选，部分安卓机型不支持  false    true
						maxSize: Number.MAX_VALUE,// 选择单个文件的最大大小，单位B(byte)，默认不限制    String | Number
						previewImage: true,//是否在上传完成后展示预览图  Boolean true    false
						disabled:false,//是否禁用
						rules: {
							name: "photo",
							fileList: [],//显示已上传的文件列表  回显   [{url:'https://xxx.cn'}]
							verify: false,
							errMess: "请选择图片",
						},
					},
					{
					id: "sadasgh",
                    placeholder: "请选择类型",
                    label: "文章类型",
                    type: "radio",
                    list: [
                        {
                            value: 1,
                            label: "类型1",
                        },
                        {
                            value: 2,
                            label: "类型2",
                        },
                        {
                            value: 3,
                            label: "类型3",
                        },
                        {
                            value: 4,
                            label: "类型4",
                        },
                        {
                            value: 5,
                            label: "类型5",
                        },
                        {
                            value: 6,
                            label: "类型6",
                        },
                    ],
                    rules: {
                        name: "type",
                        value: 1, // 字段值  list.value 填入回显 0 1
                        verify: false,
                        errMess: "请选择文章类型",
                    },
					},
					// {
					// 	id: "koptymk",
					// 	placeholder: "Tag",
					// 	label: "Tag",
					// 	type: "text",
					// 	rules: {
					// 		name: "company",
					// 		value: "",
					// 		verify: false,
					// 		errMess: "Tag名称不能为空",
					// 	},
					// },
					{
						id: "asdfgf",
						placeholder: "(文章详情)",
						label: "文章内容",
						type: "textarea",
						rules: {
							name: "experience",
							value: "", //字段值
							verify: true,
							errMess: "请输入文章内容",
						},
					},
				],
			}
		},
		onLoad() {
			
		},
		watch:{
			formData:{
				handler(new_val,old_val){
					// console.log(new_val)
					// console.log('old',old_val)
				},
				deep: true
			}
		},
		
		methods: {
		// 提交表单
			sub() {
				let params={
					title:this.formData[0].rules.value,
					pic_lists:this.formData[1].rules.fileList,
					// TODO 文章类型api
					doc_type_id:1,
					tag:this.formData[3].rules.value,
					content:this.formData[4].rules.value,
					user_id:this.userInfo.id,
					part_id:1
				}
				this.$api.post('/api/doc/doc_create',params).then(res=>{
					console.log(res)
				}).catch((e)=>{
					console.log(e)
				})
			},
		}
	}
</script>

<style scoped lang="less">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .subform {
        margin: 30rpx;
        padding: 20rpx 60rpx;
        border-radius: 18rpx;
        background-color: bisque;
    }
}
</style>