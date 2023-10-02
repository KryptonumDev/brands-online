import { domain } from '../global/Seo';

export default function sitemap() {
  return [
    {
      url: `${domain}`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/about`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/clients`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/services`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/privacy-policy`,
      lastModified: new Date(),
    },
  ]
}