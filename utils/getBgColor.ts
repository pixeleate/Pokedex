import analyze from 'rgbaster';
import RGBToHex from './RGBToHex';

const getBgColor = async (imgUrl: string, callback: any) => {
  const result = await analyze(imgUrl, {
    ignore: ['rgb(255,255,255)', 'rgb(0,0,0)'],
  });
  callback(RGBToHex(result[0].color));
};

export default getBgColor;
