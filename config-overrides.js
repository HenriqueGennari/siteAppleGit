module.exports = function override(config) {
    // Adiciona suporte para importar SVG como componente React
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.oneOf?.some((r) => r.loader?.includes("file-loader"))
    );
  
    if (fileLoaderRule) {
      fileLoaderRule.oneOf = fileLoaderRule.oneOf.map((rule) => {
        if (
          rule.loader &&
          rule.loader.includes("file-loader") &&
          rule.test?.toString().includes("svg")
        ) {
          return { ...rule, exclude: /\.svg$/ };
        }
        return rule;
      });
    }
  
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
  
    return config;
  };
  