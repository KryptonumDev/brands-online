export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: () => '⭐️',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      fieldset: 'hero',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo'
    },
  ],
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero section',
      options: {
        collapsible: true
      }
    }
  ],
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
  ]
}