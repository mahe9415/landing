<template>
	<footer>
		<div class="social-footer">

			<div class="twitter s-block" v-if="this.twitter_handle">
				<a :href="this.twitter_handle" target="_blank"> 
					<img class="s-icon" src="" alt="Twitter">T
				</a>
			</div>

			<div class="fb s-block" v-if="this.fb_handle">
				<a :href="this.fb_handle" target="_blank"> 
					<img class="s-icon" src="" alt="Facebook">F
				</a>
			</div>

			<div class="google s-block" v-if="this.google_handle">
				<a :href="this.google_handle" target="_blank">
					<img class="s-icon" src="" alt="Google">G
				</a>
			</div>

			<div class="medium s-block" v-if="this.medium_handle">
				<a :href="this.medium_handle" target="_blank"> 
					<img class="s-icon" src="" alt="Medium">M
				</a>
			</div>

		</div>
	</footer>
</template>	

<script>
	export default {
		name:'MyFooter',
		props:['twitter_handle','fb_handle','google_handle','medium_handle']
	}
</script>

<style scoped>
	.social-footer{

	}
</style>