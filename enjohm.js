var $Module$$;
$Module$$ ||= typeof Module != 'undefined' ? Module : {};
var $ENVIRONMENT_IS_WEB$$ = !!globalThis.window, $ENVIRONMENT_IS_WORKER$$ = !!globalThis.WorkerGlobalScope, $ENVIRONMENT_IS_NODE$$ = globalThis.process?.versions?.node && globalThis.process?.type != "renderer";
$Module$$.expectedDataFileDownloads || ($Module$$.expectedDataFileDownloads = 0);
$Module$$.expectedDataFileDownloads++;
(() => {
  var $isWasmWorker$$ = typeof ENVIRONMENT_IS_WASM_WORKER != "undefined" && ENVIRONMENT_IS_WASM_WORKER;
  if (!(typeof ENVIRONMENT_IS_PTHREAD != "undefined" && ENVIRONMENT_IS_PTHREAD || $isWasmWorker$$)) {
    var $isNode$$ = globalThis.process && globalThis.process.versions && globalThis.process.versions.node && globalThis.process.type != "renderer";
    (async function($metadata$$) {
      async function $fetchRemotePackage$$($packageData_packageName$$, $packageSize_total$$) {
        if ($isNode$$) {
          var $chunks_contents$jscomp$5$$ = require("fs").readFileSync($packageData_packageName$$);
          return (new Uint8Array($chunks_contents$jscomp$5$$)).buffer;
        }
        $Module$$.dataFileDownloads || ($Module$$.dataFileDownloads = {});
        try {
          var $reader_response$jscomp$2$$ = await fetch($packageData_packageName$$);
        } catch ($e$jscomp$7$$) {
          throw Error(`Network Error: ${$packageData_packageName$$}`, {e:$e$jscomp$7$$});
        }
        if (!$reader_response$jscomp$2$$.ok) {
          throw Error(`${$reader_response$jscomp$2$$.status}: ${$reader_response$jscomp$2$$.url}`);
        }
        $chunks_contents$jscomp$5$$ = [];
        $packageSize_total$$ = Number($reader_response$jscomp$2$$.headers.get("Content-Length") || $packageSize_total$$);
        var $loaded$$ = 0;
        $Module$$.setStatus && $Module$$.setStatus("Downloading data...");
        for ($reader_response$jscomp$2$$ = $reader_response$jscomp$2$$.body.getReader();;) {
          var $done_totalLoaded$$;
          ({done:$done_totalLoaded$$, value:$totalSize_value$jscomp$192$$} = await $reader_response$jscomp$2$$.read());
          if ($done_totalLoaded$$) {
            break;
          }
          $chunks_contents$jscomp$5$$.push($totalSize_value$jscomp$192$$);
          $loaded$$ += $totalSize_value$jscomp$192$$.length;
          $Module$$.dataFileDownloads[$packageData_packageName$$] = {loaded:$loaded$$, total:$packageSize_total$$};
          var $totalSize_value$jscomp$192$$ = $done_totalLoaded$$ = 0;
          for (var $download_offset$jscomp$67$$ of Object.values($Module$$.dataFileDownloads)) {
            $done_totalLoaded$$ += $download_offset$jscomp$67$$.loaded, $totalSize_value$jscomp$192$$ += $download_offset$jscomp$67$$.total;
          }
          $Module$$.setStatus && $Module$$.setStatus(`Downloading data... (${$done_totalLoaded$$}/${$totalSize_value$jscomp$192$$})`);
        }
        $packageData_packageName$$ = new Uint8Array($chunks_contents$jscomp$5$$.map($c$$ => $c$$.length).reduce(($a$jscomp$1$$, $b$jscomp$1$$) => $a$jscomp$1$$ + $b$jscomp$1$$, 0));
        $download_offset$jscomp$67$$ = 0;
        for (let $chunk$jscomp$16$$ of $chunks_contents$jscomp$5$$) {
          $packageData_packageName$$.set($chunk$jscomp$16$$, $download_offset$jscomp$67$$), $download_offset$jscomp$67$$ += $chunk$jscomp$16$$.length;
        }
        return $packageData_packageName$$.buffer;
      }
      async function $runWithFS$$($Module$jscomp$1$$) {
        $Module$jscomp$1$$.FS_createPath("/", "data", !0, !0);
        $Module$jscomp$1$$.FS_createPath("/data", "NEWEST", !0, !0);
        $Module$jscomp$1$$.FS_createPath("/data/NEWEST", "images", !0, !0);
        $Module$jscomp$1$$.FS_createPath("/data", "SHADER_TEMP", !0, !0);
        $Module$jscomp$1$$.FS_createPath("/data", "fonts", !0, !0);
        $Module$jscomp$1$$.FS_createPath("/data", "images", !0, !0);
        $Module$jscomp$1$$.FS_createPath("/data", "new_sprites", !0, !0);
        $Module$jscomp$1$$.FS_createPath("/data", "scenes", !0, !0);
        $Module$jscomp$1$$.addRunDependency("datafile_./web_build/enjohm.data");
        $Module$jscomp$1$$.preloadResults || ($Module$jscomp$1$$.preloadResults = {});
        $Module$jscomp$1$$.preloadResults["./web_build/enjohm.data"] = {$fromCache$:!1};
        $fetched$$ ||= await $fetchPromise$$;
        await async function($arrayBuffer_byteArray$$) {
          if (!$arrayBuffer_byteArray$$) {
            throw Error("Loading data file failed.");
          }
          if ($arrayBuffer_byteArray$$.constructor.name !== ArrayBuffer.name) {
            throw Error("bad input to processPackageData " + $arrayBuffer_byteArray$$.constructor.name);
          }
          $arrayBuffer_byteArray$$ = new Uint8Array($arrayBuffer_byteArray$$);
          for (var $file$jscomp$1$$ of $metadata$$.files) {
            $Module$jscomp$1$$.FS_createDataFile($file$jscomp$1$$.filename, null, $arrayBuffer_byteArray$$.subarray($file$jscomp$1$$.start, $file$jscomp$1$$.end), !0, !0, !0);
          }
          $Module$jscomp$1$$.removeRunDependency("datafile_./web_build/enjohm.data");
        }($fetched$$);
      }
      typeof window === "object" ? window.encodeURIComponent(window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + "/") : typeof process === "undefined" && typeof location !== "undefined" && encodeURIComponent(location.pathname.substring(0, location.pathname.lastIndexOf("/")) + "/");
      var $REMOTE_PACKAGE_NAME$$ = $Module$$.locateFile ? $Module$$.locateFile("enjohm.data", "") : "enjohm.data", $REMOTE_PACKAGE_SIZE$$ = $metadata$$.remote_package_size, $fetchPromise$$, $fetched$$ = $Module$$.getPreloadedPackage && $Module$$.getPreloadedPackage($REMOTE_PACKAGE_NAME$$, $REMOTE_PACKAGE_SIZE$$);
      $fetched$$ || ($fetchPromise$$ = $fetchRemotePackage$$($REMOTE_PACKAGE_NAME$$, $REMOTE_PACKAGE_SIZE$$));
      $Module$$.FS_createPath ? $runWithFS$$($Module$$) : ($Module$$.preRun || ($Module$$.preRun = []), $Module$$.preRun.push($runWithFS$$));
    })({files:[{filename:"/data/DRIVE.zip", start:0, end:32217552}, {filename:"/data/NEWEST/biblically accurate pixel art.aseprite", start:32217552, end:32218478}, {filename:"/data/NEWEST/bottle_break.aseprite", start:32218478, end:32219095}, {filename:"/data/NEWEST/bushi_attempt_01.aseprite", start:32219095, end:32219547}, {filename:"/data/NEWEST/bushi_brainstorm_and_iconic_sprites.aseprite", start:32219547, end:32230388}, {filename:"/data/NEWEST/bushi_running.aseprite", start:32230388, end:32232153}, 
    {filename:"/data/NEWEST/enemy.aseprite", start:32232153, end:32233746}, {filename:"/data/NEWEST/fire_wizard_animation_OTHER.aseprite", start:32233746, end:32244320}, {filename:"/data/NEWEST/fire_wizard_animations.aseprite", start:32244320, end:32250939}, {filename:"/data/NEWEST/fire_wizard_animations.png", start:32250939, end:32254089}, {filename:"/data/NEWEST/fire_wizard_animations_trimmed.png", start:32254089, end:32256248}, {filename:"/data/NEWEST/images/idle_14.png", start:32256248, end:32257644}, 
    {filename:"/data/NEWEST/images/jump_7.png", start:32257644, end:32258972}, {filename:"/data/NEWEST/images/run_6.png", start:32258972, end:32259997}, {filename:"/data/NEWEST/mouse_attempt_01.aseprite", start:32259997, end:32260569}, {filename:"/data/NEWEST/tile_set_0.1.aseprite", start:32260569, end:32271477}, {filename:"/data/SHADER_TEMP/background_frag.c", start:32271477, end:32304537}, {filename:"/data/SHADER_TEMP/background_vert.c", start:32304537, end:32335101}, {filename:"/data/SHADER_TEMP/postprocess_frag.c", 
    start:32335101, end:32451982}, {filename:"/data/SHADER_TEMP/postprocess_vert.c", start:32451982, end:32506619}, {filename:"/data/SHADER_TEMP/sprite_frag.c", start:32506619, end:32549047}, {filename:"/data/SHADER_TEMP/sprite_vert.c", start:32549047, end:32606811}, {filename:"/data/anim.png", start:32606811, end:32608970}, {filename:"/data/boy.png", start:32608970, end:32609417}, {filename:"/data/bushi.png", start:32609417, end:32609742}, {filename:"/data/fire_wizard_animations.png", start:32609742, 
    end:32612892}, {filename:"/data/fonts/Monaspace.ttf", start:32612892, end:32905192}, {filename:"/data/idle.png", start:32905192, end:32905596}, {filename:"/data/images/idle_14.png", start:32905596, end:32906992}, {filename:"/data/images/jump_7.png", start:32906992, end:32908320}, {filename:"/data/images/run_6.png", start:32908320, end:32909345}, {filename:"/data/lean.png", start:32909345, end:32909790}, {filename:"/data/leant.png", start:32909790, end:32910238}, {filename:"/data/man.png", start:32910238, 
    end:32910625}, {filename:"/data/mouse.png", start:32910625, end:32911126}, {filename:"/data/new_fella.png", start:32911126, end:32911568}, {filename:"/data/new_fella2.png", start:32911568, end:32911978}, {filename:"/data/new_fella3.png", start:32911978, end:32912400}, {filename:"/data/new_fella4.png", start:32912400, end:32912843}, {filename:"/data/new_fella5.png", start:32912843, end:32913268}, {filename:"/data/new_sprites/bushi_attempt_01.aseprite", start:32913268, end:32913720}, {filename:"/data/new_sprites/bushi_brainstorm_and_iconic_sprites.aseprite", 
    start:32913720, end:32924561}, {filename:"/data/new_sprites/bushi_running.aseprite", start:32924561, end:32926326}, {filename:"/data/new_sprites/mouse_attempt_01.aseprite", start:32926326, end:32926898}, {filename:"/data/newman.png", start:32926898, end:32927223}, {filename:"/data/scenes/bistro_scene.johmt", start:32927223, end:32927847}, {filename:"/data/scenes/first_level.johmt", start:32927847, end:32928444}, {filename:"/data/scenes/phys_lots.johmt", start:32928444, end:33219221}, {filename:"/data/scenes/phys_tower.johmt", 
    start:33219221, end:33227479}, {filename:"/data/scenes/previously_loaded_assets.johma", start:33227479, end:33227479}, {filename:"/data/scenes/skin.johmt", start:33227479, end:33228140}, {filename:"/data/scenes/test.johmt", start:33228140, end:33229975}, {filename:"/data/test.png", start:33229975, end:33230379}, {filename:"/data/tile.png", start:33230379, end:33230547}], remote_package_size:33230547});
  }
})();
var $programArgs$$ = [], $thisProgram$$ = "./this.program", $quit_$$ = ($status$jscomp$1$$, $toThrow$$) => {
  throw $toThrow$$;
}, $_scriptName$$ = globalThis.document?.currentScript?.src;
typeof __filename != "undefined" ? $_scriptName$$ = __filename : $ENVIRONMENT_IS_WORKER$$ && ($_scriptName$$ = self.location.href);
var $scriptDirectory$$ = "", $readAsync$$, $readBinary$$;
if ($ENVIRONMENT_IS_NODE$$) {
  var fs = require("node:fs");
  $scriptDirectory$$ = __dirname + "/";
  $readBinary$$ = $filename$jscomp$15$$ => {
    $filename$jscomp$15$$ = $isFileURI$$($filename$jscomp$15$$) ? new URL($filename$jscomp$15$$) : $filename$jscomp$15$$;
    return fs.readFileSync($filename$jscomp$15$$);
  };
  $readAsync$$ = async $filename$jscomp$16$$ => {
    $filename$jscomp$16$$ = $isFileURI$$($filename$jscomp$16$$) ? new URL($filename$jscomp$16$$) : $filename$jscomp$16$$;
    return fs.readFileSync($filename$jscomp$16$$, void 0);
  };
  process.argv.length > 1 && ($thisProgram$$ = process.argv[1].replace(/\\/g, "/"));
  $programArgs$$ = process.argv.slice(2);
  typeof module != "undefined" && (module.exports = $Module$$);
  $quit_$$ = ($status$jscomp$2$$, $toThrow$jscomp$1$$) => {
    process.exitCode = $status$jscomp$2$$;
    throw $toThrow$jscomp$1$$;
  };
} else if ($ENVIRONMENT_IS_WEB$$ || $ENVIRONMENT_IS_WORKER$$) {
  try {
    $scriptDirectory$$ = (new URL(".", $_scriptName$$)).href;
  } catch {
  }
  $ENVIRONMENT_IS_WORKER$$ && ($readBinary$$ = $url$jscomp$28$$ => {
    var $xhr$$ = new XMLHttpRequest();
    $xhr$$.open("GET", $url$jscomp$28$$, !1);
    $xhr$$.responseType = "arraybuffer";
    $xhr$$.send(null);
    return new Uint8Array($xhr$$.response);
  });
  $readAsync$$ = async $url$jscomp$29$$ => {
    if ($isFileURI$$($url$jscomp$29$$)) {
      return new Promise(($resolve$$, $reject$$) => {
        var $xhr$jscomp$1$$ = new XMLHttpRequest();
        $xhr$jscomp$1$$.open("GET", $url$jscomp$29$$, !0);
        $xhr$jscomp$1$$.responseType = "arraybuffer";
        $xhr$jscomp$1$$.onload = () => {
          $xhr$jscomp$1$$.status == 200 || $xhr$jscomp$1$$.status == 0 && $xhr$jscomp$1$$.response ? $resolve$$($xhr$jscomp$1$$.response) : $reject$$($xhr$jscomp$1$$.status);
        };
        $xhr$jscomp$1$$.onerror = $reject$$;
        $xhr$jscomp$1$$.send(null);
      });
    }
    var $response$jscomp$3$$ = await fetch($url$jscomp$29$$, {credentials:"same-origin"});
    if ($response$jscomp$3$$.ok) {
      return $response$jscomp$3$$.arrayBuffer();
    }
    throw Error($response$jscomp$3$$.status + " : " + $response$jscomp$3$$.url);
  };
}
var $out$$ = console.log.bind(console), $err$$ = console.error.bind(console), $ABORT$$ = !1, $EXITSTATUS$$, $isFileURI$$ = $filename$jscomp$17$$ => $filename$jscomp$17$$.startsWith("file://");
function $updateMemoryViews$$() {
  if (!$HEAP8$$?.buffer?.resizable) {
    var $b$jscomp$2$$ = $wasmMemory$$.buffer;
    $HEAP8$$ = new Int8Array($b$jscomp$2$$);
    $HEAP16$$ = new Int16Array($b$jscomp$2$$);
    $HEAPU8$$ = new Uint8Array($b$jscomp$2$$);
    $HEAPU16$$ = new Uint16Array($b$jscomp$2$$);
    $HEAP32$$ = new Int32Array($b$jscomp$2$$);
    $HEAPU32$$ = new Uint32Array($b$jscomp$2$$);
    $HEAPF32$$ = new Float32Array($b$jscomp$2$$);
    $HEAPF64$$ = new Float64Array($b$jscomp$2$$);
    $HEAP64$$ = new BigInt64Array($b$jscomp$2$$);
    new BigUint64Array($b$jscomp$2$$);
  }
}
function $preRun$$() {
  var $callbacks$jscomp$inline_25_preRun$jscomp$1$$ = $Module$$.preRun;
  $callbacks$jscomp$inline_25_preRun$jscomp$1$$ && (typeof $callbacks$jscomp$inline_25_preRun$jscomp$1$$ == "function" && ($callbacks$jscomp$inline_25_preRun$jscomp$1$$ = [$callbacks$jscomp$inline_25_preRun$jscomp$1$$]), $onPreRuns$$.push(...$callbacks$jscomp$inline_25_preRun$jscomp$1$$));
  for ($callbacks$jscomp$inline_25_preRun$jscomp$1$$ = $onPreRuns$$; $callbacks$jscomp$inline_25_preRun$jscomp$1$$.length > 0;) {
    $callbacks$jscomp$inline_25_preRun$jscomp$1$$.shift()($Module$$);
  }
}
function $postRun$$() {
  var $callbacks$jscomp$inline_27_postRun$jscomp$1$$ = $Module$$.postRun;
  $callbacks$jscomp$inline_27_postRun$jscomp$1$$ && (typeof $callbacks$jscomp$inline_27_postRun$jscomp$1$$ == "function" && ($callbacks$jscomp$inline_27_postRun$jscomp$1$$ = [$callbacks$jscomp$inline_27_postRun$jscomp$1$$]), $onPostRuns$$.push(...$callbacks$jscomp$inline_27_postRun$jscomp$1$$));
  for ($callbacks$jscomp$inline_27_postRun$jscomp$1$$ = $onPostRuns$$; $callbacks$jscomp$inline_27_postRun$jscomp$1$$.length > 0;) {
    $callbacks$jscomp$inline_27_postRun$jscomp$1$$.shift()($Module$$);
  }
}
function $abort$$($what$$) {
  $Module$$.onAbort?.($what$$);
  $what$$ = `Aborted(${$what$$})`;
  $err$$($what$$);
  $ABORT$$ = !0;
  throw new WebAssembly.RuntimeError($what$$ + ". Build with -sASSERTIONS for more info.");
}
var $wasmBinaryFile$$;
async function $getWasmBinary$$($JSCompiler_inline_result$jscomp$0_binaryFile$$) {
  try {
    var $response$jscomp$4$$ = await $readAsync$$($JSCompiler_inline_result$jscomp$0_binaryFile$$);
    return new Uint8Array($response$jscomp$4$$);
  } catch {
  }
  if ($readBinary$$) {
    $JSCompiler_inline_result$jscomp$0_binaryFile$$ = $readBinary$$($JSCompiler_inline_result$jscomp$0_binaryFile$$);
  } else {
    throw "both async and sync fetching of the wasm failed";
  }
  return $JSCompiler_inline_result$jscomp$0_binaryFile$$;
}
async function $instantiateArrayBuffer$$($binaryFile$jscomp$1$$, $imports$$) {
  try {
    var $binary$jscomp$1$$ = await $getWasmBinary$$($binaryFile$jscomp$1$$);
    return await WebAssembly.instantiate($binary$jscomp$1$$, $imports$$);
  } catch ($reason$jscomp$9$$) {
    $err$$(`failed to asynchronously prepare wasm: ${$reason$jscomp$9$$}`), $abort$$($reason$jscomp$9$$);
  }
}
async function $instantiateAsync$$($imports$jscomp$1$$) {
  var $binaryFile$jscomp$2$$ = $wasmBinaryFile$$;
  if (!$isFileURI$$($binaryFile$jscomp$2$$) && !$ENVIRONMENT_IS_NODE$$) {
    try {
      var $response$jscomp$5$$ = fetch($binaryFile$jscomp$2$$, {credentials:"same-origin"});
      return await WebAssembly.instantiateStreaming($response$jscomp$5$$, $imports$jscomp$1$$);
    } catch ($reason$jscomp$10$$) {
      $err$$(`wasm streaming compile failed: ${$reason$jscomp$10$$}`), $err$$("falling back to ArrayBuffer instantiation");
    }
  }
  return $instantiateArrayBuffer$$($binaryFile$jscomp$2$$, $imports$jscomp$1$$);
}
class $ExitStatus$$ {
  name = "ExitStatus";
  constructor($status$jscomp$3$$) {
    this.message = `Program terminated with exit(${$status$jscomp$3$$})`;
    this.status = $status$jscomp$3$$;
  }
}
var $HEAP16$$, $HEAP32$$, $HEAP64$$, $HEAP8$$, $HEAPF32$$, $HEAPF64$$, $HEAPU16$$, $HEAPU32$$, $HEAPU8$$, $onPostRuns$$ = [], $onPreRuns$$ = [], $noExitRuntime$$ = !0, $UTF8Decoder$$ = globalThis.TextDecoder && new TextDecoder(), $UTF8ArrayToString$$ = ($heapOrArray$jscomp$1$$, $idx$jscomp$1$$ = 0, $maxBytesToRead$jscomp$1_maxIdx$jscomp$inline_35_str$jscomp$9$$) => {
  var $endPtr_idx$jscomp$inline_32$$ = $idx$jscomp$1$$;
  for ($maxBytesToRead$jscomp$1_maxIdx$jscomp$inline_35_str$jscomp$9$$ = $endPtr_idx$jscomp$inline_32$$ + $maxBytesToRead$jscomp$1_maxIdx$jscomp$inline_35_str$jscomp$9$$; $heapOrArray$jscomp$1$$[$endPtr_idx$jscomp$inline_32$$] && !($endPtr_idx$jscomp$inline_32$$ >= $maxBytesToRead$jscomp$1_maxIdx$jscomp$inline_35_str$jscomp$9$$);) {
    ++$endPtr_idx$jscomp$inline_32$$;
  }
  if ($endPtr_idx$jscomp$inline_32$$ - $idx$jscomp$1$$ > 16 && $heapOrArray$jscomp$1$$.buffer && $UTF8Decoder$$) {
    return $UTF8Decoder$$.decode($heapOrArray$jscomp$1$$.subarray($idx$jscomp$1$$, $endPtr_idx$jscomp$inline_32$$));
  }
  for ($maxBytesToRead$jscomp$1_maxIdx$jscomp$inline_35_str$jscomp$9$$ = ""; $idx$jscomp$1$$ < $endPtr_idx$jscomp$inline_32$$;) {
    var $ch_u0$$ = $heapOrArray$jscomp$1$$[$idx$jscomp$1$$++];
    if ($ch_u0$$ & 128) {
      var $u1$$ = $heapOrArray$jscomp$1$$[$idx$jscomp$1$$++] & 63;
      if (($ch_u0$$ & 224) == 192) {
        $maxBytesToRead$jscomp$1_maxIdx$jscomp$inline_35_str$jscomp$9$$ += String.fromCharCode(($ch_u0$$ & 31) << 6 | $u1$$);
      } else {
        var $u2$$ = $heapOrArray$jscomp$1$$[$idx$jscomp$1$$++] & 63;
        $ch_u0$$ = ($ch_u0$$ & 240) == 224 ? ($ch_u0$$ & 15) << 12 | $u1$$ << 6 | $u2$$ : ($ch_u0$$ & 7) << 18 | $u1$$ << 12 | $u2$$ << 6 | $heapOrArray$jscomp$1$$[$idx$jscomp$1$$++] & 63;
        $ch_u0$$ < 65536 ? $maxBytesToRead$jscomp$1_maxIdx$jscomp$inline_35_str$jscomp$9$$ += String.fromCharCode($ch_u0$$) : ($ch_u0$$ -= 65536, $maxBytesToRead$jscomp$1_maxIdx$jscomp$inline_35_str$jscomp$9$$ += String.fromCharCode(55296 | $ch_u0$$ >> 10, 56320 | $ch_u0$$ & 1023));
      }
    } else {
      $maxBytesToRead$jscomp$1_maxIdx$jscomp$inline_35_str$jscomp$9$$ += String.fromCharCode($ch_u0$$);
    }
  }
  return $maxBytesToRead$jscomp$1_maxIdx$jscomp$inline_35_str$jscomp$9$$;
}, $syscallGetVarargI$$ = () => {
  var $ret$jscomp$2$$ = $HEAP32$$[+$SYSCALLS$varargs$$ >> 2];
  $SYSCALLS$varargs$$ += 4;
  return $ret$jscomp$2$$;
}, $PATH$normalizeArray$$ = ($parts$$, $allowAboveRoot$$) => {
  for (var $up$$ = 0, $i$jscomp$4$$ = $parts$$.length - 1; $i$jscomp$4$$ >= 0; $i$jscomp$4$$--) {
    var $last$$ = $parts$$[$i$jscomp$4$$];
    $last$$ === "." ? $parts$$.splice($i$jscomp$4$$, 1) : $last$$ === ".." ? ($parts$$.splice($i$jscomp$4$$, 1), $up$$++) : $up$$ && ($parts$$.splice($i$jscomp$4$$, 1), $up$$--);
  }
  if ($allowAboveRoot$$) {
    for (; $up$$; $up$$--) {
      $parts$$.unshift("..");
    }
  }
  return $parts$$;
}, $PATH$normalize$$ = $path$jscomp$41$$ => {
  var $isAbsolute$$ = $path$jscomp$41$$.charAt(0) === "/", $trailingSlash$$ = $path$jscomp$41$$.slice(-1) === "/";
  ($path$jscomp$41$$ = $PATH$normalizeArray$$($path$jscomp$41$$.split("/").filter($p$jscomp$4$$ => !!$p$jscomp$4$$), !$isAbsolute$$).join("/")) || $isAbsolute$$ || ($path$jscomp$41$$ = ".");
  $path$jscomp$41$$ && $trailingSlash$$ && ($path$jscomp$41$$ += "/");
  return ($isAbsolute$$ ? "/" : "") + $path$jscomp$41$$;
}, $PATH$dirname$$ = $path$jscomp$42_root$jscomp$3$$ => {
  var $dir_result$jscomp$3$$ = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec($path$jscomp$42_root$jscomp$3$$).slice(1);
  $path$jscomp$42_root$jscomp$3$$ = $dir_result$jscomp$3$$[0];
  $dir_result$jscomp$3$$ = $dir_result$jscomp$3$$[1];
  if (!$path$jscomp$42_root$jscomp$3$$ && !$dir_result$jscomp$3$$) {
    return ".";
  }
  $dir_result$jscomp$3$$ &&= $dir_result$jscomp$3$$.slice(0, -1);
  return $path$jscomp$42_root$jscomp$3$$ + $dir_result$jscomp$3$$;
}, $initRandomFill$$ = () => {
  if ($ENVIRONMENT_IS_NODE$$) {
    var $nodeCrypto$$ = require("node:crypto");
    return $view$jscomp$6$$ => ($nodeCrypto$$.randomFillSync($view$jscomp$6$$), 0);
  }
  return $view$jscomp$7$$ => (crypto.getRandomValues($view$jscomp$7$$), 0);
}, $randomFill$$ = $view$jscomp$8$$ => ($randomFill$$ = $initRandomFill$$())($view$jscomp$8$$), $PATH_FS$resolve$$ = (...$args$jscomp$10$$) => {
  for (var $resolvedPath$$ = "", $path$jscomp$44_resolvedAbsolute$$ = !1, $i$jscomp$5$$ = $args$jscomp$10$$.length - 1; $i$jscomp$5$$ >= -1 && !$path$jscomp$44_resolvedAbsolute$$; $i$jscomp$5$$--) {
    $path$jscomp$44_resolvedAbsolute$$ = $i$jscomp$5$$ >= 0 ? $args$jscomp$10$$[$i$jscomp$5$$] : "/";
    if (typeof $path$jscomp$44_resolvedAbsolute$$ != "string") {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!$path$jscomp$44_resolvedAbsolute$$) {
      return "";
    }
    $resolvedPath$$ = $path$jscomp$44_resolvedAbsolute$$ + "/" + $resolvedPath$$;
    $path$jscomp$44_resolvedAbsolute$$ = $path$jscomp$44_resolvedAbsolute$$.charAt(0) === "/";
  }
  $resolvedPath$$ = $PATH$normalizeArray$$($resolvedPath$$.split("/").filter($p$jscomp$5$$ => !!$p$jscomp$5$$), !$path$jscomp$44_resolvedAbsolute$$).join("/");
  return ($path$jscomp$44_resolvedAbsolute$$ ? "/" : "") + $resolvedPath$$ || ".";
}, $FS_stdin_getChar_buffer$$ = [], $lengthBytesUTF8$$ = $str$jscomp$10$$ => {
  for (var $len$jscomp$3$$ = 0, $i$jscomp$7$$ = 0; $i$jscomp$7$$ < $str$jscomp$10$$.length; ++$i$jscomp$7$$) {
    var $c$jscomp$1$$ = $str$jscomp$10$$.charCodeAt($i$jscomp$7$$);
    $c$jscomp$1$$ <= 127 ? $len$jscomp$3$$++ : $c$jscomp$1$$ <= 2047 ? $len$jscomp$3$$ += 2 : $c$jscomp$1$$ >= 55296 && $c$jscomp$1$$ <= 57343 ? ($len$jscomp$3$$ += 4, ++$i$jscomp$7$$) : $len$jscomp$3$$ += 3;
  }
  return $len$jscomp$3$$;
}, $stringToUTF8Array$$ = ($str$jscomp$11$$, $heap$$, $outIdx$$, $endIdx_maxBytesToWrite$$) => {
  if (!($endIdx_maxBytesToWrite$$ > 0)) {
    return 0;
  }
  var $startIdx$$ = $outIdx$$;
  $endIdx_maxBytesToWrite$$ = $outIdx$$ + $endIdx_maxBytesToWrite$$ - 1;
  for (var $i$jscomp$8$$ = 0; $i$jscomp$8$$ < $str$jscomp$11$$.length; ++$i$jscomp$8$$) {
    var $u$$ = $str$jscomp$11$$.codePointAt($i$jscomp$8$$);
    if ($u$$ <= 127) {
      if ($outIdx$$ >= $endIdx_maxBytesToWrite$$) {
        break;
      }
      $heap$$[$outIdx$$++] = $u$$;
    } else if ($u$$ <= 2047) {
      if ($outIdx$$ + 1 >= $endIdx_maxBytesToWrite$$) {
        break;
      }
      $heap$$[$outIdx$$++] = 192 | $u$$ >> 6;
      $heap$$[$outIdx$$++] = 128 | $u$$ & 63;
    } else if ($u$$ <= 65535) {
      if ($outIdx$$ + 2 >= $endIdx_maxBytesToWrite$$) {
        break;
      }
      $heap$$[$outIdx$$++] = 224 | $u$$ >> 12;
      $heap$$[$outIdx$$++] = 128 | $u$$ >> 6 & 63;
      $heap$$[$outIdx$$++] = 128 | $u$$ & 63;
    } else {
      if ($outIdx$$ + 3 >= $endIdx_maxBytesToWrite$$) {
        break;
      }
      $heap$$[$outIdx$$++] = 240 | $u$$ >> 18;
      $heap$$[$outIdx$$++] = 128 | $u$$ >> 12 & 63;
      $heap$$[$outIdx$$++] = 128 | $u$$ >> 6 & 63;
      $heap$$[$outIdx$$++] = 128 | $u$$ & 63;
      $i$jscomp$8$$++;
    }
  }
  $heap$$[$outIdx$$] = 0;
  return $outIdx$$ - $startIdx$$;
}, $intArrayFromString$$ = $numBytesWritten_stringy$$ => {
  var $u8array$$ = Array($lengthBytesUTF8$$($numBytesWritten_stringy$$) + 1);
  $numBytesWritten_stringy$$ = $stringToUTF8Array$$($numBytesWritten_stringy$$, $u8array$$, 0, $u8array$$.length);
  $u8array$$.length = $numBytesWritten_stringy$$;
  return $u8array$$;
}, $TTY$ttys$$ = [];
function $TTY$register$$($dev$$, $ops$$) {
  $TTY$ttys$$[$dev$$] = {input:[], output:[], $ops$:$ops$$};
  $FS$registerDevice$$($dev$$, $TTY$stream_ops$$);
}
var $TTY$stream_ops$$ = {open($stream$jscomp$6$$) {
  var $tty$jscomp$1$$ = $TTY$ttys$$[$stream$jscomp$6$$.node.rdev];
  if (!$tty$jscomp$1$$) {
    throw new $FS$ErrnoError$$(43);
  }
  $stream$jscomp$6$$.tty = $tty$jscomp$1$$;
  $stream$jscomp$6$$.seekable = !1;
}, close($stream$jscomp$7$$) {
  $stream$jscomp$7$$.tty.$ops$.fsync($stream$jscomp$7$$.tty);
}, fsync($stream$jscomp$8$$) {
  $stream$jscomp$8$$.tty.$ops$.fsync($stream$jscomp$8$$.tty);
}, read($stream$jscomp$9$$, $buffer$jscomp$27$$, $offset$jscomp$68$$, $length$jscomp$29$$) {
  if (!$stream$jscomp$9$$.tty || !$stream$jscomp$9$$.tty.$ops$.$get_char$) {
    throw new $FS$ErrnoError$$(60);
  }
  for (var $bytesRead$jscomp$1$$ = 0, $i$jscomp$9$$ = 0; $i$jscomp$9$$ < $length$jscomp$29$$; $i$jscomp$9$$++) {
    try {
      var $result$jscomp$5$$ = $stream$jscomp$9$$.tty.$ops$.$get_char$($stream$jscomp$9$$.tty);
    } catch ($e$jscomp$10$$) {
      throw new $FS$ErrnoError$$(29);
    }
    if ($result$jscomp$5$$ === void 0 && $bytesRead$jscomp$1$$ === 0) {
      throw new $FS$ErrnoError$$(6);
    }
    if ($result$jscomp$5$$ === null || $result$jscomp$5$$ === void 0) {
      break;
    }
    $bytesRead$jscomp$1$$++;
    $buffer$jscomp$27$$[$offset$jscomp$68$$ + $i$jscomp$9$$] = $result$jscomp$5$$;
  }
  $bytesRead$jscomp$1$$ && ($stream$jscomp$9$$.node.atime = Date.now());
  return $bytesRead$jscomp$1$$;
}, write($stream$jscomp$10$$, $buffer$jscomp$28$$, $offset$jscomp$69$$, $length$jscomp$30$$) {
  if (!$stream$jscomp$10$$.tty || !$stream$jscomp$10$$.tty.$ops$.$put_char$) {
    throw new $FS$ErrnoError$$(60);
  }
  try {
    for (var $i$jscomp$10$$ = 0; $i$jscomp$10$$ < $length$jscomp$30$$; $i$jscomp$10$$++) {
      $stream$jscomp$10$$.tty.$ops$.$put_char$($stream$jscomp$10$$.tty, $buffer$jscomp$28$$[$offset$jscomp$69$$ + $i$jscomp$10$$]);
    }
  } catch ($e$jscomp$11$$) {
    throw new $FS$ErrnoError$$(29);
  }
  $length$jscomp$30$$ && ($stream$jscomp$10$$.node.mtime = $stream$jscomp$10$$.node.ctime = Date.now());
  return $i$jscomp$10$$;
}}, $TTY$default_tty_ops$$ = {$get_char$() {
  a: {
    if (!$FS_stdin_getChar_buffer$$.length) {
      var $JSCompiler_inline_result$jscomp$1_result$jscomp$inline_37$$ = null;
      if ($ENVIRONMENT_IS_NODE$$) {
        var $buf$jscomp$inline_38$$ = Buffer.alloc(256), $bytesRead$jscomp$inline_39$$ = 0, $fd$jscomp$inline_40$$ = process.stdin.fd;
        try {
          $bytesRead$jscomp$inline_39$$ = fs.readSync($fd$jscomp$inline_40$$, $buf$jscomp$inline_38$$, 0, 256);
        } catch ($e$jscomp$inline_41$$) {
          if ($e$jscomp$inline_41$$.toString().includes("EOF")) {
            $bytesRead$jscomp$inline_39$$ = 0;
          } else {
            throw $e$jscomp$inline_41$$;
          }
        }
        $bytesRead$jscomp$inline_39$$ > 0 && ($JSCompiler_inline_result$jscomp$1_result$jscomp$inline_37$$ = $buf$jscomp$inline_38$$.slice(0, $bytesRead$jscomp$inline_39$$).toString("utf-8"));
      } else {
        globalThis.window?.prompt && ($JSCompiler_inline_result$jscomp$1_result$jscomp$inline_37$$ = window.prompt("Input: "), $JSCompiler_inline_result$jscomp$1_result$jscomp$inline_37$$ !== null && ($JSCompiler_inline_result$jscomp$1_result$jscomp$inline_37$$ += "\n"));
      }
      if (!$JSCompiler_inline_result$jscomp$1_result$jscomp$inline_37$$) {
        $JSCompiler_inline_result$jscomp$1_result$jscomp$inline_37$$ = null;
        break a;
      }
      $FS_stdin_getChar_buffer$$ = $intArrayFromString$$($JSCompiler_inline_result$jscomp$1_result$jscomp$inline_37$$);
    }
    $JSCompiler_inline_result$jscomp$1_result$jscomp$inline_37$$ = $FS_stdin_getChar_buffer$$.shift();
  }
  return $JSCompiler_inline_result$jscomp$1_result$jscomp$inline_37$$;
}, $put_char$($tty$jscomp$3$$, $val$jscomp$1$$) {
  $val$jscomp$1$$ === null || $val$jscomp$1$$ === 10 ? ($out$$($UTF8ArrayToString$$($tty$jscomp$3$$.output)), $tty$jscomp$3$$.output = []) : $val$jscomp$1$$ != 0 && $tty$jscomp$3$$.output.push($val$jscomp$1$$);
}, fsync($tty$jscomp$4$$) {
  $tty$jscomp$4$$.output?.length > 0 && ($out$$($UTF8ArrayToString$$($tty$jscomp$4$$.output)), $tty$jscomp$4$$.output = []);
}, $ioctl_tcgets$() {
  return {$c_iflag$:25856, $c_oflag$:5, $c_cflag$:191, $c_lflag$:35387, $c_cc$:[3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]};
}, $ioctl_tcsets$() {
  return 0;
}, $ioctl_tiocgwinsz$() {
  return [24, 80];
}}, $TTY$default_tty1_ops$$ = {$put_char$($tty$jscomp$8$$, $val$jscomp$2$$) {
  $val$jscomp$2$$ === null || $val$jscomp$2$$ === 10 ? ($err$$($UTF8ArrayToString$$($tty$jscomp$8$$.output)), $tty$jscomp$8$$.output = []) : $val$jscomp$2$$ != 0 && $tty$jscomp$8$$.output.push($val$jscomp$2$$);
}, fsync($tty$jscomp$9$$) {
  $tty$jscomp$9$$.output?.length > 0 && ($err$$($UTF8ArrayToString$$($tty$jscomp$9$$.output)), $tty$jscomp$9$$.output = []);
}}, $mmapAlloc$$ = $size$jscomp$25$$ => {
  $size$jscomp$25$$ = Math.ceil($size$jscomp$25$$ / 65536) * 65536;
  var $ptr$jscomp$4$$ = $_emscripten_builtin_memalign$$(65536, $size$jscomp$25$$);
  $ptr$jscomp$4$$ && $HEAPU8$$.fill(0, $ptr$jscomp$4$$, $ptr$jscomp$4$$ + $size$jscomp$25$$);
  return $ptr$jscomp$4$$;
}, $MEMFS$$ = {$ops_table$:null, $mount$() {
  return $MEMFS$$.createNode(null, "/", 16895, 0);
}, createNode($parent$jscomp$4$$, $name$jscomp$83$$, $mode$jscomp$27_node$jscomp$8$$, $dev$jscomp$1$$) {
  if (($mode$jscomp$27_node$jscomp$8$$ & 61440) === 24576 || ($mode$jscomp$27_node$jscomp$8$$ & 61440) === 4096) {
    throw new $FS$ErrnoError$$(63);
  }
  $MEMFS$$.$ops_table$ || ($MEMFS$$.$ops_table$ = {dir:{node:{$getattr$:$MEMFS$$.$node_ops$.$getattr$, $setattr$:$MEMFS$$.$node_ops$.$setattr$, lookup:$MEMFS$$.$node_ops$.lookup, $mknod$:$MEMFS$$.$node_ops$.$mknod$, rename:$MEMFS$$.$node_ops$.rename, unlink:$MEMFS$$.$node_ops$.unlink, rmdir:$MEMFS$$.$node_ops$.rmdir, readdir:$MEMFS$$.$node_ops$.readdir, symlink:$MEMFS$$.$node_ops$.symlink}, stream:{$llseek$:$MEMFS$$.$stream_ops$.$llseek$}}, file:{node:{$getattr$:$MEMFS$$.$node_ops$.$getattr$, $setattr$:$MEMFS$$.$node_ops$.$setattr$}, 
  stream:{$llseek$:$MEMFS$$.$stream_ops$.$llseek$, read:$MEMFS$$.$stream_ops$.read, write:$MEMFS$$.$stream_ops$.write, $mmap$:$MEMFS$$.$stream_ops$.$mmap$, $msync$:$MEMFS$$.$stream_ops$.$msync$}}, link:{node:{$getattr$:$MEMFS$$.$node_ops$.$getattr$, $setattr$:$MEMFS$$.$node_ops$.$setattr$, readlink:$MEMFS$$.$node_ops$.readlink}, stream:{}}, $chrdev$:{node:{$getattr$:$MEMFS$$.$node_ops$.$getattr$, $setattr$:$MEMFS$$.$node_ops$.$setattr$}, stream:$FS$chrdev_stream_ops$$}});
  $mode$jscomp$27_node$jscomp$8$$ = $FS$createNode$$($parent$jscomp$4$$, $name$jscomp$83$$, $mode$jscomp$27_node$jscomp$8$$, $dev$jscomp$1$$);
  $FS$isDir$$($mode$jscomp$27_node$jscomp$8$$.mode) ? ($mode$jscomp$27_node$jscomp$8$$.$node_ops$ = $MEMFS$$.$ops_table$.dir.node, $mode$jscomp$27_node$jscomp$8$$.$stream_ops$ = $MEMFS$$.$ops_table$.dir.stream, $mode$jscomp$27_node$jscomp$8$$.$contents$ = {}) : ($mode$jscomp$27_node$jscomp$8$$.mode & 61440) === 32768 ? ($mode$jscomp$27_node$jscomp$8$$.$node_ops$ = $MEMFS$$.$ops_table$.file.node, $mode$jscomp$27_node$jscomp$8$$.$stream_ops$ = $MEMFS$$.$ops_table$.file.stream, $mode$jscomp$27_node$jscomp$8$$.$usedBytes$ = 
  0, $mode$jscomp$27_node$jscomp$8$$.$contents$ = $MEMFS$$.$emptyFileContents$ ?? ($MEMFS$$.$emptyFileContents$ = new Uint8Array(0))) : ($mode$jscomp$27_node$jscomp$8$$.mode & 61440) === 40960 ? ($mode$jscomp$27_node$jscomp$8$$.$node_ops$ = $MEMFS$$.$ops_table$.link.node, $mode$jscomp$27_node$jscomp$8$$.$stream_ops$ = $MEMFS$$.$ops_table$.link.stream) : ($mode$jscomp$27_node$jscomp$8$$.mode & 61440) === 8192 && ($mode$jscomp$27_node$jscomp$8$$.$node_ops$ = $MEMFS$$.$ops_table$.$chrdev$.node, $mode$jscomp$27_node$jscomp$8$$.$stream_ops$ = 
  $MEMFS$$.$ops_table$.$chrdev$.stream);
  $mode$jscomp$27_node$jscomp$8$$.atime = $mode$jscomp$27_node$jscomp$8$$.mtime = $mode$jscomp$27_node$jscomp$8$$.ctime = Date.now();
  $parent$jscomp$4$$ && ($parent$jscomp$4$$.$contents$[$name$jscomp$83$$] = $mode$jscomp$27_node$jscomp$8$$, $parent$jscomp$4$$.atime = $parent$jscomp$4$$.mtime = $parent$jscomp$4$$.ctime = $mode$jscomp$27_node$jscomp$8$$.atime);
  return $mode$jscomp$27_node$jscomp$8$$;
}, $node_ops$:{$getattr$($node$jscomp$12$$) {
  var $attr$$ = {};
  $attr$$.dev = ($node$jscomp$12$$.mode & 61440) === 8192 ? $node$jscomp$12$$.id : 1;
  $attr$$.ino = $node$jscomp$12$$.id;
  $attr$$.mode = $node$jscomp$12$$.mode;
  $attr$$.nlink = 1;
  $attr$$.uid = 0;
  $attr$$.gid = 0;
  $attr$$.rdev = $node$jscomp$12$$.rdev;
  $FS$isDir$$($node$jscomp$12$$.mode) ? $attr$$.size = 4096 : ($node$jscomp$12$$.mode & 61440) === 32768 ? $attr$$.size = $node$jscomp$12$$.$usedBytes$ : ($node$jscomp$12$$.mode & 61440) === 40960 ? $attr$$.size = $node$jscomp$12$$.link.length : $attr$$.size = 0;
  $attr$$.atime = new Date($node$jscomp$12$$.atime);
  $attr$$.mtime = new Date($node$jscomp$12$$.mtime);
  $attr$$.ctime = new Date($node$jscomp$12$$.ctime);
  $attr$$.blksize = 4096;
  $attr$$.blocks = Math.ceil($attr$$.size / $attr$$.blksize);
  return $attr$$;
}, $setattr$($node$jscomp$13$$, $attr$jscomp$1_newSize$jscomp$inline_47$$) {
  for (var $key$jscomp$41_oldContents$jscomp$inline_49$$ of ["mode", "atime", "mtime", "ctime"]) {
    $attr$jscomp$1_newSize$jscomp$inline_47$$[$key$jscomp$41_oldContents$jscomp$inline_49$$] != null && ($node$jscomp$13$$[$key$jscomp$41_oldContents$jscomp$inline_49$$] = $attr$jscomp$1_newSize$jscomp$inline_47$$[$key$jscomp$41_oldContents$jscomp$inline_49$$]);
  }
  $attr$jscomp$1_newSize$jscomp$inline_47$$.size !== void 0 && ($attr$jscomp$1_newSize$jscomp$inline_47$$ = $attr$jscomp$1_newSize$jscomp$inline_47$$.size, $node$jscomp$13$$.$usedBytes$ != $attr$jscomp$1_newSize$jscomp$inline_47$$ && ($key$jscomp$41_oldContents$jscomp$inline_49$$ = $node$jscomp$13$$.$contents$, $node$jscomp$13$$.$contents$ = new Uint8Array($attr$jscomp$1_newSize$jscomp$inline_47$$), $node$jscomp$13$$.$contents$.set($key$jscomp$41_oldContents$jscomp$inline_49$$.subarray(0, Math.min($attr$jscomp$1_newSize$jscomp$inline_47$$, 
  $node$jscomp$13$$.$usedBytes$))), $node$jscomp$13$$.$usedBytes$ = $attr$jscomp$1_newSize$jscomp$inline_47$$));
}, lookup() {
  $MEMFS$$.$doesNotExistError$ || ($MEMFS$$.$doesNotExistError$ = new $FS$ErrnoError$$(44), $MEMFS$$.$doesNotExistError$.stack = "<generic error, no stack>");
  throw $MEMFS$$.$doesNotExistError$;
}, $mknod$($parent$jscomp$6$$, $name$jscomp$85$$, $mode$jscomp$28$$, $dev$jscomp$2$$) {
  return $MEMFS$$.createNode($parent$jscomp$6$$, $name$jscomp$85$$, $mode$jscomp$28$$, $dev$jscomp$2$$);
}, rename($old_node$$, $new_dir$$, $new_name$$) {
  try {
    var $new_node$$ = $FS$lookupNode$$($new_dir$$, $new_name$$);
  } catch ($e$jscomp$12$$) {
  }
  if ($new_node$$) {
    if ($FS$isDir$$($old_node$$.mode)) {
      for (var $i$jscomp$11$$ in $new_node$$.$contents$) {
        throw new $FS$ErrnoError$$(55);
      }
    }
    $FS$hashRemoveNode$$($new_node$$);
  }
  delete $old_node$$.parent.$contents$[$old_node$$.name];
  $new_dir$$.$contents$[$new_name$$] = $old_node$$;
  $old_node$$.name = $new_name$$;
  $new_dir$$.ctime = $new_dir$$.mtime = $old_node$$.parent.ctime = $old_node$$.parent.mtime = Date.now();
}, unlink($parent$jscomp$7$$, $name$jscomp$86$$) {
  delete $parent$jscomp$7$$.$contents$[$name$jscomp$86$$];
  $parent$jscomp$7$$.ctime = $parent$jscomp$7$$.mtime = Date.now();
}, rmdir($parent$jscomp$8$$, $name$jscomp$87$$) {
  var $node$jscomp$14$$ = $FS$lookupNode$$($parent$jscomp$8$$, $name$jscomp$87$$), $i$jscomp$12$$;
  for ($i$jscomp$12$$ in $node$jscomp$14$$.$contents$) {
    throw new $FS$ErrnoError$$(55);
  }
  delete $parent$jscomp$8$$.$contents$[$name$jscomp$87$$];
  $parent$jscomp$8$$.ctime = $parent$jscomp$8$$.mtime = Date.now();
}, readdir($node$jscomp$15$$) {
  return [".", "..", ...Object.keys($node$jscomp$15$$.$contents$)];
}, symlink($node$jscomp$16_parent$jscomp$9$$, $newname$$, $oldpath$$) {
  $node$jscomp$16_parent$jscomp$9$$ = $MEMFS$$.createNode($node$jscomp$16_parent$jscomp$9$$, $newname$$, 41471, 0);
  $node$jscomp$16_parent$jscomp$9$$.link = $oldpath$$;
  return $node$jscomp$16_parent$jscomp$9$$;
}, readlink($node$jscomp$17$$) {
  if (($node$jscomp$17$$.mode & 61440) !== 40960) {
    throw new $FS$ErrnoError$$(28);
  }
  return $node$jscomp$17$$.link;
}}, $stream_ops$:{read($stream$jscomp$11$$, $buffer$jscomp$29$$, $offset$jscomp$70$$, $length$jscomp$31_size$jscomp$26$$, $position$jscomp$5$$) {
  if ($position$jscomp$5$$ >= $stream$jscomp$11$$.node.$usedBytes$) {
    return 0;
  }
  $length$jscomp$31_size$jscomp$26$$ = Math.min($stream$jscomp$11$$.node.$usedBytes$ - $position$jscomp$5$$, $length$jscomp$31_size$jscomp$26$$);
  $buffer$jscomp$29$$.set($stream$jscomp$11$$.node.$contents$.subarray($position$jscomp$5$$, $position$jscomp$5$$ + $length$jscomp$31_size$jscomp$26$$), $offset$jscomp$70$$);
  return $length$jscomp$31_size$jscomp$26$$;
}, write($node$jscomp$18_stream$jscomp$12$$, $buffer$jscomp$30$$, $offset$jscomp$71$$, $length$jscomp$32$$, $position$jscomp$6$$, $canOwn_newCapacity$jscomp$inline_52$$) {
  $buffer$jscomp$30$$.buffer === $HEAP8$$.buffer && ($canOwn_newCapacity$jscomp$inline_52$$ = !1);
  if (!$length$jscomp$32$$) {
    return 0;
  }
  $node$jscomp$18_stream$jscomp$12$$ = $node$jscomp$18_stream$jscomp$12$$.node;
  $node$jscomp$18_stream$jscomp$12$$.mtime = $node$jscomp$18_stream$jscomp$12$$.ctime = Date.now();
  if ($canOwn_newCapacity$jscomp$inline_52$$) {
    $node$jscomp$18_stream$jscomp$12$$.$contents$ = $buffer$jscomp$30$$.subarray($offset$jscomp$71$$, $offset$jscomp$71$$ + $length$jscomp$32$$), $node$jscomp$18_stream$jscomp$12$$.$usedBytes$ = $length$jscomp$32$$;
  } else if ($node$jscomp$18_stream$jscomp$12$$.$usedBytes$ === 0 && $position$jscomp$6$$ === 0) {
    $node$jscomp$18_stream$jscomp$12$$.$contents$ = $buffer$jscomp$30$$.slice($offset$jscomp$71$$, $offset$jscomp$71$$ + $length$jscomp$32$$), $node$jscomp$18_stream$jscomp$12$$.$usedBytes$ = $length$jscomp$32$$;
  } else {
    $canOwn_newCapacity$jscomp$inline_52$$ = $position$jscomp$6$$ + $length$jscomp$32$$;
    var $oldContents$jscomp$inline_55_prevCapacity$jscomp$inline_54$$ = $node$jscomp$18_stream$jscomp$12$$.$contents$.length;
    $oldContents$jscomp$inline_55_prevCapacity$jscomp$inline_54$$ >= $canOwn_newCapacity$jscomp$inline_52$$ || ($canOwn_newCapacity$jscomp$inline_52$$ = Math.max($canOwn_newCapacity$jscomp$inline_52$$, $oldContents$jscomp$inline_55_prevCapacity$jscomp$inline_54$$ * ($oldContents$jscomp$inline_55_prevCapacity$jscomp$inline_54$$ < 1048576 ? 2.0 : 1.125) >>> 0), $oldContents$jscomp$inline_55_prevCapacity$jscomp$inline_54$$ && ($canOwn_newCapacity$jscomp$inline_52$$ = Math.max($canOwn_newCapacity$jscomp$inline_52$$, 
    256)), $oldContents$jscomp$inline_55_prevCapacity$jscomp$inline_54$$ = $node$jscomp$18_stream$jscomp$12$$.$contents$.subarray(0, $node$jscomp$18_stream$jscomp$12$$.$usedBytes$), $node$jscomp$18_stream$jscomp$12$$.$contents$ = new Uint8Array($canOwn_newCapacity$jscomp$inline_52$$), $node$jscomp$18_stream$jscomp$12$$.$contents$.set($oldContents$jscomp$inline_55_prevCapacity$jscomp$inline_54$$));
    $node$jscomp$18_stream$jscomp$12$$.$contents$.set($buffer$jscomp$30$$.subarray($offset$jscomp$71$$, $offset$jscomp$71$$ + $length$jscomp$32$$), $position$jscomp$6$$);
    $node$jscomp$18_stream$jscomp$12$$.$usedBytes$ = Math.max($node$jscomp$18_stream$jscomp$12$$.$usedBytes$, $position$jscomp$6$$ + $length$jscomp$32$$);
  }
  return $length$jscomp$32$$;
}, $llseek$($stream$jscomp$13$$, $offset$jscomp$72_position$jscomp$7$$, $whence$$) {
  $whence$$ === 1 ? $offset$jscomp$72_position$jscomp$7$$ += $stream$jscomp$13$$.position : $whence$$ === 2 && ($stream$jscomp$13$$.node.mode & 61440) === 32768 && ($offset$jscomp$72_position$jscomp$7$$ += $stream$jscomp$13$$.node.$usedBytes$);
  if ($offset$jscomp$72_position$jscomp$7$$ < 0) {
    throw new $FS$ErrnoError$$(28);
  }
  return $offset$jscomp$72_position$jscomp$7$$;
}, $mmap$($contents$jscomp$7_stream$jscomp$14$$, $length$jscomp$33$$, $position$jscomp$8$$, $allocated_prot$$, $flags$jscomp$9_ptr$jscomp$5$$) {
  if (($contents$jscomp$7_stream$jscomp$14$$.node.mode & 61440) !== 32768) {
    throw new $FS$ErrnoError$$(43);
  }
  $contents$jscomp$7_stream$jscomp$14$$ = $contents$jscomp$7_stream$jscomp$14$$.node.$contents$;
  if ($flags$jscomp$9_ptr$jscomp$5$$ & 2 || $contents$jscomp$7_stream$jscomp$14$$.buffer !== $HEAP8$$.buffer) {
    $allocated_prot$$ = !0;
    $flags$jscomp$9_ptr$jscomp$5$$ = $mmapAlloc$$($length$jscomp$33$$);
    if (!$flags$jscomp$9_ptr$jscomp$5$$) {
      throw new $FS$ErrnoError$$(48);
    }
    if ($contents$jscomp$7_stream$jscomp$14$$) {
      if ($position$jscomp$8$$ > 0 || $position$jscomp$8$$ + $length$jscomp$33$$ < $contents$jscomp$7_stream$jscomp$14$$.length) {
        $contents$jscomp$7_stream$jscomp$14$$.subarray ? $contents$jscomp$7_stream$jscomp$14$$ = $contents$jscomp$7_stream$jscomp$14$$.subarray($position$jscomp$8$$, $position$jscomp$8$$ + $length$jscomp$33$$) : $contents$jscomp$7_stream$jscomp$14$$ = Array.prototype.slice.call($contents$jscomp$7_stream$jscomp$14$$, $position$jscomp$8$$, $position$jscomp$8$$ + $length$jscomp$33$$);
      }
      $HEAP8$$.set($contents$jscomp$7_stream$jscomp$14$$, $flags$jscomp$9_ptr$jscomp$5$$);
    }
  } else {
    $allocated_prot$$ = !1, $flags$jscomp$9_ptr$jscomp$5$$ = $contents$jscomp$7_stream$jscomp$14$$.byteOffset;
  }
  return {$ptr$:$flags$jscomp$9_ptr$jscomp$5$$, $allocated$:$allocated_prot$$};
}, $msync$($stream$jscomp$15$$, $buffer$jscomp$31$$, $offset$jscomp$73$$, $length$jscomp$34$$) {
  $MEMFS$$.$stream_ops$.write($stream$jscomp$15$$, $buffer$jscomp$31$$, 0, $length$jscomp$34$$, $offset$jscomp$73$$, !1);
  return 0;
}}}, $FS_getMode$$ = ($canRead$$, $canWrite$$) => {
  var $mode$jscomp$29$$ = 0;
  $canRead$$ && ($mode$jscomp$29$$ |= 365);
  $canWrite$$ && ($mode$jscomp$29$$ |= 146);
  return $mode$jscomp$29$$;
}, $asyncLoad$$ = async $arrayBuffer$jscomp$1_url$jscomp$30$$ => {
  $arrayBuffer$jscomp$1_url$jscomp$30$$ = await $readAsync$$($arrayBuffer$jscomp$1_url$jscomp$30$$);
  return new Uint8Array($arrayBuffer$jscomp$1_url$jscomp$30$$);
}, $dependenciesPromise$$ = null, $resolveRunDependencies$$ = async() => $dependenciesPromise$$, $runDependencies$$ = 0, $dependenciesPromiseResolve$$ = null, $removeRunDependency$$ = () => {
  $runDependencies$$--;
  $Module$$.monitorRunDependencies?.($runDependencies$$);
  $runDependencies$$ || $dependenciesPromiseResolve$$();
}, $addRunDependency$$ = () => {
  $runDependencies$$ || ($dependenciesPromise$$ = new Promise($resolve$jscomp$2$$ => $dependenciesPromiseResolve$$ = $resolve$jscomp$2$$));
  $runDependencies$$++;
  $Module$$.monitorRunDependencies?.($runDependencies$$);
}, $preloadPlugins$$ = [], $FS_handledByPreloadPlugin$$ = async($byteArray$jscomp$1$$, $fullname$$) => {
  typeof Browser != "undefined" && Browser.init();
  for (var $plugin$$ of $preloadPlugins$$) {
    if ($plugin$$.canHandle($fullname$$)) {
      return $plugin$$.handle($byteArray$jscomp$1$$, $fullname$$);
    }
  }
  return $byteArray$jscomp$1$$;
}, $FS$root$$ = null, $FS$devices$$ = {}, $FS$streams$$ = [], $FS$nextInode$$ = 1, $FS$nameTable$$ = null, $FS$initialized$$ = !1, $FS$ignorePermissions$$ = !0, $FS$ErrnoError$$ = class {
  name = "ErrnoError";
  constructor($errno$$) {
    this.$errno$ = $errno$$;
  }
}, $FS$FSStream$$ = class {
  shared = {};
  node = null;
  get flags() {
    return this.shared.flags;
  }
  set flags($val$jscomp$4$$) {
    this.shared.flags = $val$jscomp$4$$;
  }
  get position() {
    return this.shared.position;
  }
  set position($val$jscomp$5$$) {
    this.shared.position = $val$jscomp$5$$;
  }
}, $FS$FSNode$$ = class {
  $node_ops$ = {};
  $stream_ops$ = {};
  $mounted$ = null;
  listeners = null;
  $g$ = 0;
  constructor($parent$jscomp$12$$, $name$jscomp$90$$, $mode$jscomp$30$$, $rdev$$) {
    $parent$jscomp$12$$ ||= this;
    this.parent = $parent$jscomp$12$$;
    this.$mount$ = $parent$jscomp$12$$.$mount$;
    this.id = $FS$nextInode$$++;
    this.name = $name$jscomp$90$$;
    this.mode = $mode$jscomp$30$$;
    this.rdev = $rdev$$;
    this.atime = this.mtime = this.ctime = Date.now();
  }
  get read() {
    return (this.mode & 365) === 365;
  }
  set read($val$jscomp$6$$) {
    $val$jscomp$6$$ ? this.mode |= 365 : this.mode &= -366;
  }
  get write() {
    return (this.mode & 146) === 146;
  }
  set write($val$jscomp$7$$) {
    $val$jscomp$7$$ ? this.mode |= 146 : this.mode &= -147;
  }
  get $isFolder$() {
    return $FS$isDir$$(this.mode);
  }
  get $isDevice$() {
    return (this.mode & 61440) === 8192;
  }
  $notifyListeners$() {
    if (this.listeners) {
      var $excl$$;
      for ($entry$jscomp$1_i$jscomp$13$$ of this.listeners) {
        $entry$jscomp$1_i$jscomp$13$$.exclusive ? ($excl$$ ||= []).push($entry$jscomp$1_i$jscomp$13$$) : $entry$jscomp$1_i$jscomp$13$$.$cb$(32);
      }
      if ($excl$$) {
        var $entry$jscomp$1_i$jscomp$13$$ = (this.$g$ || 0) % $excl$$.length;
        this.$g$ = $entry$jscomp$1_i$jscomp$13$$ + 1;
        $excl$$[$entry$jscomp$1_i$jscomp$13$$].$cb$(32);
      }
    }
  }
};
function $FS$lookupPath$$($parts$jscomp$1_path$jscomp$45$$, $opts$jscomp$1$$ = {}) {
  if (!$parts$jscomp$1_path$jscomp$45$$) {
    throw new $FS$ErrnoError$$(44);
  }
  $opts$jscomp$1$$.$follow_mount$ ?? ($opts$jscomp$1$$.$follow_mount$ = !0);
  $parts$jscomp$1_path$jscomp$45$$.charAt(0) === "/" || ($parts$jscomp$1_path$jscomp$45$$ = "//" + $parts$jscomp$1_path$jscomp$45$$);
  var $nlinks$$ = 0;
  a: for (; $nlinks$$ < 40; $nlinks$$++) {
    $parts$jscomp$1_path$jscomp$45$$ = $parts$jscomp$1_path$jscomp$45$$.split("/").filter($p$jscomp$6$$ => !!$p$jscomp$6$$);
    for (var $current_link$$ = $FS$root$$, $current_path$$ = "/", $i$jscomp$14$$ = 0; $i$jscomp$14$$ < $parts$jscomp$1_path$jscomp$45$$.length; $i$jscomp$14$$++) {
      var $islast$$ = $i$jscomp$14$$ === $parts$jscomp$1_path$jscomp$45$$.length - 1;
      if ($islast$$ && $opts$jscomp$1$$.parent) {
        break;
      }
      if ($parts$jscomp$1_path$jscomp$45$$[$i$jscomp$14$$] !== ".") {
        if ($parts$jscomp$1_path$jscomp$45$$[$i$jscomp$14$$] === "..") {
          if ($current_path$$ = $PATH$dirname$$($current_path$$), $current_link$$ === $current_link$$.parent) {
            $parts$jscomp$1_path$jscomp$45$$ = $current_path$$ + "/" + $parts$jscomp$1_path$jscomp$45$$.slice($i$jscomp$14$$ + 1).join("/");
            $nlinks$$--;
            continue a;
          } else {
            $current_link$$ = $current_link$$.parent;
          }
        } else {
          $current_path$$ = $PATH$normalize$$($current_path$$ + "/" + $parts$jscomp$1_path$jscomp$45$$[$i$jscomp$14$$]);
          try {
            $current_link$$ = $FS$lookupNode$$($current_link$$, $parts$jscomp$1_path$jscomp$45$$[$i$jscomp$14$$]);
          } catch ($e$jscomp$13$$) {
            if ($e$jscomp$13$$?.$errno$ === 44 && $islast$$ && $opts$jscomp$1$$.$noent_okay$) {
              return {path:$current_path$$};
            }
            throw $e$jscomp$13$$;
          }
          !$current_link$$.$mounted$ || $islast$$ && !$opts$jscomp$1$$.$follow_mount$ || ($current_link$$ = $current_link$$.$mounted$.root);
          if (($current_link$$.mode & 61440) === 40960 && (!$islast$$ || $opts$jscomp$1$$.$follow$)) {
            if (!$current_link$$.$node_ops$.readlink) {
              throw new $FS$ErrnoError$$(52);
            }
            $current_link$$ = $current_link$$.$node_ops$.readlink($current_link$$);
            $current_link$$.charAt(0) === "/" || ($current_link$$ = $PATH$dirname$$($current_path$$) + "/" + $current_link$$);
            $parts$jscomp$1_path$jscomp$45$$ = $current_link$$ + "/" + $parts$jscomp$1_path$jscomp$45$$.slice($i$jscomp$14$$ + 1).join("/");
            continue a;
          }
        }
      }
    }
    return {path:$current_path$$, node:$current_link$$};
  }
  throw new $FS$ErrnoError$$(32);
}
function $FS$getPath$$($mount$jscomp$1_node$jscomp$19$$) {
  for (var $path$jscomp$46$$;;) {
    if ($mount$jscomp$1_node$jscomp$19$$ === $mount$jscomp$1_node$jscomp$19$$.parent) {
      return $mount$jscomp$1_node$jscomp$19$$ = $mount$jscomp$1_node$jscomp$19$$.$mount$.$mountpoint$, $path$jscomp$46$$ ? $mount$jscomp$1_node$jscomp$19$$[$mount$jscomp$1_node$jscomp$19$$.length - 1] !== "/" ? `${$mount$jscomp$1_node$jscomp$19$$}/${$path$jscomp$46$$}` : $mount$jscomp$1_node$jscomp$19$$ + $path$jscomp$46$$ : $mount$jscomp$1_node$jscomp$19$$;
    }
    $path$jscomp$46$$ = $path$jscomp$46$$ ? `${$mount$jscomp$1_node$jscomp$19$$.name}/${$path$jscomp$46$$}` : $mount$jscomp$1_node$jscomp$19$$.name;
    $mount$jscomp$1_node$jscomp$19$$ = $mount$jscomp$1_node$jscomp$19$$.parent;
  }
}
function $FS$hashName$$($parentid$$, $name$jscomp$91$$) {
  for (var $hash$$ = 0, $i$jscomp$15$$ = 0; $i$jscomp$15$$ < $name$jscomp$91$$.length; $i$jscomp$15$$++) {
    $hash$$ = ($hash$$ << 5) - $hash$$ + $name$jscomp$91$$.charCodeAt($i$jscomp$15$$) | 0;
  }
  return ($parentid$$ + $hash$$ >>> 0) % $FS$nameTable$$.length;
}
function $FS$hashRemoveNode$$($node$jscomp$21$$) {
  var $current$jscomp$1_hash$jscomp$2$$ = $FS$hashName$$($node$jscomp$21$$.parent.id, $node$jscomp$21$$.name);
  if ($FS$nameTable$$[$current$jscomp$1_hash$jscomp$2$$] === $node$jscomp$21$$) {
    $FS$nameTable$$[$current$jscomp$1_hash$jscomp$2$$] = $node$jscomp$21$$.$name_next$;
  } else {
    for ($current$jscomp$1_hash$jscomp$2$$ = $FS$nameTable$$[$current$jscomp$1_hash$jscomp$2$$]; $current$jscomp$1_hash$jscomp$2$$;) {
      if ($current$jscomp$1_hash$jscomp$2$$.$name_next$ === $node$jscomp$21$$) {
        $current$jscomp$1_hash$jscomp$2$$.$name_next$ = $node$jscomp$21$$.$name_next$;
        break;
      }
      $current$jscomp$1_hash$jscomp$2$$ = $current$jscomp$1_hash$jscomp$2$$.$name_next$;
    }
  }
}
function $FS$lookupNode$$($parent$jscomp$13$$, $name$jscomp$92$$) {
  var $errCode_errCode$jscomp$inline_58_node$jscomp$22$$ = $FS$isDir$$($parent$jscomp$13$$.mode) ? ($errCode_errCode$jscomp$inline_58_node$jscomp$22$$ = $FS$nodePermissions$$($parent$jscomp$13$$, "x")) ? $errCode_errCode$jscomp$inline_58_node$jscomp$22$$ : $parent$jscomp$13$$.$node_ops$.lookup ? 0 : 2 : 54;
  if ($errCode_errCode$jscomp$inline_58_node$jscomp$22$$) {
    throw new $FS$ErrnoError$$($errCode_errCode$jscomp$inline_58_node$jscomp$22$$);
  }
  for ($errCode_errCode$jscomp$inline_58_node$jscomp$22$$ = $FS$nameTable$$[$FS$hashName$$($parent$jscomp$13$$.id, $name$jscomp$92$$)]; $errCode_errCode$jscomp$inline_58_node$jscomp$22$$; $errCode_errCode$jscomp$inline_58_node$jscomp$22$$ = $errCode_errCode$jscomp$inline_58_node$jscomp$22$$.$name_next$) {
    var $nodeName$$ = $errCode_errCode$jscomp$inline_58_node$jscomp$22$$.name;
    if ($errCode_errCode$jscomp$inline_58_node$jscomp$22$$.parent.id === $parent$jscomp$13$$.id && $nodeName$$ === $name$jscomp$92$$) {
      return $errCode_errCode$jscomp$inline_58_node$jscomp$22$$;
    }
  }
  return $parent$jscomp$13$$.$node_ops$.lookup($parent$jscomp$13$$, $name$jscomp$92$$);
}
function $FS$createNode$$($node$jscomp$23_parent$jscomp$14$$, $hash$jscomp$inline_61_name$jscomp$93$$, $mode$jscomp$31$$, $rdev$jscomp$1$$) {
  $node$jscomp$23_parent$jscomp$14$$ = new $FS$FSNode$$($node$jscomp$23_parent$jscomp$14$$, $hash$jscomp$inline_61_name$jscomp$93$$, $mode$jscomp$31$$, $rdev$jscomp$1$$);
  $hash$jscomp$inline_61_name$jscomp$93$$ = $FS$hashName$$($node$jscomp$23_parent$jscomp$14$$.parent.id, $node$jscomp$23_parent$jscomp$14$$.name);
  $node$jscomp$23_parent$jscomp$14$$.$name_next$ = $FS$nameTable$$[$hash$jscomp$inline_61_name$jscomp$93$$];
  return $FS$nameTable$$[$hash$jscomp$inline_61_name$jscomp$93$$] = $node$jscomp$23_parent$jscomp$14$$;
}
function $FS$isDir$$($mode$jscomp$33$$) {
  return ($mode$jscomp$33$$ & 61440) === 16384;
}
function $FS$nodePermissions$$($node$jscomp$27$$, $perms$jscomp$1$$) {
  return $FS$ignorePermissions$$ ? 0 : $perms$jscomp$1$$.includes("r") && !($node$jscomp$27$$.mode & 292) || $perms$jscomp$1$$.includes("w") && !($node$jscomp$27$$.mode & 146) || $perms$jscomp$1$$.includes("x") && !($node$jscomp$27$$.mode & 73) ? 2 : 0;
}
function $FS$mayCreate$$($dir$jscomp$2$$, $name$jscomp$94$$) {
  if (!$FS$isDir$$($dir$jscomp$2$$.mode)) {
    return 54;
  }
  try {
    return $FS$lookupNode$$($dir$jscomp$2$$, $name$jscomp$94$$), 20;
  } catch ($e$jscomp$14$$) {
  }
  return $FS$nodePermissions$$($dir$jscomp$2$$, "wx");
}
function $FS$getStreamChecked$$($fd$jscomp$22_stream$jscomp$16$$) {
  $fd$jscomp$22_stream$jscomp$16$$ = $FS$streams$$[$fd$jscomp$22_stream$jscomp$16$$];
  if (!$fd$jscomp$22_stream$jscomp$16$$) {
    throw new $FS$ErrnoError$$(8);
  }
  return $fd$jscomp$22_stream$jscomp$16$$;
}
function $FS$createStream$$($stream$jscomp$17$$, $fd$jscomp$24_fd$jscomp$inline_63$$ = -1) {
  $stream$jscomp$17$$ = Object.assign(new $FS$FSStream$$(), $stream$jscomp$17$$);
  if ($fd$jscomp$24_fd$jscomp$inline_63$$ == -1) {
    a: {
      for ($fd$jscomp$24_fd$jscomp$inline_63$$ = 0; $fd$jscomp$24_fd$jscomp$inline_63$$ <= 4096; $fd$jscomp$24_fd$jscomp$inline_63$$++) {
        if (!$FS$streams$$[$fd$jscomp$24_fd$jscomp$inline_63$$]) {
          break a;
        }
      }
      throw new $FS$ErrnoError$$(33);
    }
  }
  $stream$jscomp$17$$.fd = $fd$jscomp$24_fd$jscomp$inline_63$$;
  return $FS$streams$$[$fd$jscomp$24_fd$jscomp$inline_63$$] = $stream$jscomp$17$$;
}
function $FS$dupStream$$($origStream_stream$jscomp$18$$, $fd$jscomp$26$$ = -1) {
  $origStream_stream$jscomp$18$$ = $FS$createStream$$($origStream_stream$jscomp$18$$, $fd$jscomp$26$$);
  $origStream_stream$jscomp$18$$.$stream_ops$?.$dup$?.($origStream_stream$jscomp$18$$);
  return $origStream_stream$jscomp$18$$;
}
function $FS$doSetAttr$$($node$jscomp$31$$, $attr$jscomp$2$$) {
  var $setattr$$ = void 0, $arg$jscomp$10$$ = $setattr$$ ? null : $node$jscomp$31$$;
  $setattr$$ ??= $node$jscomp$31$$.$node_ops$.$setattr$;
  if (!$setattr$$) {
    throw new $FS$ErrnoError$$(63);
  }
  try {
    $setattr$$($arg$jscomp$10$$, $attr$jscomp$2$$);
  } catch ($e$jscomp$16$$) {
    if ($e$jscomp$16$$ instanceof RangeError) {
      throw new $FS$ErrnoError$$(22);
    }
    throw $e$jscomp$16$$;
  }
}
var $FS$chrdev_stream_ops$$ = {open($stream$jscomp$20$$) {
  $stream$jscomp$20$$.$stream_ops$ = $FS$devices$$[$stream$jscomp$20$$.node.rdev].$stream_ops$;
  $stream$jscomp$20$$.$stream_ops$.open?.($stream$jscomp$20$$);
}, $llseek$() {
  throw new $FS$ErrnoError$$(70);
}};
function $FS$registerDevice$$($dev$jscomp$5$$, $ops$jscomp$1$$) {
  $FS$devices$$[$dev$jscomp$5$$] = {$stream_ops$:$ops$jscomp$1$$};
}
function $FS$mount$$($mountRoot_type$jscomp$190$$, $mount$jscomp$4_mountpoint$$) {
  var $root$jscomp$4$$ = $mount$jscomp$4_mountpoint$$ === "/";
  if ($root$jscomp$4$$ && $FS$root$$) {
    throw new $FS$ErrnoError$$(10);
  }
  if (!$root$jscomp$4$$ && $mount$jscomp$4_mountpoint$$) {
    var $lookup_node$jscomp$32$$ = $FS$lookupPath$$($mount$jscomp$4_mountpoint$$, {$follow_mount$:!1});
    $mount$jscomp$4_mountpoint$$ = $lookup_node$jscomp$32$$.path;
    $lookup_node$jscomp$32$$ = $lookup_node$jscomp$32$$.node;
    if ($lookup_node$jscomp$32$$.$mounted$) {
      throw new $FS$ErrnoError$$(10);
    }
    if (!$FS$isDir$$($lookup_node$jscomp$32$$.mode)) {
      throw new $FS$ErrnoError$$(54);
    }
  }
  $mount$jscomp$4_mountpoint$$ = {type:$mountRoot_type$jscomp$190$$, $opts$:{}, $mountpoint$:$mount$jscomp$4_mountpoint$$, $mounts$:[]};
  $mountRoot_type$jscomp$190$$ = $mountRoot_type$jscomp$190$$.$mount$($mount$jscomp$4_mountpoint$$);
  $mountRoot_type$jscomp$190$$.$mount$ = $mount$jscomp$4_mountpoint$$;
  $mount$jscomp$4_mountpoint$$.root = $mountRoot_type$jscomp$190$$;
  $root$jscomp$4$$ ? $FS$root$$ = $mountRoot_type$jscomp$190$$ : $lookup_node$jscomp$32$$ && ($lookup_node$jscomp$32$$.$mounted$ = $mount$jscomp$4_mountpoint$$, $lookup_node$jscomp$32$$.$mount$ && $lookup_node$jscomp$32$$.$mount$.$mounts$.push($mount$jscomp$4_mountpoint$$));
}
function $FS$mknod$$($name$jscomp$97_path$jscomp$47$$, $mode$jscomp$40$$, $dev$jscomp$7$$) {
  var $parent$jscomp$16$$ = $FS$lookupPath$$($name$jscomp$97_path$jscomp$47$$, {parent:!0}).node;
  $name$jscomp$97_path$jscomp$47$$ = $name$jscomp$97_path$jscomp$47$$ && $name$jscomp$97_path$jscomp$47$$.match(/([^\/]+|\/)\/*$/)[1];
  if (!$name$jscomp$97_path$jscomp$47$$) {
    throw new $FS$ErrnoError$$(28);
  }
  if ($name$jscomp$97_path$jscomp$47$$ === "." || $name$jscomp$97_path$jscomp$47$$ === "..") {
    throw new $FS$ErrnoError$$(20);
  }
  var $errCode$jscomp$5$$ = $FS$mayCreate$$($parent$jscomp$16$$, $name$jscomp$97_path$jscomp$47$$);
  if ($errCode$jscomp$5$$) {
    throw new $FS$ErrnoError$$($errCode$jscomp$5$$);
  }
  if (!$parent$jscomp$16$$.$node_ops$.$mknod$) {
    throw new $FS$ErrnoError$$(63);
  }
  return $parent$jscomp$16$$.$node_ops$.$mknod$($parent$jscomp$16$$, $name$jscomp$97_path$jscomp$47$$, $mode$jscomp$40$$, $dev$jscomp$7$$);
}
function $FS$create$$($path$jscomp$49$$, $mode$jscomp$41$$ = 438) {
  return $FS$mknod$$($path$jscomp$49$$, $mode$jscomp$41$$ & 4095 | 32768, 0);
}
function $FS$mkdir$$($path$jscomp$50$$) {
  return $FS$mknod$$($path$jscomp$50$$, 16895, 0);
}
function $FS$mkdev$$($path$jscomp$52$$, $mode$jscomp$44$$, $dev$jscomp$8$$) {
  typeof $dev$jscomp$8$$ == "undefined" && ($dev$jscomp$8$$ = $mode$jscomp$44$$, $mode$jscomp$44$$ = 438);
  return $FS$mknod$$($path$jscomp$52$$, $mode$jscomp$44$$ | 8192, $dev$jscomp$8$$);
}
function $FS$symlink$$($oldpath$jscomp$1$$, $newname$jscomp$1_newpath$$) {
  if (!$PATH_FS$resolve$$($oldpath$jscomp$1$$)) {
    throw new $FS$ErrnoError$$(44);
  }
  var $parent$jscomp$17$$ = $FS$lookupPath$$($newname$jscomp$1_newpath$$, {parent:!0}).node;
  if (!$parent$jscomp$17$$) {
    throw new $FS$ErrnoError$$(44);
  }
  $newname$jscomp$1_newpath$$ = $newname$jscomp$1_newpath$$ && $newname$jscomp$1_newpath$$.match(/([^\/]+|\/)\/*$/)[1];
  var $errCode$jscomp$6$$ = $FS$mayCreate$$($parent$jscomp$17$$, $newname$jscomp$1_newpath$$);
  if ($errCode$jscomp$6$$) {
    throw new $FS$ErrnoError$$($errCode$jscomp$6$$);
  }
  if (!$parent$jscomp$17$$.$node_ops$.symlink) {
    throw new $FS$ErrnoError$$(63);
  }
  $parent$jscomp$17$$.$node_ops$.symlink($parent$jscomp$17$$, $newname$jscomp$1_newpath$$, $oldpath$jscomp$1$$);
}
function $FS$unlink$$($name$jscomp$99_path$jscomp$55$$) {
  var $parent$jscomp$20$$ = $FS$lookupPath$$($name$jscomp$99_path$jscomp$55$$, {parent:!0}).node;
  if (!$parent$jscomp$20$$) {
    throw new $FS$ErrnoError$$(44);
  }
  $name$jscomp$99_path$jscomp$55$$ = $name$jscomp$99_path$jscomp$55$$ && $name$jscomp$99_path$jscomp$55$$.match(/([^\/]+|\/)\/*$/)[1];
  var $node$jscomp$37$$ = $FS$lookupNode$$($parent$jscomp$20$$, $name$jscomp$99_path$jscomp$55$$);
  a: {
    try {
      var $errCode$jscomp$10_node$jscomp$inline_272$$ = $FS$lookupNode$$($parent$jscomp$20$$, $name$jscomp$99_path$jscomp$55$$);
    } catch ($e$jscomp$inline_274$$) {
      $errCode$jscomp$10_node$jscomp$inline_272$$ = $e$jscomp$inline_274$$.$errno$;
      break a;
    }
    var $errCode$jscomp$inline_273$$ = $FS$nodePermissions$$($parent$jscomp$20$$, "wx");
    $errCode$jscomp$10_node$jscomp$inline_272$$ = $errCode$jscomp$inline_273$$ ? $errCode$jscomp$inline_273$$ : $FS$isDir$$($errCode$jscomp$10_node$jscomp$inline_272$$.mode) ? 31 : 0;
  }
  if ($errCode$jscomp$10_node$jscomp$inline_272$$) {
    throw new $FS$ErrnoError$$($errCode$jscomp$10_node$jscomp$inline_272$$);
  }
  if (!$parent$jscomp$20$$.$node_ops$.unlink) {
    throw new $FS$ErrnoError$$(63);
  }
  if ($node$jscomp$37$$.$mounted$) {
    throw new $FS$ErrnoError$$(10);
  }
  $parent$jscomp$20$$.$node_ops$.unlink($parent$jscomp$20$$, $name$jscomp$99_path$jscomp$55$$);
  $FS$hashRemoveNode$$($node$jscomp$37$$);
}
function $FS$chmod$$($node$jscomp$41_path$jscomp$59$$, $mode$jscomp$46$$) {
  $node$jscomp$41_path$jscomp$59$$ = typeof $node$jscomp$41_path$jscomp$59$$ == "string" ? $FS$lookupPath$$($node$jscomp$41_path$jscomp$59$$, {$follow$:!0}).node : $node$jscomp$41_path$jscomp$59$$;
  $FS$doSetAttr$$($node$jscomp$41_path$jscomp$59$$, {mode:$mode$jscomp$46$$ & 4095 | $node$jscomp$41_path$jscomp$59$$.mode & -4096, ctime:Date.now(), $dontFollow$:void 0});
}
function $FS$open$$($errCode$jscomp$inline_281_path$jscomp$65$$, $flags$jscomp$14_stream$jscomp$29$$, $mode$jscomp$49$$ = 438) {
  if ($errCode$jscomp$inline_281_path$jscomp$65$$ === "") {
    throw new $FS$ErrnoError$$(44);
  }
  if (typeof $flags$jscomp$14_stream$jscomp$29$$ == "string") {
    var $flags$jscomp$inline_76_node$jscomp$46$$ = {r:0, "r+":2, w:577, "w+":578, a:1089, "a+":1090}[$flags$jscomp$14_stream$jscomp$29$$];
    if (typeof $flags$jscomp$inline_76_node$jscomp$46$$ == "undefined") {
      throw Error(`Unknown file open mode: ${$flags$jscomp$14_stream$jscomp$29$$}`);
    }
    $flags$jscomp$14_stream$jscomp$29$$ = $flags$jscomp$inline_76_node$jscomp$46$$;
  }
  $mode$jscomp$49$$ = $flags$jscomp$14_stream$jscomp$29$$ & 64 ? $mode$jscomp$49$$ & 4095 | 32768 : 0;
  if (typeof $errCode$jscomp$inline_281_path$jscomp$65$$ == "object") {
    $flags$jscomp$inline_76_node$jscomp$46$$ = $errCode$jscomp$inline_281_path$jscomp$65$$;
  } else {
    var $errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$ = $errCode$jscomp$inline_281_path$jscomp$65$$.endsWith("/");
    var $created_lookup$jscomp$15$$ = $FS$lookupPath$$($errCode$jscomp$inline_281_path$jscomp$65$$, {$follow$:!($flags$jscomp$14_stream$jscomp$29$$ & 131072), $noent_okay$:!0});
    $flags$jscomp$inline_76_node$jscomp$46$$ = $created_lookup$jscomp$15$$.node;
    $errCode$jscomp$inline_281_path$jscomp$65$$ = $created_lookup$jscomp$15$$.path;
  }
  $created_lookup$jscomp$15$$ = !1;
  if ($flags$jscomp$14_stream$jscomp$29$$ & 64) {
    if ($flags$jscomp$inline_76_node$jscomp$46$$) {
      if ($flags$jscomp$14_stream$jscomp$29$$ & 128) {
        throw new $FS$ErrnoError$$(20);
      }
    } else {
      if ($errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$) {
        throw new $FS$ErrnoError$$(31);
      }
      $flags$jscomp$inline_76_node$jscomp$46$$ = $FS$mknod$$($errCode$jscomp$inline_281_path$jscomp$65$$, $mode$jscomp$49$$ | 511, 0);
      $created_lookup$jscomp$15$$ = !0;
    }
  }
  if (!$flags$jscomp$inline_76_node$jscomp$46$$) {
    throw new $FS$ErrnoError$$(44);
  }
  ($flags$jscomp$inline_76_node$jscomp$46$$.mode & 61440) === 8192 && ($flags$jscomp$14_stream$jscomp$29$$ &= -513);
  if ($flags$jscomp$14_stream$jscomp$29$$ & 65536 && !$FS$isDir$$($flags$jscomp$inline_76_node$jscomp$46$$.mode)) {
    throw new $FS$ErrnoError$$(54);
  }
  if (!$created_lookup$jscomp$15$$ && ($flags$jscomp$inline_76_node$jscomp$46$$ ? ($flags$jscomp$inline_76_node$jscomp$46$$.mode & 61440) === 40960 ? $errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$ = 32 : ($errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$ = ["r", "w", "rw"][$flags$jscomp$14_stream$jscomp$29$$ & 3], $flags$jscomp$14_stream$jscomp$29$$ & 
  512 && ($errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$ += "w"), $errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$ = $FS$isDir$$($flags$jscomp$inline_76_node$jscomp$46$$.mode) && ($errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$ !== "r" || $flags$jscomp$14_stream$jscomp$29$$ & 576) ? 
  31 : $FS$nodePermissions$$($flags$jscomp$inline_76_node$jscomp$46$$, $errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$)) : $errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$ = 44, $errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$)) {
    throw new $FS$ErrnoError$$($errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$);
  }
  if ($flags$jscomp$14_stream$jscomp$29$$ & 512 && !$created_lookup$jscomp$15$$) {
    $errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$ = $flags$jscomp$inline_76_node$jscomp$46$$;
    $errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$ = typeof $errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$ == "string" ? $FS$lookupPath$$($errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$, {$follow$:!0}).node : $errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$;
    if ($FS$isDir$$($errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$.mode)) {
      throw new $FS$ErrnoError$$(31);
    }
    if (($errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$.mode & 61440) !== 32768) {
      throw new $FS$ErrnoError$$(28);
    }
    if ($errCode$jscomp$inline_281_path$jscomp$65$$ = $FS$nodePermissions$$($errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$, "w")) {
      throw new $FS$ErrnoError$$($errCode$jscomp$inline_281_path$jscomp$65$$);
    }
    $FS$doSetAttr$$($errCode$jscomp$12_isDirPath_mode$jscomp$inline_80_node$jscomp$inline_279_path$jscomp$inline_82_perms$jscomp$inline_277$$, {size:0, timestamp:Date.now()});
  }
  $flags$jscomp$14_stream$jscomp$29$$ = $FS$createStream$$({node:$flags$jscomp$inline_76_node$jscomp$46$$, path:$FS$getPath$$($flags$jscomp$inline_76_node$jscomp$46$$), flags:$flags$jscomp$14_stream$jscomp$29$$ & -131713, seekable:!0, position:0, $stream_ops$:$flags$jscomp$inline_76_node$jscomp$46$$.$stream_ops$, $ungotten$:[], error:!1});
  $flags$jscomp$14_stream$jscomp$29$$.$stream_ops$.open && $flags$jscomp$14_stream$jscomp$29$$.$stream_ops$.open($flags$jscomp$14_stream$jscomp$29$$);
  $created_lookup$jscomp$15$$ && $FS$chmod$$($flags$jscomp$inline_76_node$jscomp$46$$, $mode$jscomp$49$$ & 511);
  return $flags$jscomp$14_stream$jscomp$29$$;
}
function $FS$close$$($stream$jscomp$30$$) {
  if ($stream$jscomp$30$$.fd === null) {
    throw new $FS$ErrnoError$$(8);
  }
  $stream$jscomp$30$$.$getdents$ && ($stream$jscomp$30$$.$getdents$ = null);
  $stream$jscomp$30$$.node?.$notifyListeners$();
  try {
    $stream$jscomp$30$$.$stream_ops$.close && $stream$jscomp$30$$.$stream_ops$.close($stream$jscomp$30$$);
  } catch ($e$jscomp$20$$) {
    throw $e$jscomp$20$$;
  } finally {
    $FS$streams$$[$stream$jscomp$30$$.fd] = null;
  }
  $stream$jscomp$30$$.fd = null;
}
function $FS$llseek$$($stream$jscomp$32$$, $offset$jscomp$74$$, $whence$jscomp$1$$) {
  if ($stream$jscomp$32$$.fd === null) {
    throw new $FS$ErrnoError$$(8);
  }
  if (!$stream$jscomp$32$$.seekable || !$stream$jscomp$32$$.$stream_ops$.$llseek$) {
    throw new $FS$ErrnoError$$(70);
  }
  if ($whence$jscomp$1$$ != 0 && $whence$jscomp$1$$ != 1 && $whence$jscomp$1$$ != 2) {
    throw new $FS$ErrnoError$$(28);
  }
  $stream$jscomp$32$$.position = $stream$jscomp$32$$.$stream_ops$.$llseek$($stream$jscomp$32$$, $offset$jscomp$74$$, $whence$jscomp$1$$);
  $stream$jscomp$32$$.$ungotten$ = [];
}
function $FS$write$$($stream$jscomp$34$$, $buffer$jscomp$33_bytesWritten$jscomp$1$$, $offset$jscomp$76$$, $length$jscomp$36$$, $position$jscomp$10$$, $canOwn$jscomp$3$$) {
  if ($length$jscomp$36$$ < 0 || $position$jscomp$10$$ < 0) {
    throw new $FS$ErrnoError$$(28);
  }
  if ($stream$jscomp$34$$.fd === null) {
    throw new $FS$ErrnoError$$(8);
  }
  if (($stream$jscomp$34$$.flags & 2097155) === 0) {
    throw new $FS$ErrnoError$$(8);
  }
  if ($FS$isDir$$($stream$jscomp$34$$.node.mode)) {
    throw new $FS$ErrnoError$$(31);
  }
  if (!$stream$jscomp$34$$.$stream_ops$.write) {
    throw new $FS$ErrnoError$$(28);
  }
  $stream$jscomp$34$$.seekable && $stream$jscomp$34$$.flags & 1024 && $FS$llseek$$($stream$jscomp$34$$, 0, 2);
  var $seeking$jscomp$1$$ = typeof $position$jscomp$10$$ != "undefined";
  if (!$seeking$jscomp$1$$) {
    $position$jscomp$10$$ = $stream$jscomp$34$$.position;
  } else if (!$stream$jscomp$34$$.seekable) {
    throw new $FS$ErrnoError$$(70);
  }
  $buffer$jscomp$33_bytesWritten$jscomp$1$$ = $stream$jscomp$34$$.$stream_ops$.write($stream$jscomp$34$$, $buffer$jscomp$33_bytesWritten$jscomp$1$$, $offset$jscomp$76$$, $length$jscomp$36$$, $position$jscomp$10$$, $canOwn$jscomp$3$$);
  $seeking$jscomp$1$$ || ($stream$jscomp$34$$.position += $buffer$jscomp$33_bytesWritten$jscomp$1$$);
  return $buffer$jscomp$33_bytesWritten$jscomp$1$$;
}
function $FS$init$$() {
  var $input$jscomp$14_input$jscomp$inline_88$$, $output$jscomp$3_output$jscomp$inline_89$$, $error$jscomp$5_error$jscomp$inline_90$$;
  $FS$initialized$$ = !0;
  $input$jscomp$14_input$jscomp$inline_88$$ ??= $Module$$.stdin;
  $output$jscomp$3_output$jscomp$inline_89$$ ??= $Module$$.stdout;
  $error$jscomp$5_error$jscomp$inline_90$$ ??= $Module$$.stderr;
  $input$jscomp$14_input$jscomp$inline_88$$ ? $FS$createDevice$$("/dev", "stdin", $input$jscomp$14_input$jscomp$inline_88$$) : $FS$symlink$$("/dev/tty", "/dev/stdin");
  $output$jscomp$3_output$jscomp$inline_89$$ ? $FS$createDevice$$("/dev", "stdout", null, $output$jscomp$3_output$jscomp$inline_89$$) : $FS$symlink$$("/dev/tty", "/dev/stdout");
  $error$jscomp$5_error$jscomp$inline_90$$ ? $FS$createDevice$$("/dev", "stderr", null, $error$jscomp$5_error$jscomp$inline_90$$) : $FS$symlink$$("/dev/tty1", "/dev/stderr");
  $FS$open$$("/dev/stdin", 0);
  $FS$open$$("/dev/stdout", 1);
  $FS$open$$("/dev/stderr", 1);
}
function $FS$createPath$$($parent$jscomp$22$$, $parts$jscomp$2_path$jscomp$71$$) {
  $parent$jscomp$22$$ = typeof $parent$jscomp$22$$ == "string" ? $parent$jscomp$22$$ : $FS$getPath$$($parent$jscomp$22$$);
  for ($parts$jscomp$2_path$jscomp$71$$ = $parts$jscomp$2_path$jscomp$71$$.split("/").reverse(); $parts$jscomp$2_path$jscomp$71$$.length;) {
    var $part$$ = $parts$jscomp$2_path$jscomp$71$$.pop();
    if ($part$$) {
      var $current$jscomp$3$$ = $PATH$normalize$$($parent$jscomp$22$$ + "/" + $part$$);
      try {
        $FS$mkdir$$($current$jscomp$3$$);
      } catch ($e$jscomp$23$$) {
        if ($e$jscomp$23$$.$errno$ != 20) {
          throw $e$jscomp$23$$;
        }
      }
      $parent$jscomp$22$$ = $current$jscomp$3$$;
    }
  }
  return $current$jscomp$3$$;
}
function $FS$createFile$$($parent$jscomp$23_path$jscomp$72$$, $name$jscomp$101$$, $canRead$jscomp$4$$, $canWrite$jscomp$4$$) {
  $parent$jscomp$23_path$jscomp$72$$ = $PATH$normalize$$((typeof $parent$jscomp$23_path$jscomp$72$$ == "string" ? $parent$jscomp$23_path$jscomp$72$$ : $FS$getPath$$($parent$jscomp$23_path$jscomp$72$$)) + "/" + $name$jscomp$101$$);
  return $FS$create$$($parent$jscomp$23_path$jscomp$72$$, $FS_getMode$$($canRead$jscomp$4$$, $canWrite$jscomp$4$$));
}
function $FS$createDataFile$$($mode$jscomp$51_parent$jscomp$24$$, $name$jscomp$102_stream$jscomp$43$$, $data$jscomp$96_data$jscomp$inline_92$$, $canRead$jscomp$5$$, $canWrite$jscomp$5$$, $canOwn$jscomp$4$$) {
  var $node$jscomp$48_path$jscomp$73$$ = $name$jscomp$102_stream$jscomp$43$$;
  $mode$jscomp$51_parent$jscomp$24$$ && ($mode$jscomp$51_parent$jscomp$24$$ = typeof $mode$jscomp$51_parent$jscomp$24$$ == "string" ? $mode$jscomp$51_parent$jscomp$24$$ : $FS$getPath$$($mode$jscomp$51_parent$jscomp$24$$), $node$jscomp$48_path$jscomp$73$$ = $name$jscomp$102_stream$jscomp$43$$ ? $PATH$normalize$$($mode$jscomp$51_parent$jscomp$24$$ + "/" + $name$jscomp$102_stream$jscomp$43$$) : $mode$jscomp$51_parent$jscomp$24$$);
  $mode$jscomp$51_parent$jscomp$24$$ = $FS_getMode$$($canRead$jscomp$5$$, $canWrite$jscomp$5$$);
  $node$jscomp$48_path$jscomp$73$$ = $FS$create$$($node$jscomp$48_path$jscomp$73$$, $mode$jscomp$51_parent$jscomp$24$$);
  $data$jscomp$96_data$jscomp$inline_92$$ && (typeof $data$jscomp$96_data$jscomp$inline_92$$ == "string" && ($data$jscomp$96_data$jscomp$inline_92$$ = $intArrayFromString$$($data$jscomp$96_data$jscomp$inline_92$$)), $data$jscomp$96_data$jscomp$inline_92$$.subarray || ($data$jscomp$96_data$jscomp$inline_92$$ = new Uint8Array($data$jscomp$96_data$jscomp$inline_92$$)), $FS$chmod$$($node$jscomp$48_path$jscomp$73$$, $mode$jscomp$51_parent$jscomp$24$$ | 146), $name$jscomp$102_stream$jscomp$43$$ = $FS$open$$($node$jscomp$48_path$jscomp$73$$, 
  577), $FS$write$$($name$jscomp$102_stream$jscomp$43$$, $data$jscomp$96_data$jscomp$inline_92$$, 0, $data$jscomp$96_data$jscomp$inline_92$$.length, 0, $canOwn$jscomp$4$$), $FS$close$$($name$jscomp$102_stream$jscomp$43$$), $FS$chmod$$($node$jscomp$48_path$jscomp$73$$, $mode$jscomp$51_parent$jscomp$24$$));
}
function $FS$createDevice$$($parent$jscomp$25_path$jscomp$74$$, $mode$jscomp$52_name$jscomp$103$$, $input$jscomp$15$$, $output$jscomp$4$$) {
  $parent$jscomp$25_path$jscomp$74$$ = $PATH$normalize$$((typeof $parent$jscomp$25_path$jscomp$74$$ == "string" ? $parent$jscomp$25_path$jscomp$74$$ : $FS$getPath$$($parent$jscomp$25_path$jscomp$74$$)) + "/" + $mode$jscomp$52_name$jscomp$103$$);
  $mode$jscomp$52_name$jscomp$103$$ = $FS_getMode$$(!!$input$jscomp$15$$, !!$output$jscomp$4$$);
  $FS$createDevice$$.$major$ ?? ($FS$createDevice$$.$major$ = 64);
  var $dev$jscomp$9$$ = $FS$createDevice$$.$major$++ << 8 | 0;
  $FS$registerDevice$$($dev$jscomp$9$$, {open($stream$jscomp$44$$) {
    $stream$jscomp$44$$.seekable = !1;
  }, close() {
    $output$jscomp$4$$?.buffer?.length && $output$jscomp$4$$(10);
  }, read($stream$jscomp$46$$, $buffer$jscomp$36$$, $offset$jscomp$79$$, $length$jscomp$41$$) {
    for (var $bytesRead$jscomp$3$$ = 0, $i$jscomp$16$$ = 0; $i$jscomp$16$$ < $length$jscomp$41$$; $i$jscomp$16$$++) {
      try {
        var $result$jscomp$6$$ = $input$jscomp$15$$();
      } catch ($e$jscomp$24$$) {
        throw new $FS$ErrnoError$$(29);
      }
      if ($result$jscomp$6$$ === void 0 && $bytesRead$jscomp$3$$ === 0) {
        throw new $FS$ErrnoError$$(6);
      }
      if ($result$jscomp$6$$ === null || $result$jscomp$6$$ === void 0) {
        break;
      }
      $bytesRead$jscomp$3$$++;
      $buffer$jscomp$36$$[$offset$jscomp$79$$ + $i$jscomp$16$$] = $result$jscomp$6$$;
    }
    $bytesRead$jscomp$3$$ && ($stream$jscomp$46$$.node.atime = Date.now());
    return $bytesRead$jscomp$3$$;
  }, write($stream$jscomp$47$$, $buffer$jscomp$37$$, $offset$jscomp$80$$, $length$jscomp$42$$) {
    for (var $i$jscomp$17$$ = 0; $i$jscomp$17$$ < $length$jscomp$42$$; $i$jscomp$17$$++) {
      try {
        $output$jscomp$4$$($buffer$jscomp$37$$[$offset$jscomp$80$$ + $i$jscomp$17$$]);
      } catch ($e$jscomp$25$$) {
        throw new $FS$ErrnoError$$(29);
      }
    }
    $length$jscomp$42$$ && ($stream$jscomp$47$$.node.mtime = $stream$jscomp$47$$.node.ctime = Date.now());
    return $i$jscomp$17$$;
  }});
  return $FS$mkdev$$($parent$jscomp$25_path$jscomp$74$$, $mode$jscomp$52_name$jscomp$103$$, $dev$jscomp$9$$);
}
function $FS$forceLoadFile$$($obj$jscomp$32$$) {
  if (!($obj$jscomp$32$$.$isDevice$ || $obj$jscomp$32$$.$isFolder$ || $obj$jscomp$32$$.link || $obj$jscomp$32$$.$contents$)) {
    if (globalThis.XMLHttpRequest) {
      $abort$$("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    } else {
      try {
        $obj$jscomp$32$$.$contents$ = $readBinary$$($obj$jscomp$32$$.url);
      } catch ($e$jscomp$26$$) {
        throw new $FS$ErrnoError$$(29);
      }
    }
  }
}
function $FS$createLazyFile$$($parent$jscomp$26_stream_ops$$, $name$jscomp$104$$, $url$jscomp$33$$, $canRead$jscomp$6$$, $canWrite$jscomp$6$$) {
  function $writeChunks$$($contents$jscomp$8_stream$jscomp$48$$, $buffer$jscomp$38$$, $offset$jscomp$81$$, $length$jscomp$43_size$jscomp$27$$, $position$jscomp$12$$) {
    $contents$jscomp$8_stream$jscomp$48$$ = $contents$jscomp$8_stream$jscomp$48$$.node.$contents$;
    if ($position$jscomp$12$$ >= $contents$jscomp$8_stream$jscomp$48$$.length) {
      return 0;
    }
    $length$jscomp$43_size$jscomp$27$$ = Math.min($contents$jscomp$8_stream$jscomp$48$$.length - $position$jscomp$12$$, $length$jscomp$43_size$jscomp$27$$);
    if ($contents$jscomp$8_stream$jscomp$48$$.slice) {
      for (var $i$jscomp$18$$ = 0; $i$jscomp$18$$ < $length$jscomp$43_size$jscomp$27$$; $i$jscomp$18$$++) {
        $buffer$jscomp$38$$[$offset$jscomp$81$$ + $i$jscomp$18$$] = $contents$jscomp$8_stream$jscomp$48$$[$position$jscomp$12$$ + $i$jscomp$18$$];
      }
    } else {
      for ($i$jscomp$18$$ = 0; $i$jscomp$18$$ < $length$jscomp$43_size$jscomp$27$$; $i$jscomp$18$$++) {
        $buffer$jscomp$38$$[$offset$jscomp$81$$ + $i$jscomp$18$$] = $contents$jscomp$8_stream$jscomp$48$$.get($position$jscomp$12$$ + $i$jscomp$18$$);
      }
    }
    return $length$jscomp$43_size$jscomp$27$$;
  }
  class $LazyUint8Array$$ {
    $i$ = !1;
    $g$ = [];
    $h$ = void 0;
    $l$ = 0;
    $j$ = 0;
    get($idx$jscomp$3$$) {
      if (!($idx$jscomp$3$$ > this.length - 1 || $idx$jscomp$3$$ < 0)) {
        var $chunkOffset$$ = $idx$jscomp$3$$ % this.chunkSize;
        return this.$h$($idx$jscomp$3$$ / this.chunkSize | 0)[$chunkOffset$$];
      }
    }
    $o$($getter$$) {
      this.$h$ = $getter$$;
    }
    $m$() {
      var $usesGzip_xhr$jscomp$2$$ = new XMLHttpRequest();
      $usesGzip_xhr$jscomp$2$$.open("HEAD", $url$jscomp$33$$, !1);
      $usesGzip_xhr$jscomp$2$$.send(null);
      $usesGzip_xhr$jscomp$2$$.status >= 200 && $usesGzip_xhr$jscomp$2$$.status < 300 || $usesGzip_xhr$jscomp$2$$.status === 304 || $abort$$("Couldn't load " + $url$jscomp$33$$ + ". Status: " + $usesGzip_xhr$jscomp$2$$.status);
      var $datalength$$ = Number($usesGzip_xhr$jscomp$2$$.getResponseHeader("Content-length")), $header$jscomp$2$$, $hasByteServing$$ = ($header$jscomp$2$$ = $usesGzip_xhr$jscomp$2$$.getResponseHeader("Accept-Ranges")) && $header$jscomp$2$$ === "bytes";
      $usesGzip_xhr$jscomp$2$$ = ($header$jscomp$2$$ = $usesGzip_xhr$jscomp$2$$.getResponseHeader("Content-Encoding")) && $header$jscomp$2$$ === "gzip";
      var $chunkSize$$ = 1048576;
      $hasByteServing$$ || ($chunkSize$$ = $datalength$$);
      var $lazyArray$jscomp$1$$ = this;
      $lazyArray$jscomp$1$$.$o$($chunkNum$jscomp$1$$ => {
        var $JSCompiler_inline_result$jscomp$9_start$jscomp$24$$ = $chunkNum$jscomp$1$$ * $chunkSize$$, $end$jscomp$21_to$jscomp$inline_95$$ = ($chunkNum$jscomp$1$$ + 1) * $chunkSize$$ - 1;
        $end$jscomp$21_to$jscomp$inline_95$$ = Math.min($end$jscomp$21_to$jscomp$inline_95$$, $datalength$$ - 1);
        if (typeof $lazyArray$jscomp$1$$.$g$[$chunkNum$jscomp$1$$] == "undefined") {
          var $JSCompiler_temp_const$jscomp$8$$ = $lazyArray$jscomp$1$$.$g$;
          $JSCompiler_inline_result$jscomp$9_start$jscomp$24$$ > $end$jscomp$21_to$jscomp$inline_95$$ && $abort$$(`invalid range (${$JSCompiler_inline_result$jscomp$9_start$jscomp$24$$}, ${$end$jscomp$21_to$jscomp$inline_95$$}) or no bytes requested!`);
          $end$jscomp$21_to$jscomp$inline_95$$ > $datalength$$ - 1 && $abort$$(`only ${$datalength$$} bytes available! programmer error!`);
          var $xhr$jscomp$inline_96$$ = new XMLHttpRequest();
          $xhr$jscomp$inline_96$$.open("GET", $url$jscomp$33$$, !1);
          $datalength$$ !== $chunkSize$$ && $xhr$jscomp$inline_96$$.setRequestHeader("Range", "bytes=" + $JSCompiler_inline_result$jscomp$9_start$jscomp$24$$ + "-" + $end$jscomp$21_to$jscomp$inline_95$$);
          $xhr$jscomp$inline_96$$.responseType = "arraybuffer";
          $xhr$jscomp$inline_96$$.overrideMimeType && $xhr$jscomp$inline_96$$.overrideMimeType("text/plain; charset=x-user-defined");
          $xhr$jscomp$inline_96$$.send(null);
          $xhr$jscomp$inline_96$$.status >= 200 && $xhr$jscomp$inline_96$$.status < 300 || $xhr$jscomp$inline_96$$.status === 304 || $abort$$("Couldn't load " + $url$jscomp$33$$ + ". Status: " + $xhr$jscomp$inline_96$$.status);
          $JSCompiler_inline_result$jscomp$9_start$jscomp$24$$ = $xhr$jscomp$inline_96$$.response !== void 0 ? new Uint8Array($xhr$jscomp$inline_96$$.response || []) : $intArrayFromString$$($xhr$jscomp$inline_96$$.responseText ?? "");
          $JSCompiler_temp_const$jscomp$8$$[$chunkNum$jscomp$1$$] = $JSCompiler_inline_result$jscomp$9_start$jscomp$24$$;
        }
        typeof $lazyArray$jscomp$1$$.$g$[$chunkNum$jscomp$1$$] == "undefined" && $abort$$("doXHR failed!");
        return $lazyArray$jscomp$1$$.$g$[$chunkNum$jscomp$1$$];
      });
      if ($usesGzip_xhr$jscomp$2$$ || !$datalength$$) {
        $chunkSize$$ = $datalength$$ = 1, $chunkSize$$ = $datalength$$ = this.$h$(0).length, $out$$("LazyFiles on gzip forces download of the whole file when length is accessed");
      }
      this.$l$ = $datalength$$;
      this.$j$ = $chunkSize$$;
      this.$i$ = !0;
    }
    get length() {
      this.$i$ || this.$m$();
      return this.$l$;
    }
    get chunkSize() {
      this.$i$ || this.$m$();
      return this.$j$;
    }
  }
  if (globalThis.XMLHttpRequest) {
    $ENVIRONMENT_IS_WORKER$$ || $abort$$("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
    var $JSCompiler_object_inline_contents_261$$ = new $LazyUint8Array$$();
    var $JSCompiler_object_inline_url_262$$ = void 0;
  } else {
    $JSCompiler_object_inline_url_262$$ = $url$jscomp$33$$, $JSCompiler_object_inline_contents_261$$ = void 0;
  }
  var $node$jscomp$49$$ = $FS$createFile$$($parent$jscomp$26_stream_ops$$, $name$jscomp$104$$, $canRead$jscomp$6$$, $canWrite$jscomp$6$$);
  $JSCompiler_object_inline_contents_261$$ ? $node$jscomp$49$$.$contents$ = $JSCompiler_object_inline_contents_261$$ : $JSCompiler_object_inline_url_262$$ && ($node$jscomp$49$$.$contents$ = null, $node$jscomp$49$$.url = $JSCompiler_object_inline_url_262$$);
  Object.defineProperties($node$jscomp$49$$, {$usedBytes$:{get:function() {
    return this.$contents$.length;
  }}});
  $parent$jscomp$26_stream_ops$$ = {};
  for (let [$key$jscomp$42$$, $fn$jscomp$4$$] of Object.entries($node$jscomp$49$$.$stream_ops$)) {
    $parent$jscomp$26_stream_ops$$[$key$jscomp$42$$] = (...$args$jscomp$12$$) => {
      $FS$forceLoadFile$$($node$jscomp$49$$);
      return $fn$jscomp$4$$(...$args$jscomp$12$$);
    };
  }
  $parent$jscomp$26_stream_ops$$.read = ($stream$jscomp$49$$, $buffer$jscomp$39$$, $offset$jscomp$82$$, $length$jscomp$44$$, $position$jscomp$13$$) => {
    $FS$forceLoadFile$$($node$jscomp$49$$);
    return $writeChunks$$($stream$jscomp$49$$, $buffer$jscomp$39$$, $offset$jscomp$82$$, $length$jscomp$44$$, $position$jscomp$13$$);
  };
  $parent$jscomp$26_stream_ops$$.$mmap$ = ($stream$jscomp$50$$, $length$jscomp$45$$, $position$jscomp$14$$) => {
    $FS$forceLoadFile$$($node$jscomp$49$$);
    var $ptr$jscomp$6$$ = $mmapAlloc$$($length$jscomp$45$$);
    if (!$ptr$jscomp$6$$) {
      throw new $FS$ErrnoError$$(48);
    }
    $writeChunks$$($stream$jscomp$50$$, $HEAP8$$, $ptr$jscomp$6$$, $length$jscomp$45$$, $position$jscomp$14$$);
    return {$ptr$:$ptr$jscomp$6$$, $allocated$:!0};
  };
  $node$jscomp$49$$.$stream_ops$ = $parent$jscomp$26_stream_ops$$;
  return $node$jscomp$49$$;
}
var $FS$$ = {}, $SYSCALLS$varargs$$ = void 0, $_emscripten_set_main_loop_timing$$ = ($mode$jscomp$54$$, $value$jscomp$194$$) => {
  $MainLoop$timingMode$$ = $mode$jscomp$54$$;
  $MainLoop$timingValue$$ = $value$jscomp$194$$;
  if ($MainLoop$func$$) {
    if ($MainLoop$running$$ ||= !0, $mode$jscomp$54$$ == 0) {
      $MainLoop$scheduler$$ = function() {
        setTimeout($MainLoop$runner$$, Math.max(0, $MainLoop$tickStartTime$$ + $value$jscomp$194$$ - performance.now()) | 0);
      };
    } else if ($mode$jscomp$54$$ == 1) {
      $MainLoop$scheduler$$ = function() {
        $MainLoop$requestAnimationFrame$$($MainLoop$runner$$);
      };
    } else {
      if (!$MainLoop$setImmediate$$) {
        if (globalThis.scheduler) {
          $MainLoop$setImmediate$$ = scheduler.postTask.bind(scheduler);
        } else if (globalThis.setImmediate) {
          $MainLoop$setImmediate$$ = setImmediate;
        } else {
          var $setImmediates$$ = [];
          addEventListener("message", $event$jscomp$16$$ => {
            $event$jscomp$16$$.data === "setimmediate" && ($event$jscomp$16$$.stopPropagation(), $setImmediates$$.shift()());
          }, !0);
          $MainLoop$setImmediate$$ = $func$jscomp$8$$ => {
            $setImmediates$$.push($func$jscomp$8$$);
            $ENVIRONMENT_IS_WORKER$$ ? postMessage("setimmediate") : postMessage("setimmediate", "*");
          };
        }
      }
      $MainLoop$scheduler$$ = function() {
        $MainLoop$setImmediate$$($MainLoop$runner$$);
      };
    }
  }
}, $_proc_exit$$ = $code$jscomp$7$$ => {
  $EXITSTATUS$$ = $code$jscomp$7$$;
  $noExitRuntime$$ || ($Module$$.onExit?.($code$jscomp$7$$), $ABORT$$ = !0);
  $quit_$$($code$jscomp$7$$, new $ExitStatus$$($code$jscomp$7$$));
}, $handleException$$ = $e$jscomp$31$$ => {
  $e$jscomp$31$$ instanceof $ExitStatus$$ || $e$jscomp$31$$ == "unwind" || $quit_$$(1, $e$jscomp$31$$);
}, $maybeExit$$ = () => {
  if (!$noExitRuntime$$) {
    try {
      var $status$jscomp$inline_98$$ = $EXITSTATUS$$;
      $EXITSTATUS$$ = $status$jscomp$inline_98$$;
      $_proc_exit$$($status$jscomp$inline_98$$);
    } catch ($e$jscomp$32$$) {
      $handleException$$($e$jscomp$32$$);
    }
  }
}, $setMainLoop$$ = ($iterFunc$$, $fps$$, $simulateInfiniteLoop$$, $arg$jscomp$14$$, $noSetTiming$$) => {
  function $checkIsRunning$$() {
    return $thisMainLoopId$$ < $MainLoop$currentlyRunningMainloop$$ ? ($maybeExit$$(), !1) : !0;
  }
  $MainLoop$func$$ = $iterFunc$$;
  $MainLoop$arg$$ = $arg$jscomp$14$$;
  var $thisMainLoopId$$ = $MainLoop$currentlyRunningMainloop$$;
  $MainLoop$running$$ = !1;
  $MainLoop$runner$$ = function() {
    if (!$ABORT$$) {
      if ($MainLoop$queue$$.length > 0) {
        var $blocker_message$jscomp$inline_100_pre$jscomp$inline_105$$ = $MainLoop$queue$$.shift();
        $blocker_message$jscomp$inline_100_pre$jscomp$inline_105$$.$func$($blocker_message$jscomp$inline_100_pre$jscomp$inline_105$$.$arg$);
        if ($MainLoop$remainingBlockers$$) {
          var $post$jscomp$inline_106_remaining_remaining$jscomp$inline_101$$ = $MainLoop$remainingBlockers$$, $expected$jscomp$inline_102_next$jscomp$1$$ = $post$jscomp$inline_106_remaining_remaining$jscomp$inline_101$$ % 1 == 0 ? $post$jscomp$inline_106_remaining_remaining$jscomp$inline_101$$ - 1 : Math.floor($post$jscomp$inline_106_remaining_remaining$jscomp$inline_101$$);
          $MainLoop$remainingBlockers$$ = $blocker_message$jscomp$inline_100_pre$jscomp$inline_105$$.$counted$ ? $expected$jscomp$inline_102_next$jscomp$1$$ : (8 * $post$jscomp$inline_106_remaining_remaining$jscomp$inline_101$$ + ($expected$jscomp$inline_102_next$jscomp$1$$ + 0.5)) / 9;
        }
        $Module$$.setStatus && ($blocker_message$jscomp$inline_100_pre$jscomp$inline_105$$ = $Module$$.statusMessage || "Please wait...", $post$jscomp$inline_106_remaining_remaining$jscomp$inline_101$$ = $MainLoop$remainingBlockers$$ ?? 0, $expected$jscomp$inline_102_next$jscomp$1$$ = $MainLoop$$.$expectedBlockers$ ?? 0, $post$jscomp$inline_106_remaining_remaining$jscomp$inline_101$$ ? $post$jscomp$inline_106_remaining_remaining$jscomp$inline_101$$ < $expected$jscomp$inline_102_next$jscomp$1$$ ? 
        $Module$$.setStatus("{message} ({expected - remaining}/{expected})") : $Module$$.setStatus($blocker_message$jscomp$inline_100_pre$jscomp$inline_105$$) : $Module$$.setStatus(""));
        $checkIsRunning$$() && setTimeout($MainLoop$runner$$, 0);
      } else {
        if ($checkIsRunning$$()) {
          if ($MainLoop$currentFrameNumber$$ = $MainLoop$currentFrameNumber$$ + 1 | 0, $MainLoop$timingMode$$ == 1 && $MainLoop$timingValue$$ > 1 && $MainLoop$currentFrameNumber$$ % $MainLoop$timingValue$$ != 0) {
            $MainLoop$scheduler$$();
          } else {
            $MainLoop$timingMode$$ == 0 && ($MainLoop$tickStartTime$$ = performance.now());
            a: {
              if (!$ABORT$$) {
                for ($blocker_message$jscomp$inline_100_pre$jscomp$inline_105$$ of $MainLoop$preMainLoop$$) {
                  if ($blocker_message$jscomp$inline_100_pre$jscomp$inline_105$$() === !1) {
                    break a;
                  }
                }
                if (!$ABORT$$) {
                  try {
                    $iterFunc$$();
                  } catch ($e$jscomp$inline_284$$) {
                    $handleException$$($e$jscomp$inline_284$$);
                  } finally {
                    $maybeExit$$();
                  }
                }
                for ($post$jscomp$inline_106_remaining_remaining$jscomp$inline_101$$ of $MainLoop$postMainLoop$$) {
                  $post$jscomp$inline_106_remaining_remaining$jscomp$inline_101$$();
                }
              }
            }
            $checkIsRunning$$() && $MainLoop$scheduler$$();
          }
        }
      }
    }
  };
  $noSetTiming$$ || ($fps$$ > 0 ? $_emscripten_set_main_loop_timing$$(0, 1000.0 / $fps$$) : $_emscripten_set_main_loop_timing$$(1, 1), $MainLoop$scheduler$$());
  if ($simulateInfiniteLoop$$) {
    throw "unwind";
  }
}, $MainLoop$running$$ = !1, $MainLoop$scheduler$$ = null, $MainLoop$currentlyRunningMainloop$$ = 0, $MainLoop$func$$ = null, $MainLoop$arg$$ = 0, $MainLoop$timingMode$$ = 0, $MainLoop$timingValue$$ = 0, $MainLoop$currentFrameNumber$$ = 0, $MainLoop$queue$$ = [], $MainLoop$preMainLoop$$ = [], $MainLoop$postMainLoop$$ = [];
function $MainLoop$pause$$() {
  $MainLoop$scheduler$$ = null;
  $MainLoop$currentlyRunningMainloop$$++;
}
var $MainLoop$nextRAF$$ = 0;
function $MainLoop$requestAnimationFrame$$($func$jscomp$13$$) {
  if (globalThis.requestAnimationFrame) {
    requestAnimationFrame($func$jscomp$13$$);
  } else {
    var $now$jscomp$inline_109$$ = Date.now();
    if ($MainLoop$nextRAF$$ === 0) {
      $MainLoop$nextRAF$$ = $now$jscomp$inline_109$$ + 1000 / 60;
    } else {
      for (; $now$jscomp$inline_109$$ + 2 >= $MainLoop$nextRAF$$;) {
        $MainLoop$nextRAF$$ += 1000 / 60;
      }
    }
    setTimeout($func$jscomp$13$$, Math.max($MainLoop$nextRAF$$ - $now$jscomp$inline_109$$, 0));
  }
}
var $MainLoop$$ = {}, $MainLoop$tickStartTime$$, $MainLoop$runner$$, $MainLoop$setImmediate$$, $MainLoop$remainingBlockers$$, $specialHTMLTargets$$ = [0, globalThis.document ?? 0, globalThis.window ?? 0], $findEventTarget$$ = $cString$jscomp$inline_111_target$jscomp$92$$ => {
  $cString$jscomp$inline_111_target$jscomp$92$$ = $cString$jscomp$inline_111_target$jscomp$92$$ > 2 ? $cString$jscomp$inline_111_target$jscomp$92$$ ? $UTF8ArrayToString$$($HEAPU8$$, $cString$jscomp$inline_111_target$jscomp$92$$) : "" : $cString$jscomp$inline_111_target$jscomp$92$$;
  return $specialHTMLTargets$$[$cString$jscomp$inline_111_target$jscomp$92$$] || globalThis.document?.querySelector($cString$jscomp$inline_111_target$jscomp$92$$);
}, $getBoundingClientRect$$ = $e$jscomp$34$$ => $specialHTMLTargets$$.indexOf($e$jscomp$34$$) < 0 ? $e$jscomp$34$$.getBoundingClientRect() : {left:0, top:0}, $wasmTableMirror$$ = [], $getWasmTableEntry$$ = $funcPtr$$ => {
  var $func$jscomp$14$$ = $wasmTableMirror$$[$funcPtr$$];
  $func$jscomp$14$$ || ($wasmTableMirror$$[$funcPtr$$] = $func$jscomp$14$$ = $wasmTable$$.get($funcPtr$$));
  return $func$jscomp$14$$;
};
function $JSCompiler_StaticMethods__removeHandler$$($i$jscomp$22$$) {
  var $h$jscomp$9$$ = $JSEvents$$.$eventHandlers$[$i$jscomp$22$$];
  $h$jscomp$9$$.target.removeEventListener($h$jscomp$9$$.$eventTypeString$, $h$jscomp$9$$.$eventListenerFunc$, $h$jscomp$9$$.$useCapture$);
  $JSEvents$$.$eventHandlers$.splice($i$jscomp$22$$, 1);
}
function $JSCompiler_StaticMethods_runDeferredCalls$$() {
  if (navigator.userActivation ? navigator.userActivation.isActive : $JSEvents$$.$inEventHandler$ && $JSEvents$$.$currentEventHandler$.$allowsDeferredCalls$) {
    var $deferredCalls$$ = $JSEvents$$.$deferredCalls$;
    $JSEvents$$.$deferredCalls$ = [];
    for (var $call$jscomp$2$$ of $deferredCalls$$) {
      $call$jscomp$2$$.$targetFunction$(...$call$jscomp$2$$.$argsList$);
    }
  }
}
function $JSCompiler_StaticMethods_registerOrRemoveHandler$$($eventHandler$$) {
  if (!$eventHandler$$.target) {
    return -4;
  }
  if ($eventHandler$$.$callbackfunc$) {
    $eventHandler$$.$eventListenerFunc$ = function($event$jscomp$17$$) {
      ++$JSEvents$$.$inEventHandler$;
      $JSEvents$$.$currentEventHandler$ = $eventHandler$$;
      $JSCompiler_StaticMethods_runDeferredCalls$$();
      $eventHandler$$.$handlerFunc$($event$jscomp$17$$);
      $JSCompiler_StaticMethods_runDeferredCalls$$();
      --$JSEvents$$.$inEventHandler$;
    }, $eventHandler$$.target.addEventListener($eventHandler$$.$eventTypeString$, $eventHandler$$.$eventListenerFunc$, $eventHandler$$.$useCapture$), $JSEvents$$.$eventHandlers$.push($eventHandler$$);
  } else {
    for (var $i$jscomp$23$$ = 0; $i$jscomp$23$$ < $JSEvents$$.$eventHandlers$.length; ++$i$jscomp$23$$) {
      $JSEvents$$.$eventHandlers$[$i$jscomp$23$$].target == $eventHandler$$.target && $JSEvents$$.$eventHandlers$[$i$jscomp$23$$].$eventTypeString$ == $eventHandler$$.$eventTypeString$ && $JSCompiler_StaticMethods__removeHandler$$($i$jscomp$23$$--);
    }
  }
  return 0;
}
function $JSCompiler_StaticMethods_getNodeNameForTarget$$($target$jscomp$95$$) {
  return $target$jscomp$95$$ == window ? "#window" : $target$jscomp$95$$ == screen ? "#screen" : $target$jscomp$95$$?.nodeName ?? "";
}
var $JSEvents$$ = {$batteryEvent$:0, $gamepadEvent$:0, $keyEvent$:0, $mouseEvent$:0, $wheelEvent$:0, $uiEvent$:0, $focusEvent$:0, $deviceOrientationEvent$:0, $orientationChangeEvent$:0, $deviceMotionEvent$:0, $fullscreenChangeEvent$:0, $pointerlockChangeEvent$:0, $visibilityChangeEvent$:0, $touchEvent$:0, $removeAllEventListeners$() {
  for (; $JSEvents$$.$eventHandlers$.length;) {
    $JSCompiler_StaticMethods__removeHandler$$($JSEvents$$.$eventHandlers$.length - 1);
  }
  $JSEvents$$.$deferredCalls$ = [];
}, $inEventHandler$:0, $deferredCalls$:[], $deferCall$($targetFunction$$, $precedence$$, $argsList$$) {
  function $arraysHaveEqualContent$$($arrA$$, $arrB$$) {
    if ($arrA$$.length != $arrB$$.length) {
      return !1;
    }
    for (var $i$jscomp$20$$ in $arrA$$) {
      if ($arrA$$[$i$jscomp$20$$] != $arrB$$[$i$jscomp$20$$]) {
        return !1;
      }
    }
    return !0;
  }
  for (var $call$$ of $JSEvents$$.$deferredCalls$) {
    if ($call$$.$targetFunction$ == $targetFunction$$ && $arraysHaveEqualContent$$($call$$.$argsList$, $argsList$$)) {
      return;
    }
  }
  $JSEvents$$.$deferredCalls$.push({$targetFunction$:$targetFunction$$, $precedence$:$precedence$$, $argsList$:$argsList$$});
  $JSEvents$$.$deferredCalls$.sort(($x$jscomp$95$$, $y$jscomp$81$$) => $x$jscomp$95$$.$precedence$ - $y$jscomp$81$$.$precedence$);
}, $removeDeferredCalls$($targetFunction$jscomp$1$$) {
  $JSEvents$$.$deferredCalls$ = $JSEvents$$.$deferredCalls$.filter($call$jscomp$1$$ => $call$jscomp$1$$.$targetFunction$ != $targetFunction$jscomp$1$$);
}, $eventHandlers$:[], $removeAllHandlersOnTarget$:($target$jscomp$94$$, $eventTypeString$$) => {
  for (var $i$jscomp$21$$ = 0; $i$jscomp$21$$ < $JSEvents$$.$eventHandlers$.length; ++$i$jscomp$21$$) {
    $JSEvents$$.$eventHandlers$[$i$jscomp$21$$].target != $target$jscomp$94$$ || $eventTypeString$$ && $eventTypeString$$ != $JSEvents$$.$eventHandlers$[$i$jscomp$21$$].$eventTypeString$ || $JSCompiler_StaticMethods__removeHandler$$($i$jscomp$21$$--);
  }
}, $removeSingleHandler$($eventHandler$jscomp$1$$) {
  var $success$$ = !1;
  for (let $i$jscomp$24$$ = 0; $i$jscomp$24$$ < $JSEvents$$.$eventHandlers$.length; ++$i$jscomp$24$$) {
    let $handler$jscomp$3$$ = $JSEvents$$.$eventHandlers$[$i$jscomp$24$$];
    $handler$jscomp$3$$.target === $eventHandler$jscomp$1$$.target && $handler$jscomp$3$$.$eventTypeId$ === $eventHandler$jscomp$1$$.$eventTypeId$ && $handler$jscomp$3$$.$callbackfunc$ === $eventHandler$jscomp$1$$.$callbackfunc$ && $handler$jscomp$3$$.$userData$ === $eventHandler$jscomp$1$$.$userData$ && ($JSCompiler_StaticMethods__removeHandler$$($i$jscomp$24$$--), $success$$ = !0);
  }
  return $success$$ ? 0 : -5;
}, fullscreenEnabled() {
  return document.fullscreenEnabled || document.webkitFullscreenEnabled;
}}, $registerFocusEventCallback$$ = ($eventHandler$jscomp$2_target$jscomp$96$$, $userData$jscomp$1$$, $useCapture$$, $callbackfunc$$, $eventTypeId$$, $eventTypeString$jscomp$1$$) => {
  $JSEvents$$.$focusEvent$ || ($JSEvents$$.$focusEvent$ = $_malloc$$(256));
  $eventHandler$jscomp$2_target$jscomp$96$$ = {target:$findEventTarget$$($eventHandler$jscomp$2_target$jscomp$96$$), $eventTypeString$:$eventTypeString$jscomp$1$$, $eventTypeId$:$eventTypeId$$, $userData$:$userData$jscomp$1$$, $callbackfunc$:$callbackfunc$$, $handlerFunc$:$e$jscomp$36$$ => {
    var $id$jscomp$12$$ = $e$jscomp$36$$.target.id ?? "", $focusEvent$$ = $JSEvents$$.$focusEvent$;
    $stringToUTF8Array$$($JSCompiler_StaticMethods_getNodeNameForTarget$$($e$jscomp$36$$.target), $HEAPU8$$, $focusEvent$$ + 0, 128);
    $stringToUTF8Array$$($id$jscomp$12$$, $HEAPU8$$, $focusEvent$$ + 128, 128);
    $getWasmTableEntry$$($callbackfunc$$)($eventTypeId$$, $focusEvent$$, $userData$jscomp$1$$) && $e$jscomp$36$$.preventDefault();
  }, $useCapture$:$useCapture$$};
  return $JSCompiler_StaticMethods_registerOrRemoveHandler$$($eventHandler$jscomp$2_target$jscomp$96$$);
}, $registerFullscreenChangeEventCallback$$ = ($target$jscomp$100$$, $userData$jscomp$4$$, $useCapture$jscomp$3$$, $callbackfunc$jscomp$3$$, $eventTypeString$jscomp$2$$) => {
  $JSEvents$$.$fullscreenChangeEvent$ || ($JSEvents$$.$fullscreenChangeEvent$ = $_malloc$$(276));
  return $JSCompiler_StaticMethods_registerOrRemoveHandler$$({target:$target$jscomp$100$$, $eventTypeString$:$eventTypeString$jscomp$2$$, $eventTypeId$:19, $userData$:$userData$jscomp$4$$, $callbackfunc$:$callbackfunc$jscomp$3$$, $handlerFunc$:$e$jscomp$37$$ => {
    var $fullscreenChangeEvent$$ = $JSEvents$$.$fullscreenChangeEvent$, $fullscreenElement$jscomp$inline_116$$ = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement || document.msFullscreenElement, $isFullscreen$jscomp$inline_117$$ = !!$fullscreenElement$jscomp$inline_116$$;
    $HEAP8$$[$fullscreenChangeEvent$$] = $isFullscreen$jscomp$inline_117$$;
    $HEAP8$$[$fullscreenChangeEvent$$ + 1] = $JSEvents$$.fullscreenEnabled();
    var $reportedElement$jscomp$inline_118$$ = $isFullscreen$jscomp$inline_117$$ ? $fullscreenElement$jscomp$inline_116$$ : $JSEvents$$.$previousFullscreenElement$, $id$jscomp$inline_119$$ = $reportedElement$jscomp$inline_118$$?.id ?? "";
    $stringToUTF8Array$$($JSCompiler_StaticMethods_getNodeNameForTarget$$($reportedElement$jscomp$inline_118$$), $HEAPU8$$, $fullscreenChangeEvent$$ + 2, 128);
    $stringToUTF8Array$$($id$jscomp$inline_119$$, $HEAPU8$$, $fullscreenChangeEvent$$ + 130, 128);
    $HEAP32$$[$fullscreenChangeEvent$$ + 260 >> 2] = $reportedElement$jscomp$inline_118$$?.clientWidth ?? 0;
    $HEAP32$$[$fullscreenChangeEvent$$ + 264 >> 2] = $reportedElement$jscomp$inline_118$$?.clientHeight ?? 0;
    $HEAP32$$[$fullscreenChangeEvent$$ + 268 >> 2] = screen.width;
    $HEAP32$$[$fullscreenChangeEvent$$ + 272 >> 2] = screen.height;
    $isFullscreen$jscomp$inline_117$$ && ($JSEvents$$.$previousFullscreenElement$ = $fullscreenElement$jscomp$inline_116$$);
    $getWasmTableEntry$$($callbackfunc$jscomp$3$$)(19, $fullscreenChangeEvent$$, $userData$jscomp$4$$) && $e$jscomp$37$$.preventDefault();
  }, $useCapture$:$useCapture$jscomp$3$$});
}, $registerKeyEventCallback$$ = ($eventHandler$jscomp$4_target$jscomp$102$$, $userData$jscomp$6$$, $useCapture$jscomp$5$$, $callbackfunc$jscomp$5$$, $eventTypeId$jscomp$2$$, $eventTypeString$jscomp$3$$) => {
  $JSEvents$$.$keyEvent$ || ($JSEvents$$.$keyEvent$ = $_malloc$$(160));
  $eventHandler$jscomp$4_target$jscomp$102$$ = {target:$findEventTarget$$($eventHandler$jscomp$4_target$jscomp$102$$), $eventTypeString$:$eventTypeString$jscomp$3$$, $eventTypeId$:$eventTypeId$jscomp$2$$, $userData$:$userData$jscomp$6$$, $callbackfunc$:$callbackfunc$jscomp$5$$, $handlerFunc$:$e$jscomp$38$$ => {
    var $keyEventData$$ = $JSEvents$$.$keyEvent$;
    $HEAPF64$$[$keyEventData$$ >> 3] = $e$jscomp$38$$.timeStamp;
    var $idx$jscomp$4$$ = $keyEventData$$ >> 2;
    $HEAP32$$[$idx$jscomp$4$$ + 2] = $e$jscomp$38$$.location;
    $HEAP8$$[$keyEventData$$ + 12] = $e$jscomp$38$$.ctrlKey;
    $HEAP8$$[$keyEventData$$ + 13] = $e$jscomp$38$$.shiftKey;
    $HEAP8$$[$keyEventData$$ + 14] = $e$jscomp$38$$.altKey;
    $HEAP8$$[$keyEventData$$ + 15] = $e$jscomp$38$$.metaKey;
    $HEAP8$$[$keyEventData$$ + 16] = $e$jscomp$38$$.repeat;
    $HEAP32$$[$idx$jscomp$4$$ + 5] = $e$jscomp$38$$.charCode;
    $HEAP32$$[$idx$jscomp$4$$ + 6] = $e$jscomp$38$$.keyCode;
    $HEAP32$$[$idx$jscomp$4$$ + 7] = $e$jscomp$38$$.which;
    $stringToUTF8Array$$($e$jscomp$38$$.key ?? "", $HEAPU8$$, $keyEventData$$ + 32, 32);
    $stringToUTF8Array$$($e$jscomp$38$$.code ?? "", $HEAPU8$$, $keyEventData$$ + 64, 32);
    $stringToUTF8Array$$($e$jscomp$38$$.char ?? "", $HEAPU8$$, $keyEventData$$ + 96, 32);
    $stringToUTF8Array$$($e$jscomp$38$$.locale ?? "", $HEAPU8$$, $keyEventData$$ + 128, 32);
    $getWasmTableEntry$$($callbackfunc$jscomp$5$$)($eventTypeId$jscomp$2$$, $keyEventData$$, $userData$jscomp$6$$) && $e$jscomp$38$$.preventDefault();
  }, $useCapture$:$useCapture$jscomp$5$$};
  return $JSCompiler_StaticMethods_registerOrRemoveHandler$$($eventHandler$jscomp$4_target$jscomp$102$$);
}, $fillMouseEventData$$ = ($eventStruct$jscomp$1_rect$jscomp$1$$, $e$jscomp$39$$, $target$jscomp$106$$) => {
  $HEAPF64$$[$eventStruct$jscomp$1_rect$jscomp$1$$ >> 3] = $e$jscomp$39$$.timeStamp;
  var $idx$jscomp$5$$ = $eventStruct$jscomp$1_rect$jscomp$1$$ >> 2;
  $HEAP32$$[$idx$jscomp$5$$ + 2] = $e$jscomp$39$$.screenX;
  $HEAP32$$[$idx$jscomp$5$$ + 3] = $e$jscomp$39$$.screenY;
  $HEAP32$$[$idx$jscomp$5$$ + 4] = $e$jscomp$39$$.clientX;
  $HEAP32$$[$idx$jscomp$5$$ + 5] = $e$jscomp$39$$.clientY;
  $HEAP8$$[$eventStruct$jscomp$1_rect$jscomp$1$$ + 24] = $e$jscomp$39$$.ctrlKey;
  $HEAP8$$[$eventStruct$jscomp$1_rect$jscomp$1$$ + 25] = $e$jscomp$39$$.shiftKey;
  $HEAP8$$[$eventStruct$jscomp$1_rect$jscomp$1$$ + 26] = $e$jscomp$39$$.altKey;
  $HEAP8$$[$eventStruct$jscomp$1_rect$jscomp$1$$ + 27] = $e$jscomp$39$$.metaKey;
  $HEAP16$$[$idx$jscomp$5$$ * 2 + 14] = $e$jscomp$39$$.button;
  $HEAP16$$[$idx$jscomp$5$$ * 2 + 15] = $e$jscomp$39$$.buttons;
  $HEAP32$$[$idx$jscomp$5$$ + 8] = $e$jscomp$39$$.movementX;
  $HEAP32$$[$idx$jscomp$5$$ + 9] = $e$jscomp$39$$.movementY;
  $eventStruct$jscomp$1_rect$jscomp$1$$ = $getBoundingClientRect$$($target$jscomp$106$$);
  $HEAP32$$[$idx$jscomp$5$$ + 10] = $e$jscomp$39$$.clientX - ($eventStruct$jscomp$1_rect$jscomp$1$$.left | 0);
  $HEAP32$$[$idx$jscomp$5$$ + 11] = $e$jscomp$39$$.clientY - ($eventStruct$jscomp$1_rect$jscomp$1$$.top | 0);
}, $registerMouseEventCallback$$ = ($target$jscomp$107$$, $userData$jscomp$10$$, $useCapture$jscomp$9$$, $callbackfunc$jscomp$9$$, $eventTypeId$jscomp$3$$, $eventTypeString$jscomp$4$$) => {
  $JSEvents$$.$mouseEvent$ || ($JSEvents$$.$mouseEvent$ = $_malloc$$(64));
  $target$jscomp$107$$ = $findEventTarget$$($target$jscomp$107$$);
  return $JSCompiler_StaticMethods_registerOrRemoveHandler$$({target:$target$jscomp$107$$, $allowsDeferredCalls$:$eventTypeString$jscomp$4$$ != "mousemove" && $eventTypeString$jscomp$4$$ != "mouseenter" && $eventTypeString$jscomp$4$$ != "mouseleave", $eventTypeString$:$eventTypeString$jscomp$4$$, $eventTypeId$:$eventTypeId$jscomp$3$$, $userData$:$userData$jscomp$10$$, $callbackfunc$:$callbackfunc$jscomp$9$$, $handlerFunc$:$e$jscomp$40$$ => {
    $fillMouseEventData$$($JSEvents$$.$mouseEvent$, $e$jscomp$40$$, $target$jscomp$107$$);
    $getWasmTableEntry$$($callbackfunc$jscomp$9$$)($eventTypeId$jscomp$3$$, $JSEvents$$.$mouseEvent$, $userData$jscomp$10$$) && $e$jscomp$40$$.preventDefault();
  }, $useCapture$:$useCapture$jscomp$9$$});
}, $registerPointerlockChangeEventCallback$$ = ($target$jscomp$113$$, $userData$jscomp$16$$, $useCapture$jscomp$15$$, $callbackfunc$jscomp$15$$) => {
  $JSEvents$$.$pointerlockChangeEvent$ || ($JSEvents$$.$pointerlockChangeEvent$ = $_malloc$$(257));
  return $JSCompiler_StaticMethods_registerOrRemoveHandler$$({target:$target$jscomp$113$$, $eventTypeString$:"pointerlockchange", $eventTypeId$:20, $userData$:$userData$jscomp$16$$, $callbackfunc$:$callbackfunc$jscomp$15$$, $handlerFunc$:$e$jscomp$41$$ => {
    var $pointerlockChangeEvent$$ = $JSEvents$$.$pointerlockChangeEvent$, $pointerLockElement$jscomp$inline_122$$ = document.pointerLockElement;
    $HEAP8$$[$pointerlockChangeEvent$$] = !!$pointerLockElement$jscomp$inline_122$$;
    var $id$jscomp$inline_123$$ = $pointerLockElement$jscomp$inline_122$$?.id ?? "";
    $stringToUTF8Array$$($JSCompiler_StaticMethods_getNodeNameForTarget$$($pointerLockElement$jscomp$inline_122$$), $HEAPU8$$, $pointerlockChangeEvent$$ + 1, 128);
    $stringToUTF8Array$$($id$jscomp$inline_123$$, $HEAPU8$$, $pointerlockChangeEvent$$ + 129, 128);
    $getWasmTableEntry$$($callbackfunc$jscomp$15$$)(20, $pointerlockChangeEvent$$, $userData$jscomp$16$$) && $e$jscomp$41$$.preventDefault();
  }, $useCapture$:$useCapture$jscomp$15$$});
}, $registerPointerlockErrorEventCallback$$ = ($target$jscomp$115$$, $userData$jscomp$18$$, $useCapture$jscomp$17$$, $callbackfunc$jscomp$17$$) => $JSCompiler_StaticMethods_registerOrRemoveHandler$$({target:$target$jscomp$115$$, $eventTypeString$:"pointerlockerror", $eventTypeId$:38, $userData$:$userData$jscomp$18$$, $callbackfunc$:$callbackfunc$jscomp$17$$, $handlerFunc$:$e$jscomp$42$$ => {
  $getWasmTableEntry$$($callbackfunc$jscomp$17$$)(38, 0, $userData$jscomp$18$$) && $e$jscomp$42$$.preventDefault();
}, $useCapture$:$useCapture$jscomp$17$$}), $registerUiEventCallback$$ = ($target$jscomp$117$$, $userData$jscomp$20$$, $useCapture$jscomp$19$$, $callbackfunc$jscomp$19$$) => {
  $JSEvents$$.$uiEvent$ || ($JSEvents$$.$uiEvent$ = $_malloc$$(36));
  $target$jscomp$117$$ = $findEventTarget$$($target$jscomp$117$$);
  return $JSCompiler_StaticMethods_registerOrRemoveHandler$$({target:$target$jscomp$117$$, $eventTypeString$:"resize", $eventTypeId$:10, $userData$:$userData$jscomp$20$$, $callbackfunc$:$callbackfunc$jscomp$19$$, $handlerFunc$:$e$jscomp$43$$ => {
    if ($e$jscomp$43$$.target == $target$jscomp$117$$) {
      var $b$jscomp$3$$ = document.body;
      if ($b$jscomp$3$$) {
        var $uiEvent$$ = $JSEvents$$.$uiEvent$;
        $HEAP32$$[$uiEvent$$ >> 2] = 0;
        $HEAP32$$[$uiEvent$$ + 4 >> 2] = $b$jscomp$3$$.clientWidth;
        $HEAP32$$[$uiEvent$$ + 8 >> 2] = $b$jscomp$3$$.clientHeight;
        $HEAP32$$[$uiEvent$$ + 12 >> 2] = innerWidth;
        $HEAP32$$[$uiEvent$$ + 16 >> 2] = innerHeight;
        $HEAP32$$[$uiEvent$$ + 20 >> 2] = outerWidth;
        $HEAP32$$[$uiEvent$$ + 24 >> 2] = outerHeight;
        $HEAP32$$[$uiEvent$$ + 28 >> 2] = pageXOffset | 0;
        $HEAP32$$[$uiEvent$$ + 32 >> 2] = pageYOffset | 0;
        $getWasmTableEntry$$($callbackfunc$jscomp$19$$)(10, $uiEvent$$, $userData$jscomp$20$$) && $e$jscomp$43$$.preventDefault();
      }
    }
  }, $useCapture$:$useCapture$jscomp$19$$});
}, $registerTouchEventCallback$$ = ($target$jscomp$119$$, $userData$jscomp$22$$, $useCapture$jscomp$21$$, $callbackfunc$jscomp$21$$, $eventTypeId$jscomp$7$$, $eventTypeString$jscomp$8$$) => {
  $JSEvents$$.$touchEvent$ || ($JSEvents$$.$touchEvent$ = $_malloc$$(1552));
  $target$jscomp$119$$ = $findEventTarget$$($target$jscomp$119$$);
  return $JSCompiler_StaticMethods_registerOrRemoveHandler$$({target:$target$jscomp$119$$, $allowsDeferredCalls$:$eventTypeString$jscomp$8$$ == "touchstart" || $eventTypeString$jscomp$8$$ == "touchend", $eventTypeString$:$eventTypeString$jscomp$8$$, $eventTypeId$:$eventTypeId$jscomp$7$$, $userData$:$userData$jscomp$22$$, $callbackfunc$:$callbackfunc$jscomp$21$$, $handlerFunc$:$e$jscomp$44$$ => {
    var $idx32_touches$jscomp$2$$ = {}, $et_touchEvent$$ = $e$jscomp$44$$.touches;
    for (var $idx$jscomp$6_t$jscomp$1$$ of $et_touchEvent$$) {
      $idx$jscomp$6_t$jscomp$1$$.$isChanged$ = $idx$jscomp$6_t$jscomp$1$$.$onTarget$ = 0, $idx32_touches$jscomp$2$$[$idx$jscomp$6_t$jscomp$1$$.identifier] = $idx$jscomp$6_t$jscomp$1$$;
    }
    for (var $t$jscomp$2_targetRect$$ of $e$jscomp$44$$.changedTouches) {
      $t$jscomp$2_targetRect$$.$isChanged$ = 1, $idx32_touches$jscomp$2$$[$t$jscomp$2_targetRect$$.identifier] = $t$jscomp$2_targetRect$$;
    }
    for (var $numTouches_t$jscomp$3$$ of $e$jscomp$44$$.targetTouches) {
      $idx32_touches$jscomp$2$$[$numTouches_t$jscomp$3$$.identifier].$onTarget$ = 1;
    }
    $et_touchEvent$$ = $JSEvents$$.$touchEvent$;
    $HEAPF64$$[$et_touchEvent$$ >> 3] = $e$jscomp$44$$.timeStamp;
    $HEAP8$$[$et_touchEvent$$ + 12] = $e$jscomp$44$$.ctrlKey;
    $HEAP8$$[$et_touchEvent$$ + 13] = $e$jscomp$44$$.shiftKey;
    $HEAP8$$[$et_touchEvent$$ + 14] = $e$jscomp$44$$.altKey;
    $HEAP8$$[$et_touchEvent$$ + 15] = $e$jscomp$44$$.metaKey;
    $idx$jscomp$6_t$jscomp$1$$ = $et_touchEvent$$ + 16;
    $t$jscomp$2_targetRect$$ = $getBoundingClientRect$$($target$jscomp$119$$);
    $numTouches_t$jscomp$3$$ = 0;
    for (let $t$jscomp$4$$ of Object.values($idx32_touches$jscomp$2$$)) {
      if ($idx32_touches$jscomp$2$$ = $idx$jscomp$6_t$jscomp$1$$ >> 2, $HEAP32$$[$idx32_touches$jscomp$2$$] = $t$jscomp$4$$.identifier, $HEAP32$$[$idx32_touches$jscomp$2$$ + 1] = $t$jscomp$4$$.screenX, $HEAP32$$[$idx32_touches$jscomp$2$$ + 2] = $t$jscomp$4$$.screenY, $HEAP32$$[$idx32_touches$jscomp$2$$ + 3] = $t$jscomp$4$$.clientX, $HEAP32$$[$idx32_touches$jscomp$2$$ + 4] = $t$jscomp$4$$.clientY, $HEAP32$$[$idx32_touches$jscomp$2$$ + 5] = $t$jscomp$4$$.pageX, $HEAP32$$[$idx32_touches$jscomp$2$$ + 
      6] = $t$jscomp$4$$.pageY, $HEAP8$$[$idx$jscomp$6_t$jscomp$1$$ + 28] = $t$jscomp$4$$.$isChanged$, $HEAP8$$[$idx$jscomp$6_t$jscomp$1$$ + 29] = $t$jscomp$4$$.$onTarget$, $HEAP32$$[$idx32_touches$jscomp$2$$ + 8] = $t$jscomp$4$$.clientX - ($t$jscomp$2_targetRect$$.left | 0), $HEAP32$$[$idx32_touches$jscomp$2$$ + 9] = $t$jscomp$4$$.clientY - ($t$jscomp$2_targetRect$$.top | 0), $idx$jscomp$6_t$jscomp$1$$ += 48, ++$numTouches_t$jscomp$3$$ > 31) {
        break;
      }
    }
    $HEAP32$$[$et_touchEvent$$ + 8 >> 2] = $numTouches_t$jscomp$3$$;
    $getWasmTableEntry$$($callbackfunc$jscomp$21$$)($eventTypeId$jscomp$7$$, $et_touchEvent$$, $userData$jscomp$22$$) && $e$jscomp$44$$.preventDefault();
  }, $useCapture$:$useCapture$jscomp$21$$});
}, $GLctx$$, $webgl_enable_ANGLE_instanced_arrays$$ = $ctx$$ => {
  var $ext$jscomp$1$$ = $ctx$$.getExtension("ANGLE_instanced_arrays");
  $ext$jscomp$1$$ && ($ctx$$.vertexAttribDivisor = ($index$jscomp$111$$, $divisor$jscomp$3$$) => $ext$jscomp$1$$.vertexAttribDivisorANGLE($index$jscomp$111$$, $divisor$jscomp$3$$), $ctx$$.drawArraysInstanced = ($mode$jscomp$55$$, $first$jscomp$4$$, $count$jscomp$39$$, $primcount$jscomp$2$$) => $ext$jscomp$1$$.drawArraysInstancedANGLE($mode$jscomp$55$$, $first$jscomp$4$$, $count$jscomp$39$$, $primcount$jscomp$2$$), $ctx$$.drawElementsInstanced = ($mode$jscomp$56$$, $count$jscomp$40$$, $type$jscomp$191$$, 
  $indices$$, $primcount$jscomp$3$$) => $ext$jscomp$1$$.drawElementsInstancedANGLE($mode$jscomp$56$$, $count$jscomp$40$$, $type$jscomp$191$$, $indices$$, $primcount$jscomp$3$$));
}, $webgl_enable_OES_vertex_array_object$$ = $ctx$jscomp$1$$ => {
  var $ext$jscomp$2$$ = $ctx$jscomp$1$$.getExtension("OES_vertex_array_object");
  $ext$jscomp$2$$ && ($ctx$jscomp$1$$.createVertexArray = () => $ext$jscomp$2$$.createVertexArrayOES(), $ctx$jscomp$1$$.deleteVertexArray = $vao$$ => $ext$jscomp$2$$.deleteVertexArrayOES($vao$$), $ctx$jscomp$1$$.bindVertexArray = $vao$jscomp$1$$ => $ext$jscomp$2$$.bindVertexArrayOES($vao$jscomp$1$$), $ctx$jscomp$1$$.isVertexArray = $vao$jscomp$2$$ => $ext$jscomp$2$$.isVertexArrayOES($vao$jscomp$2$$));
}, $webgl_enable_WEBGL_draw_buffers$$ = $ctx$jscomp$2$$ => {
  var $ext$jscomp$3$$ = $ctx$jscomp$2$$.getExtension("WEBGL_draw_buffers");
  $ext$jscomp$3$$ && ($ctx$jscomp$2$$.drawBuffers = ($n$jscomp$5$$, $bufs$$) => $ext$jscomp$3$$.drawBuffersWEBGL($n$jscomp$5$$, $bufs$$));
}, $getEmscriptenSupportedExtensions$$ = $ctx$jscomp$9$$ => {
  var $supportedExtensions$$ = "ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_clip_control EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_polygon_offset_clamp EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw WEBGL_polygon_mode".split(" ");
  return $ctx$jscomp$9$$.getSupportedExtensions()?.filter($ext$jscomp$4$$ => $supportedExtensions$$.includes($ext$jscomp$4$$)) ?? [];
}, $GL$counter$$ = 1, $GL$buffers$$ = [], $GL$programs$$ = [], $GL$framebuffers$$ = [], $GL$renderbuffers$$ = [], $GL$textures$$ = [], $GL$shaders$$ = [], $GL$vaos$$ = [], $GL$contexts$$ = [], $GL$samplers$$ = [], $GL$stringiCache$$ = {}, $GL$unpackAlignment$$ = 4, $GL$unpackRowLength$$ = 0, $GL$getNewId$$ = $table$$ => {
  for (var $ret$jscomp$7$$ = $GL$counter$$++, $i$jscomp$25$$ = $table$$.length; $i$jscomp$25$$ < $ret$jscomp$7$$; $i$jscomp$25$$++) {
    $table$$[$i$jscomp$25$$] = null;
  }
  return $ret$jscomp$7$$;
}, $GL$genObject$$ = ($n$jscomp$6$$, $buffers$jscomp$2$$, $createFunction$$, $objectTable$$) => {
  for (var $i$jscomp$26$$ = 0; $i$jscomp$26$$ < $n$jscomp$6$$; $i$jscomp$26$$++) {
    var $buffer$jscomp$41$$ = $GLctx$$[$createFunction$$](), $id$jscomp$15$$ = $buffer$jscomp$41$$ && $GL$getNewId$$($objectTable$$);
    $buffer$jscomp$41$$ ? ($buffer$jscomp$41$$.name = $id$jscomp$15$$, $objectTable$$[$id$jscomp$15$$] = $buffer$jscomp$41$$) : $GL$lastError$$ ||= 1282;
    $HEAP32$$[$buffers$jscomp$2$$ + $i$jscomp$26$$ * 4 >> 2] = $id$jscomp$15$$;
  }
}, $GL$createContext$$ = ($canvas$jscomp$1$$, $webGLContextAttributes$$) => {
  $canvas$jscomp$1$$.$g$ || ($canvas$jscomp$1$$.$g$ = $canvas$jscomp$1$$.getContext, $canvas$jscomp$1$$.getContext = function($ver$$, $attrs_gl$$) {
    $attrs_gl$$ = $canvas$jscomp$1$$.$g$($ver$$, $attrs_gl$$);
    return $ver$$ == "webgl" == $attrs_gl$$ instanceof WebGLRenderingContext ? $attrs_gl$$ : null;
  });
  var $ctx$jscomp$10$$ = $webGLContextAttributes$$.$majorVersion$ > 1 ? $canvas$jscomp$1$$.getContext("webgl2", $webGLContextAttributes$$) : $canvas$jscomp$1$$.getContext("webgl", $webGLContextAttributes$$);
  return $ctx$jscomp$10$$ ? $GL$registerContext$$($ctx$jscomp$10$$, $webGLContextAttributes$$) : 0;
}, $GL$registerContext$$ = ($context$jscomp$inline_127_ctx$jscomp$11$$, $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$) => {
  var $handle$jscomp$13$$ = $GL$getNewId$$($GL$contexts$$), $context$jscomp$11$$ = {handle:$handle$jscomp$13$$, attributes:$GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$, version:$GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.$majorVersion$, $GLctx$:$context$jscomp$inline_127_ctx$jscomp$11$$};
  $context$jscomp$inline_127_ctx$jscomp$11$$.canvas && ($context$jscomp$inline_127_ctx$jscomp$11$$.canvas.$GLctxObject$ = $context$jscomp$11$$);
  $GL$contexts$$[$handle$jscomp$13$$] = $context$jscomp$11$$;
  if (typeof $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.$enableExtensionsByDefault$ == "undefined" || $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.$enableExtensionsByDefault$) {
    if (($context$jscomp$inline_127_ctx$jscomp$11$$ = $context$jscomp$11$$) || ($context$jscomp$inline_127_ctx$jscomp$11$$ = $GL$currentContext$$), !$context$jscomp$inline_127_ctx$jscomp$11$$.$initExtensionsDone$) {
      $context$jscomp$inline_127_ctx$jscomp$11$$.$initExtensionsDone$ = !0;
      $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$ = $context$jscomp$inline_127_ctx$jscomp$11$$.$GLctx$;
      $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.$multiDrawWebgl$ = $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.getExtension("WEBGL_multi_draw");
      $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.$extPolygonOffsetClamp$ = $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.getExtension("EXT_polygon_offset_clamp");
      $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.$extClipControl$ = $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.getExtension("EXT_clip_control");
      $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.$webglPolygonMode$ = $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.getExtension("WEBGL_polygon_mode");
      $webgl_enable_ANGLE_instanced_arrays$$($GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$);
      $webgl_enable_OES_vertex_array_object$$($GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$);
      $webgl_enable_WEBGL_draw_buffers$$($GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$);
      $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.$dibvbi$ = $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
      $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.$mdibvbi$ = $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
      $context$jscomp$inline_127_ctx$jscomp$11$$.version >= 2 && ($GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.$disjointTimerQueryExt$ = $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.getExtension("EXT_disjoint_timer_query_webgl2"));
      if ($context$jscomp$inline_127_ctx$jscomp$11$$.version < 2 || !$GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.$disjointTimerQueryExt$) {
        $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.$disjointTimerQueryExt$ = $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.getExtension("EXT_disjoint_timer_query");
      }
      for (var $ext$jscomp$inline_129$$ of $getEmscriptenSupportedExtensions$$($GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$)) {
        $ext$jscomp$inline_129$$.includes("lose_context") || $ext$jscomp$inline_129$$.includes("debug") || $GLctx$jscomp$inline_128_webGLContextAttributes$jscomp$1$$.getExtension($ext$jscomp$inline_129$$);
      }
    }
  }
  return $handle$jscomp$13$$;
}, $GL$lastError$$, $GL$currentContext$$, $registerWebGlEventCallback$$ = ($eventHandler$jscomp$10_target$jscomp$124$$, $userData$jscomp$27$$, $useCapture$jscomp$26$$, $callbackfunc$jscomp$26$$, $eventTypeId$jscomp$8$$, $eventTypeString$jscomp$9$$) => {
  $eventHandler$jscomp$10_target$jscomp$124$$ = {target:$findEventTarget$$($eventHandler$jscomp$10_target$jscomp$124$$), $eventTypeString$:$eventTypeString$jscomp$9$$, $eventTypeId$:$eventTypeId$jscomp$8$$, $userData$:$userData$jscomp$27$$, $callbackfunc$:$callbackfunc$jscomp$26$$, $handlerFunc$:$e$jscomp$45$$ => {
    $getWasmTableEntry$$($callbackfunc$jscomp$26$$)($eventTypeId$jscomp$8$$, 0, $userData$jscomp$27$$) && $e$jscomp$45$$.preventDefault();
  }, $useCapture$:$useCapture$jscomp$26$$};
  $JSCompiler_StaticMethods_registerOrRemoveHandler$$($eventHandler$jscomp$10_target$jscomp$124$$);
}, $registerWheelEventCallback$$ = ($target$jscomp$127$$, $userData$jscomp$30$$, $useCapture$jscomp$29$$, $callbackfunc$jscomp$29$$) => {
  $JSEvents$$.$wheelEvent$ || ($JSEvents$$.$wheelEvent$ = $_malloc$$(96));
  return $JSCompiler_StaticMethods_registerOrRemoveHandler$$({target:$target$jscomp$127$$, $allowsDeferredCalls$:!0, $eventTypeString$:"wheel", $eventTypeId$:9, $userData$:$userData$jscomp$30$$, $callbackfunc$:$callbackfunc$jscomp$29$$, $handlerFunc$:$e$jscomp$46$$ => {
    var $wheelEvent$$ = $JSEvents$$.$wheelEvent$;
    $fillMouseEventData$$($wheelEvent$$, $e$jscomp$46$$, $target$jscomp$127$$);
    $HEAPF64$$[$wheelEvent$$ + 64 >> 3] = $e$jscomp$46$$.deltaX;
    $HEAPF64$$[$wheelEvent$$ + 72 >> 3] = $e$jscomp$46$$.deltaY;
    $HEAPF64$$[$wheelEvent$$ + 80 >> 3] = $e$jscomp$46$$.deltaZ;
    $HEAP32$$[$wheelEvent$$ + 88 >> 2] = $e$jscomp$46$$.deltaMode;
    $getWasmTableEntry$$($callbackfunc$jscomp$29$$)(9, $wheelEvent$$, $userData$jscomp$30$$) && $e$jscomp$46$$.preventDefault();
  }, $useCapture$:$useCapture$jscomp$29$$});
}, $webglPowerPreferences$$ = ["default", "low-power", "high-performance"], $ENV$$ = {}, $getEnvStrings$$ = () => {
  if (!$getEnvStrings$strings$$) {
    var $env$jscomp$1$$ = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:(globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8", _:$thisProgram$$}, $x$jscomp$96$$;
    for ($x$jscomp$96$$ in $ENV$$) {
      $ENV$$[$x$jscomp$96$$] === void 0 ? delete $env$jscomp$1$$[$x$jscomp$96$$] : $env$jscomp$1$$[$x$jscomp$96$$] = $ENV$$[$x$jscomp$96$$];
    }
    var $strings$$ = [];
    for ($x$jscomp$96$$ in $env$jscomp$1$$) {
      $strings$$.push(`${$x$jscomp$96$$}=${$env$jscomp$1$$[$x$jscomp$96$$]}`);
    }
    $getEnvStrings$strings$$ = $strings$$;
  }
  return $getEnvStrings$strings$$;
}, $getEnvStrings$strings$$, $tempFixedLengthArray$$ = [], $webglGetExtensions$$ = () => {
  var $exts$$ = $getEmscriptenSupportedExtensions$$($GLctx$$);
  return $exts$$ = $exts$$.concat($exts$$.map($e$jscomp$52$$ => "GL_" + $e$jscomp$52$$));
}, $emscriptenWebGLGet$$ = ($i$jscomp$37_name_$$, $p$jscomp$8$$) => {
  if ($p$jscomp$8$$) {
    var $ret$jscomp$9$$ = void 0;
    switch($i$jscomp$37_name_$$) {
      case 36346:
        $ret$jscomp$9$$ = 1;
        break;
      case 36344:
        return;
      case 34814:
      case 36345:
        $ret$jscomp$9$$ = 0;
        break;
      case 34466:
        var $formats_result$jscomp$7$$ = $GLctx$$.getParameter(34467);
        $ret$jscomp$9$$ = $formats_result$jscomp$7$$ ? $formats_result$jscomp$7$$.length : 0;
        break;
      case 33309:
        if ($GL$currentContext$$.version < 2) {
          $GL$lastError$$ ||= 1282;
          return;
        }
        $ret$jscomp$9$$ = $webglGetExtensions$$().length;
        break;
      case 33307:
      case 33308:
        if ($GL$currentContext$$.version < 2) {
          $GL$lastError$$ ||= 1280;
          return;
        }
        $ret$jscomp$9$$ = $i$jscomp$37_name_$$ == 33307 ? 3 : 0;
    }
    if ($ret$jscomp$9$$ === void 0) {
      switch($formats_result$jscomp$7$$ = $GLctx$$.getParameter($i$jscomp$37_name_$$), typeof $formats_result$jscomp$7$$) {
        case "number":
          $ret$jscomp$9$$ = $formats_result$jscomp$7$$;
          break;
        case "boolean":
          $ret$jscomp$9$$ = $formats_result$jscomp$7$$ ? 1 : 0;
          break;
        case "string":
          $GL$lastError$$ ||= 1280;
          return;
        case "object":
          if ($formats_result$jscomp$7$$ === null) {
            switch($i$jscomp$37_name_$$) {
              case 34964:
              case 35725:
              case 34965:
              case 36006:
              case 36007:
              case 32873:
              case 34229:
              case 36662:
              case 36663:
              case 35053:
              case 35055:
              case 36010:
              case 35097:
              case 35869:
              case 32874:
              case 36389:
              case 35983:
              case 35368:
              case 34068:
                $ret$jscomp$9$$ = 0;
                break;
              default:
                $GL$lastError$$ ||= 1280;
                return;
            }
          } else {
            if ($formats_result$jscomp$7$$ instanceof Float32Array || $formats_result$jscomp$7$$ instanceof Uint32Array || $formats_result$jscomp$7$$ instanceof Int32Array || $formats_result$jscomp$7$$ instanceof Array) {
              for ($i$jscomp$37_name_$$ = 0; $i$jscomp$37_name_$$ < $formats_result$jscomp$7$$.length; ++$i$jscomp$37_name_$$) {
                $HEAP32$$[$p$jscomp$8$$ + $i$jscomp$37_name_$$ * 4 >> 2] = $formats_result$jscomp$7$$[$i$jscomp$37_name_$$];
              }
              return;
            }
            try {
              $ret$jscomp$9$$ = $formats_result$jscomp$7$$.name | 0;
            } catch ($e$jscomp$53$$) {
              $GL$lastError$$ ||= 1280;
              $err$$(`GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter(${$i$jscomp$37_name_$$})! (error: ${$e$jscomp$53$$})`);
              return;
            }
          }
          break;
        default:
          $GL$lastError$$ ||= 1280;
          $err$$(`GL_INVALID_ENUM in glGet0v: Native code calling glGet0v(${$i$jscomp$37_name_$$}) and it returns ${$formats_result$jscomp$7$$} of type ${typeof $formats_result$jscomp$7$$}!`);
          return;
      }
    }
    $HEAP32$$[$p$jscomp$8$$ >> 2] = $ret$jscomp$9$$;
  } else {
    $GL$lastError$$ ||= 1281;
  }
}, $stringToNewUTF8$$ = $str$jscomp$14$$ => {
  var $size$jscomp$32$$ = $lengthBytesUTF8$$($str$jscomp$14$$) + 1, $ret$jscomp$10$$ = $_malloc$$($size$jscomp$32$$);
  $ret$jscomp$10$$ && $stringToUTF8Array$$($str$jscomp$14$$, $HEAPU8$$, $ret$jscomp$10$$, $size$jscomp$32$$);
  return $ret$jscomp$10$$;
}, $webglGetLeftBracePos$$ = $name$jscomp$107$$ => $name$jscomp$107$$.slice(-1) == "]" && $name$jscomp$107$$.lastIndexOf("["), $heapObjectForWebGLType$$ = $type$jscomp$195$$ => {
  $type$jscomp$195$$ -= 5120;
  return $type$jscomp$195$$ == 0 ? $HEAP8$$ : $type$jscomp$195$$ == 1 ? $HEAPU8$$ : $type$jscomp$195$$ == 2 ? $HEAP16$$ : $type$jscomp$195$$ == 4 ? $HEAP32$$ : $type$jscomp$195$$ == 6 ? $HEAPF32$$ : $type$jscomp$195$$ == 5 || $type$jscomp$195$$ == 28922 || $type$jscomp$195$$ == 28520 || $type$jscomp$195$$ == 30779 || $type$jscomp$195$$ == 30782 ? $HEAPU32$$ : $HEAPU16$$;
}, $webglGetProgramUniformLocation$$ = $location$jscomp$79$$ => {
  var $program$jscomp$72$$ = $GLctx$$.$currentProgram$;
  if ($program$jscomp$72$$) {
    var $webglLoc$$ = $program$jscomp$72$$.$uniformLocsById$[$location$jscomp$79$$];
    typeof $webglLoc$$ == "number" && ($program$jscomp$72$$.$uniformLocsById$[$location$jscomp$79$$] = $webglLoc$$ = $GLctx$$.getUniformLocation($program$jscomp$72$$, $program$jscomp$72$$.$uniformArrayNamesById$[$location$jscomp$79$$] + ($webglLoc$$ > 0 ? `[${$webglLoc$$}]` : "")));
    return $webglLoc$$;
  }
  $GL$lastError$$ ||= 1282;
}, $miniTempWebGLFloatBuffers$$ = [], $miniTempWebGLIntBuffers$$ = [], $stringToUTF8OnStack$$ = $str$jscomp$16$$ => {
  var $size$jscomp$35$$ = $lengthBytesUTF8$$($str$jscomp$16$$) + 1, $ret$jscomp$11$$ = $__emscripten_stack_alloc$$($size$jscomp$35$$);
  $stringToUTF8Array$$($str$jscomp$16$$, $HEAPU8$$, $ret$jscomp$11$$, $size$jscomp$35$$);
  return $ret$jscomp$11$$;
}, $withStackSave$$ = $f$jscomp$1$$ => {
  var $stack$$ = $_emscripten_stack_get_current$$();
  $f$jscomp$1$$();
  $__emscripten_stack_restore$$($stack$$);
};
$FS$nameTable$$ = Array(4096);
$FS$mount$$($MEMFS$$, "/");
$FS$mkdir$$("/tmp");
$FS$mkdir$$("/home");
$FS$mkdir$$("/home/web_user");
(function() {
  $FS$mkdir$$("/dev");
  $FS$registerDevice$$(259, {read:() => 0, write:($stream$jscomp$40$$, $buffer$jscomp$35$$, $offset$jscomp$78$$, $length$jscomp$40$$) => $length$jscomp$40$$, $llseek$:() => 0});
  $FS$mkdev$$("/dev/null", 259);
  $TTY$register$$(1280, $TTY$default_tty_ops$$);
  $TTY$register$$(1536, $TTY$default_tty1_ops$$);
  $FS$mkdev$$("/dev/tty", 1280);
  $FS$mkdev$$("/dev/tty1", 1536);
  var $randomBuffer$$ = new Uint8Array(1024), $randomLeft$$ = 0, $randomByte$$ = () => {
    $randomLeft$$ === 0 && ($randomFill$$($randomBuffer$$), $randomLeft$$ = $randomBuffer$$.byteLength);
    return $randomBuffer$$[--$randomLeft$$];
  };
  $FS$createDevice$$("/dev", "random", $randomByte$$);
  $FS$createDevice$$("/dev", "urandom", $randomByte$$);
  $FS$mkdir$$("/dev/shm");
  $FS$mkdir$$("/dev/shm/tmp");
})();
(function() {
  $FS$mkdir$$("/proc");
  var $proc_self$$ = $FS$mkdir$$("/proc/self");
  $FS$mkdir$$("/proc/self/fd");
  $FS$mount$$({$mount$() {
    var $node$jscomp$47$$ = $FS$createNode$$($proc_self$$, "fd", 16895, 73);
    $node$jscomp$47$$.$stream_ops$ = {$llseek$:$MEMFS$$.$stream_ops$.$llseek$};
    $node$jscomp$47$$.$node_ops$ = {lookup($fd$jscomp$31_parent$jscomp$21_ret$jscomp$3$$, $name$jscomp$100$$) {
      $fd$jscomp$31_parent$jscomp$21_ret$jscomp$3$$ = +$name$jscomp$100$$;
      var $stream$jscomp$41$$ = $FS$getStreamChecked$$($fd$jscomp$31_parent$jscomp$21_ret$jscomp$3$$);
      $fd$jscomp$31_parent$jscomp$21_ret$jscomp$3$$ = {parent:null, $mount$:{$mountpoint$:"fake"}, $node_ops$:{readlink:() => $stream$jscomp$41$$.path}, id:$fd$jscomp$31_parent$jscomp$21_ret$jscomp$3$$ + 1};
      return $fd$jscomp$31_parent$jscomp$21_ret$jscomp$3$$.parent = $fd$jscomp$31_parent$jscomp$21_ret$jscomp$3$$;
    }, readdir() {
      return Array.from($FS$streams$$.entries()).filter(([, $v$jscomp$2$$]) => $v$jscomp$2$$).map(([$k$jscomp$1$$]) => $k$jscomp$1$$.toString());
    }};
    return $node$jscomp$47$$;
  }}, "/proc/self/fd");
})();
$Module$$.requestAnimationFrame = $MainLoop$requestAnimationFrame$$;
$Module$$.pauseMainLoop = $MainLoop$pause$$;
$Module$$.resumeMainLoop = function() {
  $MainLoop$currentlyRunningMainloop$$++;
  var $timingMode$$ = $MainLoop$timingMode$$, $timingValue$$ = $MainLoop$timingValue$$, $func$jscomp$10$$ = $MainLoop$func$$;
  $MainLoop$func$$ = null;
  $setMainLoop$$($func$jscomp$10$$, 0, !1, $MainLoop$arg$$, !0);
  $_emscripten_set_main_loop_timing$$($timingMode$$, $timingValue$$);
  $MainLoop$scheduler$$();
};
for (let $i$jscomp$50$$ = 0; $i$jscomp$50$$ < 32; ++$i$jscomp$50$$) {
  $tempFixedLengthArray$$.push(Array($i$jscomp$50$$));
}
for (var $miniTempWebGLFloatBuffersStorage$$ = new Float32Array(288), $i$$ = 0; $i$$ <= 288; ++$i$$) {
  $miniTempWebGLFloatBuffers$$[$i$$] = $miniTempWebGLFloatBuffersStorage$$.subarray(0, $i$$);
}
var $miniTempWebGLIntBuffersStorage$$ = new Int32Array(288);
for ($i$$ = 0; $i$$ <= 288; ++$i$$) {
  $miniTempWebGLIntBuffers$$[$i$$] = $miniTempWebGLIntBuffersStorage$$.subarray(0, $i$$);
}
$Module$$.noExitRuntime && ($noExitRuntime$$ = $Module$$.noExitRuntime);
$Module$$.print && ($out$$ = $Module$$.print);
$Module$$.printErr && ($err$$ = $Module$$.printErr);
$Module$$.arguments && ($programArgs$$ = $Module$$.arguments);
$Module$$.thisProgram && ($thisProgram$$ = $Module$$.thisProgram);
var $preInit$$ = $Module$$.preInit;
if ($preInit$$) {
  for (typeof $preInit$$ == "function" && ($Module$$.preInit = $preInit$$ = [$preInit$$]); $preInit$$.length > 0;) {
    $preInit$$.shift()();
  }
}
$Module$$.addRunDependency = $addRunDependency$$;
$Module$$.removeRunDependency = $removeRunDependency$$;
$Module$$.FS_preloadFile = async($parent$jscomp$10$$, $name$jscomp$88$$, $url$jscomp$31$$, $canRead$jscomp$1$$, $canWrite$jscomp$1$$, $dontCreateFile$$, $canOwn$jscomp$1$$, $preFinish$$) => {
  var $fullname$jscomp$1$$ = $name$jscomp$88$$ ? $PATH_FS$resolve$$($PATH$normalize$$($parent$jscomp$10$$ + "/" + $name$jscomp$88$$)) : $parent$jscomp$10$$, $dep$$ = `cp ${$fullname$jscomp$1$$}`;
  $addRunDependency$$($dep$$);
  try {
    var $byteArray$jscomp$2$$ = $url$jscomp$31$$;
    typeof $url$jscomp$31$$ == "string" && ($byteArray$jscomp$2$$ = await $asyncLoad$$($url$jscomp$31$$));
    $byteArray$jscomp$2$$ = await $FS_handledByPreloadPlugin$$($byteArray$jscomp$2$$, $fullname$jscomp$1$$);
    $preFinish$$?.();
    $dontCreateFile$$ || $FS$createDataFile$$($parent$jscomp$10$$, $name$jscomp$88$$, $byteArray$jscomp$2$$, $canRead$jscomp$1$$, $canWrite$jscomp$1$$, $canOwn$jscomp$1$$);
  } finally {
    $removeRunDependency$$($dep$$);
  }
};
$Module$$.FS_unlink = (...$args$jscomp$14$$) => $FS$unlink$$(...$args$jscomp$14$$);
$Module$$.FS_createPath = (...$args$jscomp$13$$) => $FS$createPath$$(...$args$jscomp$13$$);
$Module$$.FS_createDevice = (...$args$jscomp$16$$) => $FS$createDevice$$(...$args$jscomp$16$$);
$Module$$.FS_createDataFile = (...$args$jscomp$11$$) => $FS$createDataFile$$(...$args$jscomp$11$$);
$Module$$.FS_createLazyFile = (...$args$jscomp$15$$) => $FS$createLazyFile$$(...$args$jscomp$15$$);
var $__sapp_emsc_onpaste$$, $__sapp_html5_get_ask_leave_site$$, $__sapp_emsc_begin_drop$$, $__sapp_emsc_drop$$, $__sapp_emsc_end_drop$$, $_main$$, $_malloc$$, $_emscripten_builtin_memalign$$, $__emscripten_stack_restore$$, $__emscripten_stack_alloc$$, $_emscripten_stack_get_current$$, $wasmMemory$$, $wasmTable$$, $wasmImports$$ = {__assert_fail:($condition$jscomp$3$$, $filename$jscomp$18$$, $line$jscomp$7$$, $func$jscomp$7$$) => $abort$$(`Assertion failed: ${$condition$jscomp$3$$ ? $UTF8ArrayToString$$($HEAPU8$$, 
$condition$jscomp$3$$) : ""}, at: ` + [$filename$jscomp$18$$ ? $filename$jscomp$18$$ ? $UTF8ArrayToString$$($HEAPU8$$, $filename$jscomp$18$$) : "" : "unknown filename", $line$jscomp$7$$, $func$jscomp$7$$ ? $func$jscomp$7$$ ? $UTF8ArrayToString$$($HEAPU8$$, $func$jscomp$7$$) : "" : "unknown function"]), __syscall_fcntl64:function($fd$jscomp$33$$, $cmd$jscomp$1$$, $varargs$$) {
  $SYSCALLS$varargs$$ = $varargs$$;
  try {
    var $stream$jscomp$53$$ = $FS$getStreamChecked$$($fd$jscomp$33$$);
    switch($cmd$jscomp$1$$) {
      case 0:
        var $arg$jscomp$13$$ = $syscallGetVarargI$$();
        if ($arg$jscomp$13$$ < 0) {
          break;
        }
        for (; $FS$streams$$[$arg$jscomp$13$$];) {
          $arg$jscomp$13$$++;
        }
        return $FS$dupStream$$($stream$jscomp$53$$, $arg$jscomp$13$$).fd;
      case 1:
      case 2:
        return 0;
      case 3:
        return $stream$jscomp$53$$.flags;
      case 4:
        return $arg$jscomp$13$$ = $syscallGetVarargI$$(), $stream$jscomp$53$$.flags = $stream$jscomp$53$$.flags & -289793 | $arg$jscomp$13$$ & 289792, 0;
      case 12:
        return $arg$jscomp$13$$ = $syscallGetVarargI$$(), $HEAP16$$[$arg$jscomp$13$$ + 0 >> 1] = 2, 0;
      case 13:
      case 14:
        return 0;
    }
    return -28;
  } catch ($e$jscomp$27$$) {
    if (typeof $FS$$ == "undefined" || $e$jscomp$27$$.name !== "ErrnoError") {
      throw $e$jscomp$27$$;
    }
    return -$e$jscomp$27$$.$errno$;
  }
}, __syscall_ioctl:function($JSCompiler_object_inline_c_cc_267_c_cc_fd$jscomp$34$$, $op$jscomp$1$$, $varargs$jscomp$1$$) {
  $SYSCALLS$varargs$$ = $varargs$jscomp$1$$;
  try {
    var $stream$jscomp$54$$ = $FS$getStreamChecked$$($JSCompiler_object_inline_c_cc_267_c_cc_fd$jscomp$34$$);
    switch($op$jscomp$1$$) {
      case 21509:
        return $stream$jscomp$54$$.tty ? 0 : -59;
      case 21505:
        if (!$stream$jscomp$54$$.tty) {
          return -59;
        }
        if ($stream$jscomp$54$$.tty.$ops$.$ioctl_tcgets$) {
          $JSCompiler_object_inline_c_cc_267_c_cc_fd$jscomp$34$$ = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          var $argp$$ = $syscallGetVarargI$$();
          $HEAP32$$[$argp$$ >> 2] = 25856;
          $HEAP32$$[$argp$$ + 4 >> 2] = 5;
          $HEAP32$$[$argp$$ + 8 >> 2] = 191;
          $HEAP32$$[$argp$$ + 12 >> 2] = 35387;
          for (var $i$jscomp$19_winsize$$ = 0; $i$jscomp$19_winsize$$ < 32; $i$jscomp$19_winsize$$++) {
            $HEAP8$$[$argp$$ + $i$jscomp$19_winsize$$ + 17] = $JSCompiler_object_inline_c_cc_267_c_cc_fd$jscomp$34$$[$i$jscomp$19_winsize$$] || 0;
          }
        }
        return 0;
      case 21510:
      case 21511:
      case 21512:
        return $stream$jscomp$54$$.tty ? 0 : -59;
      case 21506:
      case 21507:
      case 21508:
        if (!$stream$jscomp$54$$.tty) {
          return -59;
        }
        if ($stream$jscomp$54$$.tty.$ops$.$ioctl_tcsets$) {
          for ($argp$$ = $syscallGetVarargI$$(), $JSCompiler_object_inline_c_cc_267_c_cc_fd$jscomp$34$$ = [], $i$jscomp$19_winsize$$ = 0; $i$jscomp$19_winsize$$ < 32; $i$jscomp$19_winsize$$++) {
            $JSCompiler_object_inline_c_cc_267_c_cc_fd$jscomp$34$$.push($HEAP8$$[$argp$$ + $i$jscomp$19_winsize$$ + 17]);
          }
        }
        return 0;
      case 21519:
        if (!$stream$jscomp$54$$.tty) {
          return -59;
        }
        $argp$$ = $syscallGetVarargI$$();
        return $HEAP32$$[$argp$$ >> 2] = 0;
      case 21520:
        return $stream$jscomp$54$$.tty ? -28 : -59;
      case 21537:
      case 21531:
        $argp$$ = $syscallGetVarargI$$();
        if (!$stream$jscomp$54$$.$stream_ops$.$ioctl$) {
          throw new $FS$ErrnoError$$(59);
        }
        return $stream$jscomp$54$$.$stream_ops$.$ioctl$($stream$jscomp$54$$, $op$jscomp$1$$, $argp$$);
      case 21523:
        if (!$stream$jscomp$54$$.tty) {
          return -59;
        }
        $stream$jscomp$54$$.tty.$ops$.$ioctl_tiocgwinsz$ && ($i$jscomp$19_winsize$$ = [24, 80], $argp$$ = $syscallGetVarargI$$(), $HEAP16$$[$argp$$ >> 1] = $i$jscomp$19_winsize$$[0], $HEAP16$$[$argp$$ + 2 >> 1] = $i$jscomp$19_winsize$$[1]);
        return 0;
      case 21524:
        return $stream$jscomp$54$$.tty ? 0 : -59;
      case 21515:
        return $stream$jscomp$54$$.tty ? 0 : -59;
      default:
        return -28;
    }
  } catch ($e$jscomp$28$$) {
    if (typeof $FS$$ == "undefined" || $e$jscomp$28$$.name !== "ErrnoError") {
      throw $e$jscomp$28$$;
    }
    return -$e$jscomp$28$$.$errno$;
  }
}, __syscall_openat:function($dirfd$jscomp$1$$, $path$jscomp$76$$, $flags$jscomp$18$$, $varargs$jscomp$2$$) {
  $SYSCALLS$varargs$$ = $varargs$jscomp$2$$;
  try {
    $path$jscomp$76$$ = $path$jscomp$76$$ ? $UTF8ArrayToString$$($HEAPU8$$, $path$jscomp$76$$) : "";
    var $path$jscomp$inline_160$$ = $path$jscomp$76$$;
    if ($path$jscomp$inline_160$$.charAt(0) === "/") {
      $path$jscomp$76$$ = $path$jscomp$inline_160$$;
    } else {
      var $dir$jscomp$inline_162$$ = $dirfd$jscomp$1$$ === -100 ? "/" : $FS$getStreamChecked$$($dirfd$jscomp$1$$).path;
      if ($path$jscomp$inline_160$$.length == 0) {
        throw new $FS$ErrnoError$$(44);
      }
      $path$jscomp$76$$ = $dir$jscomp$inline_162$$ + "/" + $path$jscomp$inline_160$$;
    }
    var $mode$jscomp$53$$ = $varargs$jscomp$2$$ ? $syscallGetVarargI$$() : 0;
    $flags$jscomp$18$$ & 64 && ($mode$jscomp$53$$ &= -19);
    return $FS$open$$($path$jscomp$76$$, $flags$jscomp$18$$, $mode$jscomp$53$$).fd;
  } catch ($e$jscomp$29$$) {
    if (typeof $FS$$ == "undefined" || $e$jscomp$29$$.name !== "ErrnoError") {
      throw $e$jscomp$29$$;
    }
    return -$e$jscomp$29$$.$errno$;
  }
}, _abort_js:() => $abort$$(""), _mmap_js:function($len$jscomp$9$$, $prot$jscomp$3$$, $flags$jscomp$19$$, $fd$jscomp$35$$, $offset$jscomp$85$$, $allocated$jscomp$1$$, $addr$jscomp$1$$) {
  $offset$jscomp$85$$ = $offset$jscomp$85$$ < -9007199254740992 || $offset$jscomp$85$$ > 9007199254740992 ? NaN : Number($offset$jscomp$85$$);
  try {
    var $stream$jscomp$55$$ = $FS$getStreamChecked$$($fd$jscomp$35$$);
    if (($prot$jscomp$3$$ & 2) !== 0 && ($flags$jscomp$19$$ & 2) === 0 && ($stream$jscomp$55$$.flags & 2097155) !== 2) {
      throw new $FS$ErrnoError$$(2);
    }
    if (($stream$jscomp$55$$.flags & 2097155) === 1) {
      throw new $FS$ErrnoError$$(2);
    }
    if (!$stream$jscomp$55$$.$stream_ops$.$mmap$) {
      throw new $FS$ErrnoError$$(43);
    }
    if (!$len$jscomp$9$$) {
      throw new $FS$ErrnoError$$(28);
    }
    var $res$$ = $stream$jscomp$55$$.$stream_ops$.$mmap$($stream$jscomp$55$$, $len$jscomp$9$$, $offset$jscomp$85$$, $prot$jscomp$3$$, $flags$jscomp$19$$);
    var $ptr$jscomp$8$$ = $res$$.$ptr$;
    $HEAP32$$[$allocated$jscomp$1$$ >> 2] = $res$$.$allocated$;
    $HEAPU32$$[$addr$jscomp$1$$ >> 2] = $ptr$jscomp$8$$;
    return 0;
  } catch ($e$jscomp$30$$) {
    if (typeof $FS$$ == "undefined" || $e$jscomp$30$$.name !== "ErrnoError") {
      throw $e$jscomp$30$$;
    }
    return -$e$jscomp$30$$.$errno$;
  }
}, emscripten_cancel_main_loop:() => {
  $MainLoop$pause$$();
  $MainLoop$func$$ = null;
}, emscripten_get_device_pixel_ratio:() => globalThis.devicePixelRatio ?? 1.0, emscripten_get_element_css_size:($rect_target$jscomp$93$$, $width$jscomp$28$$, $height$jscomp$25$$) => {
  $rect_target$jscomp$93$$ = $findEventTarget$$($rect_target$jscomp$93$$);
  if (!$rect_target$jscomp$93$$) {
    return -4;
  }
  $rect_target$jscomp$93$$ = $getBoundingClientRect$$($rect_target$jscomp$93$$);
  $HEAPF64$$[$width$jscomp$28$$ >> 3] = $rect_target$jscomp$93$$.width;
  $HEAPF64$$[$height$jscomp$25$$ >> 3] = $rect_target$jscomp$93$$.height;
  return 0;
}, emscripten_performance_now:() => performance.now(), emscripten_request_animation_frame_loop:($cb$jscomp$9$$, $userData$$) => {
  function $tick$$($timeStamp$$) {
    $getWasmTableEntry$$($cb$jscomp$9$$)($timeStamp$$, $userData$$) && requestAnimationFrame($tick$$);
  }
  return requestAnimationFrame($tick$$);
}, emscripten_resize_heap:$requestedSize$$ => {
  var $oldSize$$ = $HEAPU8$$.length;
  $requestedSize$$ >>>= 0;
  if ($requestedSize$$ > 2147483648) {
    return !1;
  }
  for (var $cutDown$$ = 1; $cutDown$$ <= 4; $cutDown$$ *= 2) {
    var $overGrownHeapSize_pages$jscomp$inline_171$$ = $oldSize$$ * (1 + 0.2 / $cutDown$$);
    $overGrownHeapSize_pages$jscomp$inline_171$$ = Math.min($overGrownHeapSize_pages$jscomp$inline_171$$, $requestedSize$$ + 100663296);
    a: {
      $overGrownHeapSize_pages$jscomp$inline_171$$ = (Math.min(2147483648, Math.ceil(Math.max($requestedSize$$, $overGrownHeapSize_pages$jscomp$inline_171$$) / 65536) * 65536) - $wasmMemory$$.buffer.byteLength + 65535) / 65536 | 0;
      try {
        $wasmMemory$$.grow($overGrownHeapSize_pages$jscomp$inline_171$$);
        $updateMemoryViews$$();
        var $JSCompiler_inline_result$jscomp$11$$ = 1;
        break a;
      } catch ($e$jscomp$inline_172$$) {
      }
      $JSCompiler_inline_result$jscomp$11$$ = void 0;
    }
    if ($JSCompiler_inline_result$jscomp$11$$) {
      return !0;
    }
  }
  return !1;
}, emscripten_set_blur_callback_on_thread:($target$jscomp$97$$, $userData$jscomp$2$$, $useCapture$jscomp$1$$, $callbackfunc$jscomp$1$$) => $registerFocusEventCallback$$($target$jscomp$97$$, $userData$jscomp$2$$, $useCapture$jscomp$1$$, $callbackfunc$jscomp$1$$, 12, "blur"), emscripten_set_canvas_element_size:($canvas_target$jscomp$98$$, $width$jscomp$29$$, $height$jscomp$26$$) => {
  $canvas_target$jscomp$98$$ = $findEventTarget$$($canvas_target$jscomp$98$$);
  if (!$canvas_target$jscomp$98$$) {
    return -4;
  }
  $canvas_target$jscomp$98$$.width = $width$jscomp$29$$;
  $canvas_target$jscomp$98$$.height = $height$jscomp$26$$;
  return 0;
}, emscripten_set_focus_callback_on_thread:($target$jscomp$99$$, $userData$jscomp$3$$, $useCapture$jscomp$2$$, $callbackfunc$jscomp$2$$) => $registerFocusEventCallback$$($target$jscomp$99$$, $userData$jscomp$3$$, $useCapture$jscomp$2$$, $callbackfunc$jscomp$2$$, 13, "focus"), emscripten_set_fullscreenchange_callback_on_thread:($target$jscomp$101$$, $userData$jscomp$5$$, $useCapture$jscomp$4$$, $callbackfunc$jscomp$4$$) => {
  if (!$JSEvents$$.fullscreenEnabled()) {
    return -1;
  }
  $target$jscomp$101$$ = $findEventTarget$$($target$jscomp$101$$);
  if (!$target$jscomp$101$$) {
    return -4;
  }
  $registerFullscreenChangeEventCallback$$($target$jscomp$101$$, $userData$jscomp$5$$, $useCapture$jscomp$4$$, $callbackfunc$jscomp$4$$, "webkitfullscreenchange");
  return $registerFullscreenChangeEventCallback$$($target$jscomp$101$$, $userData$jscomp$5$$, $useCapture$jscomp$4$$, $callbackfunc$jscomp$4$$, "fullscreenchange");
}, emscripten_set_keydown_callback_on_thread:($target$jscomp$103$$, $userData$jscomp$7$$, $useCapture$jscomp$6$$, $callbackfunc$jscomp$6$$) => $registerKeyEventCallback$$($target$jscomp$103$$, $userData$jscomp$7$$, $useCapture$jscomp$6$$, $callbackfunc$jscomp$6$$, 2, "keydown"), emscripten_set_keypress_callback_on_thread:($target$jscomp$104$$, $userData$jscomp$8$$, $useCapture$jscomp$7$$, $callbackfunc$jscomp$7$$) => $registerKeyEventCallback$$($target$jscomp$104$$, $userData$jscomp$8$$, $useCapture$jscomp$7$$, 
$callbackfunc$jscomp$7$$, 1, "keypress"), emscripten_set_keyup_callback_on_thread:($target$jscomp$105$$, $userData$jscomp$9$$, $useCapture$jscomp$8$$, $callbackfunc$jscomp$8$$) => $registerKeyEventCallback$$($target$jscomp$105$$, $userData$jscomp$9$$, $useCapture$jscomp$8$$, $callbackfunc$jscomp$8$$, 3, "keyup"), emscripten_set_main_loop:($func$jscomp$15_iterFunc$jscomp$1$$, $fps$jscomp$1$$, $simulateInfiniteLoop$jscomp$1$$) => {
  $func$jscomp$15_iterFunc$jscomp$1$$ = $getWasmTableEntry$$($func$jscomp$15_iterFunc$jscomp$1$$);
  $setMainLoop$$($func$jscomp$15_iterFunc$jscomp$1$$, $fps$jscomp$1$$, $simulateInfiniteLoop$jscomp$1$$);
}, emscripten_set_mousedown_callback_on_thread:($target$jscomp$108$$, $userData$jscomp$11$$, $useCapture$jscomp$10$$, $callbackfunc$jscomp$10$$) => $registerMouseEventCallback$$($target$jscomp$108$$, $userData$jscomp$11$$, $useCapture$jscomp$10$$, $callbackfunc$jscomp$10$$, 5, "mousedown"), emscripten_set_mouseenter_callback_on_thread:($target$jscomp$109$$, $userData$jscomp$12$$, $useCapture$jscomp$11$$, $callbackfunc$jscomp$11$$) => $registerMouseEventCallback$$($target$jscomp$109$$, $userData$jscomp$12$$, 
$useCapture$jscomp$11$$, $callbackfunc$jscomp$11$$, 33, "mouseenter"), emscripten_set_mouseleave_callback_on_thread:($target$jscomp$110$$, $userData$jscomp$13$$, $useCapture$jscomp$12$$, $callbackfunc$jscomp$12$$) => $registerMouseEventCallback$$($target$jscomp$110$$, $userData$jscomp$13$$, $useCapture$jscomp$12$$, $callbackfunc$jscomp$12$$, 34, "mouseleave"), emscripten_set_mousemove_callback_on_thread:($target$jscomp$111$$, $userData$jscomp$14$$, $useCapture$jscomp$13$$, $callbackfunc$jscomp$13$$) => 
$registerMouseEventCallback$$($target$jscomp$111$$, $userData$jscomp$14$$, $useCapture$jscomp$13$$, $callbackfunc$jscomp$13$$, 8, "mousemove"), emscripten_set_mouseup_callback_on_thread:($target$jscomp$112$$, $userData$jscomp$15$$, $useCapture$jscomp$14$$, $callbackfunc$jscomp$14$$) => $registerMouseEventCallback$$($target$jscomp$112$$, $userData$jscomp$15$$, $useCapture$jscomp$14$$, $callbackfunc$jscomp$14$$, 6, "mouseup"), emscripten_set_pointerlockchange_callback_on_thread:($target$jscomp$114$$, 
$userData$jscomp$17$$, $useCapture$jscomp$16$$, $callbackfunc$jscomp$16$$) => document.body?.requestPointerLock ? ($target$jscomp$114$$ = $findEventTarget$$($target$jscomp$114$$)) ? $registerPointerlockChangeEventCallback$$($target$jscomp$114$$, $userData$jscomp$17$$, $useCapture$jscomp$16$$, $callbackfunc$jscomp$16$$) : -4 : -1, emscripten_set_pointerlockerror_callback_on_thread:($target$jscomp$116$$, $userData$jscomp$19$$, $useCapture$jscomp$18$$, $callbackfunc$jscomp$18$$) => document.body?.requestPointerLock ? 
($target$jscomp$116$$ = $findEventTarget$$($target$jscomp$116$$)) ? $registerPointerlockErrorEventCallback$$($target$jscomp$116$$, $userData$jscomp$19$$, $useCapture$jscomp$18$$, $callbackfunc$jscomp$18$$) : -4 : -1, emscripten_set_resize_callback_on_thread:($target$jscomp$118$$, $userData$jscomp$21$$, $useCapture$jscomp$20$$, $callbackfunc$jscomp$20$$) => $registerUiEventCallback$$($target$jscomp$118$$, $userData$jscomp$21$$, $useCapture$jscomp$20$$, $callbackfunc$jscomp$20$$), emscripten_set_touchcancel_callback_on_thread:($target$jscomp$120$$, 
$userData$jscomp$23$$, $useCapture$jscomp$22$$, $callbackfunc$jscomp$22$$) => $registerTouchEventCallback$$($target$jscomp$120$$, $userData$jscomp$23$$, $useCapture$jscomp$22$$, $callbackfunc$jscomp$22$$, 25, "touchcancel"), emscripten_set_touchend_callback_on_thread:($target$jscomp$121$$, $userData$jscomp$24$$, $useCapture$jscomp$23$$, $callbackfunc$jscomp$23$$) => $registerTouchEventCallback$$($target$jscomp$121$$, $userData$jscomp$24$$, $useCapture$jscomp$23$$, $callbackfunc$jscomp$23$$, 23, "touchend"), 
emscripten_set_touchmove_callback_on_thread:($target$jscomp$122$$, $userData$jscomp$25$$, $useCapture$jscomp$24$$, $callbackfunc$jscomp$24$$) => $registerTouchEventCallback$$($target$jscomp$122$$, $userData$jscomp$25$$, $useCapture$jscomp$24$$, $callbackfunc$jscomp$24$$, 24, "touchmove"), emscripten_set_touchstart_callback_on_thread:($target$jscomp$123$$, $userData$jscomp$26$$, $useCapture$jscomp$25$$, $callbackfunc$jscomp$25$$) => $registerTouchEventCallback$$($target$jscomp$123$$, $userData$jscomp$26$$, 
$useCapture$jscomp$25$$, $callbackfunc$jscomp$25$$, 22, "touchstart"), emscripten_set_webglcontextlost_callback_on_thread:($target$jscomp$125$$, $userData$jscomp$28$$, $useCapture$jscomp$27$$, $callbackfunc$jscomp$27$$) => {
  $registerWebGlEventCallback$$($target$jscomp$125$$, $userData$jscomp$28$$, $useCapture$jscomp$27$$, $callbackfunc$jscomp$27$$, 31, "webglcontextlost");
  return 0;
}, emscripten_set_webglcontextrestored_callback_on_thread:($target$jscomp$126$$, $userData$jscomp$29$$, $useCapture$jscomp$28$$, $callbackfunc$jscomp$28$$) => {
  $registerWebGlEventCallback$$($target$jscomp$126$$, $userData$jscomp$29$$, $useCapture$jscomp$28$$, $callbackfunc$jscomp$28$$, 32, "webglcontextrestored");
  return 0;
}, emscripten_set_wheel_callback_on_thread:($target$jscomp$128$$, $userData$jscomp$31$$, $useCapture$jscomp$30$$, $callbackfunc$jscomp$30$$) => ($target$jscomp$128$$ = $findEventTarget$$($target$jscomp$128$$)) ? typeof $target$jscomp$128$$.onwheel != "undefined" ? $registerWheelEventCallback$$($target$jscomp$128$$, $userData$jscomp$31$$, $useCapture$jscomp$30$$, $callbackfunc$jscomp$30$$) : -1 : -4, emscripten_webgl_create_context:($canvas$jscomp$2_target$jscomp$129$$, $attributes$jscomp$1_contextAttributes$$) => 
{
  var $attr32$$ = $attributes$jscomp$1_contextAttributes$$ >> 2;
  $attributes$jscomp$1_contextAttributes$$ = {alpha:!!$HEAP8$$[$attributes$jscomp$1_contextAttributes$$ + 0], depth:!!$HEAP8$$[$attributes$jscomp$1_contextAttributes$$ + 1], stencil:!!$HEAP8$$[$attributes$jscomp$1_contextAttributes$$ + 2], antialias:!!$HEAP8$$[$attributes$jscomp$1_contextAttributes$$ + 3], premultipliedAlpha:!!$HEAP8$$[$attributes$jscomp$1_contextAttributes$$ + 4], preserveDrawingBuffer:!!$HEAP8$$[$attributes$jscomp$1_contextAttributes$$ + 5], powerPreference:$webglPowerPreferences$$[$HEAP32$$[$attr32$$ + 
  2]], failIfMajorPerformanceCaveat:!!$HEAP8$$[$attributes$jscomp$1_contextAttributes$$ + 12], desynchronized:!!$HEAP8$$[$attributes$jscomp$1_contextAttributes$$ + 33], $majorVersion$:$HEAP32$$[$attr32$$ + 4], $minorVersion$:$HEAP32$$[$attr32$$ + 5], $enableExtensionsByDefault$:$HEAP8$$[$attributes$jscomp$1_contextAttributes$$ + 24], $explicitSwapControl$:$HEAP8$$[$attributes$jscomp$1_contextAttributes$$ + 25], $proxyContextToMainThread$:$HEAP32$$[$attr32$$ + 7], $renderViaOffscreenBackBuffer$:$HEAP8$$[$attributes$jscomp$1_contextAttributes$$ + 
  32]};
  $canvas$jscomp$2_target$jscomp$129$$ = $findEventTarget$$($canvas$jscomp$2_target$jscomp$129$$);
  return !$canvas$jscomp$2_target$jscomp$129$$ || $attributes$jscomp$1_contextAttributes$$.$explicitSwapControl$ ? 0 : $GL$createContext$$($canvas$jscomp$2_target$jscomp$129$$, $attributes$jscomp$1_contextAttributes$$);
}, emscripten_webgl_make_context_current:$contextHandle$jscomp$4$$ => {
  $GL$currentContext$$ = $GL$contexts$$[$contextHandle$jscomp$4$$];
  $Module$$.ctx = $GLctx$$ = $GL$currentContext$$?.$GLctx$;
  return !$contextHandle$jscomp$4$$ || $GLctx$$ ? 0 : -5;
}, environ_get:($__environ$$, $environ_buf$$) => {
  var $bufSize$$ = 0, $envp$$ = 0, $string$jscomp$19$$;
  for ($string$jscomp$19$$ of $getEnvStrings$$()) {
    var $ptr$jscomp$9$$ = $environ_buf$$ + $bufSize$$;
    $HEAPU32$$[$__environ$$ + $envp$$ >> 2] = $ptr$jscomp$9$$;
    $bufSize$$ += $stringToUTF8Array$$($string$jscomp$19$$, $HEAPU8$$, $ptr$jscomp$9$$, Infinity) + 1;
    $envp$$ += 4;
  }
  return 0;
}, environ_sizes_get:($bufSize$jscomp$1_penviron_count$$, $penviron_buf_size$$) => {
  var $strings$jscomp$1$$ = $getEnvStrings$$();
  $HEAPU32$$[$bufSize$jscomp$1_penviron_count$$ >> 2] = $strings$jscomp$1$$.length;
  $bufSize$jscomp$1_penviron_count$$ = 0;
  for (var $string$jscomp$20$$ of $strings$jscomp$1$$) {
    $bufSize$jscomp$1_penviron_count$$ += $lengthBytesUTF8$$($string$jscomp$20$$) + 1;
  }
  $HEAPU32$$[$penviron_buf_size$$ >> 2] = $bufSize$jscomp$1_penviron_count$$;
  return 0;
}, exit:$status$jscomp$4$$ => {
  $EXITSTATUS$$ = $status$jscomp$4$$;
  $_proc_exit$$($status$jscomp$4$$);
}, fd_close:function($fd$jscomp$36$$) {
  try {
    var $stream$jscomp$56$$ = $FS$getStreamChecked$$($fd$jscomp$36$$);
    $FS$close$$($stream$jscomp$56$$);
    return 0;
  } catch ($e$jscomp$47$$) {
    if (typeof $FS$$ == "undefined" || $e$jscomp$47$$.name !== "ErrnoError") {
      throw $e$jscomp$47$$;
    }
    return $e$jscomp$47$$.$errno$;
  }
}, fd_read:function($fd$jscomp$37_iov$jscomp$inline_177$$, $iov$jscomp$1_ret$jscomp$inline_180$$, $iovcnt$jscomp$1$$, $pnum$$) {
  try {
    a: {
      var $stream$jscomp$inline_176$$ = $FS$getStreamChecked$$($fd$jscomp$37_iov$jscomp$inline_177$$);
      $fd$jscomp$37_iov$jscomp$inline_177$$ = $iov$jscomp$1_ret$jscomp$inline_180$$;
      for (var $offset$jscomp$inline_179$$, $i$jscomp$inline_181$$ = $iov$jscomp$1_ret$jscomp$inline_180$$ = 0; $i$jscomp$inline_181$$ < $iovcnt$jscomp$1$$; $i$jscomp$inline_181$$++) {
        var $ptr$jscomp$inline_182$$ = $HEAPU32$$[$fd$jscomp$37_iov$jscomp$inline_177$$ >> 2], $len$jscomp$inline_183$$ = $HEAPU32$$[$fd$jscomp$37_iov$jscomp$inline_177$$ + 4 >> 2];
        $fd$jscomp$37_iov$jscomp$inline_177$$ += 8;
        try {
          var $stream$jscomp$inline_299$$ = $stream$jscomp$inline_176$$, $offset$jscomp$inline_300$$ = $ptr$jscomp$inline_182$$, $length$jscomp$inline_301$$ = $len$jscomp$inline_183$$, $position$jscomp$inline_302$$ = $offset$jscomp$inline_179$$, $buffer$jscomp$inline_303$$ = $HEAP8$$;
          if ($length$jscomp$inline_301$$ < 0 || $position$jscomp$inline_302$$ < 0) {
            throw new $FS$ErrnoError$$(28);
          }
          if ($stream$jscomp$inline_299$$.fd === null) {
            throw new $FS$ErrnoError$$(8);
          }
          if (($stream$jscomp$inline_299$$.flags & 2097155) === 1) {
            throw new $FS$ErrnoError$$(8);
          }
          if ($FS$isDir$$($stream$jscomp$inline_299$$.node.mode)) {
            throw new $FS$ErrnoError$$(31);
          }
          if (!$stream$jscomp$inline_299$$.$stream_ops$.read) {
            throw new $FS$ErrnoError$$(28);
          }
          var $seeking$jscomp$inline_304$$ = typeof $position$jscomp$inline_302$$ != "undefined";
          if (!$seeking$jscomp$inline_304$$) {
            $position$jscomp$inline_302$$ = $stream$jscomp$inline_299$$.position;
          } else if (!$stream$jscomp$inline_299$$.seekable) {
            throw new $FS$ErrnoError$$(70);
          }
          var $bytesRead$jscomp$inline_305$$ = $stream$jscomp$inline_299$$.$stream_ops$.read($stream$jscomp$inline_299$$, $buffer$jscomp$inline_303$$, $offset$jscomp$inline_300$$, $length$jscomp$inline_301$$, $position$jscomp$inline_302$$);
          $seeking$jscomp$inline_304$$ || ($stream$jscomp$inline_299$$.position += $bytesRead$jscomp$inline_305$$);
          var $curr$jscomp$inline_184$$ = $bytesRead$jscomp$inline_305$$;
        } catch ($e$jscomp$inline_185$$) {
          if ($iov$jscomp$1_ret$jscomp$inline_180$$ > 0 && $e$jscomp$inline_185$$ instanceof $FS$ErrnoError$$ && ($e$jscomp$inline_185$$.$errno$ == 6 || $e$jscomp$inline_185$$.$errno$ == 6)) {
            break;
          }
          throw $e$jscomp$inline_185$$;
        }
        if ($curr$jscomp$inline_184$$ < 0) {
          var $num$jscomp$7$$ = -1;
          break a;
        }
        $iov$jscomp$1_ret$jscomp$inline_180$$ += $curr$jscomp$inline_184$$;
        if ($curr$jscomp$inline_184$$ < $len$jscomp$inline_183$$) {
          break;
        }
        typeof $offset$jscomp$inline_179$$ != "undefined" && ($offset$jscomp$inline_179$$ += $curr$jscomp$inline_184$$);
      }
      $num$jscomp$7$$ = $iov$jscomp$1_ret$jscomp$inline_180$$;
    }
    $HEAPU32$$[$pnum$$ >> 2] = $num$jscomp$7$$;
    return 0;
  } catch ($e$jscomp$49$$) {
    if (typeof $FS$$ == "undefined" || $e$jscomp$49$$.name !== "ErrnoError") {
      throw $e$jscomp$49$$;
    }
    return $e$jscomp$49$$.$errno$;
  }
}, fd_seek:function($fd$jscomp$38$$, $offset$jscomp$87$$, $whence$jscomp$2$$, $newOffset$$) {
  $offset$jscomp$87$$ = $offset$jscomp$87$$ < -9007199254740992 || $offset$jscomp$87$$ > 9007199254740992 ? NaN : Number($offset$jscomp$87$$);
  try {
    if (isNaN($offset$jscomp$87$$)) {
      return 22;
    }
    var $stream$jscomp$59$$ = $FS$getStreamChecked$$($fd$jscomp$38$$);
    $FS$llseek$$($stream$jscomp$59$$, $offset$jscomp$87$$, $whence$jscomp$2$$);
    $HEAP64$$[$newOffset$$ >> 3] = BigInt($stream$jscomp$59$$.position);
    $stream$jscomp$59$$.$getdents$ && $offset$jscomp$87$$ === 0 && $whence$jscomp$2$$ === 0 && ($stream$jscomp$59$$.$getdents$ = null);
    return 0;
  } catch ($e$jscomp$50$$) {
    if (typeof $FS$$ == "undefined" || $e$jscomp$50$$.name !== "ErrnoError") {
      throw $e$jscomp$50$$;
    }
    return $e$jscomp$50$$.$errno$;
  }
}, fd_write:function($fd$jscomp$39_iov$jscomp$inline_188$$, $iov$jscomp$3_total$jscomp$inline_191$$, $iovcnt$jscomp$3$$, $pnum$jscomp$1$$) {
  try {
    var $stream$jscomp$inline_187$$ = $FS$getStreamChecked$$($fd$jscomp$39_iov$jscomp$inline_188$$);
    $fd$jscomp$39_iov$jscomp$inline_188$$ = $iov$jscomp$3_total$jscomp$inline_191$$;
    if ($iovcnt$jscomp$3$$ == 1) {
      var $num$jscomp$8$$ = $FS$write$$($stream$jscomp$inline_187$$, $HEAP8$$, $HEAPU32$$[$fd$jscomp$39_iov$jscomp$inline_188$$ >> 2], $HEAPU32$$[$fd$jscomp$39_iov$jscomp$inline_188$$ + 4 >> 2]);
    } else {
      for (var $i$jscomp$inline_192$$ = $iov$jscomp$3_total$jscomp$inline_191$$ = 0, $p$jscomp$inline_193_voff$jscomp$inline_195$$ = $fd$jscomp$39_iov$jscomp$inline_188$$; $i$jscomp$inline_192$$ < $iovcnt$jscomp$3$$; $i$jscomp$inline_192$$++, $p$jscomp$inline_193_voff$jscomp$inline_195$$ += 8) {
        $iov$jscomp$3_total$jscomp$inline_191$$ += $HEAPU32$$[$p$jscomp$inline_193_voff$jscomp$inline_195$$ + 4 >> 2];
      }
      var $view$jscomp$inline_194$$ = new Uint8Array($iov$jscomp$3_total$jscomp$inline_191$$);
      for ($i$jscomp$inline_192$$ = $p$jscomp$inline_193_voff$jscomp$inline_195$$ = 0; $i$jscomp$inline_192$$ < $iovcnt$jscomp$3$$; $i$jscomp$inline_192$$++, $fd$jscomp$39_iov$jscomp$inline_188$$ += 8) {
        var $ptr$jscomp$inline_196$$ = $HEAPU32$$[$fd$jscomp$39_iov$jscomp$inline_188$$ >> 2], $len$jscomp$inline_197$$ = $HEAPU32$$[$fd$jscomp$39_iov$jscomp$inline_188$$ + 4 >> 2];
        $view$jscomp$inline_194$$.set($HEAPU8$$.subarray($ptr$jscomp$inline_196$$, $ptr$jscomp$inline_196$$ + $len$jscomp$inline_197$$), $p$jscomp$inline_193_voff$jscomp$inline_195$$);
        $p$jscomp$inline_193_voff$jscomp$inline_195$$ += $len$jscomp$inline_197$$;
      }
      $num$jscomp$8$$ = $FS$write$$($stream$jscomp$inline_187$$, $view$jscomp$inline_194$$, 0, $iov$jscomp$3_total$jscomp$inline_191$$);
    }
    $HEAPU32$$[$pnum$jscomp$1$$ >> 2] = $num$jscomp$8$$;
    return 0;
  } catch ($e$jscomp$51$$) {
    if (typeof $FS$$ == "undefined" || $e$jscomp$51$$.name !== "ErrnoError") {
      throw $e$jscomp$51$$;
    }
    return $e$jscomp$51$$.$errno$;
  }
}, glActiveTexture:$x0$jscomp$2$$ => $GLctx$$.activeTexture($x0$jscomp$2$$), glAttachShader:($program$jscomp$63$$, $shader$jscomp$11$$) => {
  $GLctx$$.attachShader($GL$programs$$[$program$jscomp$63$$], $GL$shaders$$[$shader$jscomp$11$$]);
}, glBindBuffer:($target$jscomp$130$$, $buffer$jscomp$42$$) => {
  $target$jscomp$130$$ == 35051 ? $GLctx$$.$currentPixelPackBufferBinding$ = $buffer$jscomp$42$$ : $target$jscomp$130$$ == 35052 && ($GLctx$$.$currentPixelUnpackBufferBinding$ = $buffer$jscomp$42$$);
  $GLctx$$.bindBuffer($target$jscomp$130$$, $GL$buffers$$[$buffer$jscomp$42$$]);
}, glBindBufferBase:($target$jscomp$131$$, $index$jscomp$112$$, $buffer$jscomp$43$$) => {
  $GLctx$$.bindBufferBase($target$jscomp$131$$, $index$jscomp$112$$, $GL$buffers$$[$buffer$jscomp$43$$]);
}, glBindBufferRange:($target$jscomp$132$$, $index$jscomp$113$$, $buffer$jscomp$44$$, $offset$jscomp$89$$, $ptrsize$$) => {
  $GLctx$$.bindBufferRange($target$jscomp$132$$, $index$jscomp$113$$, $GL$buffers$$[$buffer$jscomp$44$$], $offset$jscomp$89$$, $ptrsize$$);
}, glBindFramebuffer:($target$jscomp$133$$, $framebuffer$jscomp$1$$) => {
  $GLctx$$.bindFramebuffer($target$jscomp$133$$, $GL$framebuffers$$[$framebuffer$jscomp$1$$]);
}, glBindRenderbuffer:($target$jscomp$134$$, $renderbuffer$jscomp$2$$) => {
  $GLctx$$.bindRenderbuffer($target$jscomp$134$$, $GL$renderbuffers$$[$renderbuffer$jscomp$2$$]);
}, glBindSampler:($unit$jscomp$6$$, $sampler$jscomp$6$$) => {
  $GLctx$$.bindSampler($unit$jscomp$6$$, $GL$samplers$$[$sampler$jscomp$6$$]);
}, glBindTexture:($target$jscomp$135$$, $texture$jscomp$7$$) => {
  $GLctx$$.bindTexture($target$jscomp$135$$, $GL$textures$$[$texture$jscomp$7$$]);
}, glBindVertexArray:$vao$jscomp$3$$ => {
  $GLctx$$.bindVertexArray($GL$vaos$$[$vao$jscomp$3$$]);
}, glBlendColor:($x0$jscomp$3$$, $x1$jscomp$5$$, $x2$jscomp$3$$, $x3$$) => $GLctx$$.blendColor($x0$jscomp$3$$, $x1$jscomp$5$$, $x2$jscomp$3$$, $x3$$), glBlendEquationSeparate:($x0$jscomp$4$$, $x1$jscomp$6$$) => $GLctx$$.blendEquationSeparate($x0$jscomp$4$$, $x1$jscomp$6$$), glBlendFuncSeparate:($x0$jscomp$5$$, $x1$jscomp$7$$, $x2$jscomp$4$$, $x3$jscomp$1$$) => $GLctx$$.blendFuncSeparate($x0$jscomp$5$$, $x1$jscomp$7$$, $x2$jscomp$4$$, $x3$jscomp$1$$), glBlitFramebuffer:($x0$jscomp$6$$, $x1$jscomp$8$$, 
$x2$jscomp$5$$, $x3$jscomp$2$$, $x4$$, $x5$$, $x6$$, $x7$$, $x8$$, $x9$$) => $GLctx$$.blitFramebuffer($x0$jscomp$6$$, $x1$jscomp$8$$, $x2$jscomp$5$$, $x3$jscomp$2$$, $x4$$, $x5$$, $x6$$, $x7$$, $x8$$, $x9$$), glBufferData:($target$jscomp$136$$, $size$jscomp$29$$, $data$jscomp$97$$, $usage$jscomp$2$$) => {
  $GL$currentContext$$.version >= 2 ? $data$jscomp$97$$ && $size$jscomp$29$$ ? $GLctx$$.bufferData($target$jscomp$136$$, $HEAPU8$$, $usage$jscomp$2$$, $data$jscomp$97$$, $size$jscomp$29$$) : $GLctx$$.bufferData($target$jscomp$136$$, $size$jscomp$29$$, $usage$jscomp$2$$) : $GLctx$$.bufferData($target$jscomp$136$$, $data$jscomp$97$$ ? $HEAPU8$$.subarray($data$jscomp$97$$, $data$jscomp$97$$ + $size$jscomp$29$$) : $size$jscomp$29$$, $usage$jscomp$2$$);
}, glBufferSubData:($target$jscomp$138$$, $offset$jscomp$91$$, $size$jscomp$31$$, $data$jscomp$99$$) => {
  var $src$jscomp$inline_203$$ = $HEAPU8$$;
  $GL$currentContext$$.version >= 2 ? $size$jscomp$31$$ && $GLctx$$.bufferSubData($target$jscomp$138$$, $offset$jscomp$91$$, $src$jscomp$inline_203$$, $data$jscomp$99$$, $size$jscomp$31$$) : $GLctx$$.bufferSubData($target$jscomp$138$$, $offset$jscomp$91$$, $src$jscomp$inline_203$$.subarray($data$jscomp$99$$, $data$jscomp$99$$ + $size$jscomp$31$$));
}, glCheckFramebufferStatus:$x0$jscomp$7$$ => $GLctx$$.checkFramebufferStatus($x0$jscomp$7$$), glClearBufferfi:($x0$jscomp$8$$, $x1$jscomp$9$$, $x2$jscomp$6$$, $x3$jscomp$3$$) => $GLctx$$.clearBufferfi($x0$jscomp$8$$, $x1$jscomp$9$$, $x2$jscomp$6$$, $x3$jscomp$3$$), glClearBufferfv:($buffer$jscomp$45$$, $drawbuffer$jscomp$4$$, $value$jscomp$195$$) => {
  $GLctx$$.clearBufferfv($buffer$jscomp$45$$, $drawbuffer$jscomp$4$$, $HEAPF32$$, $value$jscomp$195$$ >> 2);
}, glClearBufferiv:($buffer$jscomp$46$$, $drawbuffer$jscomp$5$$, $value$jscomp$196$$) => {
  $GLctx$$.clearBufferiv($buffer$jscomp$46$$, $drawbuffer$jscomp$5$$, $HEAP32$$, $value$jscomp$196$$ >> 2);
}, glColorMask:($red$jscomp$3$$, $green$jscomp$3$$, $blue$jscomp$3$$, $alpha$jscomp$3$$) => {
  $GLctx$$.colorMask(!!$red$jscomp$3$$, !!$green$jscomp$3$$, !!$blue$jscomp$3$$, !!$alpha$jscomp$3$$);
}, glCompileShader:$shader$jscomp$12$$ => {
  $GLctx$$.compileShader($GL$shaders$$[$shader$jscomp$12$$]);
}, glCompressedTexSubImage2D:($target$jscomp$139$$, $level$jscomp$19$$, $xoffset$jscomp$8$$, $yoffset$jscomp$8$$, $width$jscomp$30$$, $height$jscomp$27$$, $format$jscomp$20$$, $imageSize$$, $data$jscomp$100$$) => {
  $GL$currentContext$$.version >= 2 ? $GLctx$$.$currentPixelUnpackBufferBinding$ || !$imageSize$$ ? $GLctx$$.compressedTexSubImage2D($target$jscomp$139$$, $level$jscomp$19$$, $xoffset$jscomp$8$$, $yoffset$jscomp$8$$, $width$jscomp$30$$, $height$jscomp$27$$, $format$jscomp$20$$, $imageSize$$, $data$jscomp$100$$) : $GLctx$$.compressedTexSubImage2D($target$jscomp$139$$, $level$jscomp$19$$, $xoffset$jscomp$8$$, $yoffset$jscomp$8$$, $width$jscomp$30$$, $height$jscomp$27$$, $format$jscomp$20$$, $HEAPU8$$, 
  $data$jscomp$100$$, $imageSize$$) : $GLctx$$.compressedTexSubImage2D($target$jscomp$139$$, $level$jscomp$19$$, $xoffset$jscomp$8$$, $yoffset$jscomp$8$$, $width$jscomp$30$$, $height$jscomp$27$$, $format$jscomp$20$$, $HEAPU8$$.subarray($data$jscomp$100$$, $data$jscomp$100$$ + $imageSize$$));
}, glCompressedTexSubImage3D:($target$jscomp$140$$, $level$jscomp$20$$, $xoffset$jscomp$9$$, $yoffset$jscomp$9$$, $zoffset$jscomp$3$$, $width$jscomp$31$$, $height$jscomp$28$$, $depth$jscomp$9$$, $format$jscomp$21$$, $imageSize$jscomp$1$$, $data$jscomp$101$$) => {
  $GLctx$$.$currentPixelUnpackBufferBinding$ ? $GLctx$$.compressedTexSubImage3D($target$jscomp$140$$, $level$jscomp$20$$, $xoffset$jscomp$9$$, $yoffset$jscomp$9$$, $zoffset$jscomp$3$$, $width$jscomp$31$$, $height$jscomp$28$$, $depth$jscomp$9$$, $format$jscomp$21$$, $imageSize$jscomp$1$$, $data$jscomp$101$$) : $GLctx$$.compressedTexSubImage3D($target$jscomp$140$$, $level$jscomp$20$$, $xoffset$jscomp$9$$, $yoffset$jscomp$9$$, $zoffset$jscomp$3$$, $width$jscomp$31$$, $height$jscomp$28$$, $depth$jscomp$9$$, 
  $format$jscomp$21$$, $HEAPU8$$, $data$jscomp$101$$, $imageSize$jscomp$1$$);
}, glCreateProgram:() => {
  var $id$jscomp$16$$ = $GL$getNewId$$($GL$programs$$), $program$jscomp$64$$ = $GLctx$$.createProgram();
  $program$jscomp$64$$.name = $id$jscomp$16$$;
  $program$jscomp$64$$.$maxUniformLength$ = $program$jscomp$64$$.$maxAttributeLength$ = $program$jscomp$64$$.$maxUniformBlockNameLength$ = 0;
  $program$jscomp$64$$.$uniformIdCounter$ = 1;
  $GL$programs$$[$id$jscomp$16$$] = $program$jscomp$64$$;
  return $id$jscomp$16$$;
}, glCreateShader:$shaderType$$ => {
  var $id$jscomp$17$$ = $GL$getNewId$$($GL$shaders$$);
  $GL$shaders$$[$id$jscomp$17$$] = $GLctx$$.createShader($shaderType$$);
  return $id$jscomp$17$$;
}, glCullFace:$x0$jscomp$9$$ => $GLctx$$.cullFace($x0$jscomp$9$$), glDeleteBuffers:($n$jscomp$7$$, $buffers$jscomp$3$$) => {
  for (var $i$jscomp$30$$ = 0; $i$jscomp$30$$ < $n$jscomp$7$$; $i$jscomp$30$$++) {
    var $id$jscomp$18$$ = $HEAP32$$[$buffers$jscomp$3$$ + $i$jscomp$30$$ * 4 >> 2], $buffer$jscomp$47$$ = $GL$buffers$$[$id$jscomp$18$$];
    $buffer$jscomp$47$$ && ($GLctx$$.deleteBuffer($buffer$jscomp$47$$), $buffer$jscomp$47$$.name = 0, $GL$buffers$$[$id$jscomp$18$$] = null, $id$jscomp$18$$ == $GLctx$$.$currentPixelPackBufferBinding$ && ($GLctx$$.$currentPixelPackBufferBinding$ = 0), $id$jscomp$18$$ == $GLctx$$.$currentPixelUnpackBufferBinding$ && ($GLctx$$.$currentPixelUnpackBufferBinding$ = 0));
  }
}, glDeleteFramebuffers:($n$jscomp$8$$, $framebuffers$$) => {
  for (var $i$jscomp$31$$ = 0; $i$jscomp$31$$ < $n$jscomp$8$$; ++$i$jscomp$31$$) {
    var $id$jscomp$19$$ = $HEAP32$$[$framebuffers$$ + $i$jscomp$31$$ * 4 >> 2], $framebuffer$jscomp$2$$ = $GL$framebuffers$$[$id$jscomp$19$$];
    $framebuffer$jscomp$2$$ && ($GLctx$$.deleteFramebuffer($framebuffer$jscomp$2$$), $framebuffer$jscomp$2$$.name = 0, $GL$framebuffers$$[$id$jscomp$19$$] = null);
  }
}, glDeleteProgram:$id$jscomp$20$$ => {
  if ($id$jscomp$20$$) {
    var $program$jscomp$65$$ = $GL$programs$$[$id$jscomp$20$$];
    $program$jscomp$65$$ ? ($GLctx$$.deleteProgram($program$jscomp$65$$), $program$jscomp$65$$.name = 0, $GL$programs$$[$id$jscomp$20$$] = null) : $GL$lastError$$ ||= 1281;
  }
}, glDeleteRenderbuffers:($n$jscomp$9$$, $renderbuffers$$) => {
  for (var $i$jscomp$32$$ = 0; $i$jscomp$32$$ < $n$jscomp$9$$; $i$jscomp$32$$++) {
    var $id$jscomp$21$$ = $HEAP32$$[$renderbuffers$$ + $i$jscomp$32$$ * 4 >> 2], $renderbuffer$jscomp$3$$ = $GL$renderbuffers$$[$id$jscomp$21$$];
    $renderbuffer$jscomp$3$$ && ($GLctx$$.deleteRenderbuffer($renderbuffer$jscomp$3$$), $renderbuffer$jscomp$3$$.name = 0, $GL$renderbuffers$$[$id$jscomp$21$$] = null);
  }
}, glDeleteSamplers:($n$jscomp$10$$, $samplers$$) => {
  for (var $i$jscomp$33$$ = 0; $i$jscomp$33$$ < $n$jscomp$10$$; $i$jscomp$33$$++) {
    var $id$jscomp$22$$ = $HEAP32$$[$samplers$$ + $i$jscomp$33$$ * 4 >> 2], $sampler$jscomp$7$$ = $GL$samplers$$[$id$jscomp$22$$];
    $sampler$jscomp$7$$ && ($GLctx$$.deleteSampler($sampler$jscomp$7$$), $sampler$jscomp$7$$.name = 0, $GL$samplers$$[$id$jscomp$22$$] = null);
  }
}, glDeleteShader:$id$jscomp$23$$ => {
  if ($id$jscomp$23$$) {
    var $shader$jscomp$13$$ = $GL$shaders$$[$id$jscomp$23$$];
    $shader$jscomp$13$$ ? ($GLctx$$.deleteShader($shader$jscomp$13$$), $GL$shaders$$[$id$jscomp$23$$] = null) : $GL$lastError$$ ||= 1281;
  }
}, glDeleteTextures:($n$jscomp$11$$, $textures$$) => {
  for (var $i$jscomp$34$$ = 0; $i$jscomp$34$$ < $n$jscomp$11$$; $i$jscomp$34$$++) {
    var $id$jscomp$24$$ = $HEAP32$$[$textures$$ + $i$jscomp$34$$ * 4 >> 2], $texture$jscomp$8$$ = $GL$textures$$[$id$jscomp$24$$];
    $texture$jscomp$8$$ && ($GLctx$$.deleteTexture($texture$jscomp$8$$), $texture$jscomp$8$$.name = 0, $GL$textures$$[$id$jscomp$24$$] = null);
  }
}, glDeleteVertexArrays:($n$jscomp$12$$, $vaos$$) => {
  for (var $i$jscomp$35$$ = 0; $i$jscomp$35$$ < $n$jscomp$12$$; $i$jscomp$35$$++) {
    var $id$jscomp$25$$ = $HEAP32$$[$vaos$$ + $i$jscomp$35$$ * 4 >> 2];
    $GLctx$$.deleteVertexArray($GL$vaos$$[$id$jscomp$25$$]);
    $GL$vaos$$[$id$jscomp$25$$] = null;
  }
}, glDepthFunc:$x0$jscomp$10$$ => $GLctx$$.depthFunc($x0$jscomp$10$$), glDepthMask:$flag$jscomp$4$$ => {
  $GLctx$$.depthMask(!!$flag$jscomp$4$$);
}, glDisable:$x0$jscomp$11$$ => $GLctx$$.disable($x0$jscomp$11$$), glDisableVertexAttribArray:$index$jscomp$114$$ => {
  $GLctx$$.disableVertexAttribArray($index$jscomp$114$$);
}, glDrawArrays:($mode$jscomp$57$$, $first$jscomp$5$$, $count$jscomp$42$$) => {
  $GLctx$$.drawArrays($mode$jscomp$57$$, $first$jscomp$5$$, $count$jscomp$42$$);
}, glDrawArraysInstanced:($mode$jscomp$58$$, $first$jscomp$6$$, $count$jscomp$43$$, $primcount$jscomp$4$$) => {
  $GLctx$$.drawArraysInstanced($mode$jscomp$58$$, $first$jscomp$6$$, $count$jscomp$43$$, $primcount$jscomp$4$$);
}, glDrawBuffers:($n$jscomp$13$$, $bufs$jscomp$1$$) => {
  for (var $bufArray$$ = $tempFixedLengthArray$$[$n$jscomp$13$$], $i$jscomp$36$$ = 0; $i$jscomp$36$$ < $n$jscomp$13$$; $i$jscomp$36$$++) {
    $bufArray$$[$i$jscomp$36$$] = $HEAP32$$[$bufs$jscomp$1$$ + $i$jscomp$36$$ * 4 >> 2];
  }
  $GLctx$$.drawBuffers($bufArray$$);
}, glDrawElements:($mode$jscomp$59$$, $count$jscomp$44$$, $type$jscomp$192$$, $indices$jscomp$1$$) => {
  $GLctx$$.drawElements($mode$jscomp$59$$, $count$jscomp$44$$, $type$jscomp$192$$, $indices$jscomp$1$$);
}, glDrawElementsInstanced:($mode$jscomp$60$$, $count$jscomp$45$$, $type$jscomp$193$$, $indices$jscomp$2$$, $primcount$jscomp$5$$) => {
  $GLctx$$.drawElementsInstanced($mode$jscomp$60$$, $count$jscomp$45$$, $type$jscomp$193$$, $indices$jscomp$2$$, $primcount$jscomp$5$$);
}, glEnable:$x0$jscomp$12$$ => $GLctx$$.enable($x0$jscomp$12$$), glEnableVertexAttribArray:$index$jscomp$115$$ => {
  $GLctx$$.enableVertexAttribArray($index$jscomp$115$$);
}, glFramebufferRenderbuffer:($target$jscomp$141$$, $attachment$jscomp$4$$, $renderbuffertarget$jscomp$1$$, $renderbuffer$jscomp$4$$) => {
  $GLctx$$.framebufferRenderbuffer($target$jscomp$141$$, $attachment$jscomp$4$$, $renderbuffertarget$jscomp$1$$, $GL$renderbuffers$$[$renderbuffer$jscomp$4$$]);
}, glFramebufferTexture2D:($target$jscomp$142$$, $attachment$jscomp$5$$, $textarget$jscomp$1$$, $texture$jscomp$9$$, $level$jscomp$21$$) => {
  $GLctx$$.framebufferTexture2D($target$jscomp$142$$, $attachment$jscomp$5$$, $textarget$jscomp$1$$, $GL$textures$$[$texture$jscomp$9$$], $level$jscomp$21$$);
}, glFramebufferTextureLayer:($target$jscomp$143$$, $attachment$jscomp$6$$, $texture$jscomp$10$$, $level$jscomp$22$$, $layer$jscomp$2$$) => {
  $GLctx$$.framebufferTextureLayer($target$jscomp$143$$, $attachment$jscomp$6$$, $GL$textures$$[$texture$jscomp$10$$], $level$jscomp$22$$, $layer$jscomp$2$$);
}, glFrontFace:$x0$jscomp$13$$ => $GLctx$$.frontFace($x0$jscomp$13$$), glGenBuffers:($n$jscomp$14$$, $buffers$jscomp$4$$) => {
  $GL$genObject$$($n$jscomp$14$$, $buffers$jscomp$4$$, "createBuffer", $GL$buffers$$);
}, glGenFramebuffers:($n$jscomp$15$$, $ids$$) => {
  $GL$genObject$$($n$jscomp$15$$, $ids$$, "createFramebuffer", $GL$framebuffers$$);
}, glGenRenderbuffers:($n$jscomp$16$$, $renderbuffers$jscomp$1$$) => {
  $GL$genObject$$($n$jscomp$16$$, $renderbuffers$jscomp$1$$, "createRenderbuffer", $GL$renderbuffers$$);
}, glGenSamplers:($n$jscomp$17$$, $samplers$jscomp$1$$) => {
  $GL$genObject$$($n$jscomp$17$$, $samplers$jscomp$1$$, "createSampler", $GL$samplers$$);
}, glGenTextures:($n$jscomp$18$$, $textures$jscomp$1$$) => {
  $GL$genObject$$($n$jscomp$18$$, $textures$jscomp$1$$, "createTexture", $GL$textures$$);
}, glGenVertexArrays:($n$jscomp$19$$, $arrays$$) => {
  $GL$genObject$$($n$jscomp$19$$, $arrays$$, "createVertexArray", $GL$vaos$$);
}, glGetAttribLocation:($program$jscomp$66$$, $name$jscomp$105$$) => $GLctx$$.getAttribLocation($GL$programs$$[$program$jscomp$66$$], $name$jscomp$105$$ ? $UTF8ArrayToString$$($HEAPU8$$, $name$jscomp$105$$) : ""), glGetError:() => {
  var $error$jscomp$6$$ = $GLctx$$.getError() || $GL$lastError$$;
  $GL$lastError$$ = 0;
  return $error$jscomp$6$$;
}, glGetIntegerv:($name_$jscomp$1$$, $p$jscomp$9$$) => $emscriptenWebGLGet$$($name_$jscomp$1$$, $p$jscomp$9$$), glGetProgramInfoLog:($log_program$jscomp$67$$, $maxLength_numBytesWrittenExclNull$$, $length$jscomp$47$$, $infoLog$$) => {
  $log_program$jscomp$67$$ = $GLctx$$.getProgramInfoLog($GL$programs$$[$log_program$jscomp$67$$]);
  $log_program$jscomp$67$$ === null && ($log_program$jscomp$67$$ = "(unknown error)");
  $maxLength_numBytesWrittenExclNull$$ = $maxLength_numBytesWrittenExclNull$$ > 0 && $infoLog$$ ? $stringToUTF8Array$$($log_program$jscomp$67$$, $HEAPU8$$, $infoLog$$, $maxLength_numBytesWrittenExclNull$$) : 0;
  $length$jscomp$47$$ && ($HEAP32$$[$length$jscomp$47$$ >> 2] = $maxLength_numBytesWrittenExclNull$$);
}, glGetProgramiv:($log$jscomp$1_program$jscomp$68$$, $i$jscomp$38_pname$jscomp$26$$, $p$jscomp$10$$) => {
  if ($p$jscomp$10$$) {
    if ($log$jscomp$1_program$jscomp$68$$ >= $GL$counter$$) {
      $GL$lastError$$ ||= 1281;
    } else {
      if ($log$jscomp$1_program$jscomp$68$$ = $GL$programs$$[$log$jscomp$1_program$jscomp$68$$], $i$jscomp$38_pname$jscomp$26$$ == 35716) {
        $log$jscomp$1_program$jscomp$68$$ = $GLctx$$.getProgramInfoLog($log$jscomp$1_program$jscomp$68$$), $log$jscomp$1_program$jscomp$68$$ === null && ($log$jscomp$1_program$jscomp$68$$ = "(unknown error)"), $HEAP32$$[$p$jscomp$10$$ >> 2] = $log$jscomp$1_program$jscomp$68$$.length + 1;
      } else if ($i$jscomp$38_pname$jscomp$26$$ == 35719) {
        if (!$log$jscomp$1_program$jscomp$68$$.$maxUniformLength$) {
          var $numActiveAttributes_numActiveUniformBlocks_numActiveUniforms$$ = $GLctx$$.getProgramParameter($log$jscomp$1_program$jscomp$68$$, 35718);
          for ($i$jscomp$38_pname$jscomp$26$$ = 0; $i$jscomp$38_pname$jscomp$26$$ < $numActiveAttributes_numActiveUniformBlocks_numActiveUniforms$$; ++$i$jscomp$38_pname$jscomp$26$$) {
            $log$jscomp$1_program$jscomp$68$$.$maxUniformLength$ = Math.max($log$jscomp$1_program$jscomp$68$$.$maxUniformLength$, $GLctx$$.getActiveUniform($log$jscomp$1_program$jscomp$68$$, $i$jscomp$38_pname$jscomp$26$$).name.length + 1);
          }
        }
        $HEAP32$$[$p$jscomp$10$$ >> 2] = $log$jscomp$1_program$jscomp$68$$.$maxUniformLength$;
      } else if ($i$jscomp$38_pname$jscomp$26$$ == 35722) {
        if (!$log$jscomp$1_program$jscomp$68$$.$maxAttributeLength$) {
          for ($numActiveAttributes_numActiveUniformBlocks_numActiveUniforms$$ = $GLctx$$.getProgramParameter($log$jscomp$1_program$jscomp$68$$, 35721), $i$jscomp$38_pname$jscomp$26$$ = 0; $i$jscomp$38_pname$jscomp$26$$ < $numActiveAttributes_numActiveUniformBlocks_numActiveUniforms$$; ++$i$jscomp$38_pname$jscomp$26$$) {
            $log$jscomp$1_program$jscomp$68$$.$maxAttributeLength$ = Math.max($log$jscomp$1_program$jscomp$68$$.$maxAttributeLength$, $GLctx$$.getActiveAttrib($log$jscomp$1_program$jscomp$68$$, $i$jscomp$38_pname$jscomp$26$$).name.length + 1);
          }
        }
        $HEAP32$$[$p$jscomp$10$$ >> 2] = $log$jscomp$1_program$jscomp$68$$.$maxAttributeLength$;
      } else if ($i$jscomp$38_pname$jscomp$26$$ == 35381) {
        if (!$log$jscomp$1_program$jscomp$68$$.$maxUniformBlockNameLength$) {
          for ($numActiveAttributes_numActiveUniformBlocks_numActiveUniforms$$ = $GLctx$$.getProgramParameter($log$jscomp$1_program$jscomp$68$$, 35382), $i$jscomp$38_pname$jscomp$26$$ = 0; $i$jscomp$38_pname$jscomp$26$$ < $numActiveAttributes_numActiveUniformBlocks_numActiveUniforms$$; ++$i$jscomp$38_pname$jscomp$26$$) {
            $log$jscomp$1_program$jscomp$68$$.$maxUniformBlockNameLength$ = Math.max($log$jscomp$1_program$jscomp$68$$.$maxUniformBlockNameLength$, $GLctx$$.getActiveUniformBlockName($log$jscomp$1_program$jscomp$68$$, $i$jscomp$38_pname$jscomp$26$$).length + 1);
          }
        }
        $HEAP32$$[$p$jscomp$10$$ >> 2] = $log$jscomp$1_program$jscomp$68$$.$maxUniformBlockNameLength$;
      } else {
        $HEAP32$$[$p$jscomp$10$$ >> 2] = $GLctx$$.getProgramParameter($log$jscomp$1_program$jscomp$68$$, $i$jscomp$38_pname$jscomp$26$$);
      }
    }
  } else {
    $GL$lastError$$ ||= 1281;
  }
}, glGetShaderInfoLog:($log$jscomp$2_shader$jscomp$14$$, $maxLength$jscomp$1_numBytesWrittenExclNull$jscomp$1$$, $length$jscomp$48$$, $infoLog$jscomp$1$$) => {
  $log$jscomp$2_shader$jscomp$14$$ = $GLctx$$.getShaderInfoLog($GL$shaders$$[$log$jscomp$2_shader$jscomp$14$$]);
  $log$jscomp$2_shader$jscomp$14$$ === null && ($log$jscomp$2_shader$jscomp$14$$ = "(unknown error)");
  $maxLength$jscomp$1_numBytesWrittenExclNull$jscomp$1$$ = $maxLength$jscomp$1_numBytesWrittenExclNull$jscomp$1$$ > 0 && $infoLog$jscomp$1$$ ? $stringToUTF8Array$$($log$jscomp$2_shader$jscomp$14$$, $HEAPU8$$, $infoLog$jscomp$1$$, $maxLength$jscomp$1_numBytesWrittenExclNull$jscomp$1$$) : 0;
  $length$jscomp$48$$ && ($HEAP32$$[$length$jscomp$48$$ >> 2] = $maxLength$jscomp$1_numBytesWrittenExclNull$jscomp$1$$);
}, glGetShaderiv:($log$jscomp$3_shader$jscomp$15_source$jscomp$19$$, $pname$jscomp$27$$, $p$jscomp$11$$) => {
  $p$jscomp$11$$ ? $pname$jscomp$27$$ == 35716 ? ($log$jscomp$3_shader$jscomp$15_source$jscomp$19$$ = $GLctx$$.getShaderInfoLog($GL$shaders$$[$log$jscomp$3_shader$jscomp$15_source$jscomp$19$$]), $log$jscomp$3_shader$jscomp$15_source$jscomp$19$$ === null && ($log$jscomp$3_shader$jscomp$15_source$jscomp$19$$ = "(unknown error)"), $HEAP32$$[$p$jscomp$11$$ >> 2] = $log$jscomp$3_shader$jscomp$15_source$jscomp$19$$ ? $log$jscomp$3_shader$jscomp$15_source$jscomp$19$$.length + 1 : 0) : $pname$jscomp$27$$ == 
  35720 ? ($log$jscomp$3_shader$jscomp$15_source$jscomp$19$$ = $GLctx$$.getShaderSource($GL$shaders$$[$log$jscomp$3_shader$jscomp$15_source$jscomp$19$$]), $HEAP32$$[$p$jscomp$11$$ >> 2] = $log$jscomp$3_shader$jscomp$15_source$jscomp$19$$ ? $log$jscomp$3_shader$jscomp$15_source$jscomp$19$$.length + 1 : 0) : $HEAP32$$[$p$jscomp$11$$ >> 2] = $GLctx$$.getShaderParameter($GL$shaders$$[$log$jscomp$3_shader$jscomp$15_source$jscomp$19$$], $pname$jscomp$27$$) : $GL$lastError$$ ||= 1281;
}, glGetStringi:($name$jscomp$106$$, $index$jscomp$116$$) => {
  if ($GL$currentContext$$.version < 2) {
    return $GL$lastError$$ ||= 1282, 0;
  }
  var $exts$jscomp$1_stringiCache$$ = $GL$stringiCache$$[$name$jscomp$106$$];
  if ($exts$jscomp$1_stringiCache$$) {
    return $index$jscomp$116$$ < 0 || $index$jscomp$116$$ >= $exts$jscomp$1_stringiCache$$.length ? ($GL$lastError$$ ||= 1281, 0) : $exts$jscomp$1_stringiCache$$[$index$jscomp$116$$];
  }
  switch($name$jscomp$106$$) {
    case 7939:
      return $exts$jscomp$1_stringiCache$$ = $webglGetExtensions$$().map($stringToNewUTF8$$), $exts$jscomp$1_stringiCache$$ = $GL$stringiCache$$[$name$jscomp$106$$] = $exts$jscomp$1_stringiCache$$, $index$jscomp$116$$ < 0 || $index$jscomp$116$$ >= $exts$jscomp$1_stringiCache$$.length ? ($GL$lastError$$ ||= 1281, 0) : $exts$jscomp$1_stringiCache$$[$index$jscomp$116$$];
    default:
      return $GL$lastError$$ ||= 1280, 0;
  }
}, glGetUniformLocation:($program$jscomp$70$$, $name$jscomp$108$$) => {
  $name$jscomp$108$$ = $name$jscomp$108$$ ? $UTF8ArrayToString$$($HEAPU8$$, $name$jscomp$108$$) : "";
  if ($program$jscomp$70$$ = $GL$programs$$[$program$jscomp$70$$]) {
    var $program$jscomp$inline_223_uniformLocsById$jscomp$1$$ = $program$jscomp$70$$, $arrayIndex_str$jscomp$inline_236_uniformLocsById$jscomp$inline_224$$ = $program$jscomp$inline_223_uniformLocsById$jscomp$1$$.$uniformLocsById$, $leftBrace_sizeAndId_uniformSizeAndIdsByName$jscomp$inline_225$$ = $program$jscomp$inline_223_uniformLocsById$jscomp$1$$.$uniformSizeAndIdsByName$, $i$jscomp$inline_226_uniformBaseName$$;
    if (!$arrayIndex_str$jscomp$inline_236_uniformLocsById$jscomp$inline_224$$) {
      $program$jscomp$inline_223_uniformLocsById$jscomp$1$$.$uniformLocsById$ = $arrayIndex_str$jscomp$inline_236_uniformLocsById$jscomp$inline_224$$ = {};
      $program$jscomp$inline_223_uniformLocsById$jscomp$1$$.$uniformArrayNamesById$ = {};
      var $numActiveUniforms$jscomp$inline_228$$ = $GLctx$$.getProgramParameter($program$jscomp$inline_223_uniformLocsById$jscomp$1$$, 35718);
      for ($i$jscomp$inline_226_uniformBaseName$$ = 0; $i$jscomp$inline_226_uniformBaseName$$ < $numActiveUniforms$jscomp$inline_228$$; ++$i$jscomp$inline_226_uniformBaseName$$) {
        var $sz$jscomp$inline_231_u$jscomp$inline_229$$ = $GLctx$$.getActiveUniform($program$jscomp$inline_223_uniformLocsById$jscomp$1$$, $i$jscomp$inline_226_uniformBaseName$$);
        var $j$jscomp$inline_227_nm$jscomp$inline_230$$ = $sz$jscomp$inline_231_u$jscomp$inline_229$$.name;
        $sz$jscomp$inline_231_u$jscomp$inline_229$$ = $sz$jscomp$inline_231_u$jscomp$inline_229$$.size;
        var $arrayName$jscomp$inline_233_lb$jscomp$inline_232$$ = $webglGetLeftBracePos$$($j$jscomp$inline_227_nm$jscomp$inline_230$$);
        $arrayName$jscomp$inline_233_lb$jscomp$inline_232$$ = $arrayName$jscomp$inline_233_lb$jscomp$inline_232$$ > 0 ? $j$jscomp$inline_227_nm$jscomp$inline_230$$.slice(0, $arrayName$jscomp$inline_233_lb$jscomp$inline_232$$) : $j$jscomp$inline_227_nm$jscomp$inline_230$$;
        var $id$jscomp$inline_234$$ = $program$jscomp$inline_223_uniformLocsById$jscomp$1$$.$uniformIdCounter$;
        $program$jscomp$inline_223_uniformLocsById$jscomp$1$$.$uniformIdCounter$ += $sz$jscomp$inline_231_u$jscomp$inline_229$$;
        $leftBrace_sizeAndId_uniformSizeAndIdsByName$jscomp$inline_225$$[$arrayName$jscomp$inline_233_lb$jscomp$inline_232$$] = [$sz$jscomp$inline_231_u$jscomp$inline_229$$, $id$jscomp$inline_234$$];
        for ($j$jscomp$inline_227_nm$jscomp$inline_230$$ = 0; $j$jscomp$inline_227_nm$jscomp$inline_230$$ < $sz$jscomp$inline_231_u$jscomp$inline_229$$; ++$j$jscomp$inline_227_nm$jscomp$inline_230$$) {
          $arrayIndex_str$jscomp$inline_236_uniformLocsById$jscomp$inline_224$$[$id$jscomp$inline_234$$] = $j$jscomp$inline_227_nm$jscomp$inline_230$$, $program$jscomp$inline_223_uniformLocsById$jscomp$1$$.$uniformArrayNamesById$[$id$jscomp$inline_234$$++] = $arrayName$jscomp$inline_233_lb$jscomp$inline_232$$;
        }
      }
    }
    $program$jscomp$inline_223_uniformLocsById$jscomp$1$$ = $program$jscomp$70$$.$uniformLocsById$;
    $arrayIndex_str$jscomp$inline_236_uniformLocsById$jscomp$inline_224$$ = 0;
    $i$jscomp$inline_226_uniformBaseName$$ = $name$jscomp$108$$;
    $leftBrace_sizeAndId_uniformSizeAndIdsByName$jscomp$inline_225$$ = $webglGetLeftBracePos$$($name$jscomp$108$$);
    $leftBrace_sizeAndId_uniformSizeAndIdsByName$jscomp$inline_225$$ > 0 && ($arrayIndex_str$jscomp$inline_236_uniformLocsById$jscomp$inline_224$$ = $name$jscomp$108$$.slice($leftBrace_sizeAndId_uniformSizeAndIdsByName$jscomp$inline_225$$ + 1), $arrayIndex_str$jscomp$inline_236_uniformLocsById$jscomp$inline_224$$ = parseInt($arrayIndex_str$jscomp$inline_236_uniformLocsById$jscomp$inline_224$$) >>> 0, $i$jscomp$inline_226_uniformBaseName$$ = $name$jscomp$108$$.slice(0, $leftBrace_sizeAndId_uniformSizeAndIdsByName$jscomp$inline_225$$));
    if (($leftBrace_sizeAndId_uniformSizeAndIdsByName$jscomp$inline_225$$ = $program$jscomp$70$$.$uniformSizeAndIdsByName$[$i$jscomp$inline_226_uniformBaseName$$]) && $arrayIndex_str$jscomp$inline_236_uniformLocsById$jscomp$inline_224$$ < $leftBrace_sizeAndId_uniformSizeAndIdsByName$jscomp$inline_225$$[0] && ($arrayIndex_str$jscomp$inline_236_uniformLocsById$jscomp$inline_224$$ += $leftBrace_sizeAndId_uniformSizeAndIdsByName$jscomp$inline_225$$[1], $program$jscomp$inline_223_uniformLocsById$jscomp$1$$[$arrayIndex_str$jscomp$inline_236_uniformLocsById$jscomp$inline_224$$] = 
    $program$jscomp$inline_223_uniformLocsById$jscomp$1$$[$arrayIndex_str$jscomp$inline_236_uniformLocsById$jscomp$inline_224$$] || $GLctx$$.getUniformLocation($program$jscomp$70$$, $name$jscomp$108$$))) {
      return $arrayIndex_str$jscomp$inline_236_uniformLocsById$jscomp$inline_224$$;
    }
  } else {
    $GL$lastError$$ ||= 1281;
  }
  return -1;
}, glInvalidateFramebuffer:($target$jscomp$144$$, $numAttachments$$, $attachments$jscomp$2$$) => {
  for (var $list$jscomp$1$$ = $tempFixedLengthArray$$[$numAttachments$$], $i$jscomp$40$$ = 0; $i$jscomp$40$$ < $numAttachments$$; $i$jscomp$40$$++) {
    $list$jscomp$1$$[$i$jscomp$40$$] = $HEAP32$$[$attachments$jscomp$2$$ + $i$jscomp$40$$ * 4 >> 2];
  }
  $GLctx$$.invalidateFramebuffer($target$jscomp$144$$, $list$jscomp$1$$);
}, glLinkProgram:$program$jscomp$71$$ => {
  $program$jscomp$71$$ = $GL$programs$$[$program$jscomp$71$$];
  $GLctx$$.linkProgram($program$jscomp$71$$);
  $program$jscomp$71$$.$uniformLocsById$ = 0;
  $program$jscomp$71$$.$uniformSizeAndIdsByName$ = {};
}, glPixelStorei:($pname$jscomp$28$$, $param$jscomp$7$$) => {
  $pname$jscomp$28$$ == 3317 ? $GL$unpackAlignment$$ = $param$jscomp$7$$ : $pname$jscomp$28$$ == 3314 && ($GL$unpackRowLength$$ = $param$jscomp$7$$);
  $GLctx$$.pixelStorei($pname$jscomp$28$$, $param$jscomp$7$$);
}, glPolygonOffset:($x0$jscomp$14$$, $x1$jscomp$10$$) => $GLctx$$.polygonOffset($x0$jscomp$14$$, $x1$jscomp$10$$), glReadBuffer:$x0$jscomp$15$$ => $GLctx$$.readBuffer($x0$jscomp$15$$), glRenderbufferStorageMultisample:($x0$jscomp$16$$, $x1$jscomp$11$$, $x2$jscomp$7$$, $x3$jscomp$4$$, $x4$jscomp$1$$) => $GLctx$$.renderbufferStorageMultisample($x0$jscomp$16$$, $x1$jscomp$11$$, $x2$jscomp$7$$, $x3$jscomp$4$$, $x4$jscomp$1$$), glSamplerParameterf:($sampler$jscomp$8$$, $pname$jscomp$29$$, $param$jscomp$8$$) => 
{
  $GLctx$$.samplerParameterf($GL$samplers$$[$sampler$jscomp$8$$], $pname$jscomp$29$$, $param$jscomp$8$$);
}, glSamplerParameteri:($sampler$jscomp$9$$, $pname$jscomp$30$$, $param$jscomp$9$$) => {
  $GLctx$$.samplerParameteri($GL$samplers$$[$sampler$jscomp$9$$], $pname$jscomp$30$$, $param$jscomp$9$$);
}, glScissor:($x0$jscomp$17$$, $x1$jscomp$12$$, $x2$jscomp$8$$, $x3$jscomp$5$$) => $GLctx$$.scissor($x0$jscomp$17$$, $x1$jscomp$12$$, $x2$jscomp$8$$, $x3$jscomp$5$$), glShaderSource:($shader$jscomp$16$$, $count$jscomp$46$$, $string$jscomp$21$$, $length$jscomp$49$$) => {
  for (var $JSCompiler_temp_const$jscomp$268_source$jscomp$inline_243$$ = "", $i$jscomp$inline_244$$ = 0; $i$jscomp$inline_244$$ < $count$jscomp$46$$; ++$i$jscomp$inline_244$$) {
    var $JSCompiler_inline_result$jscomp$269_ptr$jscomp$inline_307$$ = ($JSCompiler_inline_result$jscomp$269_ptr$jscomp$inline_307$$ = $HEAPU32$$[$string$jscomp$21$$ + $i$jscomp$inline_244$$ * 4 >> 2]) ? $UTF8ArrayToString$$($HEAPU8$$, $JSCompiler_inline_result$jscomp$269_ptr$jscomp$inline_307$$, $length$jscomp$49$$ ? $HEAPU32$$[$length$jscomp$49$$ + $i$jscomp$inline_244$$ * 4 >> 2] : void 0) : "";
    $JSCompiler_temp_const$jscomp$268_source$jscomp$inline_243$$ += $JSCompiler_inline_result$jscomp$269_ptr$jscomp$inline_307$$;
  }
  $GLctx$$.shaderSource($GL$shaders$$[$shader$jscomp$16$$], $JSCompiler_temp_const$jscomp$268_source$jscomp$inline_243$$);
}, glStencilFunc:($x0$jscomp$18$$, $x1$jscomp$13$$, $x2$jscomp$9$$) => $GLctx$$.stencilFunc($x0$jscomp$18$$, $x1$jscomp$13$$, $x2$jscomp$9$$), glStencilFuncSeparate:($x0$jscomp$19$$, $x1$jscomp$14$$, $x2$jscomp$10$$, $x3$jscomp$6$$) => $GLctx$$.stencilFuncSeparate($x0$jscomp$19$$, $x1$jscomp$14$$, $x2$jscomp$10$$, $x3$jscomp$6$$), glStencilMask:$x0$jscomp$20$$ => $GLctx$$.stencilMask($x0$jscomp$20$$), glStencilOp:($x0$jscomp$21$$, $x1$jscomp$15$$, $x2$jscomp$11$$) => $GLctx$$.stencilOp($x0$jscomp$21$$, 
$x1$jscomp$15$$, $x2$jscomp$11$$), glStencilOpSeparate:($x0$jscomp$22$$, $x1$jscomp$16$$, $x2$jscomp$12$$, $x3$jscomp$7$$) => $GLctx$$.stencilOpSeparate($x0$jscomp$22$$, $x1$jscomp$16$$, $x2$jscomp$12$$, $x3$jscomp$7$$), glTexStorage2D:($x0$jscomp$23$$, $x1$jscomp$17$$, $x2$jscomp$13$$, $x3$jscomp$8$$, $x4$jscomp$2$$) => $GLctx$$.texStorage2D($x0$jscomp$23$$, $x1$jscomp$17$$, $x2$jscomp$13$$, $x3$jscomp$8$$, $x4$jscomp$2$$), glTexStorage3D:($x0$jscomp$24$$, $x1$jscomp$18$$, $x2$jscomp$14$$, $x3$jscomp$9$$, 
$x4$jscomp$3$$, $x5$jscomp$1$$) => $GLctx$$.texStorage3D($x0$jscomp$24$$, $x1$jscomp$18$$, $x2$jscomp$14$$, $x3$jscomp$9$$, $x4$jscomp$3$$, $x5$jscomp$1$$), glTexSubImage2D:($target$jscomp$145$$, $level$jscomp$23$$, $xoffset$jscomp$10$$, $yoffset$jscomp$10$$, $width$jscomp$34$$, $height$jscomp$31$$, $format$jscomp$24$$, $type$jscomp$197$$, $JSCompiler_temp$jscomp$18_pixels$jscomp$2$$) => {
  if ($GL$currentContext$$.version >= 2) {
    if ($GLctx$$.$currentPixelUnpackBufferBinding$) {
      $GLctx$$.texSubImage2D($target$jscomp$145$$, $level$jscomp$23$$, $xoffset$jscomp$10$$, $yoffset$jscomp$10$$, $width$jscomp$34$$, $height$jscomp$31$$, $format$jscomp$24$$, $type$jscomp$197$$, $JSCompiler_temp$jscomp$18_pixels$jscomp$2$$);
      return;
    }
    if ($JSCompiler_temp$jscomp$18_pixels$jscomp$2$$) {
      var $heap$jscomp$3_heap$jscomp$inline_251$$ = $heapObjectForWebGLType$$($type$jscomp$197$$);
      $GLctx$$.texSubImage2D($target$jscomp$145$$, $level$jscomp$23$$, $xoffset$jscomp$10$$, $yoffset$jscomp$10$$, $width$jscomp$34$$, $height$jscomp$31$$, $format$jscomp$24$$, $type$jscomp$197$$, $heap$jscomp$3_heap$jscomp$inline_251$$, $JSCompiler_temp$jscomp$18_pixels$jscomp$2$$ >>> 31 - Math.clz32($heap$jscomp$3_heap$jscomp$inline_251$$.BYTES_PER_ELEMENT));
      return;
    }
  }
  if ($JSCompiler_temp$jscomp$18_pixels$jscomp$2$$) {
    $heap$jscomp$3_heap$jscomp$inline_251$$ = $heapObjectForWebGLType$$($type$jscomp$197$$);
    var $bytes$jscomp$inline_252$$ = $height$jscomp$31$$ * (({5:3, 6:4, 8:2, 29502:3, 29504:4, 26917:2, 26918:2, 29846:3, 29847:4}[$format$jscomp$24$$ - 6402] || 1) * $heap$jscomp$3_heap$jscomp$inline_251$$.BYTES_PER_ELEMENT * ($GL$unpackRowLength$$ || $width$jscomp$34$$) + $GL$unpackAlignment$$ - 1 & -$GL$unpackAlignment$$);
    $JSCompiler_temp$jscomp$18_pixels$jscomp$2$$ = $heap$jscomp$3_heap$jscomp$inline_251$$.subarray($JSCompiler_temp$jscomp$18_pixels$jscomp$2$$ >>> 31 - Math.clz32($heap$jscomp$3_heap$jscomp$inline_251$$.BYTES_PER_ELEMENT), $JSCompiler_temp$jscomp$18_pixels$jscomp$2$$ + $bytes$jscomp$inline_252$$ >>> 31 - Math.clz32($heap$jscomp$3_heap$jscomp$inline_251$$.BYTES_PER_ELEMENT));
  } else {
    $JSCompiler_temp$jscomp$18_pixels$jscomp$2$$ = null;
  }
  $GLctx$$.texSubImage2D($target$jscomp$145$$, $level$jscomp$23$$, $xoffset$jscomp$10$$, $yoffset$jscomp$10$$, $width$jscomp$34$$, $height$jscomp$31$$, $format$jscomp$24$$, $type$jscomp$197$$, $JSCompiler_temp$jscomp$18_pixels$jscomp$2$$);
}, glTexSubImage3D:($target$jscomp$146$$, $level$jscomp$24$$, $xoffset$jscomp$11$$, $yoffset$jscomp$11$$, $zoffset$jscomp$4$$, $width$jscomp$35$$, $height$jscomp$32$$, $depth$jscomp$10$$, $format$jscomp$25$$, $type$jscomp$198$$, $pixels$jscomp$3$$) => {
  if ($GLctx$$.$currentPixelUnpackBufferBinding$) {
    $GLctx$$.texSubImage3D($target$jscomp$146$$, $level$jscomp$24$$, $xoffset$jscomp$11$$, $yoffset$jscomp$11$$, $zoffset$jscomp$4$$, $width$jscomp$35$$, $height$jscomp$32$$, $depth$jscomp$10$$, $format$jscomp$25$$, $type$jscomp$198$$, $pixels$jscomp$3$$);
  } else if ($pixels$jscomp$3$$) {
    var $heap$jscomp$4$$ = $heapObjectForWebGLType$$($type$jscomp$198$$);
    $GLctx$$.texSubImage3D($target$jscomp$146$$, $level$jscomp$24$$, $xoffset$jscomp$11$$, $yoffset$jscomp$11$$, $zoffset$jscomp$4$$, $width$jscomp$35$$, $height$jscomp$32$$, $depth$jscomp$10$$, $format$jscomp$25$$, $type$jscomp$198$$, $heap$jscomp$4$$, $pixels$jscomp$3$$ >>> 31 - Math.clz32($heap$jscomp$4$$.BYTES_PER_ELEMENT));
  } else {
    $GLctx$$.texSubImage3D($target$jscomp$146$$, $level$jscomp$24$$, $xoffset$jscomp$11$$, $yoffset$jscomp$11$$, $zoffset$jscomp$4$$, $width$jscomp$35$$, $height$jscomp$32$$, $depth$jscomp$10$$, $format$jscomp$25$$, $type$jscomp$198$$, null);
  }
}, glUniform1fv:($location$jscomp$81$$, $count$jscomp$47$$, $value$jscomp$197$$) => {
  if ($GL$currentContext$$.version >= 2) {
    $count$jscomp$47$$ && $GLctx$$.uniform1fv($webglGetProgramUniformLocation$$($location$jscomp$81$$), $HEAPF32$$, $value$jscomp$197$$ >> 2, $count$jscomp$47$$);
  } else {
    if ($count$jscomp$47$$ <= 288) {
      for (var $view$jscomp$10$$ = $miniTempWebGLFloatBuffers$$[$count$jscomp$47$$], $i$jscomp$41$$ = 0; $i$jscomp$41$$ < $count$jscomp$47$$; ++$i$jscomp$41$$) {
        $view$jscomp$10$$[$i$jscomp$41$$] = $HEAPF32$$[$value$jscomp$197$$ + 4 * $i$jscomp$41$$ >> 2];
      }
    } else {
      $view$jscomp$10$$ = $HEAPF32$$.subarray($value$jscomp$197$$ >> 2, $value$jscomp$197$$ + $count$jscomp$47$$ * 4 >> 2);
    }
    $GLctx$$.uniform1fv($webglGetProgramUniformLocation$$($location$jscomp$81$$), $view$jscomp$10$$);
  }
}, glUniform1i:($location$jscomp$82$$, $v0$jscomp$16$$) => {
  $GLctx$$.uniform1i($webglGetProgramUniformLocation$$($location$jscomp$82$$), $v0$jscomp$16$$);
}, glUniform1iv:($location$jscomp$83$$, $count$jscomp$48$$, $value$jscomp$198$$) => {
  if ($GL$currentContext$$.version >= 2) {
    $count$jscomp$48$$ && $GLctx$$.uniform1iv($webglGetProgramUniformLocation$$($location$jscomp$83$$), $HEAP32$$, $value$jscomp$198$$ >> 2, $count$jscomp$48$$);
  } else {
    if ($count$jscomp$48$$ <= 288) {
      for (var $view$jscomp$11$$ = $miniTempWebGLIntBuffers$$[$count$jscomp$48$$], $i$jscomp$42$$ = 0; $i$jscomp$42$$ < $count$jscomp$48$$; ++$i$jscomp$42$$) {
        $view$jscomp$11$$[$i$jscomp$42$$] = $HEAP32$$[$value$jscomp$198$$ + 4 * $i$jscomp$42$$ >> 2];
      }
    } else {
      $view$jscomp$11$$ = $HEAP32$$.subarray($value$jscomp$198$$ >> 2, $value$jscomp$198$$ + $count$jscomp$48$$ * 4 >> 2);
    }
    $GLctx$$.uniform1iv($webglGetProgramUniformLocation$$($location$jscomp$83$$), $view$jscomp$11$$);
  }
}, glUniform2fv:($location$jscomp$84$$, $count$jscomp$49$$, $value$jscomp$199$$) => {
  if ($GL$currentContext$$.version >= 2) {
    $count$jscomp$49$$ && $GLctx$$.uniform2fv($webglGetProgramUniformLocation$$($location$jscomp$84$$), $HEAPF32$$, $value$jscomp$199$$ >> 2, $count$jscomp$49$$ * 2);
  } else {
    if ($count$jscomp$49$$ <= 144) {
      $count$jscomp$49$$ *= 2;
      for (var $view$jscomp$12$$ = $miniTempWebGLFloatBuffers$$[$count$jscomp$49$$], $i$jscomp$43$$ = 0; $i$jscomp$43$$ < $count$jscomp$49$$; $i$jscomp$43$$ += 2) {
        $view$jscomp$12$$[$i$jscomp$43$$] = $HEAPF32$$[$value$jscomp$199$$ + 4 * $i$jscomp$43$$ >> 2], $view$jscomp$12$$[$i$jscomp$43$$ + 1] = $HEAPF32$$[$value$jscomp$199$$ + (4 * $i$jscomp$43$$ + 4) >> 2];
      }
    } else {
      $view$jscomp$12$$ = $HEAPF32$$.subarray($value$jscomp$199$$ >> 2, $value$jscomp$199$$ + $count$jscomp$49$$ * 8 >> 2);
    }
    $GLctx$$.uniform2fv($webglGetProgramUniformLocation$$($location$jscomp$84$$), $view$jscomp$12$$);
  }
}, glUniform2iv:($location$jscomp$85$$, $count$jscomp$50$$, $value$jscomp$200$$) => {
  if ($GL$currentContext$$.version >= 2) {
    $count$jscomp$50$$ && $GLctx$$.uniform2iv($webglGetProgramUniformLocation$$($location$jscomp$85$$), $HEAP32$$, $value$jscomp$200$$ >> 2, $count$jscomp$50$$ * 2);
  } else {
    if ($count$jscomp$50$$ <= 144) {
      $count$jscomp$50$$ *= 2;
      for (var $view$jscomp$13$$ = $miniTempWebGLIntBuffers$$[$count$jscomp$50$$], $i$jscomp$44$$ = 0; $i$jscomp$44$$ < $count$jscomp$50$$; $i$jscomp$44$$ += 2) {
        $view$jscomp$13$$[$i$jscomp$44$$] = $HEAP32$$[$value$jscomp$200$$ + 4 * $i$jscomp$44$$ >> 2], $view$jscomp$13$$[$i$jscomp$44$$ + 1] = $HEAP32$$[$value$jscomp$200$$ + (4 * $i$jscomp$44$$ + 4) >> 2];
      }
    } else {
      $view$jscomp$13$$ = $HEAP32$$.subarray($value$jscomp$200$$ >> 2, $value$jscomp$200$$ + $count$jscomp$50$$ * 8 >> 2);
    }
    $GLctx$$.uniform2iv($webglGetProgramUniformLocation$$($location$jscomp$85$$), $view$jscomp$13$$);
  }
}, glUniform3fv:($location$jscomp$86$$, $count$jscomp$51$$, $value$jscomp$201$$) => {
  if ($GL$currentContext$$.version >= 2) {
    $count$jscomp$51$$ && $GLctx$$.uniform3fv($webglGetProgramUniformLocation$$($location$jscomp$86$$), $HEAPF32$$, $value$jscomp$201$$ >> 2, $count$jscomp$51$$ * 3);
  } else {
    if ($count$jscomp$51$$ <= 96) {
      $count$jscomp$51$$ *= 3;
      for (var $view$jscomp$14$$ = $miniTempWebGLFloatBuffers$$[$count$jscomp$51$$], $i$jscomp$45$$ = 0; $i$jscomp$45$$ < $count$jscomp$51$$; $i$jscomp$45$$ += 3) {
        $view$jscomp$14$$[$i$jscomp$45$$] = $HEAPF32$$[$value$jscomp$201$$ + 4 * $i$jscomp$45$$ >> 2], $view$jscomp$14$$[$i$jscomp$45$$ + 1] = $HEAPF32$$[$value$jscomp$201$$ + (4 * $i$jscomp$45$$ + 4) >> 2], $view$jscomp$14$$[$i$jscomp$45$$ + 2] = $HEAPF32$$[$value$jscomp$201$$ + (4 * $i$jscomp$45$$ + 8) >> 2];
      }
    } else {
      $view$jscomp$14$$ = $HEAPF32$$.subarray($value$jscomp$201$$ >> 2, $value$jscomp$201$$ + $count$jscomp$51$$ * 12 >> 2);
    }
    $GLctx$$.uniform3fv($webglGetProgramUniformLocation$$($location$jscomp$86$$), $view$jscomp$14$$);
  }
}, glUniform3iv:($location$jscomp$87$$, $count$jscomp$52$$, $value$jscomp$202$$) => {
  if ($GL$currentContext$$.version >= 2) {
    $count$jscomp$52$$ && $GLctx$$.uniform3iv($webglGetProgramUniformLocation$$($location$jscomp$87$$), $HEAP32$$, $value$jscomp$202$$ >> 2, $count$jscomp$52$$ * 3);
  } else {
    if ($count$jscomp$52$$ <= 96) {
      $count$jscomp$52$$ *= 3;
      for (var $view$jscomp$15$$ = $miniTempWebGLIntBuffers$$[$count$jscomp$52$$], $i$jscomp$46$$ = 0; $i$jscomp$46$$ < $count$jscomp$52$$; $i$jscomp$46$$ += 3) {
        $view$jscomp$15$$[$i$jscomp$46$$] = $HEAP32$$[$value$jscomp$202$$ + 4 * $i$jscomp$46$$ >> 2], $view$jscomp$15$$[$i$jscomp$46$$ + 1] = $HEAP32$$[$value$jscomp$202$$ + (4 * $i$jscomp$46$$ + 4) >> 2], $view$jscomp$15$$[$i$jscomp$46$$ + 2] = $HEAP32$$[$value$jscomp$202$$ + (4 * $i$jscomp$46$$ + 8) >> 2];
      }
    } else {
      $view$jscomp$15$$ = $HEAP32$$.subarray($value$jscomp$202$$ >> 2, $value$jscomp$202$$ + $count$jscomp$52$$ * 12 >> 2);
    }
    $GLctx$$.uniform3iv($webglGetProgramUniformLocation$$($location$jscomp$87$$), $view$jscomp$15$$);
  }
}, glUniform4fv:($location$jscomp$88$$, $count$jscomp$53$$, $value$jscomp$203$$) => {
  if ($GL$currentContext$$.version >= 2) {
    $count$jscomp$53$$ && $GLctx$$.uniform4fv($webglGetProgramUniformLocation$$($location$jscomp$88$$), $HEAPF32$$, $value$jscomp$203$$ >> 2, $count$jscomp$53$$ * 4);
  } else {
    if ($count$jscomp$53$$ <= 72) {
      var $view$jscomp$16$$ = $miniTempWebGLFloatBuffers$$[4 * $count$jscomp$53$$], $heap$jscomp$5$$ = $HEAPF32$$;
      $value$jscomp$203$$ >>= 2;
      $count$jscomp$53$$ *= 4;
      for (var $i$jscomp$47$$ = 0; $i$jscomp$47$$ < $count$jscomp$53$$; $i$jscomp$47$$ += 4) {
        var $dst$$ = $value$jscomp$203$$ + $i$jscomp$47$$;
        $view$jscomp$16$$[$i$jscomp$47$$] = $heap$jscomp$5$$[$dst$$];
        $view$jscomp$16$$[$i$jscomp$47$$ + 1] = $heap$jscomp$5$$[$dst$$ + 1];
        $view$jscomp$16$$[$i$jscomp$47$$ + 2] = $heap$jscomp$5$$[$dst$$ + 2];
        $view$jscomp$16$$[$i$jscomp$47$$ + 3] = $heap$jscomp$5$$[$dst$$ + 3];
      }
    } else {
      $view$jscomp$16$$ = $HEAPF32$$.subarray($value$jscomp$203$$ >> 2, $value$jscomp$203$$ + $count$jscomp$53$$ * 16 >> 2);
    }
    $GLctx$$.uniform4fv($webglGetProgramUniformLocation$$($location$jscomp$88$$), $view$jscomp$16$$);
  }
}, glUniform4iv:($location$jscomp$89$$, $count$jscomp$54$$, $value$jscomp$204$$) => {
  if ($GL$currentContext$$.version >= 2) {
    $count$jscomp$54$$ && $GLctx$$.uniform4iv($webglGetProgramUniformLocation$$($location$jscomp$89$$), $HEAP32$$, $value$jscomp$204$$ >> 2, $count$jscomp$54$$ * 4);
  } else {
    if ($count$jscomp$54$$ <= 72) {
      $count$jscomp$54$$ *= 4;
      for (var $view$jscomp$17$$ = $miniTempWebGLIntBuffers$$[$count$jscomp$54$$], $i$jscomp$48$$ = 0; $i$jscomp$48$$ < $count$jscomp$54$$; $i$jscomp$48$$ += 4) {
        $view$jscomp$17$$[$i$jscomp$48$$] = $HEAP32$$[$value$jscomp$204$$ + 4 * $i$jscomp$48$$ >> 2], $view$jscomp$17$$[$i$jscomp$48$$ + 1] = $HEAP32$$[$value$jscomp$204$$ + (4 * $i$jscomp$48$$ + 4) >> 2], $view$jscomp$17$$[$i$jscomp$48$$ + 2] = $HEAP32$$[$value$jscomp$204$$ + (4 * $i$jscomp$48$$ + 8) >> 2], $view$jscomp$17$$[$i$jscomp$48$$ + 3] = $HEAP32$$[$value$jscomp$204$$ + (4 * $i$jscomp$48$$ + 12) >> 2];
      }
    } else {
      $view$jscomp$17$$ = $HEAP32$$.subarray($value$jscomp$204$$ >> 2, $value$jscomp$204$$ + $count$jscomp$54$$ * 16 >> 2);
    }
    $GLctx$$.uniform4iv($webglGetProgramUniformLocation$$($location$jscomp$89$$), $view$jscomp$17$$);
  }
}, glUniformMatrix4fv:($location$jscomp$90$$, $count$jscomp$55$$, $transpose$jscomp$21$$, $value$jscomp$205$$) => {
  if ($GL$currentContext$$.version >= 2) {
    $count$jscomp$55$$ && $GLctx$$.uniformMatrix4fv($webglGetProgramUniformLocation$$($location$jscomp$90$$), !!$transpose$jscomp$21$$, $HEAPF32$$, $value$jscomp$205$$ >> 2, $count$jscomp$55$$ * 16);
  } else {
    if ($count$jscomp$55$$ <= 18) {
      var $view$jscomp$18$$ = $miniTempWebGLFloatBuffers$$[16 * $count$jscomp$55$$], $heap$jscomp$6$$ = $HEAPF32$$;
      $value$jscomp$205$$ >>= 2;
      $count$jscomp$55$$ *= 16;
      for (var $i$jscomp$49$$ = 0; $i$jscomp$49$$ < $count$jscomp$55$$; $i$jscomp$49$$ += 16) {
        var $dst$jscomp$1$$ = $value$jscomp$205$$ + $i$jscomp$49$$;
        $view$jscomp$18$$[$i$jscomp$49$$] = $heap$jscomp$6$$[$dst$jscomp$1$$];
        $view$jscomp$18$$[$i$jscomp$49$$ + 1] = $heap$jscomp$6$$[$dst$jscomp$1$$ + 1];
        $view$jscomp$18$$[$i$jscomp$49$$ + 2] = $heap$jscomp$6$$[$dst$jscomp$1$$ + 2];
        $view$jscomp$18$$[$i$jscomp$49$$ + 3] = $heap$jscomp$6$$[$dst$jscomp$1$$ + 3];
        $view$jscomp$18$$[$i$jscomp$49$$ + 4] = $heap$jscomp$6$$[$dst$jscomp$1$$ + 4];
        $view$jscomp$18$$[$i$jscomp$49$$ + 5] = $heap$jscomp$6$$[$dst$jscomp$1$$ + 5];
        $view$jscomp$18$$[$i$jscomp$49$$ + 6] = $heap$jscomp$6$$[$dst$jscomp$1$$ + 6];
        $view$jscomp$18$$[$i$jscomp$49$$ + 7] = $heap$jscomp$6$$[$dst$jscomp$1$$ + 7];
        $view$jscomp$18$$[$i$jscomp$49$$ + 8] = $heap$jscomp$6$$[$dst$jscomp$1$$ + 8];
        $view$jscomp$18$$[$i$jscomp$49$$ + 9] = $heap$jscomp$6$$[$dst$jscomp$1$$ + 9];
        $view$jscomp$18$$[$i$jscomp$49$$ + 10] = $heap$jscomp$6$$[$dst$jscomp$1$$ + 10];
        $view$jscomp$18$$[$i$jscomp$49$$ + 11] = $heap$jscomp$6$$[$dst$jscomp$1$$ + 11];
        $view$jscomp$18$$[$i$jscomp$49$$ + 12] = $heap$jscomp$6$$[$dst$jscomp$1$$ + 12];
        $view$jscomp$18$$[$i$jscomp$49$$ + 13] = $heap$jscomp$6$$[$dst$jscomp$1$$ + 13];
        $view$jscomp$18$$[$i$jscomp$49$$ + 14] = $heap$jscomp$6$$[$dst$jscomp$1$$ + 14];
        $view$jscomp$18$$[$i$jscomp$49$$ + 15] = $heap$jscomp$6$$[$dst$jscomp$1$$ + 15];
      }
    } else {
      $view$jscomp$18$$ = $HEAPF32$$.subarray($value$jscomp$205$$ >> 2, $value$jscomp$205$$ + $count$jscomp$55$$ * 64 >> 2);
    }
    $GLctx$$.uniformMatrix4fv($webglGetProgramUniformLocation$$($location$jscomp$90$$), !!$transpose$jscomp$21$$, $view$jscomp$18$$);
  }
}, glUseProgram:$program$jscomp$73$$ => {
  $program$jscomp$73$$ = $GL$programs$$[$program$jscomp$73$$];
  $GLctx$$.useProgram($program$jscomp$73$$);
  $GLctx$$.$currentProgram$ = $program$jscomp$73$$;
}, glVertexAttribDivisor:($index$jscomp$117$$, $divisor$jscomp$4$$) => {
  $GLctx$$.vertexAttribDivisor($index$jscomp$117$$, $divisor$jscomp$4$$);
}, glVertexAttribIPointer:($index$jscomp$118$$, $size$jscomp$33$$, $type$jscomp$199$$, $stride$jscomp$3$$, $ptr$jscomp$13$$) => {
  $GLctx$$.vertexAttribIPointer($index$jscomp$118$$, $size$jscomp$33$$, $type$jscomp$199$$, $stride$jscomp$3$$, $ptr$jscomp$13$$);
}, glVertexAttribPointer:($index$jscomp$119$$, $size$jscomp$34$$, $type$jscomp$200$$, $normalized$jscomp$2$$, $stride$jscomp$4$$, $ptr$jscomp$14$$) => {
  $GLctx$$.vertexAttribPointer($index$jscomp$119$$, $size$jscomp$34$$, $type$jscomp$200$$, !!$normalized$jscomp$2$$, $stride$jscomp$4$$, $ptr$jscomp$14$$);
}, glViewport:($x0$jscomp$25$$, $x1$jscomp$19$$, $x2$jscomp$15$$, $x3$jscomp$10$$) => $GLctx$$.viewport($x0$jscomp$25$$, $x1$jscomp$19$$, $x2$jscomp$15$$, $x3$jscomp$10$$), sapp_js_add_beforeunload_listener:function() {
  $Module$$.$sokol_beforeunload$ = $event$jscomp$18$$ => {
    $__sapp_html5_get_ask_leave_site$$() != 0 && ($event$jscomp$18$$.preventDefault(), $event$jscomp$18$$.returnValue = " ");
  };
  window.addEventListener("beforeunload", $Module$$.$sokol_beforeunload$);
}, sapp_js_add_clipboard_listener:function() {
  $Module$$.$sokol_paste$ = $event$jscomp$19$$ => {
    var $pasted_str$$ = $event$jscomp$19$$.clipboardData.getData("text");
    $withStackSave$$(() => {
      var $cstr$$ = $stringToUTF8OnStack$$($pasted_str$$);
      $__sapp_emsc_onpaste$$($cstr$$);
    });
  };
  window.addEventListener("paste", $Module$$.$sokol_paste$);
}, sapp_js_add_dragndrop_listeners:function() {
  $Module$$.$sokol_drop_files$ = [];
  $Module$$.$sokol_dragenter$ = $event$jscomp$20$$ => {
    $event$jscomp$20$$.stopPropagation();
    $event$jscomp$20$$.preventDefault();
  };
  $Module$$.$sokol_dragleave$ = $event$jscomp$21$$ => {
    $event$jscomp$21$$.stopPropagation();
    $event$jscomp$21$$.preventDefault();
  };
  $Module$$.$sokol_dragover$ = $event$jscomp$22$$ => {
    $event$jscomp$22$$.stopPropagation();
    $event$jscomp$22$$.preventDefault();
  };
  $Module$$.$sokol_drop$ = $event$jscomp$23$$ => {
    $event$jscomp$23$$.stopPropagation();
    $event$jscomp$23$$.preventDefault();
    var $files$$ = $event$jscomp$23$$.dataTransfer.files;
    $Module$$.$sokol_dropped_files$ = $files$$;
    $__sapp_emsc_begin_drop$$($files$$.length);
    for (let $i$jscomp$51$$ = 0; $i$jscomp$51$$ < $files$$.length; $i$jscomp$51$$++) {
      $withStackSave$$(() => {
        var $cstr$jscomp$1$$ = $stringToUTF8OnStack$$($files$$[$i$jscomp$51$$].name);
        $__sapp_emsc_drop$$($i$jscomp$51$$, $cstr$jscomp$1$$);
      });
    }
    var $mods$$ = 0;
    $event$jscomp$23$$.shiftKey && ($mods$$ |= 1);
    $event$jscomp$23$$.ctrlKey && ($mods$$ |= 2);
    $event$jscomp$23$$.altKey && ($mods$$ |= 4);
    $event$jscomp$23$$.metaKey && ($mods$$ |= 8);
    $__sapp_emsc_end_drop$$($event$jscomp$23$$.clientX, $event$jscomp$23$$.clientY, $mods$$);
  };
  var $canvas$jscomp$3$$ = $Module$$.$sapp_emsc_target$;
  $canvas$jscomp$3$$.addEventListener("dragenter", $Module$$.$sokol_dragenter$, !1);
  $canvas$jscomp$3$$.addEventListener("dragleave", $Module$$.$sokol_dragleave$, !1);
  $canvas$jscomp$3$$.addEventListener("dragover", $Module$$.$sokol_dragover$, !1);
  $canvas$jscomp$3$$.addEventListener("drop", $Module$$.$sokol_drop$, !1);
}, sapp_js_clear_favicon:function() {
  var $link$jscomp$2$$ = document.getElementById("sokol-app-favicon");
  $link$jscomp$2$$ && document.head.removeChild($link$jscomp$2$$);
}, sapp_js_destroy_custom_mouse_cursor:function($cursor_slot_idx$jscomp$1$$) {
  $Module$$.$__sapp_custom_cursors$ && (URL.revokeObjectURL($Module$$.$__sapp_custom_cursors$[$cursor_slot_idx$jscomp$1$$].$blob_url$), $Module$$.$__sapp_custom_cursors$[$cursor_slot_idx$jscomp$1$$] = null);
}, sapp_js_init:function($c_str_target_selector_target_selector_str$$, $c_str_document_title$$) {
  $c_str_document_title$$ !== 0 && (document.title = $c_str_document_title$$ ? $UTF8ArrayToString$$($HEAPU8$$, $c_str_document_title$$) : "");
  $c_str_target_selector_target_selector_str$$ = $c_str_target_selector_target_selector_str$$ ? $UTF8ArrayToString$$($HEAPU8$$, $c_str_target_selector_target_selector_str$$) : "";
  $Module$$.canvas !== void 0 && (typeof $Module$$.canvas === "object" ? $specialHTMLTargets$$[$c_str_target_selector_target_selector_str$$] = $Module$$.canvas : console.warn("sokol_app.h: Module['canvas'] is set but is not an object"));
  $Module$$.$sapp_emsc_target$ = $findEventTarget$$($c_str_target_selector_target_selector_str$$);
  $Module$$.$sapp_emsc_target$ || console.warn("sokol_app.h: can't find html5_canvas_selector ", $c_str_target_selector_target_selector_str$$);
  $Module$$.$sapp_emsc_target$.requestPointerLock || console.warn("sokol_app.h: target doesn't support requestPointerLock: ", $c_str_target_selector_target_selector_str$$);
}, sapp_js_remove_beforeunload_listener:function() {
  window.removeEventListener("beforeunload", $Module$$.$sokol_beforeunload$);
}, sapp_js_remove_clipboard_listener:function() {
  window.removeEventListener("paste", $Module$$.$sokol_paste$);
}, sapp_js_remove_dragndrop_listeners:function() {
  var $canvas$jscomp$4$$ = $Module$$.$sapp_emsc_target$;
  $canvas$jscomp$4$$.removeEventListener("dragenter", $Module$$.$sokol_dragenter$);
  $canvas$jscomp$4$$.removeEventListener("dragleave", $Module$$.$sokol_dragleave$);
  $canvas$jscomp$4$$.removeEventListener("dragover", $Module$$.$sokol_dragover$);
  $canvas$jscomp$4$$.removeEventListener("drop", $Module$$.$sokol_drop$);
}, sapp_js_request_pointerlock:function() {
  $Module$$.$sapp_emsc_target$ && $Module$$.$sapp_emsc_target$.requestPointerLock && $Module$$.$sapp_emsc_target$.requestPointerLock();
}, sapp_js_set_cursor:function($cursor_cursor_type$$, $shown$$, $use_custom_cursor_image$$) {
  if ($Module$$.$sapp_emsc_target$) {
    if ($shown$$ === 0) {
      $cursor_cursor_type$$ = "none";
    } else if ($use_custom_cursor_image$$ != 0) {
      $cursor_cursor_type$$ = $Module$$.$__sapp_custom_cursors$[$cursor_cursor_type$$].$css_property$;
    } else {
      switch($cursor_cursor_type$$) {
        case 0:
          $cursor_cursor_type$$ = "auto";
          break;
        case 1:
          $cursor_cursor_type$$ = "default";
          break;
        case 2:
          $cursor_cursor_type$$ = "text";
          break;
        case 3:
          $cursor_cursor_type$$ = "crosshair";
          break;
        case 4:
          $cursor_cursor_type$$ = "pointer";
          break;
        case 5:
          $cursor_cursor_type$$ = "ew-resize";
          break;
        case 6:
          $cursor_cursor_type$$ = "ns-resize";
          break;
        case 7:
          $cursor_cursor_type$$ = "nwse-resize";
          break;
        case 8:
          $cursor_cursor_type$$ = "nesw-resize";
          break;
        case 9:
          $cursor_cursor_type$$ = "all-scroll";
          break;
        case 10:
          $cursor_cursor_type$$ = "not-allowed";
          break;
        default:
          $cursor_cursor_type$$ = "auto";
      }
    }
    $Module$$.$sapp_emsc_target$.style.cursor = $cursor_cursor_type$$;
  }
}, sapp_js_set_favicon:function($new_link_w$jscomp$14$$, $h$jscomp$10$$, $pixels$jscomp$4$$) {
  var $canvas$jscomp$6$$ = document.createElement("canvas");
  $canvas$jscomp$6$$.width = $new_link_w$jscomp$14$$;
  $canvas$jscomp$6$$.height = $h$jscomp$10$$;
  var $ctx$jscomp$12$$ = $canvas$jscomp$6$$.getContext("2d"), $img_data$$ = $ctx$jscomp$12$$.createImageData($new_link_w$jscomp$14$$, $h$jscomp$10$$);
  $img_data$$.data.set($HEAPU8$$.subarray($pixels$jscomp$4$$, $pixels$jscomp$4$$ + $new_link_w$jscomp$14$$ * $h$jscomp$10$$ * 4));
  $ctx$jscomp$12$$.putImageData($img_data$$, 0, 0);
  $new_link_w$jscomp$14$$ = document.createElement("link");
  $new_link_w$jscomp$14$$.id = "sokol-app-favicon";
  $new_link_w$jscomp$14$$.rel = "shortcut icon";
  $new_link_w$jscomp$14$$.href = $canvas$jscomp$6$$.toDataURL();
  document.head.appendChild($new_link_w$jscomp$14$$);
}, sapp_js_write_clipboard:function($c_str_str$jscomp$17$$) {
  $c_str_str$jscomp$17$$ = $c_str_str$jscomp$17$$ ? $UTF8ArrayToString$$($HEAPU8$$, $c_str_str$jscomp$17$$) : "";
  var $ta$$ = document.createElement("textarea");
  $ta$$.setAttribute("autocomplete", "off");
  $ta$$.setAttribute("autocorrect", "off");
  $ta$$.setAttribute("autocapitalize", "off");
  $ta$$.setAttribute("spellcheck", "false");
  $ta$$.style.left = "-100px";
  $ta$$.style.top = "-100px";
  $ta$$.style.height = 1;
  $ta$$.style.width = 1;
  $ta$$.value = $c_str_str$jscomp$17$$;
  document.body.appendChild($ta$$);
  $ta$$.select();
  document.execCommand("copy");
  document.body.removeChild($ta$$);
}, simgui_js_is_osx:function() {
  return navigator.userAgent.includes("Macintosh") ? 1 : 0;
}, slog_js_log:function($level$jscomp$25$$, $c_str$jscomp$1_str$jscomp$18$$) {
  $c_str$jscomp$1_str$jscomp$18$$ = $c_str$jscomp$1_str$jscomp$18$$ ? $UTF8ArrayToString$$($HEAPU8$$, $c_str$jscomp$1_str$jscomp$18$$) : "";
  switch($level$jscomp$25$$) {
    case 0:
      console.error($c_str$jscomp$1_str$jscomp$18$$);
      break;
    case 1:
      console.error($c_str$jscomp$1_str$jscomp$18$$);
      break;
    case 2:
      console.warn($c_str$jscomp$1_str$jscomp$18$$);
      break;
    default:
      console.info($c_str$jscomp$1_str$jscomp$18$$);
  }
}};
function $callMain$$($args$jscomp$17$$ = []) {
  var $entryFunction$$ = $_main$$;
  $args$jscomp$17$$.unshift($thisProgram$$);
  var $argc$$ = $args$jscomp$17$$.length, $argv$$ = $__emscripten_stack_alloc$$(($argc$$ + 1) * 4), $argv_ptr$$ = $argv$$, $arg$jscomp$15$$;
  for ($arg$jscomp$15$$ of $args$jscomp$17$$) {
    $HEAPU32$$[$argv_ptr$$ >> 2] = $stringToUTF8OnStack$$($arg$jscomp$15$$), $argv_ptr$$ += 4;
  }
  $HEAPU32$$[$argv_ptr$$ >> 2] = 0;
  try {
    var $ret$jscomp$13$$ = $entryFunction$$($argc$$, $argv$$);
    $EXITSTATUS$$ = $ret$jscomp$13$$;
    $_proc_exit$$($ret$jscomp$13$$);
  } catch ($e$jscomp$54$$) {
    $handleException$$($e$jscomp$54$$);
  }
}
async function $run$$() {
  var $args$jscomp$18$$ = $programArgs$$;
  $preRun$$();
  $runDependencies$$ && await $resolveRunDependencies$$();
  var $setStatus$$ = $Module$$.setStatus;
  $setStatus$$ && ($setStatus$$("Running..."), await new Promise($resolve$jscomp$3$$ => setTimeout($resolve$jscomp$3$$, 1)), setTimeout($setStatus$$, 1, ""));
  $ABORT$$ || ($Module$$.noFSInit || $FS$initialized$$ || $FS$init$$(), $wasmExports$$.__wasm_call_ctors(), $FS$ignorePermissions$$ = !1, $Module$$.onRuntimeInitialized?.(), $Module$$.noInitialRun || $callMain$$($args$jscomp$18$$), $postRun$$());
}
var $wasmExports$$;
(async function() {
  function $receiveInstance$$($instance$jscomp$1_wasmExports$jscomp$inline_258$$) {
    $instance$jscomp$1_wasmExports$jscomp$inline_258$$ = $wasmExports$$ = $instance$jscomp$1_wasmExports$jscomp$inline_258$$.exports;
    $__sapp_emsc_onpaste$$ = $Module$$.__sapp_emsc_onpaste = $instance$jscomp$1_wasmExports$jscomp$inline_258$$._sapp_emsc_onpaste;
    $__sapp_html5_get_ask_leave_site$$ = $Module$$.__sapp_html5_get_ask_leave_site = $instance$jscomp$1_wasmExports$jscomp$inline_258$$._sapp_html5_get_ask_leave_site;
    $__sapp_emsc_begin_drop$$ = $Module$$.__sapp_emsc_begin_drop = $instance$jscomp$1_wasmExports$jscomp$inline_258$$._sapp_emsc_begin_drop;
    $__sapp_emsc_drop$$ = $Module$$.__sapp_emsc_drop = $instance$jscomp$1_wasmExports$jscomp$inline_258$$._sapp_emsc_drop;
    $__sapp_emsc_end_drop$$ = $Module$$.__sapp_emsc_end_drop = $instance$jscomp$1_wasmExports$jscomp$inline_258$$._sapp_emsc_end_drop;
    $Module$$.__sapp_emsc_invoke_fetch_cb = $instance$jscomp$1_wasmExports$jscomp$inline_258$$._sapp_emsc_invoke_fetch_cb;
    $Module$$.__sapp_emsc_set_fullscreen_flag = $instance$jscomp$1_wasmExports$jscomp$inline_258$$._sapp_emsc_set_fullscreen_flag;
    $_main$$ = $Module$$._main = $instance$jscomp$1_wasmExports$jscomp$inline_258$$.__main_argc_argv;
    $_malloc$$ = $instance$jscomp$1_wasmExports$jscomp$inline_258$$.malloc;
    $_emscripten_builtin_memalign$$ = $instance$jscomp$1_wasmExports$jscomp$inline_258$$.emscripten_builtin_memalign;
    $__emscripten_stack_restore$$ = $instance$jscomp$1_wasmExports$jscomp$inline_258$$._emscripten_stack_restore;
    $__emscripten_stack_alloc$$ = $instance$jscomp$1_wasmExports$jscomp$inline_258$$._emscripten_stack_alloc;
    $_emscripten_stack_get_current$$ = $instance$jscomp$1_wasmExports$jscomp$inline_258$$.emscripten_stack_get_current;
    $wasmMemory$$ = $instance$jscomp$1_wasmExports$jscomp$inline_258$$.memory;
    $wasmTable$$ = $instance$jscomp$1_wasmExports$jscomp$inline_258$$.__indirect_function_table;
    $updateMemoryViews$$();
    return $wasmExports$$;
  }
  var $info$$ = {env:$wasmImports$$, wasi_snapshot_preview1:$wasmImports$$}, $instantiateWasm$$ = $Module$$.instantiateWasm;
  if ($instantiateWasm$$) {
    return new Promise($resolve$jscomp$1$$ => {
      $instantiateWasm$$($info$$, $inst$$ => $resolve$jscomp$1$$($receiveInstance$$($inst$$)));
    });
  }
  $wasmBinaryFile$$ ??= $Module$$.locateFile ? $Module$$.locateFile("enjohm.wasm", $scriptDirectory$$) : $scriptDirectory$$ + "enjohm.wasm";
  return function($result$jscomp$2$$) {
    return $receiveInstance$$($result$jscomp$2$$.instance);
  }(await $instantiateAsync$$($info$$));
})().then(() => $run$$());

