<template>
	<div class="app">
		<Header title="Hello"></Header>

		<div class="goods">
			<Goods v-for="item in goodsList" :key="item.id" :id="item.id" :state="item.goods_state" :picture="item.goods_img" :title="item.goods_name" :price="item.goods_price" :count="item.goods_count" @change-state="getGoodsState" @change-count="getGoodsCount"></Goods>
		</div>

		<Footer class="myFooter" :goods="goodsList" @change-all-state="changeAllState"></Footer>
	</div>
</template>

<script>
	import Header from "@/components/header/header.vue"
	import Goods from "@/components/goods/goods.vue"
	import Footer from "@/components/footer/footer.vue"

	export default {
		name: "App",
        data() {
            return {
                goodsList: []
            }
        },
        // 方法集合
        methods: {
			// 数据请求
            async getGoodsList() {
                const { data: res } = await this.axios.get("/api/cart");
                
                if(res.status !== 200) {
                    console.log("请求失败:", this.$el)
                }

                console.log(res.list)
				this.goodsList = res.list
            },
			// 改变单个商品的勾选状态
			getGoodsState(val) {
				this.goodsList.filter(item => item.id == val.id)[0].goods_state = val.goodsState;
			},
			// 改变商品的数量
			getGoodsCount(val) {
				this.goodsList.filter(item => item.id == val.id)[0].goods_count = val.count;
			},
			// 改变所有商品的勾选状态
			changeAllState(val) {
				this.goodsList.forEach(item => item.goods_state = val)
			}
        },
        // 组件注册
        components: {
            Header,
			Goods,
			Footer
        },
        // 生命周期 -- props、data、methods 已经创建好，可以进行操作
        created() {
            this.getGoodsList()
        },
        // 生命周期 -- 挂载完成，可以访问 DOM 元素
        mounted() {
            
        },
    }
</script>

<style lang="less">
	* {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.app {
		position: relative;
		// Footer 组件的要减去
		margin-bottom: 80px;
		width: 100%;
		
		.myFooter {
			position: fixed;
			bottom: 0;
			z-index: 99;
		}
	}
</style>