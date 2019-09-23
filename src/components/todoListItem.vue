<template>
  <li class="taskBlock">
    <input
      :id="'checkbox_' + task.id"
      v-model="task.status"
      class="taskBlock__checkbox visually-hidden"
      type="checkbox"
      @change="changeHandler"
    >
    <label
      class="taskBlock__label"
      :for="'checkbox_' + task.id"
    />
    <input
      v-model="task.name"
      class="taskBlock__input"
      type="text"
      minlength="2"
      @change="changeHandler"
    >
    <button
      class="taskBlock__delete"
      @click="clickHandler"
    >
      X
    </button>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      default() { return { message: 'error' }; },
      type: Object,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    clickHandler() {
      this.$emit('remove', this.task.id);
    },
    changeHandler() {
      this.$emit('change', this.task);
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

      background: url(../assets/checkbox_unchecked.svg) no-repeat;
    }

    &__checkbox:checked + &__label {
      background: url(../assets/checkbox.svg) no-repeat;
    }

    &__checkbox:hover + &__label,
    &__checkbox:focus + &__label {
      background: url(../assets/checkbox_unchecked_hover.svg) no-repeat;

      cursor: pointer;
    }

    &__checkbox:checked:hover + &__label,
    &__checkbox:checked:focus + &__label {
      background: url(../assets/checkbox_hover.svg) no-repeat;
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
      width: 91%;
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
