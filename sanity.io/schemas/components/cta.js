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
    },
    {
      title: 'Text',
      name: 'text',
      type: 'string',
      description: 'The text that will appear on the button',
    },
    {
      title: 'Link',
      name: 'href',
      type: 'string',
      description: 'Relative or absolute link (https://)',
      validation: Rule =>
        Rule.custom(value => {
          if (value && !value.startsWith('/') && !value.startsWith('https://') && !value.startsWith('#')) {
            return 'Incorrect URL.';
          }
          return true;
        }),
    }
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'href'
    },
  }
}