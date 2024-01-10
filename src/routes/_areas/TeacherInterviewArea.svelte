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

  <div class="mt-10">
    <BudouXP text="東海中学校の岡部先生の名前が誤って記載されていましたことをお詫び申し上げます。" />
    <BudouXP text="正しくは「岡部弘和」先生です。「岡田和憲」先生という名前は誤りでした。訂正いたしますことをご了承ください。" />
  </div>
</Area>
