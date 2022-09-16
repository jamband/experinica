import { useLocation } from "@tanstack/react-location";
import { useTape } from "~/hooks/tape";
import { useTrack } from "~/hooks/track";
import { Component } from "./component";

export const Track: React.FC = () => {
  const { tape } = useTape();
  const { track } = useTrack();
  const { current } = useLocation();

  if (!track.path) return null;

  let responsiveCol = "";
  if (track.embed_aspect_ratio === "1/1") {
    responsiveCol = "md:col-start-3 md:col-span-8";
  }
  if (track.embed_aspect_ratio === "4/3") {
    responsiveCol = "md:col-start-2 md:col-span-10";
  }

  let src = "";
  if (track.provider === "Bandcamp") {
    src = `https://bandcamp.com/EmbeddedPlayer/track=${track.provider_key}/size=large/tracklist=false/bgcol=333333/linkcol=f7d68e`;
  }
  if (track.provider === "SoundCloud") {
    src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.provider_key}&show_comments=false&color=f7d68e&hide_related=true&visual=true`;
  }
  if (track.provider === "Vimeo") {
    src = `https://player.vimeo.com/video/${track.provider_key}`;
  }
  if (track.provider === "YouTube") {
    src = `https://www.youtube.com/embed/${track.provider_key}?rel=0&playsinline=1`;
  }

  const tapePath = track.path.split("/").slice(0, -1).join("/");

  return (
    <Component
      isTrackRoute={track.path === current.pathname}
      responsiveCol={responsiveCol}
      track={track}
      src={src}
      tapeTitle={tape.title}
      tapePath={tapePath}
    />
  );
};
