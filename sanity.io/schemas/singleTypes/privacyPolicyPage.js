export default {
  name: 'privacyPolicyPage',
  title: 'Privacy Policy',
  type: 'document',
  icon: () => '📄',
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
      name: 'hero_readingTime',
      type: 'boolean',
      title: 'Show estimated reading time?',
      fieldset: 'hero',
    },
    {
      name: 'content_List',
      type: 'array',
      of: [
        { type: 'list_titleAndDescription' }
      ],
      title: 'List',
      fieldset: 'content',
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
      name: 'content',
      title: 'Policy content',
      options: { collapsible: true, collapsed: true }
    },
  ],
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
  ]
}