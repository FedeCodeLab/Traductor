"use client";

import { useTranslatorStore } from "../store/translatorStore";

export const TargetLanguage = () => {
  const { targetLanguage, setTargetLanguage } = useTranslatorStore();

  return (
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
  );
};
