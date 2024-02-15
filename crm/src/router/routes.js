
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },
      { path: 'accounts/:mode?', component: () => import('pages/AccountPage.vue'), props:true },
      { path: '/complains', component: () => import('pages/ComplainPage.vue') },
     /* { path: '/employees', component: () => import('pages/EmployeePage.vue') },

      { path: '/invoices', component: () => import('pages/InvoicePage.vue') },
      { path: '/products', component: () => import('pages/ProductPage.vue') },
      { path: '/contacts', component: () => import('pages/ContactTablePage.vue') }, */
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
