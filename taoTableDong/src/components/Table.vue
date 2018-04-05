<template>
	<div class="component">
		<tr v-for="r in a" v>

				<td v-for="c in b"> <Span v-if="checkRowCellAddText(r,c) === 'true'" > {{ text }} </Span> 	</td>
		</tr>

	</div>
</template>
<style lang="scss">
    td {
      background-color: red;
      width : 100px;
      height: 100px;
      border : 1px solid black;

    }


</style>
<script>
	export default {
		data : function(){
			return {
			a : [],
			b : []
			}
		},
		props : {
			row : Number,
			cell : Number,
			text : String,
			select : String
		},
		
		watch : {
			row : function(value){
				this.a = [];
				
				
				for(var i = 0 ; i < value ; i++){
				 	this.a.push(i);

				}
			},
			cell : function(value){
				this.b = [];
				
				for(var i = 0 ; i < value ; i++){
				 	this.b.push(i);
				}
				
			}
		},
		methods : {
			splitSelectRow : function(){
				var s = this.select.split("-");
				return (s[0]-1);
			},
			splitSelectCell : function(){
				var s = this.select.split("-");
				return (s[1]-1);
			},
			checkRowCellAddText : function(row, cell ){
				if(this.splitSelectRow() == row && this.splitSelectCell() == cell){
					return "true";
				}
				else return "false";
			}
		}
	}
</script>