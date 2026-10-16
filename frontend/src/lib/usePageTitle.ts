import { usePageMeta } from './usePageMeta'

/** Sets `document.title` to "<title> · Island Health Design" while the component is mounted. */
export function usePageTitle(title: string | null | undefined): void {
  usePageMeta({ title })
}
