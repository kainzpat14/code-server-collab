import { CollabPlugin } from "./collabPlugin";

let collabPlugin = new CollabPlugin();
export let plugin = {
    ...collabPlugin,
    init: collabPlugin.init.bind(collabPlugin),
    router: collabPlugin.router.bind(collabPlugin),
    wsRouter : collabPlugin.wsRouter.bind(collabPlugin),
}