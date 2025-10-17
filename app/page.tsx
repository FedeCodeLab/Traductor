"use client";

import useTranslatorStore from "../store/translatorStore";

export default function Home() {
  const {
    inputText,
    outputText,
    sourceLanguage,
    targetLanguage,
    setInputText,
    setSourceLanguage,
    setTargetLanguage,
    translate,
    swapLanguages,
    startVoiceRecognition,
    speakTranslation,
  } = useTranslatorStore();

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="google-g">G</span>
            <span className="google-o1">o</span>
            <span className="google-o2">o</span>
            <span className="google-g">g</span>
            <span className="google-l">l</span>
            <span className="google-e">e</span>
            <span className="traductor">Traductor</span>
          </div>
        </div>
      </header>

      <div id="apiWarning" className="api-warning" style={{ display: "none" }}>
        ⚠️ APIs nativas de traducción no disponibles. Funcionalidad limitada.
      </div>

      <section className="language-selection">
        <div className="source-language">
          <select
            id="sourceLanguage"
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
          >
            <option value="auto">Detectar idioma</option>
            <option value="en">Inglés</option>
            <option value="es">Español</option>
            <option value="fr">Francés</option>
            <option value="de">Alemán</option>
            <option value="it">Italiano</option>
            <option value="pt">Portugués</option>
            <option value="ru">Ruso</option>
            <option value="ja">Japonés</option>
            <option value="zh">Chino</option>
          </select>
        </div>

        <button
          className="swap-languages icon-button"
          id="swapLanguages"
          onClick={() => swapLanguages()}
        >
          <span className="material-symbols-outlined">swap_horiz</span>
        </button>

        <div className="target-language">
          <select
            id="targetLanguage"
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            <option value="en">Inglés</option>
            <option value="es">Español</option>
            <option value="fr">Francés</option>
            <option value="de">Alemán</option>
            <option value="it">Italiano</option>
            <option value="pt">Portugués</option>
            <option value="ru">Ruso</option>
            <option value="ja">Japonés</option>
            <option value="zh">Chino</option>
          </select>
        </div>
      </section>

      <main className="translation-area">
        <section className="input-section">
          <div className="textarea-container">
            <textarea
              id="inputText"
              placeholder="Introduce el texto"
              maxLength={5000}
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                if (inputText.trim()) {
                  setTimeout(() => translate(), 500);
                }
              }}
            />
          </div>
          <footer className="input-controls">
            <button
              className="icon-button mic-button"
              id="micButton"
              onClick={() => startVoiceRecognition()}
            >
              <span className="material-symbols-outlined">mic</span>
            </button>
          </footer>
        </section>

        <section className="output-section">
          <div className="textarea-container">
            <output id="outputText">{outputText}</output>

            <footer className="output-controls">
              <button
                className="icon-button copy-button"
                id="copyButton"
                onClick={() => navigator.clipboard.writeText(outputText)}
              >
                <span className="material-symbols-outlined">content_copy</span>
              </button>

              <button
                className="icon-button speaker-button"
                id="speakerButton"
                onClick={() => speakTranslation()}
              >
                <span className="material-symbols-outlined">volume_up</span>
              </button>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
