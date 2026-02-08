import { useLanguage } from "./context"
import { translations } from "./translations"

export function useTranslation() {
  const { language } = useLanguage()
  return translations[language]
}
