import { OutputSection } from "@/components/translation-area/OutputSection";
import { InputSection } from "@/components/translation-area/InputSection";
import { SourceLanguage } from "@/components/SourceLanguage";
import { TargetLanguage } from "@/components/TargetLanguage";
import { ButtonSwap } from "@/components/ui/ButtonSwap";
import { ApiWarning } from "@/components/ui/ApiWarning";

export default function Home() {
  return (
    <div className="container">
      <ApiWarning />

      <section className="language-selection">
        <SourceLanguage />

        <ButtonSwap />

        <TargetLanguage />
      </section>

      <main className="translation-area">
        <InputSection />

        <OutputSection />
      </main>
    </div>
  );
}
