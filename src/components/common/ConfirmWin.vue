<template>
  <transition name="fade">
    <div class="win">
      <div class="wrap ui-shadow4">
			</div>	
    </div>
  </transition>
</template>

<script>
export default {
	props: {
		isShow: Boolean
	},
	data () {
		return {
		}
	},
	methods: {
		sure () {
			this.$emit('sure')
			this.$emit('update:isShow', false)
		},
		cancel () {
			this.$emit('update:isShow', false)
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
    
		display: inline-block;
	}
</style>


