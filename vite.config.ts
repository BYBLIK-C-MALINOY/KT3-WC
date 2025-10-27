import path from 'node:path'
import type { UserConfigExport } from 'vite'
import dts from 'vite-plugin-dts'
import { configDefaults, defineConfig } from 'vitest/config'
import { name } from './package.json'

const app = async (): Promise<UserConfigExport> => {
  /**
   * Removes everything before the last
   * @octocat/library-repo -> library-repo
   * vite-component-library-template -> vite-component-library-template
   */
  const formattedName = name.match(/[^/]+$/)?.[0] ?? name

  return defineConfig({
    plugins: [
      dts({
        insertTypesEntry: true,
      }),
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/lib/index.ts'),
        name: formattedName,
        formats: ['es', 'umd'],
        fileName: format => `${formattedName}.${format}.js`,
      },
      rollupOptions: {
        external: [],
        output: {
          globals: {},
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        exclude: [
          ...(configDefaults.coverage.exclude ?? []),
          '**/storybook-static/*',
          '**/*.stories.tsx',
          '**/*.config.js',
        ],
      },
    },
  })
}

export default app
