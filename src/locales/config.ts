export function normalizeLocaleCode(code: string) {
  return code.toLowerCase()
}

export const blogLocales = [
  { code: 'en', label: 'English', isDefault: true },
  { code: 'ko', label: 'Korean', isDefault: false },
  { code: 'ja', label: 'Japanese', isDefault: false },
  { code: 'zh-CN', label: 'Chinese', isDefault: false },
  { code: 'es', label: 'Spanish', isDefault: false },
  { code: 'fr', label: 'French', isDefault: false },
] as const

export type BlogLocaleCode = (typeof blogLocales)[number]['code']

export const blogDefaultLocale: BlogLocaleCode = blogLocales.find((l) => l.isDefault)!.code

export function isSupportedBlogLocale(
  code: string | undefined,
): code is BlogLocaleCode {
  return !!code && blogLocales.some((l) => l.code === code)
}
