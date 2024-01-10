<script>
  import Youtube from 'svelte-youtube-embed';
  import Area from '../../components/Area.svelte';
  import BudouXP from '../../components/p/BudouXP.svelte';
  import BudouXDiv from '../../components/div/BudouXDiv.svelte';
</script>

<Area
  id="teacher-interview"
  paddingClass="px-0 xl:px-10"
>
  <div class="px-5">
    <h2>
      恩師インタビュー
    </h2>

    <BudouXP
      text="二十歳の皆さん、中学3年生の頃の担任・副担任は覚えていますか。"
    />

    <BudouXP
      text="お世話になった先生方に、インタビューを行いました。"
      class="mt-10"
    />
  </div>

  <div class="
    mt-10 w-full aspect-video bg-neutral-300
  ">
    <Youtube
      id="kmRPGpkJ94Y"
      animations={false}
    />
  </div>
</Area>
