<script lang="ts">
  import BudouX from '../BudouX.svelte';
  export let text: string;
</script>

<div class={$$props.class}>
  <BudouX text={text} />
</div>
