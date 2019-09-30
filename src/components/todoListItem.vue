<template>
  <li class="taskBlock">
    <input
      :id="'checkbox_' + task.id"
      :value="task.status"
      :checked="task.status"
      class="taskBlock__checkbox visually-hidden"
      type="checkbox"
      @change="changeStatus"
    >
    <label
      class="taskBlock__label"
      :for="'checkbox_' + task.id"
    >
      <icon-checkbox
        width="30"
        height="30"
        :status="task.status"
        icon-color="red"
        icon-hover-color="brown"
      /></label>
    <input
      :value="task.name"
      class="taskBlock__input"
      type="text"
      minlength="2"
      @change="changeHandler($event, 'name')"
    >
    <input
      :id="'isFavorite_' + task.id"
      :value="task.isFavorite"
      :checked="task.isFavorite"
      class="taskBlock__checkbox visually-hidden"
      type="checkbox"
      @change="changeIsFavorite"
    >
    <label
      class="taskBlock__label"
      :for="'isFavorite_' + task.id"
    >
      <icon-star
        width="30"
        height="30"
        :is-favorite="task.isFavorite"
        icon-color="red"
        icon-hover-color="brown"
      />
    </label>
    <button
      type="button"
      class="taskBlock__delete"
      @click="clickHandler"
    >
      X
    </button>
  </li>
</template>

<script>
import iconCheckbox from './icons/iconCheckbox.vue';
import iconStar from './icons/iconStar.vue';

export default {
  components: {
    iconCheckbox,
    iconStar,
  },
  props: {
    task: {
      default() { return { message: 'error' }; },
      type: Object,
    },
  },
  methods: {
    clickHandler() {
      this.$emit('remove');
    },
    changeHandler(evt, field) {
      this.$emit('change', { value: evt.target.value, field });
    },
    changeStatus() {
      this.$emit('change', { value: !this.task.status, field: 'status' });
    },
    changeIsFavorite() {
      this.$emit('change', { value: !this.task.isFavorite, field: 'isFavorite' });
    },
  },
};
</script>

<style lang="scss">
  .taskBlock {
    & {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    &:first-child {
      margin-top: 20px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &__label {
      width: 30px;
      height: 30px;
      margin-right: 10px;

      cursor: pointer;
    }

    &__favorite {
      background-color: transparent;
      border: none;
    }

    &__delete {
      display: block;
      width: 14px;
      height: 23px;
      margin: 0 16px 0 8px;
      padding: 0;

      font-size: 20px;
      color: red;

      background-color: transparent;
      border: none;

      &:hover,
      &:focus {
        color: brown;

        outline: none;
        cursor: pointer;
      }

      &:active {
        font-size: 15px;
      }
    }

    &__input {
      width: 85%;
      padding: 5px 0;

      position: relative;

      font-size: 17px;

      border: none;

      &:focus {
        padding-bottom: 4px;
        border-bottom: 1px solid #303f9f;

        outline: none;
      }
    }
  }
</style>
