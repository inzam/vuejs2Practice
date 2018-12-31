<template>
    <footer>
        <p>{{ copyright }}</p>
    </footer>
</template>

<script>
    export default{
        data(){
            return{
                copyright: 'copyright 2018'
            }            
        }
    }
</script>

<style scoped>
    footer{
        background:#222;
        padding: 6px;
    }
    p{
        color: crimson;
        text-align: center;
    }
</style>
