import * as path from 'path';

export const getVideoPath = (videoName: string): string => {
  return path.resolve(__dirname, '../../video', videoName);
};

export const getAudioPath = (audioName: string): string => {
  return path.resolve(__dirname, '../../voice', audioName);
}

export const getImagePath = (imageName: string): string => {
  return path.resolve(__dirname, '../../image', imageName);
}