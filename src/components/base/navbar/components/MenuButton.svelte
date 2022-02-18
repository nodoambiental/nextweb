<script lang='ts'>
	import * as Classes from '@components/style';
	import * as Utils from '@utility'
    const Navbar = Classes.Defaults.navbar.components
    const changeMenuState = Utils.MediaQueries.changeMenuState
    let isMenuOpen
    Utils.MediaQueries.mediaState.subscribe(state => {
        isMenuOpen = state.isMenuOpen
    })
</script>

{#if isMenuOpen}
    <div class="flex-none" on:click={changeMenuState}>
        <button class={Navbar.element}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={Navbar.svg.viewbox} class={Navbar.svg.regular}>   
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>                       
            </svg>
        </button>
    </div> 
{:else}
    <div class="flex-none" on:click={changeMenuState}>
        <button class={Navbar.element}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={Navbar.svg.viewbox} class={Navbar.svg.error}>           
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
            </svg>
        </button>
    </div> 
{/if}