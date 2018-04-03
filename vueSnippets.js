// https://jsfiddle.net/boilerplate/vue/ //

// This is the html part //

<script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script>

<div id="app">
<input type="text" v-on:input="changeTitle">
  <p>{{ title }}</p>
</div>


// Another template //

<div id="app">
  <h2>Todos:</h2>
  <ol>
    <li v-for="todo in todos">
      <label>
        <input type="checkbox"
          v-on:change="toggle(todo)"
          v-bind:checked="todo.done">

        <del v-if="todo.done">
          {{ todo.text }}
        </del>
        <span v-else>
          {{ todo.text }}
        </span>
      </label>
    </li>
  </ol>
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


// Another JS //
new Vue({
  el: "#app",
  data: {
    todos: [
      { text: "Learn JavaScript", done: false },
      { text: "Learn Vue", done: false },
      { text: "Play around in JSFiddle", done: true },
      { text: "Build something awesome", done: true }
    ]
  },
  methods: {
  	toggle: function(todo){
    	todo.done = !todo.done
    }
  }
})






// css //
body {
  background: #20262E;
  padding: 20px;
  font-family: Helvetica;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
}

li {
  margin: 8px 0;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

del {
  color: rgba(0, 0, 0, 0.3);
}
