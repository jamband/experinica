import { createRouteConfig } from "@tanstack/react-router";
import { BackToHome } from "~/components/back-to-home";
import { SectionDivider } from "~/components/section-divider";
import { TapeHeader } from "~/components/tape-header";
import { API_URL, API_URL_SUFFIX } from "~/constants/api";
import { Page } from "~/layouts/page";
import { extractProps } from "~/utils/api";
import { router } from ".";

export const tapesRoute = createRouteConfig().createRoute({
  path: "/$year",
  component: Tapes,
  loader: async ({ params }) => {
    const tapes = await fetch(`${API_URL}/${params.year}/${API_URL_SUFFIX}`);

    if (!tapes.ok) {
      throw new Error("Failed to fetch");
    }

    return {
      tapes: extractProps(await tapes.json()),
    };
  },
});

export default function Tapes() {
  const {
    params,
    loaderData: { tapes },
  } = router.useMatch("/$year");

  return (
    <Page title={tapes?.title || ""}>
      <TapeHeader
        title={`Monthly Favorite Tracks of ${params.year}`}
        className="mb-10"
      />
      <SectionDivider className="mb-10" />
      <ul>
        {tapes?.tapes.map((tape) => (
          <li key={tape.id} className="mb-3">
            <router.Link
              to={tape.path}
              className="text-2xl font-semibold text-gray-100 hover:text-yellow-500"
            >
              {tape.title} →
            </router.Link>
            <div className="text-xs">{tape.date}</div>
          </li>
        ))}
      </ul>
      <SectionDivider className="mb-10" />
      <BackToHome />
    </Page>
  );
}
