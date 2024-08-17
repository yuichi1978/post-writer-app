import Link from "next/link";
import UserAuthForm from "@/components/user-auth-form";

export default function Login() {
  return (
    <div className="container flex flex-col justify-center max-w-[350px] md:max-w-[450px] mx-auto h-screen">
      <div className="mx-auto w-full flex flex-col justify-center space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Welcome Back
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground pb-3 md:pb-5">
            メールアドレスを入力してログインできます。
          </p>
        </div>
      </div>

      {/* このコンポーネントはログイン用と新規登録用 */}
      <UserAuthForm />

      <p className="text-muted-foreground px-8 text-center text-xs md:text-sm mt-3">
        <Link
          href={"/register"}
          className="hover:underline animate-in duration-150 underline-offset-4"
        >
          アカウントを持っていませんか？
        </Link>
      </p>
    </div>
  );
}
