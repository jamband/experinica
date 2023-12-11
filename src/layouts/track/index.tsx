import { APP_PRIMARY_COLOR } from "@/constants/app";
import { useTapeState } from "@/hooks/tape";
import { useTrackState } from "@/hooks/track";
import { useRouterState } from "@tanstack/react-router";
import { Component } from "./component";

export const Track: React.FC = () => {
  const tape = useTapeState();
  const track = useTrackState();
  const { location } = useRouterState();

  if (!track.path) return null;

  let src = "";
  if (track.provider === "Bandcamp") {
    src = `https://bandcamp.com/EmbeddedPlayer/track=${track.provider_key}/size=large/tracklist=false/bgcol=333333/linkcol=${APP_PRIMARY_COLOR}`;
  }
  if (track.provider === "SoundCloud") {
    src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.provider_key}&show_comments=false&hide_related=true&visual=true`;
  }
  if (track.provider === "Vimeo") {
    src = `https://player.vimeo.com/video/${track.provider_key}`;
  }
  if (track.provider === "YouTube") {
    src = `https://www.youtube.com/embed/${track.provider_key}?rel=0&playsinline=1`;
  }

  const tapePath = track.path.split("/").slice(0, -1).join("/");
  const tapeParams = tapePath.split("/").filter(Boolean);

  return (
    <Component
      isTrackRoute={track.path === location.pathname}
      track={track}
      src={src}
      tapeTitle={tape.title}
      tapeParams={tapeParams}
    />
  );
};
