<script>
  export let href = '';
</script>

<a
  href={href}
  class="
    my-2 w-full h-14 text-white leading-[3.5rem] bg-neutral-400
    shadow-[inset_0.4rem_0.4rem_0.4rem_0_rgba(255,255,255,0.25)]
  "
>
  <slot />
</a>
