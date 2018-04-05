<template>
	<div>
		Nhap noi dung moi <input type="text" name="" v-model="text">
		<button v-on:click="addText()">Theem </button>
	</div>
</template>
<style scoped>
	
</style>
<script>
	export default{
		data : function(){
			return {
				text : ""
			}

		},
		methods : {
			addText : function(){
				this.$emit("AddQuotes", this.text);
				//this.$emit("addCount", )
				this.text = "";
			}
		}
	}
</script>