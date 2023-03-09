
import './App.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { useEffect, useState } from 'react';
function App() {
  const isLocale = localStorage.getItem('locale');
  const defaultLocale = isLocale ? isLocale : navigator.langue;
  const messages = {
    "tr-TR": {
      title: "Merhaba Dünya",
      description: "{count} yeni mesajınız var"
    },

    "en-EN": {
      title: "Hello World",
      description: "You have {count} new messages"
    }
  }
  const [locale, setLocale] = useState(!defaultLocale ? "tr-TR" : defaultLocale)

  useEffect(() => {
    localStorage.setItem("locale", locale)
  }, [locale])


  return (
    <div className="App">
      <IntlProvider
        locale={locale}
        messages={messages[locale]}>
        <FormattedMessage id="title" />
        <br></br>
        <FormattedMessage id="description" values={{ count: 1 }} />
        <br />
        <br />
        <button onClick={() => setLocale("tr-TR")}>Tr</button>
        <button onClick={() => setLocale("en-EN")}>En</button>
      </IntlProvider>
    </div>
  );
}

export default App;
