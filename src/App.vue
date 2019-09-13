<template>
  <div class="todoList">
    <h1 class="visually-hidden">To Do List</h1>
    <todo-list-input v-on:add="saveTask"/>
    <ul class="todoList__list">
      <todo-list-item v-for="task in tasks" v-bind:task="task" v-bind:key="task.id" v-on:delete="deleteTask"/>
    </ul>
  </div>
</template>

<script>
import todoListInput from './components/todoListInput';
import todoListItem from './components/todoListItem';

export default {
  name: 'app',
  components: {
    todoListInput,
    todoListItem,
  },
  data () {
    return {
      tasks: [
        { id: 0, name: 'Task1', status: true},
        { id: 1, name: 'Task2', status: false},
      ]
    }
  },
  methods: {
    saveTask: function (task) {
      this.tasks.push({ id: this.tasks.length, name: task, status: false});
    },
    deleteTask: function (task) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks.splice(taskIndex, 1);
    },
  },
}
</script>

<style>
.todoList {
  width: 800px;
  margin: 100px auto;
  padding: 10px 30px 22px 13px;

  border: 1px solid rgba(163, 163, 163, 0.3);
  border-radius: 6px;
}

.todoList__list {
  margin: 0;
  padding: 0;
}

.visually-hidden {
	position: absolute !important;
	clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
	clip: rect(1px, 1px, 1px, 1px);
	padding:0 !important;
	border:0 !important;
	height: 1px !important; 
	width: 1px !important; 
	overflow: hidden;
}
</style>
