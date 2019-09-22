<template>
  <div class="todoList">
    <h1 class="visually-hidden">To Do List</h1>
    <todo-list-input v-on:add="addTask"/>
    <ul class="todoList__list">
      <todo-list-item v-for="task in tasks" v-bind:task="task" v-bind:key="task.id" v-on:remove="removeTask" v-on:change="changeTask"/>
    </ul>
  </div>
</template>

<script>
import todoListInput from './components/todoListInput';
import todoListItem from './components/todoListItem';
import { addItem, deleteItem, updateItem, fetchData } from './utlis/client';

export default {
  name: 'app',
  components: {
    todoListInput,
    todoListItem,
  },
  data () {
    return {
      tasks: null
    }
  },
  mounted() {
    fetchData('tasks').then(response => this.tasks = response.data);
  },
  methods: {
    addTask: function (task) {
      addItem('tasks', { name: task, status: false }).then(response => this.tasks.push(response.data));
    },
    removeTask: function (id) {
      let index = this.tasks.findIndex(item => item.id === id);
      deleteItem('tasks', id);
      this.tasks.splice(index, 1);
    },
    changeTask: function (task) {
      if (task.name.length === 0) {
        this.removeTask(task);
      } else {;
        updateItem('tasks', task, task.id);
      }
    }
  },
}
</script>

<style>
  .todoList {
    width: 80%;
    max-width: 864px;
    min-width: 500px;
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
