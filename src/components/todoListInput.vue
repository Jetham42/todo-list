<template>
  <div class="inputBlock">
    <h2 class="inputBlock__header">Task</h2>
    <input class="inputBlock__input" type="text" minlength="2" v-model="inputValue" @keyup.13="handlerClick">
    <button class="inputBlock__submit" type="button" @click="handlerClick">Add</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: '',
    }
  },
  methods: {
    handlerClick: function () {
      if (this.inputValue.length > 1) {
        this.$emit('add', this.inputValue);
        this.inputValue = '';
      }
    } 
  }
}
</script>

<style>
.inputBlock {
  display: flex;
  justify-content: space-between;

  position: relative;

  font-size: 17px;
}

.inputBlock__header {
  display: block;
  margin: 0;
  padding: 0 5px;

  position: absolute;
  top: -7px;
  left: 18px;

  font-size: 13px;
  color: #a3a3a3;

  background-color: white;
}

.inputBlock__input {
  width: 100%;
  padding: 12px 20px;

  font-size: inherit;

  border: 1px solid rgba(163, 163, 163, 0.3);
  border-radius: 6px;
}

.inputBlock__input:focus {
  border-color: #a3a3a3;

  outline: none;
}

.inputBlock__submit {
  margin-left: 25px;
  padding: 12px 30px;

  font-size: inherit;
  color: #3e8a1c;
  text-transform: uppercase;

  background-color: transparent;
  border: 2px solid #3e8a1c;
  border-radius: 6px;
}

.inputBlock__submit:hover,
.inputBlock__submit:focus {
  color: white;

  background-color: #3e8a1c;

  outline: none;
}

.inputBlock__submit:active {
  background-color: #285712;
  border-color: #285712;
}
</style>