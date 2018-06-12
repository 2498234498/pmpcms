<template>
  <transition name="fade" >
    <div class="win">
      <div class="wrap">
				<div class="head">
					<p>异常详情</p>
					<i class="close" @click="closeEmit"></i>
				</div>
				<div class="content" v-for="(val,index) in testData" :key="index" >
					<span>{{val.name}}</span>
					<span>{{val.value}}</span>
				</div>
			</div>
    </div>
  </transition>
</template>
<script>
export default {
	data () {
		return {
			testData: [
				{name: '异常类 :',value: '202020'},
				{name: '异常方法:',value: '202020'},
				{name: '数据时间:',value: '202020'},
				{name: '异常内容 :',value: '202020'}
			]
		}
	},
	methods: {
		closeEmit(){
			this.$emit('close')
		}
	}
}
</script>
<style lang="scss" scoped>
	.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .win {
		position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
		z-index: 999;
		background-color: rgba(0, 0, 0, 0.1);
		.wrap{
			width: 529px;
			height: 371px;
			box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.65); 
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			background-color: #fff;
			font-size: 14px;
			.head{
				height: 45px;
				line-height: 45px;
				background-color: #f2f2f2;
				padding-left: 24px;
				position: relative;
				margin-bottom: 20px;
				.close{
					display: inline-block;
					width: 16px;
					height: 16px;
					background: url('../../assets/img/close.png') no-repeat;
					position: absolute;
					top: 14px;
					right: 14px;
					cursor: pointer;
				}
			}
			.content{
				height: 30px;
				line-height: 30px;
				span:nth-child(1){
					display: inline-block;
					width: 150px;
					text-indent: 55px;
				}
				span:nth-child(2){
					display: inline-block;
					width: 370px;
				}
			}
		}
	}
</style>


