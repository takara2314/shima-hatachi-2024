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

  const sponsors = [
    {
      parentName: '三重県建設業協会志摩支部',
      href: 'https://www.shimakensetsu.com/',
      children: [
        {
          name: '丸文工業㈱',
          href: 'https://www.marubun-kogyo.co.jp/'
        },
        {
          name: '磯部建設工業㈱',
          href: 'https://www.isobe-kensetsu.com/'
        },
        {
          name: '作田建設㈲',
          href: 'https://www.sakuda-k.jp/'
        },
        {
          name: '㈲北出建設',
          href: ''
        },
        {
          name: '㈱廣建設',
          href: 'https://www.hiroken-shima.com/'
        },
        {
          name: '三橋建設㈱',
          href: 'https://www.city.shima.mie.jp/material/files/group/16/mitsuhashikensetsu.pdf'
        },
        {
          name: '畑中建設工業㈱',
          href: 'http://www.hatanaka-kk.co.jp/'
        },
        {
          name: '㈱石吉組',
          href: 'https://www.ishikichi.com/'
        },
        {
          name: '㈲出馬重機',
          href: 'http://www.izuma.co.jp/'
        },
        {
          name: '㈱山本建材',
          href: 'http://www.e-yamaken.com/'
        },
        {
          name: '㈲小池建設',
          href: 'http://koike-co.info/'
        },
        {
          name: '㈲岡権組',
          href: ''
        },
        {
          name: '㈲丸福工業',
          href: 'https://www.marufuku-sanpai.com/'
        },
        {
          name: 'セイケン工業㈱',
          href: 'https://seiken-kougyou.jp/'
        },
      ]
    },
    {
      parentName: '志摩建設事業協同組合',
      href: 'https://www.shima-kensetsu.com/',
      children: [
        {
          name: 'Ac.s.L',
          href: ''
        },
        {
          name: '㈲堂岡工務店',
          href: 'https://pc-nct.biz/douoka/'
        },
        {
          name: '㈱吉村塗装',
          href: 'https://www.yoshimura-paint.com/'
        },
        {
          name: '㈱銅坂',
          href: 'https://dousaka.com/'
        },
        {
          name: '前橋設備工業㈱',
          href: 'https://www.maehashi.jp/'
        },
        {
          name: '㈱天白組',
          href: ''
        },
        {
          name: 'ヨコタ建設㈱',
          href: ''
        },
        {
          name: '㈲宮柴水工',
          href: 'https://miyashiba.com/'
        },
        {
          name: '㈱山紀建設',
          href: 'http://www.yamaki-kensetsu.jp/'
        },
        {
          name: '㈲東建設',
          href: ''
        },
        {
          name: '中部産業㈱',
          href: 'https://chubusangyou.co.jp/'
        },
        {
          name: '南部急送㈲',
          href: 'https://nanbu-kyusou.co.jp/'
        },
        {
          name: '㈲豊国',
          href: 'https://www.412103.net/'
        },
      ]
    }
  ]
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

  <div class="mt-8">
    <small class="text-gray-600">
      © 2023-2024 志摩市二十歳の集い実行委員会
    </small>
  </div>

  <div class="mt-8">
    <small class="text-gray-600 text-center">
      <p class="select-none">
        協賛業者：
      </p>

      {#each sponsors as parent, parentIndex}
        <p class={parentIndex !== 0 ? 'mt-5' : undefined}>
          <a
            class="text-gray-600 text-stroke-gray-600 underline"
            href={parent.href}
          >
            {parent.parentName}
          </a>
        </p>

        <p class="mt-2 text-gray-500">
          （
          {#each parent.children as child, index}
            <a
              class={child.href !== '' ? 'underline' : undefined}
              href={child.href !== '' ? child.href : undefined}
            >
              {child.name}
            </a>
            {index !== parent.children.length - 1 ? '、' : ''}
          {/each}
          ）
        </p>
      {/each}
    </small>
  </div>

  <div class="mt-8 text-sm text-gray-600 underline">
    <a href="https://github.com/takara2314/shima-hatachi-2024">
      ホームページのソースコード
    </a>
  </div>
</footer>
