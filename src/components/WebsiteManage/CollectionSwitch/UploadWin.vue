<template>
  <transition name="fade">
    <div class="win">
      <div class="wrap">
				<div class="head">
					<p>上传文件</p>
					<i class="close" @click="closeEmit"></i>
				</div>
        <div class="content">
          <div class="up-one">
            <img src="../../../assets/img/up-one.png" alt="">
            <p>上传单个文件</p>
          </div>
          <div class="up-some">
            <img src="../../../assets/img/up-some.png" alt="">
            <p>上传多个文件</p>
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
			width: 316px;
			height: 256px;
			box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.65); 
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			background-color: #fff;
			font-size: 14px;
			.head{
				height: 42px;
				line-height: 42px;
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
        height: 314px;
        padding-top: 17px;
        .up-one,.up-some{
          float: left;
          width: 114px;
          height: 144px;
          border: 1px solid #d9d9d9;
          border-radius: 5px;
          margin-left: 30px;
          img{
            margin-left: 33px;
            margin-top: 34px;
          }
          p{
            margin-top: 26px;
            text-indent: 14px;
          }
        }
      }	
		}
	}
</style>


