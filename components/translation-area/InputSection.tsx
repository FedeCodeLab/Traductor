"use client";

import useTranslatorStore from "@/store/translatorStore";

export const InputSection = () => {
  const { inputText, setInputText, translate, startVoiceRecognition } =
    useTranslatorStore();

  return (
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
  );
};
