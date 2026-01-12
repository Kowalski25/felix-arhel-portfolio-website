import { ActionType, NodePlopAPI } from "plop";
import { barrelFile } from "../common";

const ROOT_FOLDER = "src/features";
const TEMPLATES_FOLDER = ".plop/feature/templates";

export function setupFeaturePlop(plop: NodePlopAPI) {
	plop.setGenerator("feature", {
		description: "scaffold a feature module",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "Feature Name",
			},
			{
				type: "confirm",
				name: "hasApi",
				message: "Has /api ?",
			},
			{
				type: "confirm",
				name: "hasComponents",
				message: "Has /components ?",
			},
			{
				type: "confirm",
				name: "hasHooks",
				message: "Has /hooks ?",
			},
			{
				type: "confirm",
				name: "hasTypes",
				message: "Has /types ?",
			},
		],
		actions: function (data) {
			const actions: ActionType[] = [
				// Create the feature barrel file
				{
					type: "add",
					path: `${ROOT_FOLDER}/{{kebabCase name}}/index.ts`,
					templateFile: `${TEMPLATES_FOLDER}/barrel-template.hbs`,
				},
			];
    // Create root barrel file & new export
			actions.push(
				...barrelFile(
					`${ROOT_FOLDER}/index.ts`,
					'export * from "./{{kebabCase name}}";',
				),
			);
    // Create /api subdirectory if needed
    if (data?.hasApi) {
      actions.push(
       ...barrelFile(
					`${ROOT_FOLDER}/{{kebabCase name}}/api/index.ts`,
       )
      )
      actions.push(
       ...barrelFile(
					`${ROOT_FOLDER}/{{kebabCase name}}/index.ts`,
       'export * from "./api";'
       )
      )
    }
    // Create /components subdirectory if needed
    if (data?.hasComponents) {
      actions.push(
       ...barrelFile(
					`${ROOT_FOLDER}/{{kebabCase name}}/components/index.ts`,
       )
      )
      actions.push(
       ...barrelFile(
					`${ROOT_FOLDER}/{{kebabCase name}}/index.ts`,
       'export * from "./components";'
       )
      )
    }
    // Create /hooks subdirectory if needed
    if (data?.hasHooks) {
      actions.push(
       ...barrelFile(
					`${ROOT_FOLDER}/{{kebabCase name}}/hooks/index.ts`,
       )
      )
      actions.push(
       ...barrelFile(
					`${ROOT_FOLDER}/{{kebabCase name}}/index.ts`,
       'export * from "./hooks";'
       )
      )
    }
    // Create /types subdirectory if needed
    if (data?.hasTypes) {
      actions.push(
       ...barrelFile(
					`${ROOT_FOLDER}/{{kebabCase name}}/types/index.ts`,
       )
      )
      actions.push(
       ...barrelFile(
					`${ROOT_FOLDER}/{{kebabCase name}}/index.ts`,
       'export * from "./types";'
       )
      )
    }
			return actions;
		},
	});
}
