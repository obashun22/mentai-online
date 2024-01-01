"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Noto_Serif_JP } from "next/font/google";
import clsx from "clsx";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { WebRTCCam } from "@/utils/camera";
import { useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Ready() {
  useEffect(() => {
    const camera = new WebRTCCam();
    camera.init();
  }, []);
  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <Card className="w-full h-full lg:w-2/3 lg:h-2/3 p-4 flex border-none shadow-none">
        <div className="w-1/2 flex">
          <div className="w-full flex justify-center items-center">
            <div className="w-full">
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg m-8">
                <video
                  id="video"
                  autoPlay
                  playsInline
                  className="aspect-video object-cover rounded-lg"
                  width={1280}
                  height={720}
                />
              </AspectRatio>
              <p className="my-2 mx-8 text-muted-foreground text-xs">
                ブラウザの設定でカメラの使用を許可してください。
              </p>
            </div>
          </div>
          <Separator orientation="vertical" />
        </div>
        settings
      </Card>
    </div>
  );
}
