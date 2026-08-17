import coreWebVitals from "eslint-config-next/core-web-vitals";
import next from "eslint-config-next";

/**
 * eslint-config-next 16 já exporta flat config — não precisa de FlatCompat.
 */
const eslintConfig = [
  ...next,
  ...coreWebVitals,
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
