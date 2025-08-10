import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownIt from 'markdown-it'
import MarkdownItLinkAttributes from 'markdown-it-link-attributes'

// https://vite.dev/config/
export default defineConfig({
  base: '/TheDraperyLady/',
  plugins: [
    Markdown({
      markdownIt: MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
      }),
      frontmatter: true,
      markdownItSetup(md) {
        // Add link attributes plugin for external links
        md.use(MarkdownItLinkAttributes, {
          pattern: /^https?:/,
          attrs: {
            target: '_blank',
            rel: 'noopener noreferrer',
          },
        })

        // Wiki-link preprocessing: [[Name]] -> /products/name
        md.core.ruler.push('wiki_links', (state) => {
          state.tokens.forEach((token) => {
            if (token.type === 'inline') {
              token.content = token.content.replace(
                /\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g,
                (match, name, label) => {
                  const slug = name.toLowerCase().replace(/\s+/g, '-')
                  const displayText = label || name
                  return `[${displayText}](/products/${slug})`
                }
              )
            }
          })
        })

        // Convert internal links to use SmartLink
        const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options)
        }

        md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
          const token = tokens[idx]
          const href = token.attrs?.find(attr => attr[0] === 'href')?.[1]
          
          if (href && (href.startsWith('/') || href.startsWith('#'))) {
            token.tag = 'SmartLink'
          }
          
          return defaultRender(tokens, idx, options, env, self)
        }
      },
    }),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url))
    },
  },
})
