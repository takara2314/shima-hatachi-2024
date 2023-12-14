<script>
  import FooterItem from './FooterItem.svelte';
</script>

<footer
  class="
    mt-32 px-5 pt-8 pb-24 w-full bg-neutral-100
    flex flex-col items-center
    border-t-2 border-neutral-200
  "
>
  <ul
    class="w-full flex flex-col gap-5"
  >
    <FooterItem
      name="しましまみえる Instagram"
      description="「しましまみえる」とは、令和4年の成人式をきっかけに結成された、「志摩市に関わる全ての人たちのためのプラットフォーム」です。"
      href="https://www.instagram.com/shima2mieru/"
      iconSrc="/icons/shima2mieru.webp"
      iconAlt="しましまみえる"
    />
    <FooterItem
      name="生涯学習スポーツ課 Instagram"
      description="志摩市に関する生涯学習と社会教育・文化・スポーツ等の情報を随時掲載していきます。"
      href="https://www.instagram.com/shimacity_sgakuspo/"
      iconSrc="/icons/shimacity_sgakuspo.webp"
      iconAlt="生涯学習スポーツ課"
    />
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
