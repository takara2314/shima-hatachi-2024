<script>
  import { asset } from '$lib/asset';
</script>

<section id="poster">
  <div class="w-[100dvw] xl:w-[33dvw] h-[calc(100dvw*784/720)] xl:h-[calc(33dvw*784/720)]">
    <img
      src={asset('/poster.webp')}
      alt="ポスター"
      class="w-full"
    />
  </div>
</section>
