<template>
    <div class="container">
    	<add-quotes v-on:AddQuotes="themQuotes($event)" ></add-quotes>
    	<br>
    	<bar v-bind:countQuotes="quotes.length" v-on:stopAdd="quotes = $event"></bar>
    	<br>
    	<app-grid-quotes v-bind:quotes="quotes" v-on:deleteQuotes="deleteQuote($event)"></app-grid-quotes>
    </div>
</template>

<script>
	import GridQuotes from "./GridQuotes";
	import addQuotes from "./addQuotes";
	import Bar from "./Bar";
    export default {
        data : function(){

        	return {
        		maxQuotes : 10,
        		quotes : [],
        		//countQuotes : 0
        	}
        },
        methods : {
        	themQuotes : function(quote){
        		this.quotes.push(quote);
        	},
        	deleteQuote : function(quote){
        		this.quotes.splice(quote, 1);
        		//alert(quote);
        	}
        }, 
        components : {
        	"app-grid-quotes" : GridQuotes,
        	"add-quotes" : addQuotes,
        	"bar" : Bar
        }
    }
</script>

<style>
</style>
