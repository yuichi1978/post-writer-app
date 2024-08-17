"use client";

import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import Callout from "./callout";

const components = {
  Image,
  Callout,
}

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose md:prose-xl max-w-full">
      <Component components={components} />
    </div>
  );
}
