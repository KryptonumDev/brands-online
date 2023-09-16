export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: () => '⭐️',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'hero',
    },
      {
        name: 'hero_Paragraph',
        type: 'markdown',
        title: 'Paragraph',
        fieldset: 'hero',
      },
      {
        name: 'hero_Cta',
        type: 'cta',
        title: 'CTA',
        fieldset: 'hero',
      },
    {
      name: 'motivation_Paragraph',
      type: 'markdown',
      title: 'Paragraph',
      fieldset: 'motivation',
    },
    {
      name: 'clients_Tag',
      type: 'string',
      title: 'Tag',
      fieldset: 'clients',
    },
    {
      name: 'clients_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'clients',
    },
    {
      name: 'clients_Paragraph',
      type: 'markdown',
      title: 'Paragraph',
      fieldset: 'clients',
    },
    {
      name: 'clients_Cta',
      type: 'cta',
      title: 'CTA',
      fieldset: 'clients',
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
      title: 'Hero',
      options: {
        collapsible: true
      }
    },
    {
      name: 'motivation',
      title: 'Our motivation',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'clients',
      title: 'Clients',
      options: { collapsible: true, collapsed: true },
    }
  ],
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
  ]
}