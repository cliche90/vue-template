<template>
<div>
    Here is Page01 <br>
    Counter: {{ this.$store.state.counter }}
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
</div>
</template>

<script>
export default {
    methods: {
        addCounter() {
            this.$store.state.counter++;
        },
        subCounter() {
            this.$store.state.counter--;
        },
    }
}
</script>
