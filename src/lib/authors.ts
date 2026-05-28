export type AuthorProfile = {
  id: string
  name: string
  title?: string
  avatarUrl?: string
  linkedinUrl?: string
}

export const authors: Record<string, AuthorProfile> = {
  minseok: {
    id: 'minseok',
    name: 'Minseok Song',
    title: 'Microsoft AI MVP · Founder of Localizeflow',
    avatarUrl: '/images/authors/minseok-avatar.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/ms-song/',
  },
}

export function getAuthor(id: string | undefined | null): AuthorProfile | undefined {
  if (!id) return undefined
  return authors[id] ?? undefined
}
