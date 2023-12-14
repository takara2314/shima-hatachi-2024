<script>
  import PrimaryLinkBtn from '../../components/buttons/PrimaryLinkBtn.svelte';
  import SecondaryLinkBtn from '../../components/buttons/SecondaryLinkBtn.svelte';
</script>

<section
  id="important-notice"
  class="
    mt-2 px-5 w-full h-full text-center
    flex flex-col items-center
  "
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

  <PrimaryLinkBtn href="/pamphlet.pdf">
    パンフレットはこちら
  </PrimaryLinkBtn>

  <SecondaryLinkBtn href="https://youtube.com/XXX">
    YouTubeでライブ配信を行います
  </SecondaryLinkBtn>
</section>
