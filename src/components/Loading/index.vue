<template>
  <div class="loader"></div>
</template>
<script>
export default {
  name: "Loading"
};
</script>
<style scoped>
.loader {
  position: relative;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  border: 5px white solid;
  border-left-color: #ff5500;
  border-right-color: #0c80fe;
  border-radius: 100%;
  animation: loading1 1s infinite linear;
}
@keyframes loading1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>