import type { Plugin } from "vite"
export const viteBuildLogTime = (): Plugin => ({
  name: "vite-build-log-time",
  apply: "build",
  enforce: "post",
  buildStart() {
    console.time("✨ build time: ")
  },
  closeBundle() {
    console.timeEnd("✨ build time: ")
  }
})
