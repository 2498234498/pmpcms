<template>
  <transition name="fade">
    <div class="win">
      <div class="wrap">
				<div class="head">
					<p>设置采样时间周期</p>
					<i class="close" @click="closeEmit"></i>
				</div>
        <div class="content">
          <div class="row">
            <p>选择污染物</p>
            <input type="text">
          </div>
          <div class="row">
            <p>采样起始时间</p>
            <input type="text">
          </div>
          <div class="row">
            <p>采样时间间隔</p>
            <input type="text">
          </div>
          <div class="btns">
            <button class="send">发送反控命令</button>
            <button class="close" @click="closeEmit">取消</button>
          </div>
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
				
			]
		}
	},
  methods:{
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
					background: url('../../../assets/img/close.png') no-repeat;
					position: absolute;
					top: 14px;
					right: 14px;
					cursor: pointer;
				}
			}
			.content{
        height: 326px;
        .row{
          line-height: 31px;
          margin-top: 31px;
          p{
            display: inline-block;
            width: 168px;
            height: 31px;
            text-align: right;
          }
          input{
            margin-left: 26px;
            width: 213px;
            height: 31px;
            text-indent: 5px;
            border: 1px solid #b5b5b5;
          }
        }
        .btns{
          margin-top: 42px;
          line-height: 33px;
          height: 35px;
          position: relative;
          .send{
            width: 97px;
            height: 35px;
            background-color: #1abd9d;
            position: absolute;
            right: 134px;
            color: #fff;
            cursor: pointer;
          }
          .close{
            width: 79px;
            height: 35px;
            position: absolute;
            right: 34px;
            cursor: pointer;
          }
        }
      }	
		}
	}
</style>


