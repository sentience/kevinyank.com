import { collapseWhitespace } from "./filters/collapse-whitespace.js";
import { exclude } from "./filters/exclude.js";
import { findBySlug } from "./filters/find-by-slug.js";
import { toHTMLDatetime } from "./filters/to-html-datetime.js";
import { whereExcludes } from "./filters/where-excludes.js";
import { whereIncludes } from "./filters/where-includes.js";

export default {
  collapseWhitespace,
  exclude,
  findBySlug,
  toHTMLDatetime,
  whereExcludes,
  whereIncludes,
};
