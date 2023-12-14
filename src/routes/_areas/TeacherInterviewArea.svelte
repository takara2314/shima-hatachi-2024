<script>
  import Area from '../../components/Area.svelte';
  import BudouxP from '../../components/p/BudouxP.svelte';
  import BudouxDiv from '../../components/div/BudouxDiv.svelte';
</script>

<Area
  id="theacher-interview"
  padding={false}
>
  <div class="px-5">
    <h2>
      恩師インタビュー
    </h2>

    <BudouxP
      text="二十歳の皆さん、中学3年生の頃に担任・副担任は覚えていますか。"
    />

    <BudouxP
      text="お世話になった先生方に、インタビューを行いました。"
      class="mt-10"
    />
  </div>

  <div class="
    mt-10 p-5 w-full aspect-video select-none bg-neutral-300
    flex flex-col items-center justify-center gap-5
  ">
    <h3 class="text-5xl font-heading">
      会場で上映
    </h3>

    <BudouxDiv
      text="式典終了後、当サイトまたは志摩市YouTubeチャンネルから閲覧可能になります。"
    />
  </div>
</Area>
