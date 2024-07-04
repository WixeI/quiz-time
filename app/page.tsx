"use client";
import { PatternDiagonal } from "@/components/PatternDiagonal";
import { Text } from "@/components/Text";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { useStoreAudio } from "@/data/audioStore";
import { useEffect, useState } from "react";
import { MaskZigZag } from "@/components/MaskZigZag";
import { Box } from "@/components/Box";
import Link from "next/link";

export default function Home() {
  const [Component, setComponent] = useState<any>(null);

  useEffect(() => {
    import("../components/PatternStar")
      .then((comp) => {
        setComponent(comp.PatternStar);
      })
      .catch((err) => console.error("Failed to load component", err));
  }, []);

  if (!Component) {
    return <div>Loading component...</div>;
  }

  return (
    <div className="cursor-custom font-rodinDB">
      {/* Content */}
      <div className="relative h-[80vh] shadow-xl mask-zig-zag">
        {Component}
        <MaskZigZag />

        <div className="flex flex-col py-4 justify-center items-center gap-8">
          <Title as="h1" className="py-4">
            Home Page
          </Title>

          <Link href="/components-showcase">
            <Button>Components Showcase</Button>
          </Link>
        </div>
      </div>

      {/* Diagonal Pattern */}
      <div className="relative h-[calc(20vh_+_theme(spacing.mask-zig-zag))]">
        <Box className="h-mask-zig-zag" />
        <PatternDiagonal />
      </div>
    </div>
  );
}
