/*
 * Definitions for litegraph.js
 * Project: litegraph.js
 * Definitions by: NateScarlet <https://github.com/NateScarlet>
 * https://github.com/NateScarlet/litegraph.js/blob/master/src/litegraph.js
 * ComfyUI\web\lib\litegraph.core.js - Check for settings
 * ComfyUI\web\extensions\logging.js.example
 * ComfyUI\custom_nodes\rgthree-comfy\src_web\typings\litegraph.d.ts
 *
 */
import { app } from "../../scripts/app.js";

import { extension } from './nodes/anyBus_v3/extension.js'

const name_version = "anyBus_v3";
const MaraScottAnyBusNode_v3Extension = new extension(name_version)
app.registerExtension(MaraScottAnyBusNode_v3Extension);