// Deprecated safety guard.
// This repository is currently maintained as committed static files.
// The previous generator was stale and could overwrite verified production content.
throw new Error(
  'build.mjs is intentionally disabled: it was stale and destructive. ' +
  'Edit the committed static site files, then run node postprocess.mjs and CI checks.'
);
