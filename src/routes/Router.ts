import Home from "../lib/screens/Home.svelte";
import PageNotExists from "../lib/screens/PageNotExists.svelte";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/",
    component: PageNotExists,
  },
];
