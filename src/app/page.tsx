import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="text-center">
      <div className="text-right">
        <Button variant="secondary">
          <Cog6ToothIcon className="w-5 h-5 " />
          設定
        </Button>
      </div>
      <div>
        <h1>面接対策オンライン</h1>
        <div>
          <Button className="text-white">面接を開始</Button>
        </div>
      </div>
      <div className="fixed bottom-4 left-4 right-4">
        <div>
          <Button
            variant="link"
            size="sm"
            className="block ml-auto h-6 pr-0 text-white"
          >
            <Link href={ROUTES.ABOUT}>面接対策オンラインとは</Link>
          </Button>
          <Button
            variant="link"
            size="sm"
            className="block ml-auto h-6 pr-0 text-white"
          >
            <Link href={ROUTES.PRIVACY}>プライバシーポリシー</Link>
          </Button>
          <Button
            variant="link"
            size="sm"
            className="block ml-auto h-6 pr-0 text-white"
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
