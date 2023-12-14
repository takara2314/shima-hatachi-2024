<script lang="ts">
  export let href = '';
  export let iconSrc: string;
  export let iconAlt: string;
</script>

<li class="
  w-16 h-16 border-2 border-yellow-600
">
  <a
    href={href}
    class="w-full h-full"
  >
    <div class="
      w-full h-full
      flex flex-col items-center justify-center
    ">
      <img
        src={iconSrc}
        alt={iconAlt}
        class="w-10 h-10"
      />
    </div>
  </a>
</li>
