<template>
  <li class="taskBlock">
    <input class="taskBlock__checkbox" type="checkbox">
    <input class="taskBlock__input" type="text" v-model="inputValue">
    <button class="taskBlock__delete">X</button>
  </li>
</template>

<script>
export default {
  props: ['task'],
  data () {
    return {
      inputValue:  task,
    }
  },
  methods: {
    
  }
}
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

  .taskBlock__checkbox {
    margin: 0 5px 0 20px;
  }

  .taskBlock__input {
    width: 100%;
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

</style>