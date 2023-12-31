export default {
  name: "cta",
  title: "Call to action",
  type: "object",
  fields: [
    {
      name: 'theme',
      type: 'string',
      title: 'Typ',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' }
        ],
        layout: 'radio',
        direction: "horizontal"
      },
      initialValue: 'primary',
      validation: Rule => Rule.required()
    },
    {
      title: 'Text',
      name: 'text',
      type: 'string',
      description: 'The text that will appear on the button',
      validation: Rule => Rule.required()
    },
    {
      title: 'Link',
      name: 'href',
      type: 'string',
      description: 'Relative or absolute link (https://)',
      validation: Rule => Rule.custom(value => {
        if (value && !value.startsWith('/') && !value.startsWith('https://') && !value.startsWith('#')) {
          return 'Incorrect URL.';
        }
        return true;
      }).required(),
    }
  ],
  preview: {
    select: {
      title: 'text',
      theme: 'theme',
      href: 'href'
    },
    prepare({ title, theme, href }) {
      return {
        title: title,
        subtitle: `${theme} button linked to ${href}`,
      }
    }
  }
}