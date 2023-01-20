import FileUtils from "https://deno.land/x/justaos_utils@1.3.0/file-utils/mod.ts";
import * as path from "https://deno.land/std@0.170.0/path/mod.ts";
import { expandGlobSync } from "https://deno.land/std@0.170.0/fs/mod.ts";
import { Command } from "https://deno.land/x/cliffy@v0.24.2/command/command.ts";
import { wait } from "https://deno.land/x/wait@0.1.12/mod.ts";
import { fromStreamReader } from "https://deno.land/std@v0.60.0/io/streams.ts";

export { Command, expandGlobSync, FileUtils, fromStreamReader, path, wait };