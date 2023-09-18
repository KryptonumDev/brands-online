// Single Types
import global, { global_Seo } from './singleTypes/global'
import homePage from './singleTypes/homePage'
import clientsPage from './singleTypes/clientsPage'
import servicesPage, { servicesPage_servicesList  } from './singleTypes/servicesPage'

export const singleTypes = [
  homePage,
  clientsPage,
  servicesPage,
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
  global_Seo,
  cta,
  seo,
  servicesPage_servicesList,
]

export const schemaTypes = [
  global,
  // Restruzturize
  ...singleTypes,
  ...collectionTypes,
  ...components
]