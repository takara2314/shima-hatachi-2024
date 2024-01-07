<script lang="ts">
  import BudouXP from '../../components/p/BudouXP.svelte';
  export let title: string;
  export let context: string;
  export let buttonText: string;
  export let href: string;
</script>

<li
  class="bg-white border-2 border-yellow-600"
>
  <a
    href={href}
    class="w-full h-full"
  >
    <div class="px-2 py-5 w-full h-full">
      <h3 class="
        after:mb-2 after:content-['']
        after:border-b-2 after:border-red-500 after:block
      ">
        {title}
      </h3>
      <BudouXP
        text={context}
      />

      <div class="mt-5 text-neutral-400">
        {buttonText}
      </div>
    </div>
  </a>
</li>
