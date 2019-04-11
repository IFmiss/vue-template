import dev from './conf.dev'
import test from './conf.test'
import prod from './conf.prod'
import mock from './conf.mock'

/**
 * 这是针对运维 只执行一条命令的解决方案
 * 根据url判断环境
 */

let Conf!: Config

if (process.env.NODE_ENV === 'production') {
  switch (window.location.hostname) {
    case URL_HOST_NAME.DEV:
      Conf = dev
      break
    case URL_HOST_NAME.TEST:
      Conf = test
      break
    case URL_HOST_NAME.PROD:
      Conf = prod
      break
    default:
      Conf = mock
      break
  }
} else {
  switch (window.location.hostname) {
    case URL_HOST_NAME.DEV:
      Conf = dev
      break
    case URL_HOST_NAME.TEST:
      Conf = test
      break
    case URL_HOST_NAME.PROD:
      Conf = prod
      break
    default:
      Conf = mock
      break
  }
}

export default Conf
