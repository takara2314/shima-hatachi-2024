<script lang="ts">
  import { MetaTags } from 'svelte-meta-tags';
  import { PUBLIC_SITE_URL } from '$env/static/public';

  const baseTitle = '令和6年度志摩市二十歳の集い';
  export let title = baseTitle;
  export let description: string;
  export let href = '/';

  $: metaTags = {
    title: title,
    titleTemplate: href !== '/' ? `${title} | ${baseTitle}` : baseTitle,
    description: description,
    canonical: `${PUBLIC_SITE_URL}${href}`,
    openGraph: {
      url: `${PUBLIC_SITE_URL}${href}`,
      title: href !== '/' ? `${title} | ${baseTitle}` : baseTitle,
      description: description,
      images: [
        {
          url: `${PUBLIC_SITE_URL}/ogp.webp`,
          width: 800,
          height: 580,
          alt: 'OGP'
        }
      ],
      siteName: baseTitle
    },
    twitter: {
      cardType: 'summary_large_image',
      title: href !== '/' ? `${title} | ${baseTitle}` : baseTitle,
      description: description,
      image: `${PUBLIC_SITE_URL}/ogp.webp`,
      imageAlt: 'OGP'
    }
  };
</script>

<MetaTags {...metaTags} />
