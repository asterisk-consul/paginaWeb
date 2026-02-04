import Compass from "../icons/compass.astro";
import Workflow from "../icons/workflow.astro";
import Layers from "../icons/layers.astro";
import Code from "../icons/terminal.astro";
import Globe from "../icons/layout-template.astro";
import GraduationCap from "../icons/graduation-cap.astro";

export const services = [
  {
    title: "Consultoría Digital",
    description:
      "Acompañamos a las empresas en la toma de decisiones tecnológicas, analizando procesos, sistemas y necesidades reales.",
    items: [
      "Relevamiento de procesos",
      "Análisis de sistemas existentes",
      "Definición de soluciones",
      "Acompañamiento técnico",
    ],
    icon: Compass,
  },
  {
    title: "Soluciones sobre Flow",
    description:
      "Soporte, implementación y acompañamiento funcional sobre el sistema Flow.",
    items: [
      "Soporte funcional y técnico",
      "Administración de datos",
      "Reportes y visualización",
      "Gestión de requerimientos",
    ],
    icon: Workflow,
  },
  {
    title: "Sistemas de Gestión",
    description:
      "Acompañamos la adopción y el uso de sistemas de gestión, integrándolos con otros procesos.",
    items: [
      "Soporte funcional",
      "Integraciones",
      "Reportes personalizados",
      "Optimización de procesos",
    ],
    icon: Layers,
  },
  {
    title: "Desarrollo de Software",
    description:
      "Desarrollamos soluciones a medida para automatizar procesos e integrar sistemas.",
    items: [
      "Aplicaciones internas",
      "APIs e integraciones",
      "Automatización",
      "Documentación y capacitación",
    ],
    icon: Code,
  },
  {
    title: "Desarrollo Web",
    description:
      "Diseño y desarrollo de sitios web y sistemas web alineados a objetivos de negocio.",
    items: [
      "Web institucional",
      "Sistemas web",
      "Landing pages",
      "Soporte post-entrega",
    ],
    icon: Globe,
  },
  {
    title: "Capacitación y Soporte",
    description:
      "Capacitamos equipos y brindamos soporte continuo para asegurar la adopción de las soluciones.",
    items: [
      "Capacitación funcional",
      "Aulas virtuales",
      "Documentación",
      "Soporte recurrente",
    ],
    icon: GraduationCap,
  },
];
