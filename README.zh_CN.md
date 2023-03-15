<h1 align="center">vite-plugin-find-image-duplicates</h1>
<p align="center">打包时查找你的项目中是否有重复图片</p>

<p align="center">
<a href="https://www.npmjs.com/package/vite-plugin-find-image-duplicates" target="__blank"><img src="https://img.shields.io/npm/v/vite-plugin-find-image-duplicates?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/vite-plugin-find-image-duplicates" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/vite-plugin-find-image-duplicates?color=50a36f&label="></a>
</p>

简体中文 | [English](./README.md)

## 配置项

| **配置项名称**    | **是否必须** | **含义**                                                                           | **类型**        | **举例**                                                                                             |
| ----------------- | ------------ | ---------------------------------------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------- |
| `imagePath`       | 否           | 需要查找的图片路径 ,默认 `src/assets/images`                                       | `Array<string>` | `findImageDuplicates({ imagePath: ["src/assets/images", ...] })`                                     |
| `imageType`       | 否           | 需要查找的图片类型，默认`'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'` | `Array<string>` | `findImageDuplicates({ imageType: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp',...] })` |
| `exitOnDuplicate` | 否           | 找到重复图片以后是否要退出进程 ，默认 `ture` 退出进程                              | `Boolean`       | `findImageDuplicates({ exitOnDuplicate:false })`                                                     |

## 安装

```bash
npm install vite-plugin-find-image-duplicates -D
pnpm add vite-plugin-find-image-duplicates -D
```

## 用法

- vite.config.ts

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import findImageDuplicates from 'vite-plugin-find-image-duplicates'

export default defineConfig({
  plugins: [vue(), findImageDuplicates({ imagePath: ['src/assets/images/recur'], exitOnDuplicate: false })]
})
```

## 许可证

[MIT © wChenonly-latest](./LICENSE)
