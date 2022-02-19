<script lang='ts'>
    import MenuButton from '../components/MenuButton.svelte';
    import Main from './Main.svelte';
    import End from './End.svelte';
  </script>	
<div class="flex-none mx-auto">
    <ul class="menu">
      <Main/>
      <End/>
      <li class="flex-none mx-auto">
        <MenuButton/>
      </li>
    </ul>
  </div>