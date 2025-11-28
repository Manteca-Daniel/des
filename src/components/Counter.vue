<template>
  <div>
    <p>Valor: {{ count }}</p>
    <button @click="count++">Incrementar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
