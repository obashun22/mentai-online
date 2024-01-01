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

export default function Ready() {
  useEffect(() => {
    const camera = new WebRTCCam();
    camera.init();
  }, []);
  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <Card className="w-full h-full lg:w-2/3 lg:h-2/3 p-4 flex">
        <div className="w-1/2 flex">
          <video
            id="video"
            autoPlay
            playsInline
            className="p-4"
            width={1280}
            height={720}
          />
          <Separator orientation="vertical" />
        </div>
        settings
      </Card>
    </div>
  );
}
