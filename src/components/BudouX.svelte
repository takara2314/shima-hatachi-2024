<script lang="ts">
  import { loadDefaultJapaneseParser } from 'BudouX';

  export let text: string;
  const parser = loadDefaultJapaneseParser();
  const parsed = parser.translateHTMLString(text);
</script>

{@html parsed}
