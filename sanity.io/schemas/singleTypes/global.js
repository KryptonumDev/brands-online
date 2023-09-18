export default {
  name: 'global',
  title: 'Global',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      type: 'string',
      name: 'instagram',
      title: 'Instagram',
      fieldset: 'social',
    },
    {
      type: 'string',
      name: 'facebook',
      title: 'Facebook',
      fieldset: 'social',
    },
    {
      type: 'string',
      name: 'youtube',
      title: 'YouTube',
      fieldset: 'social',
    },
    {
      name: 'seo',
      type: 'global_Seo',
      title: 'Global SEO',
    },
  ],
  fieldsets: [
    {
      name: 'social',
      title: 'Social links',
      options: {
        collapsible: true
      }
    }
  ]
}

export const global_Seo = {
  name: "global_Seo",
  title: "Global SEO",
  type: "object",
  fields: [
    {
      name: 'og_Img',
      type: 'image',
      title: 'OG Image',
      description: 'An image that is visible when sharing the page on social media. The dimensions of the photo should be 1200x630px'
    },
  ]
}