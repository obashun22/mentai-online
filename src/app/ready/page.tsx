import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Noto_Serif_JP } from "next/font/google";
import clsx from "clsx";

const notoSerifJP = Noto_Serif_JP({ subsets: ["latin"], weight: "500" });

export default function Ready() {
  return <div className="p-4 h-screen">settings</div>;
}
