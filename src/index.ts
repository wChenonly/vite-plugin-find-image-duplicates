import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import type { Plugin } from 'vite'
import c from 'picocolors'
import type { Options } from './types'

const defaultOptions = {
  imagePath: ['src/assets/images'],
  imageType: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'],
  exitOnDuplicate: true
}

export default function findImageDuplicates(options: Options = {}): Plugin {
  const userOptions = { ...defaultOptions, ...options }
  const imagePaths = userOptions.imagePath
  const imageTypes = userOptions.imageType
  const exitOnDuplicate = userOptions.exitOnDuplicate

  const hashTable = new Map<string, string[]>()
  const processFile = async (filePath: string) => {
    if (statSync(filePath).isDirectory()) {
      readdirSync(filePath).forEach(filename => {
        processFile(path.join(filePath, filename))
      })
    } else if (imageTypes.includes(path.extname(filePath).toLowerCase())) {
      const fileData = readFileSync(filePath)
      const hash = crypto.createHash('md5').update(fileData).digest('hex')

      if (hashTable.has(hash)) {
        console.log(`${c.bold(c.green('重复的图片:'))}\n ${filePath} 与 ${hashTable.get(hash)![0]} 相同 \n`)
        if (exitOnDuplicate) {
          await new Promise(resolve => setTimeout(resolve, 0))
          process.exit(0)
        }
      } else {
        hashTable.set(hash, [filePath])
      }
    }
  }

  return {
    name: 'vite:find-image-duplicates',
    async buildStart() {
      hashTable.clear()
      for (const imagePath of imagePaths) {
        const absolutePath = path.resolve(process.cwd(), imagePath)
        if (!existsSync(absolutePath)) {
          console.log(`${c.bold(c.red('findImageDuplicates插件: 文件夹不存在:'))} ${absolutePath}`)
          process.exit(0)
        }

        readdirSync(absolutePath).forEach(filename => {
          const filePath = path.join(absolutePath, filename)
          processFile(filePath)
        })
      }
    }
  }
}
