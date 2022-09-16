import { useMatch } from "@tanstack/react-location";
import { Link } from "~/components/link";
import { SectionDivider } from "~/components/section-divider";
import { TapeHeader } from "~/components/tape-header";
import { useTrack } from "~/hooks/track";
import { IconPause } from "~/icons/pause";
import { IconPlay } from "~/icons/play";
import { Page } from "~/layouts/page";
import { aspectRatio } from "~/styles/dynamic";
import type { LocationGenerics } from "~/types/location";
import { scrollToTop } from "~/utils/scroll";

export default function Tape() {
  const {
    params,
    data: { tape },
  } = useMatch<LocationGenerics>();

  const { track } = useTrack();

  return (
    <Page title={tape?.title || ""}>
      <TapeHeader title={tape?.title || ""} className="mb-10" />
      <SectionDivider className="mb-10" />
      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {tape?.tape.items.map((item) => (
          <Link
            key={item.slug}
            to={item.slug}
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
              {`${tape?.tape.path}/${item.slug}` === track.path ? (
                <IconPause className="h-12 w-12 lg:h-14 lg:w-14" />
              ) : (
                <IconPlay className="h-12 w-12 lg:h-14 lg:w-14" />
              )}
            </div>
            <div className="absolute bottom-0 w-full px-2 py-1 text-right font-semibold">
              <h4 className="truncate leading-tight">{item.title}</h4>
              <div className="truncate text-xxs">{tape?.title}</div>
            </div>
          </Link>
        ))}
      </div>
      <SectionDivider className="mb-10" />
      <div className="text-center">
        <Link
          to={`/${params.year}`}
          className="px-4 py-3 text-gray-300 hover:text-yellow-500"
          onClick={scrollToTop}
        >
          ← Monthly Favorite Tracks of {params.year}
        </Link>
      </div>
    </Page>
  );
}
