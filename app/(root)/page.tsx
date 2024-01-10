import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col p-4 h-screen justify-center items-center bg-neutral-50 w-screen">
      <div className="max-w-sm flex flex-col items-center">
        <h1 className="text-center mb-2 font-semibold">Please click Start to continue</h1>
        <Link href={'/quiz'} className="p-4 bg-sky-500 text-white font-bold rounded-xl w-24 text-center">
          Start
        </Link>
      </div>
    </div>
  );
}
