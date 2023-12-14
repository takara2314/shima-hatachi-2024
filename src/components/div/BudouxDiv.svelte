<script lang="ts">
  import Budoux from '../Budoux.svelte';
  export let text: string;
</script>

<div class={$$props.class}>
  <Budoux text={text} />
</div>
