export class Window {
  static getByPid(pid: number): Window | undefined;
  static getForeground(): Window;
  static getByClassName(className: string): Window | undefined;
  static getByTitle(title: string): Window | undefined;

  constructor(hwnd: number);

  getParent(): Window | undefined;
  getAncestor(kindOfAncestor: AncestorFlags): Window | undefined;
  getProcessInfo(): ProcessInfo;
  getPid(): number;
  getClassName(): string;
  getTitle(): string;
  exists(): boolean;
  isVisible(): boolean;
  getDimensions(): WindowDimensions;
  getHwnd(): number;
  moveRelative(dx: number, dy: number, dw: number, dh: number): boolean;
  setShowStatus(state: WindowStates): boolean;
  setPosition(hwndInsertAfter: number, x: number, y: number, cx: number, cy: number, uFlags: SWP): boolean;
  setForeground(): boolean;
  close(): void;

}

export interface ProcessInfo {
  windowText: string; // Window's title bar.
  pid: number; //  PID of the process who owns the window.
  path: string; // Process's path who owns the window.
}

export interface WindowDimensions {
  left: number; // x-coordinate of the upper-left corner of the rectangle.
  right: number; // x-coordinate of the lower-right corner of the rectangle.
  top: number; // y-coordinate of the upper-left corner of the rectangle.
  bottom: number; // y-coordinate of the lower-right corner of the rectangle.
}

export enum WindowStates {
  HIDE = 0,
  SHOWNORMAL = 1,
  SHOWMINIMIZED = 2,
  MAXIMIZE = 3,
  SHOWMAXIMIZED = 3,
  SHOWNOACTIVATE = 4,
  SHOW = 5,
  MINIMIZE = 6,
  SHOWMINNOACTIVE = 7,
  SHOWNA = 8,
  RESTORE = 9,
  SHOWDEFAULT = 10,
  FORCEMINIMIZE = 11
}

export enum AncestorFlags {
  PARENT = 1,
  ROOT = 2,
  ROOTOWNER = 3
}

export enum HWND {
  NOTOPMOST = -2,
  TOPMOST = -1,
  TOP = 0,
  BOTTOM = 1
}

export enum SWP {
  NOSIZE = 0x0001,
  NOMOVE = 0x0002,
  NOZORDER = 0x0004,
  NOREDRAW = 0x0008,
  NOACTIVATE = 0x0010,
  DRAWFRAME = 0x0020,
  FRAMECHANGED = 0x0020,
  SHOWWINDOW = 0x0040,
  HIDEWINDOW = 0x0080,
  NOCOPYBITS = 0x0100,
  NOOWNERZORDER = 0x0200,
  NOREPOSITION = 0x0200,
  NOSENDCHANGING = 0x0400,
  DEFERERASE = 0x2000,
  ASYNCWINDOWPOS = 0x4000
}
