import baseConfig from "@repo/eslint-config";
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

export default [
  ...baseConfig,

  // Worker-specific ignores
  {
    name: "langfuse/worker/ignores",
    ignores: ["**/*test*.*", "**/worker-thread.js"],
  },
];
