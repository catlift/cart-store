<template>
    <div class="footer">
        <div>
            <el-checkbox v-model="checkAll" @change="changeAllState">全选</el-checkbox>
        </div>

        <div class="total-price">
            ￥{{ goodsPrice | priceFliter }} 元
        </div>

        <div class="payment">
            <el-button round @click="payment">结算({{total}})</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            goods: {
                default: {},
            }
        },
        data() {
            return {
                checkAll: this.fullState
            }
        },
        methods: {
            changeAllState() {
                this.$emit("change-all-state", this.checkAll)
            },
            payment() {
                alert("别买了，都穷到吃不了饭了！")
            },
            changeCheckAll() {
                console.log(this.fullState)
                this.checkAll = this.fullState
            }
        },
        computed: {
            fullState() {
                const goodsAllState = this.goods.every(item => item.goods_state);
                
                return goodsAllState
            },
            total() {
                return this.goods.filter(item => item.goods_state).reduce((total, item) => total += item.goods_count, 0)
            },
            goodsPrice() {
                return this.goods.filter(item => item.goods_state).reduce((total, item) => total += item.goods_price * item.goods_count, 0)
            },
        },
        filters: {
            // 将价格保留两位小数点
            priceFliter(val) {
                return val.toFixed(2)
            }
        },
        watch: {
            fullState: {
                handler(newVal) {
                    this.checkAll = newVal
                },
                immediate: true
            }
        }
    }
</script>

<style scoped lang="less">
    .footer {
        display: flex;
        align-items: center;
        padding: 0 5px;
        box-sizing: border-box;
        border-top: 1px solid #cccccc;
        width: 100%;
        height: 80px;
        background-color: white;

        ::v-deep .el-checkbox {
            zoom: 150%;
            color: #409EFF;
        }

        .total-price {
            flex: 1;
            font-size: 20px;
            color: red;
            text-align: center;
        }

        .payment {
            ::v-deep .el-button {
                padding: 10px 35px;
                background: rgba(255, 0, 0, .8);
                color: white;
            }
        }
    }
</style>