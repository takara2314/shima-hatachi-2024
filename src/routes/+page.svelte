<script>
  import MetaTags from '../components/MetaTags.svelte';
  import Poster from './Poster.svelte';
  import ImportantNoticeArea from './_areas/ImportantNoticeArea.svelte';
  import ThemeArea from './_areas/ThemeArea.svelte';
  import TargetArea from './_areas/TargetArea.svelte';
  import TeacherInterviewArea from './_areas/TeacherInterviewArea.svelte';
  import ForOutsideParticipantArea from './_areas/ForOutsideParticipantArea.svelte';
  import SnsShareArea from './_areas/SnsShareArea.svelte';
  import AboutCommitteeArea from './_areas/AboutCommitteeArea.svelte';
  import ContactArea from './_areas/ContactArea.svelte';
  import SnsSharePopup from './SnsSharePopup.svelte';
</script>

<MetaTags
  description="平成15年4月2日から平成16年4月1日生まれの人を対象にした、志摩市の二十歳の集い（旧成人式）のホームページです"
/>

<main class="
  w-full h-full
  flex flex-col items-center
  overflow-x-hidden
">
  <!-- ポスター -->
  <Poster />

  <!-- 重要なお知らせ -->
  <ImportantNoticeArea />
  <!-- テーマは「好天」 -->
  <ThemeArea />
  <!-- 対象者 -->
  <TargetArea />
  <!-- 恩師インタビュー -->
  <TeacherInterviewArea />
  <!-- 市外に住所がある人へ -->
  <ForOutsideParticipantArea />
  <!-- 思い出を投稿しよう！ -->
  <SnsShareArea />
  <!-- 志摩市二十歳の集い実行委員会について -->
  <AboutCommitteeArea />
  <!-- お問い合わせ -->
  <ContactArea />

  <!-- SNSシェア用ポップアップ -->
  <SnsSharePopup />
</main>
