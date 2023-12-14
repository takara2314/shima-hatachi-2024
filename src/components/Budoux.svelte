<script lang="ts">
  import { loadDefaultJapaneseParser } from 'budoux';

  export let text: string;
  const parser = loadDefaultJapaneseParser();
  const parsed = parser.translateHTMLString(text);
</script>

{@html parsed}
