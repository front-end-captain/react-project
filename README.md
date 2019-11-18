# react-project

+ no babel
+ no css-preprocessor
+ no stylelint

just supported ts、css、postcss、prettier、eslint and hot-reload

use [ts-loader](https://github.com/TypeStrong/ts-loader) to compile ts code

!!! use ts-loader to compile tsCode will not inject polyfill in your project, need to import `core-js/stable` manually in index file.
and this operation will import all polyfill(size 365kb)

see this [comment](https://github.com/microsoft/TypeScript/issues/26087#issuecomment-409289653)
