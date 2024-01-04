<script lang="ts">
  import BudouX from '../BudouX.svelte';
  export let text: string;
</script>

<p class={$$props.class}>
  <BudouX text={text} />
</p>
