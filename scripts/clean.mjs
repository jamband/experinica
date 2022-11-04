import { rmSync } from "fs";

rmSync("dist", { recursive: true, force: true });
rmSync("node_modules", { recursive: true, force: true });
