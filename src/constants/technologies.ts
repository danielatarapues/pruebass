import { 
  PhAngularLogo, PhAtom, PhGithubLogo, PhGlobeSimple,
  PhFileVue, PhFigmaLogo, PhDeviceMobile, PhAppWindow,
  PhCode, PhMagicWand, PhPaintBrushBroad 
} from "@phosphor-icons/vue"
import type { Technology } from "@/common/types"

export const TECHNOLOGIES_LIST: Technology[] = [
  { name: "React", category: "Frontend", description: "Interfaces interactivas.", icon: PhAtom },
  { name: "Next.js", category: "Frontend", description: "Framework SSR y estático.", icon: PhAppWindow },
  { name: "React", category: "Frontend", description: "Interfaces interactivas.", icon: PhAtom },
  { name: "Next.js", category: "Frontend", description: "Framework SSR y estático.", icon: PhAppWindow },
  { name: "Angular", category: "Frontend", description: "Aplicaciones escalables.", icon: PhAngularLogo },
  { name: "Vue.js", category: "Frontend", description: "Framework progresivo.", icon: PhFileVue },
  { name: "Tailwind CSS", category: "Frontend", description: "Estilizado moderno.", icon: PhPaintBrushBroad },
  { name: "React Native", category: "Mobile", description: "Apps nativas iOS/Android.", icon: PhDeviceMobile },
  { name: "Figma", category: "Design", description: "Prototipado y sistemas de diseño.", icon: PhFigmaLogo },
  { name: "AI Integration", category: "Backend & AI", description: "OpenAI API", icon: PhMagicWand },
  { name: "Python & SQL", category: "Backend & AI", description: "Lógica y manejo de datos.", icon: PhCode },
  { name: "WordPress", category: "Tools", description: "Gestión de contenidos.", icon: PhGlobeSimple },
  { name: "GitHub", category: "Tools", description: "Control de versiones Git.", icon: PhGithubLogo }
]
