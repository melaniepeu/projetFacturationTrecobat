import Vue from "vue";
import Router from "vue-router";
import Presentation from "./views/Presentation.vue";
import ListeFournisseurs from "./views/ListeFournisseurs.vue";
import ListeFactures from "./views/ListeFactures.vue";
import UpdateFournisseur from "./views/UpdateFournisseur.vue";
import UpdateFacture from "./views/UpdateFacture.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "presentation",
      component: () =>
        import("./views/Presentation.vue")
    },
    {
      path: "/ListeFournisseurs",
      name: "listefournisseurs",
      component: () =>
        import("./views/ListeFournisseurs.vue")
    },
    {
      path: "/ListeFactures",
      name: "listefactures",
      component: () =>
        import("./views/ListeFactures.vue")
    },
    {
      path: "/UpdateFournisseur",
      name: "updatefournisseur",
      component: () =>
        import("./views/UpdateFournisseur.vue")
    },
    {
      path: "/UpdateFacture",
      name: "updateFacture",
      component: () =>
        import("./views/UpdateFacture.vue")
    },
  ]
});
