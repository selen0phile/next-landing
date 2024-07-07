export function getSize(pc, mobile, screenWidth) {
  const x0 = 1440, y0 = pc;
  const x1 = 390, y1 = mobile;
  const m = (y1 - y0) / (x1 - x0);
  const c = y0 - m * x0;
  const x = screenWidth;
  return `${Math.min(Math.floor(m * x + c), pc)}px`;
}

export function interpolate(x1,y1,x2,y2,x){
  return y1 + (x-x1)*(y2-y1)/(x2-x1);
}