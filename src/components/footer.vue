<template>
	<div id="footer">
		<nav>
			<router-link to='/' tag='dl' exact>
				<dt>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-weixintubiao-"></use></svg>
				</dt>
				<dd>微信</dd>
			</router-link>
			<router-link to='/contact' tag='dl'>
				<dt>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-tongxunlu"></use></svg>
				</dt>
				<dd>通讯录</dd>
			</router-link>
			<router-link to='/find' tag='dl'>
				<dt>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-zhinanzhen1"></use></svg>
				</dt>
				<dd>发现</dd>
			</router-link>
			<router-link to='/me' tag='dl'>
				<dt>
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-wo-copy"></use></svg>
				</dt>
				<dd>我</dd>
			</router-link>
		</nav>
	</div>
</template>
<script type="text/javascript">
export default {
	data() {
		return {

		}
	}
}
</script>
<style lang='scss' scoped>
	#footer nav{
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		background: #f9f9f9;
		border-top: 1px solid #d4d4d4;
		width: 100%;
		padding-top: 0.15rem;
		overflow: hidden;
		//font-size: 0.704rem;
		position: fixed;
		bottom: 0;
		dl {
			cursor: pointer;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			-webkit-user-select: none;
			-webkit-box-flex: 1;
			-ms-flex-positive: 1;
			flex-grow: 1;
			text-align: center;
			//line-height: 1;
			&.router-link-active {
				dd, dt{
					color: #0bb908;
				}
			}
		}
		dt {
			position: relative;
			width: 1.4rem;
			height: 1.4rem;
			margin: auto auto;
			color: #929292;
			font-size: 1.2rem;
			//border: 1px solid red;
		}
		dd {
			color: #929292;
			-webkit-transform-origin: 50% 0;
			transform-origin: 50% 0;
			-webkit-transform: scale(0.9);
			transform: scale(0.9);
			margin-top: 0;
			margin-bottom: 0.08rem;
			font-size: 0.6rem;
		}
	}
</style>