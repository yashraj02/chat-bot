'use client';
import { loadScript } from '../utils/index.js';
import DEPENDENCIES from '../constants/dependencies.js';
import BROWSER_CONSTS from '../constants/browserConsts.js';

function init(): void {
  loadScript({
    src: DEPENDENCIES.SOCKET_IO_SRC,
    loadingMechanism: BROWSER_CONSTS.SCRIPT.LOADING_MECHANISM.ASYNC,
  });
}

export default init;
