import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Noto_Serif_JP } from "next/font/google";
import clsx from "clsx";

const notoSerifJP = Noto_Serif_JP({ subsets: ["latin"], weight: "500" });

export default function Home() {
  return (
    <div className="p-4 h-screen text-center flex flex-col justify-center">
      <div className="fixed top-4 right-4">
        <Button variant="secondary">
          <Cog6ToothIcon className="w-5 h-5" />
          <Link href={ROUTES.SETTING}>設定</Link>
        </Button>
      </div>
      <div className="">
        <h1 className={clsx(notoSerifJP.className, "text-5xl", "pb-8")}>
          面接対策オンライン
        </h1>
        <div>
          <Button className="text-white">
            <Link href={ROUTES.READY}>面接を開始</Link>
          </Button>
        </div>
      </div>
      <div className="fixed bottom-4 left-4 right-4 z-10">
        <div>
          <Button
            variant="link"
            size="sm"
            className="block ml-auto h-6 pr-0 text-foreground"
          >
            <Link href={ROUTES.ABOUT}>面接対策オンラインとは</Link>
          </Button>
          <Button
            variant="link"
            size="sm"
            className="block ml-auto h-6 pr-0 text-foreground"
          >
            <Link href={ROUTES.PRIVACY}>プライバシーポリシー</Link>
          </Button>
          <Button
            variant="link"
            size="sm"
            className="block ml-auto h-6 pr-0 text-foreground"
          >
            <Link href={ROUTES.TERM}>利用規約</Link>
          </Button>
        </div>
      </div>
      <p className="fixed bottom-4 left-4 right-4 text-center">
        ©2023 Shunsuke Oba
      </p>
    </div>
  );
}
