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
  } = router.useMatch(tapesRoute.id);

  return (
    <Page title={tapes?.title || ""}>
      <TapeHeader
        title={`Monthly Favorite Tracks of ${params.year}`}
        className="mb-10"
      />
      <SectionDivider className="mb-10" />
      <ul>
        {tapes?.tapes.map((tape) => (
          <li key={tape.id} className="mb-4">
            <router.Link
              to={tape.path}
              className="group pb-0.5 text-2xl font-bold text-gray-100 no-underline shadow-[0_2px_0_0_rgba(236,239,244,0.7)] hover:text-yellow-500 hover:shadow-[0_2px_0_0_rgba(247,214,142,0.7)] active:shadow-[0_2px_0_0_rgba(247,214,142,0.7)]"
            >
              {tape.title}
              <span className="ml-2 align-top text-base text-gray-100/70 group-hover:text-yellow-500/70 group-active:text-yellow-500/70">
                →
              </span>
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
