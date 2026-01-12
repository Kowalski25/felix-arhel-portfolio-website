import { ActionType } from "plop";

export function barrelFile(path: string, ...appendLines: string[]): ActionType[] {
  const actions: ActionType[] = [];
  actions.push({
   type: "add",
   path,
   skipIfExists: true,
  })
  if (appendLines.length > 0) {
   appendLines.forEach(appendLine => {
    actions.push({
      type: "append",
      path,
      template: appendLine,
    })
   });
  }
  return actions;
}