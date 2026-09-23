import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl space-y-6 py-8">
      <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
        404
      </h1>
      <p className="text-lg text-ink/75 dark:text-paper/75">
        Can&apos;t find what you&apos;re looking for.
      </p>
      <Link href="/" className="button inline-flex items-center min-h-11">
        Back home
      </Link>
    </div>
  );
}
