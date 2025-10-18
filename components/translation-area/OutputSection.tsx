"use client";

import useTranslatorStore from "@/store/translatorStore";

export const OutputSection = () => {
  const { outputText, speakTranslation } = useTranslatorStore();

  return (
    <section className="flex flex-1 flex-col">
      <div className="textarea-container">
        <output
          id="outputText"
          className="border-r border-highlight-neutral-300 dark:border-neutral-500 text-highlight-text-neutral dark:text-neutral-300 dark:bg-neutral-800 bg-highlight-neutral-100"
        >
          {outputText}
        </output>

        <footer className="output-controls border-t border-b border-r rounded-br-[10px] border-highlight-neutral-300 dark:border-neutral-500 bg-highlight-neutral-100 dark:bg-neutral-800">
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
