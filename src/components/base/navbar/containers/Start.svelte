<script lang='ts'>
	import * as Classes from '@components/style'
		import * as Utils from '@utility'
		let isMobileActive: boolean
		Utils.MediaQueries.mediaState.subscribe(state => {
			isMobileActive = state.isMobileActive
		})
</script>
<div class={Classes.Defaults.navbar.containers.start}><slot></slot>
	{#if isMobileActive}
	<span>
		Menu Title 
	  </span>
	  {:else}
	  <span>
		Menu Title Expanded
	  </span>
	  {/if}</div>