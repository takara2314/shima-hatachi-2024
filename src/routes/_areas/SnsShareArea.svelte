<script>
  import Area from '../../components/Area.svelte';
  import SnsButtonItem from './SnsButtonItem.svelte';
  import { asset } from '$lib/asset';
</script>

<Area id="sns-share">
  <h2>
    思い出を投稿しよう！
  </h2>

  <p>
    式典の思い出をSNSに投稿しましょう！
  </p>

  <p class="mt-10">
    投稿する際は、ハッシュタグ
    「
    <span class="text-red-500">
      #志摩市二十歳の集い2024
    </span>
    」
    をつけてみんなと共有しましょう！
  </p>

  <ul class="mt-5 flex flex-row gap-8">
    <SnsButtonItem
      href="https://x.com/search?q=%23%E5%BF%97%E6%91%A9%E5%B8%82%E4%BA%8C%E5%8D%81%E6%AD%B3%E3%81%AE%E9%9B%86%E3%81%842024"
      iconSrc={asset('/icons/x.svg')}
      iconAlt="X (旧Twitter)"
    />

    <SnsButtonItem
      href="https://www.instagram.com/explore/tags/%E5%BF%97%E6%91%A9%E5%B8%82%E4%BA%8C%E5%8D%81%E6%AD%B3%E3%81%AE%E9%9B%86%E3%81%842024/"
      iconSrc={asset('/icons/instagram.svg')}
      iconAlt="Instagram"
    />

    <SnsButtonItem
      href="https://www.tiktok.com/search?q=%23%E5%BF%97%E6%91%A9%E5%B8%82%E4%BA%8C%E5%8D%81%E6%AD%B3%E3%81%AE%E9%9B%86%E3%81%842024"
      iconSrc={asset('/icons/tiktok.svg')}
      iconAlt="TikTok"
    />
  </ul>
</Area>
