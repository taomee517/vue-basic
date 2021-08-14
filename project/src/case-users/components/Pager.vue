<template>
	<div>
		<input type="button" value="首页" @click="turnToStart"/>
		<input type="button" :disabled="pageIndex===1" value="上一页" @click="turnToPrev"/>
		<input type="button" v-if="pageIndex>1" value="1" @click="turnToIndex"/>
		<input type="button" v-if="pageIndex>2" value="..." />
		<input type="button" :value="pageIndex" class="currentPage" @click="turnToIndex" />
		<input type="button" v-if="maxPage>pageIndex+1" value="..." />
		<input type="button" v-if="maxPage>pageIndex" :value="maxPage" @click="turnToIndex" />
		<input type="button" :disabled="maxPage===pageIndex" value="下一页" @click="turnToNext"/>
		<input type="button" value="尾页" @click="turnToEnd"/>
		<select ref="pageSizeSelect" @change="pageSizeChange">
			<option value="10" selected>10条/页</option>
			<option value="20">20条/页</option>
			<option value="50">50条/页</option>
			<option value="100">100条/页</option>
		</select>
		<input ref="jumpIndex" :value="pageIndex" class="jumpIndex" @keyup.enter="pageJump" />
		<input type="button" value="跳转" @click="pageJump"/>
	</div>
</template>

<script>
	export default{
		name: 'Pager',
		data() {
			return {
				pageIndex: 1,
				pageSize: 10,
				count: 68
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
							jumpIndexElem.setAttribute('class', 'shadowMax');
							jumpIndexElem.setAttribute('flicker','2');
						}else{
							jumpIndexElem.setAttribute('class', 'shadowMin');
							jumpIndexElem.setAttribute('flicker','1');
						}
						twinkleIndex++;
					},100);
					return;
				}
				jumpIndexElem.setAttribute('class', 'jumpIndex');
				this.pageIndex = jumpIndex;
			},
			pageSizeChange(){
				this.pageIndex = 1;
				this.pageSize = parseInt(this.$refs.pageSizeSelect.value);
			}
		}
	}
</script>

<style>
	.jumpIndex{
		width: 20px;
	}
	.shadowMin{
		width: 20px;
		border-radius: 1px;
		border: 1px solid red;
		/* box-shadow: inset 0px 0px 2px red !important; */
	}
	.shadowMax{
		width: 20px;
		border-radius: 1px;
		border: 3px solid red;
		/* box-shadow: inset 0px 0px 4px red !important; */
	}
	.currentPage{
		background-color: #38f;
		border-radius: 0;
		border: 1px solid #2d78f4;
	}
</style>
