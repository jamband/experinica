import { SectionDivider } from "@/components/section-divider";
import { TapeHeader } from "@/components/tape-header";
import { API_URL, API_URL_SUFFIX } from "@/constants/api";
import { useTrack } from "@/hooks/track";
import { IconPause } from "@/icons/pause";
import { IconPlay } from "@/icons/play";
import { Page } from "@/layouts/page";
import { aspectRatio } from "@/styles/dynamic";
import type { Tape as TTape } from "@/types/tape";
import { extractProps } from "@/utils/api";
import { scrollToTop } from "@/utils/scroll";
import { Loader, useLoaderInstance } from "@tanstack/react-loaders";
import { Link, Route, useParams } from "@tanstack/router";
import { rootRoute } from "./__root";
import { tapesRoute } from "./tapes";
import { trackRoute } from "./track";

type Params = {
  year: string;
  month: string;
  tape: string;
};

type LoaderData = {
  title: string;
  tape: TTape;
  year: string;
};

export const tapeLoader = new Loader({
  key: "tape",
  loader: async (params: Params) => {
    const tape = await fetch(
      `${API_URL}/${params.year}/${params.month}/${params.tape}/${API_URL_SUFFIX}`
    );

    if (!tape.ok) {
      throw new Error("Failed to fetch");
    }

    const data = { ...extractProps(await tape.json()) };
    data.tape = { ...data.tape };

    data.tape.items = data.tape.items.map((item: TTape["items"]) => {
      return { ...item };
    });

    return {
      title: data.title,
      tape: data.tape,
      year: data.year,
    } as LoaderData;
  },
});

export const tapeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/$year/$month/$tape",
  component: Tape,
  onLoad: async ({ params }) => tapeLoader.load({ variables: params }),
});

export default function Tape() {
  const params = useParams({ from: tapeRoute.id });

  const {
    state: { data },
  } = useLoaderInstance({
    key: tapeLoader.key,
    variables: params,
  });

  const { track } = useTrack();

  return (
    <Page title={data.title || ""}>
      <TapeHeader title={data.title || ""} className="mb-10" />
      <SectionDivider className="mb-10" />
      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {data.tape.items.map((item) => (
          <Link
            key={item.slug}
            to={trackRoute.id}
            params={{
              year: params.year,
              month: params.month,
              tape: params.tape,
              track: item.slug,
            }}
            className="relative mb-1 text-gray-200 shadow active:text-gray-100"
          >
            <img
              className={`w-full rounded bg-gray-700 object-cover opacity-70 ${aspectRatio(
                item.image_aspect_ratio
              )}`}
              src={item.image}
              loading="lazy"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-70">
              {`${data.tape.path}/${item.slug}` === track.path ? (
                <IconPause className="h-12 w-12 lg:h-14 lg:w-14" />
              ) : (
                <IconPlay className="h-12 w-12 lg:h-14 lg:w-14" />
              )}
            </div>
            <div className="absolute bottom-0 w-full px-2 py-1 text-right font-semibold">
              <h4 className="truncate leading-tight">{item.title}</h4>
              <div className="truncate text-xxs">{data.title}</div>
            </div>
          </Link>
        ))}
      </div>
      <SectionDivider className="mb-10" />
      <div className="text-center">
        <Link
          to={tapesRoute.id}
          params={{ year: params.year }}
          className="group px-4 py-3 text-gray-300 decoration-gray-300/70 hover:text-yellow-500 hover:decoration-yellow-500/70"
          onClick={scrollToTop}
        >
          <span className="align-top text-sm text-gray-300/70 group-hover:text-yellow-500/70 group-active:text-yellow-500/70">
            ←
          </span>{" "}
          Monthly Favorite Tracks of {params.year}
        </Link>
      </div>
    </Page>
  );
}
