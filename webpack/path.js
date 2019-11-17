const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const getAlias = () => {
  const appSrc = resolveApp("src");
  return {
    "@/components": path.join(appSrc, "/components"),
  };
};

module.exports = {
  getAlias,
};
