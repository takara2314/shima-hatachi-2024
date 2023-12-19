<script lang="ts">
  import { inview } from 'svelte-inview';
  import { fade } from 'svelte/transition';

  export let id = '';
  export let margin = true;
  export let marginClass = '';
  export let padding = true;
  export let paddingClass = '';
  export let defaultShowing = true;

  let isInView: boolean = defaultShowing;
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
  use:inview={{
    unobserveOnEnter: true,
    rootMargin: '-20%'
  }}
  on:change={(
    // @ts-ignore
    { detail }) => {
      isInView = detail.inView;
    }
  }
>
  {#if isInView}
    <div
      class="
        w-full h-full leading-8 text-center
        flex flex-col items-center
      "
      in:fade
    >
      <slot />
    </div>
  {/if}
</section>
