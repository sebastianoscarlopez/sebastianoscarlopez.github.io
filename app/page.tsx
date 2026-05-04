import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-8 py-32">
      <Image
        src="/logo.svg"
        alt="Sebastian Oscar Lopez logo"
        width={160}
        height={160}
        priority
      />
      <h1 className="text-3xl font-semibold tracking-tight">
        Sebastian Oscar Lopez
      </h1>
      <p className="max-w-md text-center text-lg text-zinc-600">
        Personal website — coming soon.
      </p>
    </main>
  );
}
