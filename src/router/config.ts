import { ComponentType, lazy } from "react";
import { RouteComponentProps } from "react-router-dom";

interface RouteItem<A extends string | number> {
  name?: string;
  path: string;
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
  authority?: A[];
  icon?: string;
  children?: Array<RouteItem<A>>;
}

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

const routerConfig: RouteItem<string>[] = [
  {
    name: "Home",
    path: "/home",
    component: Home,
  },
  {
    name: "List",
    path: "/list",
    component: List,
    children: [
      {
        name: "UserList",
        path: "/users",
        component: Users,
      },
      {
        name: "ProductList",
        path: "/products",
        component: Products,
        children: [
          {
            name: "ProductSubList",
            path: "/subProducts",
            component: SubProducts,
          },
        ],
      },
    ],
  },
];

export { routerConfig };
