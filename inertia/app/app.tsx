/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import { ThemeProvider } from '@/components/theme_provider'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp } from '@inertiajs/react'
import { hydrateRoot } from 'react-dom/client'

const appName = import.meta.env.VITE_APP_NAME || 'SkillUp'

createInertiaApp({
  progress: { color: '#e11d48' },

  title: (title) => `${title} - ${appName}`,

  resolve: (name) => {
    return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    hydrateRoot(
      el,
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App {...props} />
      </ThemeProvider>
    )
  },
})
