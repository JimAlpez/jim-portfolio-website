import { ReactNode } from "react";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

type sectionProps = {
  children: ReactNode;
  id: string;
  sectionView: "About" | "Home" | "Projects" | "Experience" | "Contact";
};

export default function Section({ children, id, sectionView }: sectionProps) {
  const { ref } = useSectionInView(sectionView);
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id={id}
      className="w-full max-w-5xl mx-auto scroll-mt-16">
      {children}
    </section>
  );
}
