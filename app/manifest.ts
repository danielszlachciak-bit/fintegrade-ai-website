import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name:"fintegrade.ai", short_name:"fintegrade", description:"AI i zarządzanie finansami małych firm", start_url:"/", display:"standalone", background_color:"#f4f7f6", theme_color:"#0b2f2b", icons:[{src:"/icon.svg",sizes:"any",type:"image/svg+xml"}] }; }
