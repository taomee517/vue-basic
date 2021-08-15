<template>
	<div class="page-container">
		<span class="page-count">total: <i class="count-number">{{count}}</i>&nbsp&nbsp</span>
		<input type="button" value="<<" @click="turnToStart"/>
		<input type="button" :disabled="pageIndex===1" value="<" @click="turnToPrev"/>
		<input type="button" v-if="pageIndex>1" value="1" @click="turnToIndex"/>
		<input type="button" v-if="pageIndex>2" value="..." />
		<input type="button" :value="pageIndex" class="current-page" @click="turnToIndex" />
		<input type="button" v-if="maxPage>pageIndex+1" value="..." />
		<input type="button" v-if="maxPage>pageIndex" :value="maxPage" @click="turnToIndex" />
		<input type="button" :disabled="maxPage===pageIndex" value=">" @click="turnToNext"/>
		<input type="button" value=">>" @click="turnToEnd"/>		
		<select ref="pageSizeSelect" class="page-size-select" @change="pageSizeChange">
			<option value="10" selected>10条/页</option>
			<option value="20">20条/页</option>
			<option value="50">50条/页</option>
			<option value="100">100条/页</option>
		</select>
		<input ref="jumpIndex" :value="pageIndex" class="jump-index" @keyup.enter="pageJump" />
		<input type="button" value="Go" @click="pageJump"/>
	</div>
</template>

<script>
	export default{
		name: 'Pager',
		data() {
			return {
				pageIndex: 1,
				pageSize: 10,
				count: 0
			}
		},
		computed:{
			maxPage(){
				return Math.floor(this.count/this.pageSize) + 1;
			}
		},
		methods:{
			turnToStart(){
				this.pageIndex = 1;
			},
			turnToEnd(){
				this.pageIndex = this.maxPage;
			},
			turnToPrev(){
				this.pageIndex--;
			},
			turnToNext(){
				this.pageIndex++;
			},
			turnToIndex(evt){
				this.pageIndex = parseInt(evt.target.value)
			},
			pageJump(){
				var jumpIndexElem = this.$refs.jumpIndex;
				var jumpIndex = parseInt(jumpIndexElem.value);
				if(jumpIndex>this.maxPage){
					// alert("超出最大页码:" + this.maxPage)
					var twinkleIndex = 0;
					setInterval(function(){
						if(twinkleIndex>5){
							return;
						}
						if(jumpIndexElem.getAttribute('flicker') === '1'){
							jumpIndexElem.setAttribute('class', 'shadow-max');
							jumpIndexElem.setAttribute('flicker','2');
						}else{
							jumpIndexElem.setAttribute('class', 'shadow-min');
							jumpIndexElem.setAttribute('flicker','1');
						}
						twinkleIndex++;
					},100);
					return;
				}
				jumpIndexElem.setAttribute('class', 'jump-index');
				this.pageIndex = jumpIndex;
			},
			pageSizeChange(){
				this.pageIndex = 1;
				this.pageSize = parseInt(this.$refs.pageSizeSelect.value);
			}
		},
		watch: {
			pageIndex(val){
				var pager = {
					pageIndex: val,
					pageSize: this.pageSize
				}
				this.$bus.$emit("pageChange", pager);
			},
			pageSize(val){
				var pager = {
					pageIndex: this.pageIndex,
					pageSize: val
				}
				this.$bus.$emit("pageChange", pager);
			}
		},
		mounted(){
			this.$bus.$on("countChange", count => {
				this.count = count;
			});
			this.$bus.$on("keywordChange", keyword => {
				var query = {
					"keyword": keyword,
					"pageIndex": 1,
					"pageSize": this.pageSize
				}
				this.$bus.$emit("search", query);
			});
			var pager = {
				pageIndex: this.pageIndex,
				pageSize: this.pageSize
			};
			this.$bus.$emit("pageChange", pager);
		}
	}
</script>

<style>
	.page-container{
		padding: 20px 0px 0px 300px;
		height: 22px;
		vertical-align: bottom;
	}
	.jump-index{
		width: 24px;
	}
	.page-size-select{
		height: 21px;
	}
	.shadow-min{
		width: 20px;
		border-radius: 1px;
		border: 1px solid red;
		/* box-shadow: inset 0px 0px 2px red !important; */
	}
	.shadow-max{
		width: 20px;
		border-radius: 1px;
		border: 3px solid red;
		/* box-shadow: inset 0px 0px 4px red !important; */
	}
	.current-page{
		background-color: #38f;
		border-radius: 1px;
		border: 2px solid #2d78f4;
	}
	.page-count{
		font-size: 14px;
	}
	.count-number{
		font-size: 12px;
		font-weight:bold;
	}
</style>
