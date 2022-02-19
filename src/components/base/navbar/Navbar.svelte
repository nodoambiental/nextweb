<script lang='ts'>
// Imports
	import Start from './containers/Start.svelte';
	import Main from './containers/Main.svelte';
	import End from './containers/End.svelte';
	import Mobile from './containers/Mobile.svelte';
	import MenuButton from './components/MenuButton.svelte';
	import * as Classes from '@components/style'
	import * as Utils from '@utility'
// Set up reactivity
	Utils.MediaQueries.setMenuListener()
	let isMobileActive: boolean, isMenuOpen: boolean
	Utils.MediaQueries.mediaState.subscribe(state => {
		isMobileActive = state.isMobileActive
		isMenuOpen = state.isMenuOpen
	})
</script>	

<div class={Classes.Defaults.navbar.body}>
	{#if !isMobileActive}
		<Start/>
		<Main/>
		<End/>
	{:else}
		{#if !isMenuOpen}
			<Start/>
			<span class="flex-none mx-auto"></span>
			<MenuButton/>
		{:else}
			<Mobile/>
		{/if}
	{/if}
</div>