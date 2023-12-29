<script lang="ts">
  export let id = '';
  export let margin = true;
  export let marginClass = '';
  export let padding = true;
  export let paddingClass = '';
</script>

<section
  id={id}
  class={`
    ${margin
      ? (marginClass === '' ? 'mt-32' : marginClass)
      : ''
    }
    ${padding
      ? (paddingClass === '' ? 'px-5 xl:px-10' : paddingClass)
      : ''
    }
    w-full h-full leading-8 text-center
  `}
>
  <div
    class="
      w-full h-full leading-8 text-center
      flex flex-col items-center
    "
  >
    <slot />
  </div>
</section>
