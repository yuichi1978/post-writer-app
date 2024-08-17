import { ReactNode } from "react";

export default function EditorLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto items-center gap-10 py-8">
      {children}
    </div>
  );
}
