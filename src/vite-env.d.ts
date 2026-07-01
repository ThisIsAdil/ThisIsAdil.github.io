/// <reference types="vite/client" />

// vite-imagetools `as=picture` output.
interface PictureImport {
  sources: Record<string, string>
  img: { src: string; w: number; h: number }
}
declare module '*&as=picture' {
  const value: PictureImport
  export default value
}
