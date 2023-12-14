<script lang="ts">
  import Budoux from '../Budoux.svelte';
  export let text: string;
</script>

<p class={$$props.class}>
  <Budoux text={text} />
</p>
