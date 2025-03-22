import { rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await rm("node_modules", { recursive: true, force: true });
