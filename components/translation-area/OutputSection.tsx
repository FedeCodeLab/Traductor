"use client";

import useTranslatorStore from "@/store/translatorStore";

export const OutputSection = () => {
  const { outputText, speakTranslation } = useTranslatorStore();

  return (
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
  );
};
