import { useMatch } from "@tanstack/react-location";
import { BackToHome } from "../components/back-to-home";
import { Link } from "../components/link";
import { SectionDivider } from "../components/section-divider";
import { TapeHeader } from "../components/tape-header";
import { Page } from "../layouts/page";
import type { LocationGenerics } from "../types/location";

export default function Tapes() {
  const {
    params,
    data: { tapes },
  } = useMatch<LocationGenerics>();

  return (
    <Page title={`Tapes of ${params.year}`}>
      <TapeHeader
        title={`Monthly Favorite Tracks of ${params.year}`}
        className="mb-10"
      />
      <SectionDivider className="mb-10" />
      <ul>
        {tapes?.map((tape) => (
          <li key={tape.id} className="mb-3">
            <Link
              to={tape.path}
              className="text-2xl font-semibold text-gray-100 hover:text-yellow-500"
            >
              {tape.title} →
            </Link>
            <div className="text-xs">{tape.date}</div>
          </li>
        ))}
      </ul>
      <SectionDivider className="mb-10" />
      <BackToHome />
    </Page>
  );
}
