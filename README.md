<h1 align="center">vite-plugin-find-image-duplicates</h1>
<p align="center">Find if there are duplicate images in your project when building it</p>

<p align="center">
<a href="https://www.npmjs.com/package/vite-plugin-find-image-duplicates" target="__blank"><img src="https://img.shields.io/npm/v/vite-plugin-find-image-duplicates?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/vite-plugin-find-image-duplicates" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/vite-plugin-find-image-duplicates?color=50a36f&label="></a>
</p>

English | [简体中文](./README.zh_CN.md)

## Configuration

| **configuration item name** | **must** | **meaning**                                                                                           | **type**        | **example**                                                                                          |
| --------------------------- | -------- | ----------------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------- |
| `imagePath`                 | No       | The image path to be found, default `src/assets/images`                                               | `Array<string>` | `findImageDuplicates({ imagePath: ["src/assets/images", ...] })`                                     |
| `imageType`                 | No       | The type of image you need to find, default`'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'` | `Array<string>` | `findImageDuplicates({ imageType: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp',...] })` |
| `exitOnDuplicate`           | No       | Whether to exit the process after finding the duplicate picture, by default `ture` Exit the process   | `Boolean`       | `findImageDuplicates({ exitOnDuplicate:false })`                                                     |

## Install

```bash
npm install vite-plugin-find-image-duplicates -D
pnpm add vite-plugin-find-image-duplicates -D
```

## Usage

- vite.config.ts

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import findImageDuplicates from 'vite-plugin-find-image-duplicates'

export default defineConfig({
  plugins: [vue(), findImageDuplicates({ imagePath: ['src/assets/images/recur'], exitOnDuplicate: false })]
})
```

## License

[MIT © wChenonly-latest](./LICENSE)
