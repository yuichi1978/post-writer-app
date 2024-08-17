import Link from "next/link";
import UserAuthForm from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Register() {
  return (
    <div className="container grid flex-col lg:grid-cols-2 h-screen w-screen items-center justify-center lg:max-w-none lg:px-0">
      <Link
        href={"/login"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 md:left-8 md:top-8"
        )}
      >
        ログイン
      </Link>
      <div className="h-full bg-muted lg:block hidden" />
      <div className="flex flex-col justify-center mx-auto max-w-xs md:max-w-sm h-screen">
        <div className="mx-auto flex flex-col justify-center space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              アカウントの作成
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground pb-3 md:pb-5">
              メールアドレスを入力してアカウント作成してください。
            </p>
          </div>
        </div>

        {/* このコンポーネントはログイン用と新規登録用 */}
        <UserAuthForm />

        <div className="text-xs md:text-sm ">
          <p className="text-muted-foreground px-8 text-center text-xs md:text-sm mt-3">
            続けてクリックすれば私たちの
            <Link
              href={"/terms"}
              className="hover:underline animate-in duration-150 underline-offset-4"
            >
              利用規約
            </Link>
            と<br />
            <Link
              href={"/privacy"}
              className="hover:underline animate-in duration-150 underline-offset-4"
            >
              プライバシーポリシー
            </Link>
            に同意したことになります。
          </p>
        </div>
      </div>
    </div>
  );
}
