// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";

contextBridge.exposeInMainWorld("electron", {
  onIPCValue: (callback: (event: IpcRendererEvent, data: any) => void) => {
    ipcRenderer.on("ipc-value", callback);
  },
});
