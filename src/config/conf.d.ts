interface Config {
  env: string;
  HOST: string;
  API_HOST: string;
}

declare enum URL_HOST_NAME {
  /**
   * 开发环境hostname
   */
  DEV = 'd-hfjzkt.hfjy.com',
  /**
   * 测试环境hostname
   */
  TEST = 't-hfjzkt.hfjy.com',
  /**
   * 正式环境hostname
   */
  PROD = 'hfjzkt.hfjy.com'
}
