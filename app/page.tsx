"use client";

import { OutputSection } from "@/components/translation-area/OutputSection";
import { InputSection } from "@/components/translation-area/InputSection";
import { SourceLanguage } from "@/components/SourceLanguage";
import { TargetLanguage } from "@/components/TargetLanguage";
import { ButtonSwap } from "@/components/ui/ButtonSwap";
import { ApiWarning } from "@/components/ui/ApiWarning";
import { ToggleTheme } from "@/components/ui/ToggleTheme";

export default function Home() {
  return (
    <div className="container relative min-h-screen flex items-center justify-center">
      <ToggleTheme />
      <ApiWarning />

      <div className="rounded-[10px] bg-white dark:bg-neutral-900 min-w-full">
        <section className="language-selection rounded-t-[10px] border border-highlight-neutral-300 dark:border-neutral-500">
          <SourceLanguage />

          <ButtonSwap />

          <TargetLanguage />
        </section>

        <main className="translation-area ">
          <InputSection />

          <OutputSection />
        </main>
      </div>
    </div>
  );
}
