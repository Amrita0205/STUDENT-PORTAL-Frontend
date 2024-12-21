<template>
    <footer class="footer">
        <p>@copyright 2024 Student Portal</p>
        <p>Amrita Kadam</p>
    </footer>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AppFooter' // This is the name of the component to be used 
                    //   in the App.vue file to avoid conflicts with 
                    // other components in the project, HTML
})
</script>

<style scoped>
.footer{
    background-color: #190074;
    padding: 20px;
    text-align: center;
}
p{
    margin: 0;
    color:#f0f0f0;
}
</style>