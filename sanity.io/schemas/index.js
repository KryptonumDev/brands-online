// Single Types
import global, { global_Seo } from './singleTypes/global'
import homePage from './singleTypes/homePage'
import clientsPage from './singleTypes/clientsPage'
import servicesPage, { servicesPage_servicesList } from './singleTypes/servicesPage'
import privacyPolicyPage from './singleTypes/privacyPolicyPage'
import notFoundPage from './singleTypes/notFoundPage'

export const singleTypes = [
  homePage,
  clientsPage,
  servicesPage,
  privacyPolicyPage,
  notFoundPage,
]

// Collection Types
import partners from './collectionTypes/partners'

export const collectionTypes = [
  partners
]

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import { titleAndDescription } from './components/list'

export const components = [
  global_Seo,
  cta,
  seo,
  servicesPage_servicesList,
  titleAndDescription,
]

export const schemaTypes = [
  global,
  // Restruzturize
  ...singleTypes,
  ...collectionTypes,
  ...components
]