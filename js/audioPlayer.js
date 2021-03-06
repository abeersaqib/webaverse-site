import buffer from './audiolibs/buffer-source';
import media from './audiolibs/media-source';

module.exports = webAudioPlayer;

function webAudioPlayer (src, opt) {
  if (!src) throw new TypeError('must specify a src parameter')
  opt = opt || {}
  if (opt.buffer) return buffer(src, opt)
  else return media(src, opt)
}
