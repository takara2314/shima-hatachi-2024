<script type="ts">
  import { goto } from '$app/navigation';
  import clsx from 'clsx';
  import Dismiss from '../components/icons/Dismiss.svelte';
  import BudouxP from '../components/p/BudouxP.svelte';

  let isOpen = false;

  const menus = [
    {
      content: 'トップ',
      href: '/',
    },
    {
      content: 'テーマ',
      href: '/#theme',
    },
    {
      content: '対象者',
      href: '/#target',
    },
    {
      content: '恩師インタビュー',
      href: '/#teacher-interview',
    },
    {
      content: '市外に住所がある人へ',
      href: '/#for-outside-participant',
    },
    {
      content: '思い出を投稿しよう！',
      href: '/#sns-share',
    },
    {
      content: 'お知らせ',
      href: '/#information',
    },
    {
      content: '志摩市二十歳の集い実行委員会について',
      href: '/#about-committee',
    },
    {
      content: 'お問い合わせ',
      href: '/#contact',
    }
  ]
</script>

<!-- ハンバーガーメニューを開くボタン -->
<button
  class="
    w-12 h-12
    bg-white
    flex flex-col justify-center items-center gap-1
    border-2 border-neutral-3300
    xl:hidden
    fixed top-3 right-3
  "
  on:click={() => isOpen = true}
  aria-label="メニューを開く"
>
  <div class="w-6 h-1 bg-black" />
  <div class="w-6 h-1 bg-black" />
  <div class="w-6 h-1 bg-black" />
</button>

<!-- ハンバーガーメニューを開いたとき -->
{#if isOpen}
  <!-- ハンバーガーメニューの背景 (クリックしたらメニューを閉じる) -->
  <button
    class="
      fixed top-0 left-0 w-full h-full
      bg-black bg-opacity-50
      z-10
    "
    on:click={() => isOpen = false}
  />

  <!-- ハンバーガーメニュー -->
  <menu
    class="
      bg-white flex flex-col
      fixed top-0 right-0 w-2/3 h-full z-20
    "
  >
    <!-- 閉じるボタン -->
    <li class="p-2 w-full h-16 text-right">
      <button
        class="w-10 h-10"
        on:click={() => isOpen = false}
        aria-label="閉じる"
      >
        <Dismiss />
      </button>
    </li>

    <!-- メニュー -->
    {#each menus as menu, index}
      <li class={clsx(
        `
          w-full h-16 text-center
          border-b-2 border-neutral-200
        `,
        index === 0 && 'border-t-2'
      )}>
        <button
          class="px-5 w-full h-full"
          on:click={() => {
            goto(menu.href);
            isOpen = false;
          }}
          aria-label={menu.content}
        >
          <BudouxP text={menu.content} />
        </button>
      </li>
    {/each}
  </menu>
{/if}
