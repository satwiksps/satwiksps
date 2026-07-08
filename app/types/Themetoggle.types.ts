export type Point = {
  x: number;
  y: number;
  oldX: number;
  oldY: number;
  pinned: boolean;
};

export type Stick = {
  p1: Point;
  p2: Point;
  len: number;
};

export type MouseState = {
  x: number;
  y: number;
  down: boolean;
  target: Point | null;
};

export type RGB = {
  r: number;
  g: number;
  b: number;
};