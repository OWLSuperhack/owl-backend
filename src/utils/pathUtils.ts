import * as path from 'path';

export const getVideoPath = (videoName: string): string => {
  return path.resolve(__dirname, '../../video', videoName);
};
