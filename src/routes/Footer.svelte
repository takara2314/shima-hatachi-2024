<script>
  import { asset } from '$lib/asset';
  import FooterItem from './FooterItem.svelte';

  const supporters = [
    {
      name: 'しましまみえる Instagram',
      description: '「しましまみえる」とは、令和4年の成人式をきっかけに結成された、「志摩市に関わる全ての人たちのためのプラットフォーム」です。',
      href: 'https://www.instagram.com/shima2mieru/',
      iconSrc: asset('/icons/shima2mieru.webp'),
      iconAlt: 'しましまみえる'
    },
    {
      name: '生涯学習スポーツ課 Instagram',
      description: '志摩市に関する生涯学習と社会教育・文化・スポーツ等の情報を随時掲載していきます。',
      href: 'https://www.instagram.com/shimacity_sgakuspo/',
      iconSrc: asset('/icons/shimacity_sgakuspo.webp'),
      iconAlt: '生涯学習スポーツ課'
    }
  ];
</script>

<footer
  class="
    mt-32 px-5 xl:px-10 pt-8 pb-28 xl:ml-[33.333333%]
    w-full xl:w-2/3 bg-neutral-100
    flex flex-col items-center
    border-t-2 border-neutral-200
  "
>
  <ul
    class="w-full flex flex-col gap-5"
  >
    {#each supporters as supporter}
      <FooterItem
        {...supporter}
      />
    {/each}
  </ul>

  <div class="mt-10">
    <small class="text-gray-600">
      © 2023-2024 志摩市二十歳の集い実行委員会
    </small>
  </div>
  <div>
    <small class="text-gray-600">
      <span class="select-none">
        協賛：
      </span>
      丸文工業㈱
    </small>
  </div>
</footer>
