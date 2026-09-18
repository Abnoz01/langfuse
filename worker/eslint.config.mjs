import baseConfig from "@repo/eslint-config";
import { createRequire } from 'module';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

var require = createRequire(import.meta.url);
var module = { exports: {} };

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
