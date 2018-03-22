// This is the html part //

<script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script>

<div id="app">
<input type="text" v-on:input="changeTitle">
  <p>{{ title }}</p>
</div>




// This is the JS part //
new Vue({
	el: '#app',
  data: {
  	title: 'Hello World!'
  },
  methods: {
  	changeTitle: function(event) {
    	this.title = event.target.value;
    
    }
  }
});
