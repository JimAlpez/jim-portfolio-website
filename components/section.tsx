import { ReactNode } from "react";
import { useSectionInView } from "@/lib/hooks";

type sectionProps = {
  children: ReactNode;
  id: string;
  sectionView: "About" | "Home" | "Projects" | "Experience" | "Contact";
};

export default function Section({ children, id, sectionView }: sectionProps) {
  const { ref } = useSectionInView(sectionView);

  return (
    <section
      ref={ref}
      className="w-full max-w-5xl mx-auto scroll-mt-16"
      id={id}>
      {children}
    </section>
  );
}
