import { NodePlopAPI } from "plop";
import { barrelFile } from "../common";

const ROOT_FOLDER = "src/components";
const TEMPLATES_FOLDER = ".plop/component/templates";

export function setupComponentPlop(plop: NodePlopAPI) {
  plop.setGenerator("component", {
   description: "scaffold a reusable component",
   prompts: [
    {
      type: "input",
      name: "name",
      message: "Component Name",
    },
   ],
   actions: [
    // Create the blank component file
    {
      type: "add",
      path: `${ROOT_FOLDER}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
      templateFile: `${TEMPLATES_FOLDER}/component-template.hbs`,
    },
    // Create a blank test file
    {
      type: "add",
      path: `${ROOT_FOLDER}/{{pascalCase name}}/{{pascalCase name}}.test.tsx`,
      templateFile: `${TEMPLATES_FOLDER}/test-template.hbs`,
    },
    // Create a blank stylesheet file
    {
      type: "add",
      path: `${ROOT_FOLDER}/{{pascalCase name}}/{{pascalCase name}}.module.css`,
      templateFile: `${TEMPLATES_FOLDER}/style-template.hbs`,
    },
    // Create the component barrel file
    {
      type: "add",
      path: `${ROOT_FOLDER}/{{pascalCase name}}/index.ts`,
      templateFile: `${TEMPLATES_FOLDER}/barrel-template.hbs`,
    },
    ...barrelFile(`${ROOT_FOLDER}/index.ts`, "export * from \"./{{pascalCase name}}\";")
   ],
  });
}