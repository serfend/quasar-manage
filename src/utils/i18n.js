// translate router.meta.title, be used in breadcrumb sidebar tagsview
export function generateTitle(meta) {
  const i18n_title = meta.ititle
  const direct_title = meta.title
  if (direct_title) return direct_title
  const hasKey = this.$te(`route.${i18n_title}`)
  if (hasKey) {
    const pageName = this.$t(`route.${i18n_title}`)
    return pageName
  }
  return i18n_title
}
