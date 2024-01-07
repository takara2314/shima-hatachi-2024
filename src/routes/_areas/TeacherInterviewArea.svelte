<script>
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
    mt-10 p-5 w-full aspect-video select-none bg-neutral-300
    flex flex-col items-center justify-center gap-5
  ">
    <h3 class="text-5xl font-heading">
      会場で上映
    </h3>

    <BudouXDiv
      text="式典終了後1週間以内に、当サイトおよび志摩市YouTubeチャンネルから閲覧可能になります。"
    />
  </div>
</Area>
