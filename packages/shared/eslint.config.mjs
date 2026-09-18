import baseConfig from "@repo/eslint-config";
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

export default [...baseConfig];
