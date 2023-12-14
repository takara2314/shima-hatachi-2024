<script lang="ts">
  import BudouxP from '../components/p/BudouxP.svelte';
  export let name: string;
  export let description: string;
  export let href: string;
  export let iconSrc: string;
  export let iconAlt: string;
</script>

<li
  class="bg-white border-2 border-yellow-600"
>
  <a
    href={href}
    class="p-3 w-full h-full flex flex-row gap-4"
  >
    <div
      class="w-20 flex flex-col items-center justify-center"
    >
      <img
        src={iconSrc}
        alt={iconAlt}
        class="w-full"
      />
    </div>

    <div class="w-[calc(100%-5rem)]">
      <h3 class="
        text-sm
        after:mb-2 after:content-['']
        after:border-b-2 after:border-red-500 after:block
      ">
        {name}
      </h3>
      <BudouxP
        text={description}
        class="text-xs"
      />
    </div>
  </a>
</li>
