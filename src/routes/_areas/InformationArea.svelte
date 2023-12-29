<script lang="ts">
  import { asset } from '$lib/asset';
  import Area from '../../components/Area.svelte';
  import BudouxP from '../../components/p/BudouxP.svelte';
  import InformationAreaItem from './InformationAreaItem.svelte';

  const infos = [
    {
      contact: '防災危機管理室',
      items: [
        {
          title: '交通安全協会への協力依頼について',
          context: '交通安全協会にご協力をお願します。',
          buttonText: '詳細を見る',
          href: asset('/traffic-safety-association.pdf')
        },
        {
          title: '飲酒運転は絶対に「しない！」「させない！」',
          context: '飲酒運転は、厳しい行政処分と罰則が科されますので、絶対にしないでください。',
          buttonText: '詳細を見る',
          href: asset('/anti-drunk-driving.pdf')
        }
      ]
    },
    {
      contact: '秘書課',
      items: [
        {
          title: '志摩市YouTube',
          context: '志摩市に関連する出来事や行政情報などを動画でお知らせしています。志摩市観光PRキャラクターのしまこさんが目印です！',
          buttonText: 'チャンネルを見る',
          href: 'https://youtube.com/@shimacitych?si=U2dRmii482TPh60_'
        },
        {
          title: '志摩市Instagram',
          context: '志摩の魅力を発信中！当日の思い出は「#shimastagram」「#志摩市二十歳の集い2024」 でみんなとシェアしよう♩',
          buttonText: 'プロフィールを見る',
          href: 'https://www.instagram.com/shimacity_official?igsh=dmwyaGhub2pqazds'
        }
      ]
    },
    {
      contact: 'スマート改革資産経営課',
      items: [
        {
          title: '志摩市公式LINE',
          context: '志摩市の公式LINEに登録して志摩市のイベント、観光、防災情報などを受け取ろう！欲しい情報だけの受信設定が可能です。',
          buttonText: '登録する',
          href: 'https://line.me/R/ti/p/@455kvvmf#~'
        }
      ]
    },
    {
      contact: '総合政策課',
      items: [
        {
          title: '奨学金の返済を補助します！',
          context: '前年度中に返済した奨学金の2分の1を補助します。',
          buttonText: '詳細を見る',
          href: 'https://www.city.shima.mie.jp/kakuka/seisakusuishin/sogoseisakuka/sumai/5366.html'
        }
      ]
    },
    {
      contact: '総務課',
      items: [
        {
          title: '選挙啓発パンフレット',
          context: '選挙に参加する重要性を掲載しています。',
          buttonText: '詳細を見る',
          href: 'https://cdn2.me-qr.com/pdf/18947847.pdf'
        }
      ]
    },
    {
      contact: '健康推進課',
      items: [
        {
          title: '受動喫煙防止に関するアンケート',
          context: 'アンケートにご協力ください。',
          buttonText: 'アンケートに答える',
          href: 'https://logoform.jp/form/c8nc/195706'
        }
      ]
    },
    {
      contact: '商工課',
      items: [
        {
          title: '消費生活について',
          context: '消費者トラブルなど、今後の社会生活で気をつけていただきたいことなどをお知らせしています。',
          buttonText: '詳細を見る',
          href: 'https://www.city.shima.mie.jp/kakuka/sangyoshinkobu/shoko/shohiseikatsusodan/5887.html'
        },
        {
          title: 'CAREERS SHOWCASE（志摩市企業紹介）',
          context: '志摩市内の企業のPR動画です！I･J･Uターンをお考えの皆様、是非ご確認ください！',
          buttonText: '動画を見る',
          href: 'https://youtu.be/k9VOU-Ccfe4?si=s7YqScZiz-q1Egdq'
        }
      ]
    },
    {
      contact: '松阪ケーブルテレビ',
      items: [
        {
          title: '「特別番組 二十歳のつどい2024」放送日のお知らせ',
          context: 'MCTVエリア内の2市4町で行われる二十歳の集いの様子を特別番組として放送します！',
          buttonText: '詳細を見る',
          href: asset('/mctv.pdf')
        }
      ]
    }
  ];
</script>

<Area id="for-outside-participant">
  <h2>
    お知らせ
  </h2>

  <BudouxP
    text="二十歳の節目を迎えられる皆様へ、市役所と関係各所からお知らせです。"
  />

  <BudouxP
    text="この件のお問い合わせは、各差出人へお願いします。"
  />

  <div class="mt-10">
    {#each infos as info}
      <div class="mt-20">
        <h3 class="mb-3 text-xl">
          {info.contact}
        </h3>

        <ul class="flex flex-col gap-5">
          {#each info.items as item}
            <InformationAreaItem
              title={item.title}
              context={item.context}
              buttonText={item.buttonText}
              href={item.href}
            />
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</Area>
