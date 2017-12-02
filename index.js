var env = process.env.BABEL_ENV || process.env.NODE_ENV;

function buildPreset(context, options) {
  options = options || {};
  return {
    presets: [
      [
        "env",
        env !== "test"
          ? {
              targets: options.targets || { uglify: true },
              loose: options.loose || true,
              modules: options.modules || false,
              useBuiltIns: options.useBuiltIns || "entry"
            }
          : {}
      ],
      "react",
      "stage-1"
    ].filter(Boolean)
  };
}

module.exports = buildPreset;
