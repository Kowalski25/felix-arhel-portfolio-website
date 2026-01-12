import type { NodePlopAPI } from 'plop'
import { setupComponentPlop, setupFeaturePlop } from './.plop'

export default async function (plop: NodePlopAPI) {
  setupComponentPlop(plop);
  setupFeaturePlop(plop);
}

