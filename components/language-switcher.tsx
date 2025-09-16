"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import { Languages } from "lucide-react"
import { useTranslations } from "@/components/translations-context"

export function LanguageSwitcher() {
  const { t, locale, setLocale } = useTranslations()

  const languages = [
    { code: 'en', label: 'English', icon: '🇬🇧' },
    { code: 'es', label: 'Español', icon: '🇪🇸' },
    { code: 'fr', label: 'Français', icon: '🇫🇷' },
    { code: 'zh', label: '中文', icon: '🇨🇳' },
  ]

  const selectedLanguage = languages.find(lang => lang.code === locale)

  const onSelect = (value: string) => {
    setLocale(value);
    toast.success(`${t('status.language')} ${locale}`)
  }

  return (
    <Select value={locale} onValueChange={onSelect}>
      <SelectTrigger className="max-w-24">
        <Languages className="mr-2 h-4 w-4" />
        <SelectValue>
          {selectedLanguage?.icon}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            {language.icon} {language.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
} 