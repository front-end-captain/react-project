import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FunctionComponent, lazy } from "react";

const Home = lazy(() =>
  import("@/pages/Home").then((m) => {
    return { default: m.Home };
  }),
);
const List = lazy(() =>
  import("@/pages/List").then((m) => {
    return { default: m.List };
  }),
);
const Users = lazy(() =>
  import("@/pages/Users").then((m) => {
    return { default: m.Users };
  }),
);
const Products = lazy(() =>
  import("@/pages/Products").then((m) => {
    return { default: m.Products };
  }),
);
const SubProducts = lazy(() =>
  import("@/pages/Products/SubProduct").then((m) => {
    return { default: m.SubProducts };
  }),
);

const AppRouter: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export { AppRouter };
