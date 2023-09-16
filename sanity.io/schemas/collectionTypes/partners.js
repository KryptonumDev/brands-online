export default {
  name: 'partners',
  title: 'Partners',
  type: 'document',
  icon: () => '🤝',
  fields: [
    {
      type: 'image',
      name: 'img',
      title: 'Image',
      validation: Rule => Rule.required(),
    },
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: Rule => Rule.required(),
    },
    {
      type: 'url',
      name: 'href',
      title: 'URL',
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