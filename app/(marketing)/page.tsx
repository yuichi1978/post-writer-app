import Link from "next/link";
import { cn } from "../../lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "../../config/site";

export default function IndexPage() {
  return (
    <>
      <section className="md:pt-[80px] lg:py-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link
            href={siteConfig.links.x}
            className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
          >
            Xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
            Post Writer
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-normal max-w-[42rem]">
            このアプリケーションはNext.js AppRouterで作られたものです。
            <br />
            ユーザーは自由に投稿をポストすることができます。
          </p>
          <div className="flex gap-3 md:gap-5">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              始める
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6"
      >
        <div className="text-center space-y-6">
          <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
            サービスの特徴
          </h2>
          <p className="text-xs sm:text-sm max-w-[42rem] mx-auto text-muted-foreground sm:leading-7">
            このプロジェクトはモダンな技術スタックを使って作られたwebアプリケーションです。
            Next.jsAppRouterやcontentlayerを利用してマークダウン軽視でブログ投稿ができます。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-[64rem]">
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-3 h-[130px] md:h-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"
                />
              </svg>
              <div className="mt-2">
                <h3>Next.js</h3>
                <p className="break-words text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-3 h-[130px] md:h-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 32 32"
              >
                <circle cx="16" cy="15.974" r="2.5" fill="#00d8ff" />
                <path
                  fill="#00d8ff"
                  d="M16 21.706a28.385 28.385 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.543 3.543 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0 1 16 10.293a28.674 28.674 0 0 1 9.022 1.324a11.376 11.376 0 0 1 3.538 1.866A3.391 3.391 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191Zm0-10.217a27.948 27.948 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 0 0-1.01-1.573a10.194 10.194 0 0 0-3.161-1.654A27.462 27.462 0 0 0 16 11.489Z"
                />
                <path
                  fill="#00d8ff"
                  d="M10.32 28.443a2.639 2.639 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 0 1 3.4-8.593a28.676 28.676 0 0 1 5.653-7.154a11.376 11.376 0 0 1 3.384-2.133a3.391 3.391 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 0 1-3.316 8.133a28.385 28.385 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.926 4.926 0 0 1-1.624.307Zm1.773-14.7a27.948 27.948 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.209 27.209 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 0 0-1.868.089A10.194 10.194 0 0 0 17.5 6.9a27.464 27.464 0 0 0-5.4 6.849Z"
                />
                <path
                  fill="#00d8ff"
                  d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 0 1-5.747-7.237a28.676 28.676 0 0 1-3.374-8.471a11.376 11.376 0 0 1-.158-4A3.391 3.391 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.384 28.384 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.543 3.543 0 0 1-1.494 2.555a2.59 2.59 0 0 1-1.315.324Zm-9.58-10.2a27.949 27.949 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 0 0-.855 1.662a10.194 10.194 0 0 0 .153 3.565a27.465 27.465 0 0 0 3.236 8.1Z"
                />
              </svg>
              <div className="mt-2">
                <h3>React.js</h3>
                <p className="break-words text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-3 h-[130px] md:h-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 128 128"
              >
                <defs>
                  <linearGradient
                    id="deviconAstro0"
                    x1="882.997"
                    x2="638.955"
                    y1="27.113"
                    y2="866.902"
                    gradientTransform="scale(.1)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#000014" />
                    <stop offset="1" stopColor="#150426" />
                  </linearGradient>
                  <linearGradient
                    id="deviconAstro1"
                    x1="1001.68"
                    x2="790.326"
                    y1="652.45"
                    y2="1094.91"
                    gradientTransform="scale(.1)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#ff1639" />
                    <stop offset="1" stopColor="#ff1639" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#deviconAstro0)"
                  d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"
                />
                <path
                  fill="#ff5d01"
                  d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735Zm0 0"
                />
                <path
                  fill="url(#deviconAstro1)"
                  d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735Zm0 0"
                />
              </svg>
              <div className="mt-2">
                <h3>Astro</h3>
                <p className="break-words text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-3 h-[130px] md:h-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 256 264"
              >
                <path
                  fill="#FF2D20"
                  d="M255.856 59.62c.095.351.144.713.144 1.077v56.568c0 1.478-.79 2.843-2.073 3.578L206.45 148.18v54.18a4.135 4.135 0 0 1-2.062 3.579l-99.108 57.053c-.227.128-.474.21-.722.299c-.093.03-.18.087-.278.113a4.15 4.15 0 0 1-2.114 0c-.114-.03-.217-.093-.325-.134c-.227-.083-.464-.155-.68-.278L2.073 205.938A4.128 4.128 0 0 1 0 202.36V32.656c0-.372.052-.733.144-1.083c.031-.119.103-.227.145-.346c.077-.216.15-.438.263-.639c.077-.134.19-.242.283-.366c.119-.165.227-.335.366-.48c.119-.118.274-.206.408-.309c.15-.124.283-.258.453-.356h.005L51.613.551a4.135 4.135 0 0 1 4.125 0l49.546 28.526h.01c.165.104.305.232.454.351c.134.103.284.196.402.31c.145.149.248.32.371.484c.088.124.207.232.279.366c.118.206.185.423.268.64c.041.118.113.226.144.35c.095.351.144.714.145 1.078V138.65l41.286-23.773V60.692c0-.36.052-.727.145-1.072c.036-.124.103-.232.144-.35c.083-.217.155-.44.268-.64c.077-.134.19-.242.279-.366c.123-.165.226-.335.37-.48c.12-.118.269-.206.403-.309c.155-.124.289-.258.454-.356h.005l49.551-28.526a4.13 4.13 0 0 1 4.125 0l49.546 28.526c.175.103.309.232.464.35c.128.104.278.197.397.31c.144.15.247.32.37.485c.094.124.207.232.28.366c.118.2.185.423.267.64c.047.118.114.226.145.35Zm-8.115 55.258v-47.04l-17.339 9.981l-23.953 13.792v47.04l41.297-23.773h-.005Zm-49.546 85.095V152.9l-23.562 13.457l-67.281 38.4v47.514l90.843-52.3ZM8.259 39.796v160.177l90.833 52.294v-47.505L51.64 177.906l-.015-.01l-.02-.01c-.16-.093-.295-.227-.444-.34c-.13-.104-.279-.186-.392-.3l-.01-.015c-.134-.129-.227-.289-.34-.433c-.104-.14-.227-.258-.31-.402l-.005-.016c-.093-.154-.15-.34-.217-.515c-.067-.155-.154-.3-.196-.464v-.005c-.051-.196-.061-.403-.082-.604c-.02-.154-.062-.309-.062-.464V63.57L25.598 49.772l-17.339-9.97v-.006ZM53.681 8.893L12.399 32.656l41.272 23.762L94.947 32.65L53.671 8.893h.01Zm21.468 148.298l23.948-13.786V39.796L81.76 49.778L57.805 63.569v103.608l17.344-9.986ZM202.324 36.935l-41.276 23.762l41.276 23.763l41.271-23.768l-41.27-23.757Zm-4.13 54.676l-23.953-13.792l-17.338-9.981v47.04l23.948 13.787l17.344 9.986v-47.04Zm-94.977 106.006l60.543-34.564l30.264-17.272l-41.246-23.747l-47.489 27.34l-43.282 24.918l41.21 23.325Z"
                />
              </svg>
              <div className="mt-2">
                <h3>Laravel</h3>
                <p className="break-words text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-3 h-[130px] md:h-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 256 256"
              >
                <g fill="none">
                  <rect width="256" height="256" fill="#2396ED" rx="60" />
                  <path
                    fill="#fff"
                    d="M141.187 122.123h20.717v-18.744h-20.717v18.744Zm-24.662 0h20.716v-18.744h-20.716v18.744Zm-24.17 0h20.717v-18.744H92.355v18.744Zm-24.17 0H88.41v-18.744H68.186v18.744Zm-24.662 0H64.24v-18.744H43.523v18.744Zm24.663-22.69h20.223V80.69H68.186v18.743Zm24.17 0h20.716V80.69H92.355v18.743Zm24.169 0h20.716V80.69h-20.716v18.743Zm0-22.69h20.716V58h-20.716v18.744ZM228 113.739s-8.879-8.386-27.129-5.426c-1.973-14.305-17.264-22.69-17.264-22.69s-14.304 17.264-3.946 36.501c-2.959 1.48-7.892 3.453-15.291 3.453H28.726c-2.467 9.372-2.467 71.521 65.602 71.521c48.832 0 85.333-22.689 102.597-64.123C222.574 134.948 228 113.738 228 113.738Z"
                  />
                </g>
              </svg>
              <div className="mt-2">
                <h3>Docker</h3>
                <p className="break-words text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-3 h-[130px] md:h-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m4.49 11.97l6.682-6.681a.638.638 0 0 0 .204-.476V.838a.7.7 0 0 0-.42-.624a.68.68 0 0 0-.736.148L1.4 9.193c-.94.94-1.388 1.85-1.4 2.805s.434 1.85 1.36 2.774l8.858 8.86a.638.638 0 0 0 .476.203a.39.39 0 0 0 .26-.082a.68.68 0 0 0 .42-.626v-4a.692.692 0 0 0-.204-.476L4.489 11.97h.002zm-2.64 1.32c-.34-.45-.502-.872-.502-1.28c.012-.57.34-1.182 1.007-1.85l7.66-7.662v2.057l-7.06 7.06A4.355 4.355 0 0 0 1.85 13.29zm8.166 8.205l-6.451-6.45a.748.748 0 0 0-.094-.12c-.204-.207-.816-.819.094-1.961l6.45 6.449v2.082zM13.782.376a.668.668 0 0 0-.734-.15a.68.68 0 0 0-.422.626v4.015c.004.18.076.35.204.476l6.681 6.68l-6.681 6.682a.638.638 0 0 0-.204.476v3.96a.682.682 0 0 0 1.156.49l8.817-8.817c.94-.94 1.389-1.85 1.4-2.804c.017-.952-.433-1.85-1.36-2.775L13.782.376zm.204 4.205V2.5l6.451 6.448c.026.044.06.084.094.122c.204.204.816.817-.094 1.96l-6.449-6.45l-.002.002zm7.647 9.267l-7.66 7.661v-2.04l7.06-7.077a4.451 4.451 0 0 0 1.104-1.674c.34.45.504.872.504 1.28c-.014.57-.34 1.17-1.008 1.85zm-4.626-1.294H6.9a.516.516 0 0 1-.516-.516v-.054c0-.286.23-.518.516-.518h10.11a.52.52 0 0 1 .518.518v.054a.526.526 0 0 1-.518.516h-.004zm-1.44-2.544v.056a.516.516 0 0 1-.52.516H8.842a.516.516 0 0 1-.518-.516v-.056c0-.285.232-.517.518-.517h6.205c.286 0 .516.232.516.517h.002zm-1.92-1.987v.054a.516.516 0 0 1-.517.518h-2.464a.516.516 0 0 1-.516-.518v-.054c0-.286.232-.516.516-.516h2.464a.508.508 0 0 1 .516.516zm-.517 7.443c.284 0 .516.232.516.518v.054a.516.516 0 0 1-.516.516h-2.464a.516.516 0 0 1-.516-.516v-.054c0-.286.232-.518.516-.518h2.464zm1.918-.912H8.843a.516.516 0 0 1-.518-.516v-.054a.52.52 0 0 1 .518-.518h6.205c.286 0 .516.232.516.518v.054a.516.516 0 0 1-.516.516z"
                />
              </svg>
              <div className="mt-2">
                <h3>Local</h3>
                <p className="break-words text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[58rem] mx-auto text-center">
          <p className="text-xs sm:text-sm text-muted-foreground sm:text-lg sm:leading-5">
            Post Writerログインするとブログ投稿ができるようになります。
          </p>
        </div>
      </section>

      <section id="contact" className="container py-8 md:py-12 ls:py-24">
        <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-3">
          <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
            Contact Me
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground sm:leading-5">
            もしもWebサービスが気に入った場合は下記xからDMでご連絡ください。
            <br />
            お仕事のご連絡をお待ちしております。
          </p>
          <Link
            href={siteConfig.links.x}
            className="hover:underline animate-in duration-150 underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            お仕事はXまで
          </Link>
        </div>
      </section>
    </>
  );
}
