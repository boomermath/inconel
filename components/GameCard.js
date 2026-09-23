import Image from "next/image";
import Link from "next/link";

export default function GameCard({ title, page, img }) {
  return (
    <Link
      href={`/games/${page}`}
      className="group block rounded-lg border-2 border-ink/15 dark:border-paper/20 bg-white/60 dark:bg-ink/30 p-3 sm:p-4 transition-colors hover:border-copper hover:bg-copper/10 dark:hover:bg-copper/15 sm:hover:scale-[1.02] sm:transform sm:duration-200"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-md bg-ink/5 dark:bg-paper/5">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 420px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover"
          priority={false}
        />
      </div>
      <span className="mt-3 block text-sm sm:text-base font-medium text-ink dark:text-paper group-hover:text-copper">
        {title}
      </span>
    </Link>
  );
}
