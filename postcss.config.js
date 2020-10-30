module.exports = {
  plugins: [
    ["autoprefixer", {
            "flexbox": "no-2009",
            "grid": "autoplace"
          }],
    ["postcss-import"],
    ["postcss-preset-env"],
    ["cssnano"],
  ]
}
