// src/declarations.d.ts
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
