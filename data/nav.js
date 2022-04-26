export default {
  base: {
    children: ['dashboard', 'units', 'invoices', 'projects', 'medias', 'integrations', 'documents'],
    id: 'base',
  },

  dashboard: {
    icon: 'home',
    id: 'dashboard',
    title: 'Dashboard',
    url: '/'
  },
  units: {
    icon: 'figma',
    id: 'units',
    title: 'Available Units',
    url: '/'
  },
  invoices: {
    icon: 'file-text',
    id: 'invoices',
    title: 'Invoices',
    url: '/'
  },
  projects: {
    icon: 'clock',
    id: 'projects',
    title: 'Projects',
    url: '/'
  },
  medias: {
    icon: 'share-2',
    id: 'medias',
    title: 'Social Media',
    url: '/'
  },
  integrations: {
    icon: 'link-2',
    id: 'integrations',
    title: 'Integrations',
    url: '/'
  },
  documents: {
    icon: 'file',
    id: 'documents',
    title: 'Documentation',
    url: '/'
  },
}