export default function getMessages(locale) {
    try {
      const messages =  import(`@/app/locales/${locale}.json`);
      return messages.default;
    } catch (error) {
      console.error(`🔴 Missing translation file for locale: ${locale}`, error);
      return {}; 
    }
  }