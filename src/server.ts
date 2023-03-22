// const koffi = require('koffi');
// const path = require('path');

import koffi, { IKoffiLib } from 'koffi'

function loadDll(assetPath: string): IKoffiLib {
  return koffi.load(assetPath)
}

// const lib = koffi.load(process.env.DLL_PATH as string);

// const func_0 = lib.func('func_0', 'void', []);
// const func_1 = lib.func('func_1', 'int', []);
// const func_2 = lib.func('func_2', 'int', ['int']);

// if (process && process.send) {
//   process.send(func_1());
//   process.send(func_2(10));
// }

export default loadDll
