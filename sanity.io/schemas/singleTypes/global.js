export default {
  name: 'global',
  title: 'Global',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      type: 'string',
      name: 'email',
      title: 'Email',
      validation: Rule => Rule.required(),
    },
    {
      type: 'string',
      name: 'phone',
      title: 'Phone number',
    },
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
      name: 'footer_Logo',
      title: 'Logo',
      type: 'image',
      description: 'Footer logo should be uploaded in .svg format.',
      fieldset: 'footer',
      validation: Rule => Rule.required(),
    },
    {
      name: 'footer_Heading',
      title: 'Heading',
      type: 'string',
      fieldset: 'footer',
      validation: Rule => Rule.required(),
    },
    {
      name: 'footer_Cta',
      title: 'CTA',
      type: 'cta',
      fieldset: 'footer',
      validation: Rule => Rule.required(),
    },
    {
      name: 'footer_Slogan',
      title: 'Slogan',
      type: 'markdown',
      fieldset: 'footer',
      validation: Rule => Rule.required(),
    },
    {
      name: 'footer_Address',
      title: 'Address',
      type: 'string',
      fieldset: 'footer',
      validation: Rule => Rule.required(),
    },
    {
      name: 'footer_Tel',
      title: 'Phone',
      type: 'string',
      fieldset: 'footer',
    },
    {
      name: 'cookieConsent_Heading',
      title: 'Heading',
      type: 'string',
      fieldset: 'cookieConsent',
    },
    {
      name: 'cookieConsent_Description',
      title: 'Description',
      type: 'markdown',
      fieldset: 'cookieConsent',
    },
    {
      name: 'cookieConsent_PreferenceTitle',
      title: 'Preference Title',
      type: 'string',
      fieldset: 'cookieConsent',
    },
    {
      name: 'cookieConsent_List',
      title: 'List',
      type: 'array',
      of: [{
        type: 'list_titleAndDescription',
      }],
      fieldset: 'cookieConsent',
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
    },
    {
      name: 'footer',
      title: 'Footer',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'cookieConsent',
      title: 'Cookie Consent',
      options: { collapsible: true, collapsed: true }
    },
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