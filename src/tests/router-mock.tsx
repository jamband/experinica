import {
  createMemoryHistory,
  Outlet,
  ReactLocation,
  Router,
} from "@tanstack/react-location";
import type { InitialEntry } from "history";

type Props = {
  children: React.ReactNode;
  initialEntries: Array<InitialEntry>;
};

export const RouterMock: React.VFC<Props> = (props) => (
  <Router
    location={
      new ReactLocation({
        history: createMemoryHistory({
          initialEntries: props.initialEntries,
        }),
      })
    }
    routes={[]}
  >
    {props.children}
    <Outlet />
  </Router>
);
