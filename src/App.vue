<template>
  <div class="todoList">
    <h1 class="visually-hidden">
      To Do List
    </h1>
    <todo-list-input @add="addTask" />
    <ul class="todoList__list">
      <todo-list-item
        v-for="task in favoriteTasks"
        :key="task.id"
        :task="task"
        @remove="removeTask(task.id)"
        @change="changeTask(task.id, $event)"
      />
    </ul>
    <ul class="todoList__list">
      <todo-list-item
        v-for="task in elseTasks"
        :key="task.id"
        :task="task"
        @remove="removeTask(task.id)"
        @change="changeTask(task.id, $event)"
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
      tasks: [],
    };
  },
  computed: {
    favoriteTasks() {
      return this.tasks.filter(item => item.isFavorite === true);
    },
    elseTasks() {
      return this.tasks.filter(item => item.isFavorite === false);
    },
  },
  mounted() {
    fetchData('tasks').then((response) => { this.tasks = response.data; });
  },
  methods: {
    idGenerator() {
      if (this.tasks.length === 0) {
        return 1;
      }
      return this.tasks[this.tasks.length - 1].id + 1;
    },
    addTask(name) {
      this.tasks.push({
        id: this.idGenerator(), name, status: false, isFavorite: false,
      });
      addItem('tasks', { name, status: false, isFavorite: false });
    },
    removeTask(id) {
      this.tasks.splice(this.getIndex(id), 1);
      deleteItem('tasks', id);
    },
    changeTask(id, event) {
      const index = this.getIndex(id);
      if (event.value.length === 0) {
        this.removeTask(index, id);
      } else {
        this.updateTask(index, event.field, event.value);
        updateItem('tasks', { [event.field]: event.value }, id);
      }
    },
    updateTask(index, field, value) {
      this.$set(this.tasks[index], field, value);
    },
    getIndex(id) {
      return this.tasks.findIndex(x => x.id === id);
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
