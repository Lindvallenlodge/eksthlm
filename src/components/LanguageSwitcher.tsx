import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleToggle = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center gap-1 bg-secondary rounded-full p-0.5">
      <button
        onClick={() => handleToggle("en")}
        className={`px-2 py-1.5 text-sm font-medium rounded-full transition-colors ${
          language === "en"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => handleToggle("sv")}
        className={`px-2 py-1.5 text-sm font-medium rounded-full transition-colors ${
          language === "sv"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Byt till svenska"
      >
        SV
      </button>
      <button
        onClick={() => handleToggle("es")}
        className={`px-2 py-1.5 text-sm font-medium rounded-full transition-colors ${
          language === "es"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Cambiar a español"
      >
        ES
      </button>
    </div>
  );
}
