<template>
	<div class="bar">
		<div  class="ahihi" style=" background-color: red;" v-bind:style="{ width : countQuotes*10 + '%' }">  {{countQuotes}}</div>
	</div>
</template>
<style type="text/css">
	.bar {
		width: 500px;

	}
	.ahihi{
		 transition: width 0.2s;
		transition-timing-function: ease-in;
	} 
</style>
<script type="text/javascript">
	export default {
		props : ['countQuotes'],
		watch : {
			countQuotes : function(value){
				if(value >= 10){
					alert("Stop");
					this.$emit("stopAdd", [])
				}
			}
		}
	}
</script>
