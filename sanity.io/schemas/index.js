// Single Types
import global, { global_Seo } from './singleTypes/global'
import homepage from './singleTypes/homepage'
import clients from './singleTypes/clients'

export const singleTypes = [
  homepage,
  clients,
]

// Collection Types
import partners from './collectionTypes/partners'

export const collectionTypes = [
  partners
]

// Componenets
import cta from './components/cta'
import seo from './components/seo'

export const components = [
  cta,
  seo,
]

export const schemaTypes = [
  // Single Types
  global,
  global_Seo,

  // Restruzturize
  ...singleTypes,
  ...collectionTypes,
  ...components
]