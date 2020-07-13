<template>
  <div class="message" :message="message">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
	.message {
		text-align: center;
		padding: 20px;
	}
	p {
		color: #ba3838;
    font-size: 24px;
	}
</style>
