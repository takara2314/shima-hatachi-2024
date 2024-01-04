<script>
  import Area from '../../components/Area.svelte';
  import BudouXP from '../../components/p/BudouXP.svelte';
  import { asset } from '$lib/asset';
</script>

<Area
  id="theme"
  paddingClass="px-0 xl:px-10"
  marginClass="mt-32 xl:mt-10"
>
  <div class="px-4">
    <h2>
      テーマは「好天」
    </h2>

    <BudouXP
      text="新型コロナウイルス感染症による影響も緩和され、今まで通りの日常が取りもどされつつあります。"
    />

    <BudouXP
      text="しかし、新型コロナウイルス感染症流行以前と同じ生活をするとなると、まだまだ曇り空が広がっています。"
      class="mt-10"
    />

    <BudouXP
      text="そこで我々の世代、学生から社会人まで二十歳になる全ての人が、 「二十歳の集い」をきっかけに曇り空を晴らそうという思いを込め"
      class="mt-10"
    />

    <p>
      「
      <span class="text-red-500">
        好天
      </span>
      」
    </p>

    <p>
      というテーマをつけました。
    </p>
  </div>

  <img
    src={asset('/photos/koten.webp')}
    alt="好天"
    class="mt-10 w-full"
  />
</Area>
