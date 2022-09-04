<template>
    <div class="goods-item">
        <div class="goods-item-left">
            <!-- changeState: 改变单个商品的勾选状态 -->
            <el-checkbox v-model="goodsState" @change="changState"></el-checkbox>
            <div class="demo-image__preview item-img">
                <el-image 
                    :src="picture" 
                    :preview-src-list="[picture]">
                </el-image>
            </div>
        </div>

        <div class="goods-item-right">
            <div class="item-title">{{ title }}</div>
            <div class="item-count">
                <div class="item-price">￥{{ price | priceFliter }}</div>
                <el-input-number v-model="goodsCount" @change="handleChange" :min="1" :max="99" label="描述文字" size="mini"></el-input-number>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            id: {
                type: Number,
                require: true
            },
            state: {
                type: Boolean
            },
            picture: {
                type: String
            },
            title: {
                type: String,
                default: "商品标题"
            },
            price: {
                type: Number,
                default: 999
            },
            count: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                goodsState: this.state,
                goodsCount: this.count
            }
        },
        created() {
            
        },
        methods: {
            // 单个商品的数量变化
            handleChange(value) {
                const id = this.id;
                const count = value;
                this.$emit("change-count", {id, count})
            },
            // 改变单个商品选择状态
            changState(e) {
                const goodsState = e;
                const id = this.id;
                this.$emit("change-state", {id, goodsState});
            }
        },
        comments: {

        },
        filters: {
            // 将价格保留两位小数点
            priceFliter(val) {
                return val.toFixed(2)
            }
        },
        watch: {
            state(newVal) {
                this.goodsState = newVal
            },
            count(newVal) {
                this.goodsCount = newVal
            }
        }
    }
</script>

<style scoped lang="less">
    .goods-item {
        display: flex;
        padding: 10px 5px;
        box-sizing: border-box;
        border-bottom: 1px solid #e3e8ee;
        width: 100%;
        .goods-item-left {
            display: flex;
            justify-content: center;
            align-items: center;

            ::v-deep .el-checkbox {
                zoom: 150%
            }

            .item-img {
                margin-left: 5px;
                width: 100px;
                height: 100px
            }
        }

        .goods-item-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            margin-left: 5px;

            .item-title {
                flex: 1;
                font-size: 14px;
            }

            .item-count {
                display: flex;

                .item-price {
                    flex: 1;
                    align-self: center;
                    color: red;
                }

                ::v-deep .el-input-number {
                    width: 100px;
                }
            }
        }
    }
</style>