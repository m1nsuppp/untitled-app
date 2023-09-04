import { siteConfig } from '@/config/site';
import { MetadataRoute } from 'next';

const robots = () => {
  const baseURL = siteConfig.url;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseURL}/sitemap.xml`,
  };
};

export default robots;