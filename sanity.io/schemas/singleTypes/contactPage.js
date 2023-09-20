export default {
  name: 'contactPage',
  title: 'Contact',
  type: 'document',
  icon: () => '📧',
  fields: [
    {
      name: 'hero_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'hero_Paragraph',
      type: 'markdown',
      title: 'Paragraph',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'hero_Hint',
      type: 'string',
      title: 'Hint',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },
    {
      name: 'hero_Cta',
      type: 'string',
      title: 'CTA Text',
      fieldset: 'hero',
      validation: Rule => Rule.required(),
    },

    {
      name: 'step1_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'step1',
      validation: Rule => Rule.required(),
    },
    {
      name: 'step1_Paragraph',
      type: 'markdown',
      title: 'Paragraph',
      fieldset: 'step1',
      validation: Rule => Rule.required(),
    },
    {
      name: 'step1_Options',
      type: 'array',
      of: [
        {
          type: 'step1_Options'
        }
      ],
      title: 'Options',
      fieldset: 'step1',
      validation: Rule => Rule.required(),
    },

    {
      name: 'step2_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'step2',
      validation: Rule => Rule.required(),
    },
    {
      name: 'step2_Paragraph',
      type: 'markdown',
      title: 'Paragraph',
      fieldset: 'step2',
      validation: Rule => Rule.required(),
    },
    {
      name: 'step2_Options',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      title: 'Options',
      fieldset: 'step2',
      validation: Rule => Rule.required(),
    },

    {
      name: 'step3_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'step3',
      validation: Rule => Rule.required(),
    },
    {
      name: 'step3_Paragraph',
      type: 'markdown',
      title: 'Paragraph',
      fieldset: 'step3',
      validation: Rule => Rule.required(),
    },
    {
      name: 'step3_Options',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      title: 'Options',
      fieldset: 'step3',
      validation: Rule => Rule.max(6),
    },

    {
      name: 'step4_Heading',
      type: 'markdown',
      title: 'Heading',
      fieldset: 'step4',
      validation: Rule => Rule.required(),
    },
    {
      name: 'step4_Paragraph',
      type: 'markdown',
      title: 'Paragraph',
      fieldset: 'step4',
      validation: Rule => Rule.required(),
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
      name: 'step1',
      title: 'Step 1',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'step2',
      title: 'Step 2',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'step3',
      title: 'Step 3',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'step4',
      title: 'Step 4',
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

export const step1_Options = {
  name: "step1_Options",
  title: "Options",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'list',
      title: 'List',
      type: 'array',
      of: [
        { type: 'string' }
      ],
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'list',
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: `${subtitle.join(', ')} items`,
      }
    }
  }
}