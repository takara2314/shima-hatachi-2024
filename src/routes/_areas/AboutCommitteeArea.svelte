<script>
  import Area from '../../components/Area.svelte';
  import BudouXP from '../../components/p/BudouXP.svelte';
  import { asset } from '$lib/asset';
</script>

<Area
  id="about-committee"
  paddingClass="px-0 xl:px-10"
>
  <div class="px-4">
    <h2>
      志摩市二十歳の集い実行委員会について
    </h2>

    <BudouXP
      text="志摩市二十歳の集い実行委員会において、実行委員の皆様で式典の企画、運営に取り組んでいます。"
    />
  </div>

  <img
    src={asset('/photos/committee1.webp')}
    alt="全員で会議 (オフライン)"
    class="mt-10 w-full"
  />
  <img
    src={asset('/photos/committee2.webp')}
    alt="全員で会議 (Zoom)"
    class="w-full"
  />
  <img
    src={asset('/photos/committee3.webp')}
    alt="恩師インタビューについて先生方に説明"
    class="w-full"
  />
  <img
    src={asset('/photos/committee4.webp')}
    alt="リハーサルの記念写真"
    class="w-full"
  />
</Area>
