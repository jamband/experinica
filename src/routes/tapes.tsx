import { BackToHome } from "@/components/back-to-home";
import { SectionDivider } from "@/components/section-divider";
import { TapeHeader } from "@/components/tape-header";
import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import { Page } from "@/layouts/page";
import type { Tapes as TTapes, Tape } from "@/types/tape";
import { extractProps } from "@/utils/api";
import { Loader, useLoaderInstance } from "@tanstack/react-loaders";
import { Link, Route, useParams } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import { tapeRoute } from "./tape";

type Params = {
  year: string;
};

type LoaderData = {
  title: string;
  tapes: TTapes;
};

export const tapesLoader = new Loader({
  key: "tapes",
  fn: async (params: Params) => {
    const response = await fetch(`${API_URL}/${params.year}/${API_URL_SUFFIX}`);

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = { ...extractProps(await response.json()) };

    const tapes = data.tapes.map((tape: Tape) => {
      return { ...tape };
    });

    return {
      title: data.title,
      tapes,
    } as LoaderData;
  },
});

export const tapesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/$year",
  loader: async ({ context, params }) => {
    await context.loadClient.load({ key: "tapes", variables: params });
    return () => useLoaderInstance({ key: "tapes", variables: params });
  },
  component: Tapes,
});

export default function Tapes() {
  const { data } = tapesRoute.useLoader()();
  const params = useParams({ from: tapesRoute.id });

  const extractParamsFromTapePath = (path: string) => {
    const params = path.split("/").filter(Boolean);

    return {
      year: params[0],
      month: params[1],
      tape: params[2],
    };
  };

  return (
    <Page title={data.title}>
      <TapeHeader
        title={`Monthly Favorite Tracks of ${params.year}`}
        className="mb-10"
      />
      <SectionDivider className="mb-10" />
      <ul>
        {data.tapes.map((tape) => (
          <li key={tape.id} className="mb-4">
            {tape.path === "" ? (
              <>
                <span className="pb-0.5 text-2xl font-bold text-gray-500 shadow-[0_2px_0_0_rgba(236,239,244,0.3)]">
                  :: {tape.title} ::
                </span>
                <div className="text-xs text-gray-500">{tape.date}</div>
              </>
            ) : (
              <>
                <Link
                  to={tapeRoute.id}
                  params={extractParamsFromTapePath(tape.path)}
                  className="group pb-0.5 text-2xl font-bold text-gray-100 no-underline shadow-[0_2px_0_0_rgba(236,239,244,0.7)] hover:text-yellow-500 hover:shadow-[0_2px_0_0_rgba(247,214,142,0.7)] active:shadow-[0_2px_0_0_rgba(247,214,142,0.7)]"
                >
                  {tape.title}
                  <span className="ml-2 align-top text-base text-gray-100/70 group-hover:text-yellow-500/70 group-active:text-yellow-500/70">
                    →
                  </span>
                </Link>
                <div className="text-xs">{tape.date}</div>
              </>
            )}
          </li>
        ))}
      </ul>
      <SectionDivider className="mb-10" />
      <BackToHome />
    </Page>
  );
}
