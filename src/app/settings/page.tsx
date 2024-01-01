import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Settings() {
  return (
    <div className="p-4 h-screen">
      <div className="container mx-auto h-[100%]">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">設定</h2>
        </div>
        <Separator className="my-3" />
        <div className="flex">
          <nav className="flex flex-col space-x-0 space-y-1 w-1/5">
            {["質問内容", "面接画面", "音声", "映像"].map((item, i) => (
              <Button
                variant="ghost"
                key={i}
                asChild
                className={cn(
                  "justify-start"
                  // "bg-muted hover:bg-muted"
                  // "hover:bg-transparent hover:underline"
                )}
              >
                <Link key={i} href="#">
                  {item}
                </Link>
              </Button>
            ))}
          </nav>
          <div>
            <Separator orientation="vertical" className="mx-4" />
          </div>
          <div className="flex-1 bg-pink-50">main-content</div>
        </div>
      </div>
    </div>
  );
}
