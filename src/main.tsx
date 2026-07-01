import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './styles/globals.css'

// vite-react-ssg drives both SSG (build) and hydration (client) from this export.
export const createRoot = ViteReactSSG({ routes })
