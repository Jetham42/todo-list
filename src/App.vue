<template>
  <div class="todoList">
    <h1 class="visually-hidden">
      To Do List
    </h1>
    <todo-list-input @add="addTask" />
    <ul class="todoList__list">
      <todo-list-item
        v-for="(task, index) in tasks"
        :key="task.id"
        :task="task"
        :index="index"
        @remove="removeTask"
        @change="changeTask"
      />
    </ul>
  </div>
</template>

<script>
import todoListInput from './components/todoListInput.vue';
import todoListItem from './components/todoListItem.vue';
import {
  addItem, deleteItem, updateItem, fetchData,
} from './utlis/client';

export default {
  name: 'App',
  components: {
    todoListInput,
    todoListItem,
  },
  data() {
    return {
      tasks: null,
    };
  },
  mounted() {
    fetchData('tasks').then((response) => { this.tasks = response.data; });
  },
  methods: {
    addTask(task) {
      addItem('tasks', { name: task, status: false }).then(response => this.tasks.push(response.data));
    },
    removeTask(index, task) {
      deleteItem('tasks', task.id);
      this.tasks.splice(index, 1);
    },
    changeTask(index, task) {
      if (task.name.length === 0) {
        this.removeTask(index, task);
      } else {
        updateItem('tasks', task, task.id);
      }
    },
  },
};
</script>

<style lang="scss">
  .todoList {
    & {
      width: 80%;
      max-width: 864px;
      min-width: 500px;
      margin: 100px auto;
      padding: 10px 30px 22px 13px;

      border: 1px solid rgba(163, 163, 163, 0.3);
      border-radius: 6px;
    }

    &__list {
      margin: 0;
      padding: 0;
    }
  }

  .visually-hidden {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
    padding:0 !important;
    border:0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  }
</style>
