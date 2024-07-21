"use client";
import { HomeIcon } from "@heroicons/react/24/solid";
import { IconFountainFilled } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Balloon, Box, Button, Card, Icon, Input, MaskZigZag, PatternDiagonal, Text, Title } from "@/components/index";
import { AudioPlayer, useStoreAudio } from "@/data/audioStore";
import { QuizList } from "@/data/quiz";

export default function Home() {
  const [test, setTest] = useState(1);
  const { isPlaying } = useStoreAudio();
  const [Component, setComponent] = useState<any>(null);

  useEffect(() => {
    import("../../components/PatternStar")
      .then((comp) => {
        setComponent(comp.PatternStar);
      })
      .catch((err) => "Failed to load component " + err);
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

        <div className="flex pt-4 justify-center gap-8">
          {/* Left */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <Title as="h1" hasUnderline>
              This is a Title
            </Title>
            <Text>This is some text that tends to be longer</Text>

            <Link href="/">
              <Button>Home</Button>
            </Link>

            {QuizList.map((quiz) => (
              <Button
                key={quiz.id}
                onClick={() => {
                  import(`../../components/${quiz.design.visual.backdropSrc}`).then((comp) => {
                    setComponent(comp[quiz.design.visual.backdropSrc]);
                  });
                }}
              >
                {quiz.title}
              </Button>
            ))}

            <Input />

            <AudioPlayer />

            <Balloon size="md">
              <Text className="text-xl">Playing Music: {isPlaying.toString()}</Text>
            </Balloon>
          </div>

          {/* Right */}
          <Card className="flex flex-col min-w-[30rem] gap-4 justify-center items-center">
            <Title as="h1" hasUnderline>
              This is a Title
            </Title>
            <Icon Shape={HomeIcon} size="lg" main />
            <Icon Shape={IconFountainFilled} size="lg" main />
            <Text>Use your hat to throw, and line em up in a row!</Text>
            <Button onClick={() => setTest((prev) => prev + 1)}>Increment Value: {test}</Button>
          </Card>
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
