// Single Types
import global, { global_Seo } from './singleTypes/global'
import homePage from './singleTypes/homePage'
import aboutPage, { aboutPage_experienceList } from './singleTypes/aboutPage'
import clientsPage from './singleTypes/clientsPage'
import servicesPage, { servicesPage_servicesList } from './singleTypes/servicesPage'
import privacyPolicyPage from './singleTypes/privacyPolicyPage'
import notFoundPage from './singleTypes/notFoundPage'

export const singleTypes = [
  homePage,
  aboutPage,
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
import { titleAndDescription, titleDescriptionAndImage } from './components/list'

export const components = [
  global_Seo,
  cta,
  seo,
  aboutPage_experienceList,
  servicesPage_servicesList,
  titleAndDescription,
  titleDescriptionAndImage,
]

export const schemaTypes = [
  global,
  // Restruzturize
  ...singleTypes,
  ...collectionTypes,
  ...components
]