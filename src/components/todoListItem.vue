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

<style>
  .taskBlock {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .taskBlock:first-child {
    margin-top: 20px;
  }

  .taskBlock:last-child {
    margin-bottom: 0;
  }

  .taskBlock__label {
    width: 30px;
    height: 30px;
    margin-right: 10px;

    background: url(../assets/checkbox_unchecked.svg) no-repeat;
  }

  .taskBlock__checkbox:checked + .taskBlock__label {
    background: url(../assets/checkbox.svg) no-repeat;
  }

  .taskBlock__checkbox:hover + .taskBlock__label,
  .taskBlock__checkbox:focus + .taskBlock__label {
    background: url(../assets/checkbox_unchecked_hover.svg) no-repeat;
  }

  .taskBlock__checkbox:checked:hover + .taskBlock__label,
  .taskBlock__checkbox:checked:focus + .taskBlock__label {
    background: url(../assets/checkbox_hover.svg) no-repeat;
  }

  .taskBlock__delete {
    display: block;
    width: 14px;
    height: 23px;
    margin: 0 16px 0 8px;
    padding: 0;

    font-size: 20px;
    color: red;

    background-color: transparent;
    border: none;
  }

  .taskBlock__delete:hover,
  .taskBlock__delete:focus {
    color: brown;

    outline: none;
  }

  .taskBlock__delete:active {
    font-size: 15px;
  }

  .taskBlock__input {
    width: 91%;
    padding: 5px 0;

    position: relative;

    font-size: 17px;

    border: none;
  }

  .taskBlock__input:focus {
    padding-bottom: 4px;
    border-bottom: 1px solid #303f9f;

    outline: none;
  }
/*
  @media (max-width: 1024px) {
    .taskBlock__input {
      width: 725px;
    }
  }

  @media (max-width: 960px) {
    .taskBlock__input {
      width: 427px;
    }
  } */
</style>
