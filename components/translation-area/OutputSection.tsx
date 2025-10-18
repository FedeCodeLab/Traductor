"use client";

import useTranslatorStore from "@/store/translatorStore";

export const OutputSection = () => {
  const { outputText, speakTranslation } = useTranslatorStore();

  return (
    <section className="flex flex-1 flex-col">
      <div className="textarea-container">
        <output
          id="outputText"
          className="text-highlight-text-neutral dark:text-neutral-300"
        >
          {outputText}
        </output>

        <footer className="output-controls border-t border-highlight-neutral-300 dark:border-neutral-500">
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
