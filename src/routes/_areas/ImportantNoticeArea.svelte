<script>
  import { asset } from '$lib/asset';
  import Area from '../../components/Area.svelte';
  import PrimaryLinkBtn from '../../components/buttons/PrimaryLinkBtn.svelte';
  import SecondaryLinkBtn from '../../components/buttons/SecondaryLinkBtn.svelte';
</script>

<Area
  id="important-notice"
  marginClass="mt-2"
>
  <div class="flex flex-row gap-4">
    <span>
      令和6年1月7日（日）
    </span>
    <span>
      阿児アリーナ
    </span>
  </div>

  <div class="flex flex-row">
    <span>
      受付開始 9時30分
    </span>
    <span class="text-gray-500 select-none">
      ・
    </span>
    <span>
      式典開始 10時30分
    </span>
  </div>

  <PrimaryLinkBtn href={asset('/program.pdf')}>
    式次第はこちら
  </PrimaryLinkBtn>

  <SecondaryLinkBtn href="https://www.youtube.com/watch?v=s-cso0AaKRE">
    YouTubeでライブ配信を行います
  </SecondaryLinkBtn>
</Area>
