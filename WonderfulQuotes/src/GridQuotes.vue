<template>
	
		<div class="row">
			<app-quotes v-for= " (quote,index) in quotes" v-on:click.prevent.stop.native="deleteQuote(index)" :key="quote.id"> {{ index }} -  {{ quote }} </app-quotes>
		</div>

</template>
<script>
	import Quotes from "./Quotes";
	export default{
		props : ['quotes'],
		components : {
			"app-quotes" : Quotes
		},
		methods : {
			deleteQuote : function(index){
				this.$emit("deleteQuotes", index);
				//alert(index);
			}
		}
	}
</script>