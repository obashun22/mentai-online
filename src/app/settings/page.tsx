import { Separator } from "@/components/ui/separator";

export default function Settings() {
  return (
    <div className="p-4 h-screen">
      <div className="container mx-auto">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">設定</h2>
          {/* <p className="text-muted-foreground">
            設定が変更できます。変更した設定はすぐに反映されます。
          </p> */}
        </div>
        <Separator className="my-3" />
        <div>
          <div>nav</div>
          <div>main-content</div>
        </div>
      </div>
    </div>
  );
}
