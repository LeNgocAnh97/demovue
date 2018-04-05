<template>
    <div>
      <table>
      <app-table v-bind:row="row" v-bind:cell="cell" v-bind:text="text" v-bind:select="select"></app-table>
      </table>
      <br>
      <app-input v-on:AddValue="value = $event" v-on:Row="row = $event" v-on:Cell="cell = $event" v-on:AddTextTable="text = $event" v-on:selectTable="select= $event"></app-input>
      <button v-on:click="taoBang()">Check số</button>
    </div>
</template>

<script>
import Table from "./components/Table.vue";
import Input from "./components/Input.vue";

export default {
  data : function(){
      return {
          value : "",
          row : 0,
          cell : 0,
          text : "",
          select : ""
      }
  },
  methods : {
    taoBang : function(){
       // console.log(this.row);
       //console.log(this.cell);
        //this.$emit("Row", this.row);
        //this.$emit("Cell", this.cell);
    }
  },
  components : {
      "app-table" : Table,
      "app-input" : Input
  }
}
</script>


