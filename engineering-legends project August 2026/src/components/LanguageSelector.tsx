import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' }
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  // Robustly extract the base language matching our configured resource keys
  const currentLang = i18n.language 
    ? i18n.language.split('-')[0].toLowerCase() 
    : 'en';

  const matchedValue = languages.some((lang) => lang.code === currentLang) 
    ? currentLang 
    : 'en';

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('i18nextLng', code);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang && i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <div className="flex items-center gap-2 group relative border border-inst-line/30 rounded px-2.5 py-1.5 hover:border-inst-accent transition-colors bg-white/40">
      <Languages size={14} className="text-inst-muted group-hover:text-inst-accent transition-colors" />
      <select 
        value={matchedValue} 
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="bg-transparent border-none text-[10px] font-bold uppercase tracking-widest text-inst-muted focus:ring-0 cursor-pointer hover:text-inst-ink transition-colors appearance-none pr-1 outline-none"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-white text-inst-ink">
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
