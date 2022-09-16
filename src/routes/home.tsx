import { useMatch } from "@tanstack/react-location";
import { Link } from "~/components/link";
import { SectionDivider } from "~/components/section-divider";
import { TapeHeader } from "~/components/tape-header";
import { Page } from "~/layouts/page";
import type { LocationGenerics } from "~/types/location";

export default function Home() {
  const {
    data: { years },
  } = useMatch<LocationGenerics>();

  return (
    <Page title="">
      <TapeHeader title="Monthly Favorite Tracks" className="mb-10" />
      <SectionDivider className="mb-10" />
      <section className="flex items-center justify-center gap-5">
        {years?.map((year) => (
          <Link
            key={year}
            to={year}
            className="rounded bg-gray-700 px-4 py-1 font-mono text-sm text-gray-300 no-underline hover:text-yellow-500"
          >
            <span className="text-xs text-gray-500">#</span>
            {year}
          </Link>
        ))}
      </section>
    </Page>
  );
}
