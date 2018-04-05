<template>
	<div class="component">
		Dòng <input type="number" name="" v-model="row">
		 Cột<input type="number" name="" v-model="cell">
		Dòng - Cột
		<select v-model="selectTable">
			<option v-for="s in arraySelect" > {{ s }} </option>
		</select>
		Thêm text <input type="text"  name="" v-model="textTable">
	
	</div>
</template>

<script type="text/javascript">
	export default {
		data : function(){
			return {
				row : 0,
				cell : 0,
				value : 0,
				textTable : "",
				selectTable : "",
				arrayRow : [],
				arrayCell : [],
				arraySelect : []
			}
		},
		watch : {
			row : function(value){
				this.arraySelect = [];
				this.arrayRow = [];
				this.$emit("Row", value);
				for(var i = 0 ; i < value ; i++){
				 	this.arrayRow.push(i);
				}
				
				this.addSelect();
				//console.log(this.arrayRow);
			},
			cell : function(value){
				this.arraySelect = [];
				this.arrayCell = [];
				this.$emit("Cell", value);
				for(var i = 0 ; i < value ; i++){
				 	this.arrayCell.push(i);
				}
				
				this.addSelect();
			},
			value : function(value){
				this.$emit("AddValue", this.value);
			},
			textTable : function(value){
				this.$emit("AddTextTable", value);
				this.$emit("selectTable", this.selectTable);
				//console.log(selectTable);
			}
		},
		methods :  {
			addSelect : function(){
				
				for(var i = 0 ; i < this.arrayRow.length ; i++){
						for( var j = 0 ; j < this.arrayCell.length ; j++){
							this.arraySelect.push((i+1)+ "-"+(j+1) );
						}
				}
				//});
				//console.log(this.arraySelect);
			}
		}
	}	

</script>