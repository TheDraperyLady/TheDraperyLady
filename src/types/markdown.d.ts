declare module '*.md' {
  import type { DefineComponent } from 'vue'
  
  interface Frontmatter {
    title?: string
    date?: string
    hero?: string
    description?: string
    slug?: string
    [key: string]: any
  }
  
  const component: DefineComponent<{}, {}, any> & {
    frontmatter?: Frontmatter
  }
  
  export default component
  export { Frontmatter }
}
