import { SectionDivider } from "~/components/section-divider";
import { TapeHeader } from "~/components/tape-header";
import { Page } from "~/layouts/page";
import { router } from ".";

export default function Home() {
  const {
    loaderData: { years },
  } = router.useMatch("/");

  return (
    <Page title="">
      <TapeHeader title="Monthly Favorite Tracks" className="mb-10" />
      <SectionDivider className="mb-10" />
      <section className="flex items-center justify-center gap-5">
        {years?.years.map((year) => (
          <router.Link
            key={year}
            to={year}
            className="rounded bg-gray-700 px-4 py-1 font-mono text-sm text-gray-300 no-underline hover:bg-yellow-500 hover:text-gray-900"
          >
            <span className="text-xs text-gray-500">#</span>
            {year}
          </router.Link>
        ))}
      </section>
    </Page>
  );
}
