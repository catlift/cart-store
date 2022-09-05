<template>
    <div class="header-container">
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                default: "标题",
                type: String
            }
        }
    }
</script>

<style scoped lang="less">
    .header-container {
        width: 100%;

        h2 {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 60px;
            background-color: rgb(0, 149, 255);
            color: white;
        }
    }
</style>