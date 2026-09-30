import { Activity, Bolt, Building2, Droplets, Factory, Flame, Gauge, Hammer, Leaf, Settings2, Utensils, Waves } from "lucide-react";

export const procurementLinks = [
  { to: "/procurement/instrumentation", label: "Instrumentation & Control" },
  { to: "/procurement/electrical", label: "Electrical Supplies" },
  { to: "/procurement/mechanical", label: "Mechanical Supplies" },
  { to: "/procurement/pipes-fittings", label: "Pipes & Fittings" },
] as const;
export const engineeringLinks = [
  { to: "/engineering-consultation", label: "Engineering Consultation" },
  { to: "/installation-maintenance", label: "Installation & Maintenance" },
] as const;
export const industries = [
  [Flame, "Oil & Gas"], [Factory, "Manufacturing"], [Bolt, "Power Generation"], [Building2, "Cement & Building"],
  [Utensils, "Food & Beverage"], [Waves, "Water Treatment"], [Activity, "Chemical"], [Leaf, "Pulp & Paper"],
] as const;
export const processSteps = [
  ["01", "Requirement Assessment", "We review specifications, site needs and delivery priorities."],
  ["02", "Vendor & OEM Sourcing", "Our team identifies the right manufacturers and compliant products."],
  ["03", "Quote & Negotiation", "You receive a clear, competitive commercial proposal."],
  ["04", "Order & QA", "Orders are managed with inspection and certification controls."],
  ["05", "Logistics & Delivery", "We coordinate tracked delivery to your facility or project site."],
  ["06", "Installation & Support", "Where required, our engineers commission and support your equipment."],
] as const;
export const partners = ["SUPCON", "FESTO", "Schneider Electric", "Pepperl+Fuchs", "Endress+Hauser", "Siemens", "Bently Nevada", "INGCO", "Total Tools"];
export const clients = ["Dangote Group", "BUA Group", "Seplat Energy", "Oando", "Olam", "GE Vernova", "Pacific Energy", "Navante", "Ardova PLC", "Flour Mills Nigeria", "Lacasera", "Grey Ocean", "GZI", "Mar and Mor", "Prudent Energy"];
export const projects = [
  { client: "Pacific Energy", title: "Omotosho Power Plant", location: "Ondo State, Nigeria", industry: "Power", scope: "Assessment and supply of flow measurement equipment for critical plant processes.", outcome: "Improved measurement reliability and supported stable plant operations." },
  { client: "BUA Sugar Refinery", title: "Wastewater Treatment Plant Revamp", location: "Apapa, Lagos", industry: "Manufacturing", scope: "Full wastewater treatment plant revamping and process optimisation.", outcome: "Restored process performance and strengthened treatment efficiency." },
  { client: "Sentuo Oil & Petrochemical Refinery", title: "SupOS Installation & Commissioning", location: "Tema, Ghana", industry: "Oil & Gas", scope: "Installation and commissioning of the SUPCON SupOS industrial operating system.", outcome: "Delivered an integrated operational foundation for plant intelligence." },
  { client: "Pacific Energy", title: "Explosion-Proof Flow Meter Supply", location: "Olorunsogo Power Plant, Nigeria", industry: "Power", scope: "Supply of explosion-proof thermal mass flow meters for a demanding plant environment.", outcome: "Enabled safer, accurate flow monitoring in classified areas." },
  { client: "GE Vernova", title: "Gas Analysis & Calibration Support", location: "Nigeria", industry: "Power", scope: "Gas analyser calibration, Honeywell spares supply and certified calibration gases.", outcome: "Improved analyser confidence and equipment readiness." },
  { client: "Navante Oil & Gas / Grey Ocean", title: "Fuel Gas Scrubber Spares", location: "OML 111, Nigeria", industry: "Oil & Gas", scope: "Supply support for fuel gas scrubber and HP1 water outlet spares.", outcome: "Supported timely maintenance of offshore production equipment." },
  { client: "Stockgap Fuel Limited", title: "MCR Control Panel Maintenance", location: "Port Harcourt, Nigeria", industry: "Oil & Gas", scope: "Inspection and maintenance of the main control room control panel.", outcome: "Strengthened control system availability and operating confidence." },
  { client: "Seplat Energy", title: "Valve Supply & Commissioning", location: "Ohaji, Imo State", industry: "Oil & Gas", scope: "Valve supply, installation, calibration and functional testing.", outcome: "Completed an end-to-end valve package ready for service." },
] as const;
export const serviceTypes = ["Instrumentation & Control", "Electrical Supplies", "Mechanical Supplies", "Pipes & Fittings", "Engineering Consultation", "Installation & Maintenance"];
export const serviceIcons = { Gauge, Bolt, Hammer, Droplets, Settings2 };
