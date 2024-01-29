import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import rehypePrettyCode from "rehype-pretty-code";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(),react(), 
    tailwind({
      applyBaseStyles: false,
    }), 
    mdx(
      {
        syntaxHighlight: false,
        rehypePlugins: [[rehypePrettyCode,{
              theme: "dracula",
        }]],
      
      }
    )],
});