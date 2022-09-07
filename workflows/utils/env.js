const env = process.env || {};

module.exports = {
  /* 掘金Cookie */
  COOKIE: "passport_csrf_token=b543d548c357e7557f240abfcab6d5b0; passport_csrf_token_default=b543d548c357e7557f240abfcab6d5b0; n_mh=bUxOCHzZv5szT8QIHfxmgnjoVlZQ1kn7aM-ZW6ndDKY; passport_auth_status=422d4cdf39c074b3378cfbb99b46ac66%2C; passport_auth_status_ss=422d4cdf39c074b3378cfbb99b46ac66%2C; sid_guard=0f3921efbeee81178427d191dc933c8d%7C1662538772%7C31536000%7CThu%2C+07-Sep-2023+08%3A19%3A32+GMT; uid_tt=b6056661cdd1d9ecb855256d4fbf3ec4; uid_tt_ss=b6056661cdd1d9ecb855256d4fbf3ec4; sid_tt=0f3921efbeee81178427d191dc933c8d; sessionid=0f3921efbeee81178427d191dc933c8d; sessionid_ss=0f3921efbeee81178427d191dc933c8d; sid_ucp_v1=1.0.0-KGUwZDJhZDE2ZTBhZDRhYzc2YzFhZDRhMjAwM2RlMGU1YzgyNzZjMTIKFwiHxLDc1fWTBRCUqOGYBhiwFDgCQPEHGgJsZiIgMGYzOTIxZWZiZWVlODExNzg0MjdkMTkxZGM5MzNjOGQ; ssid_ucp_v1=1.0.0-KGUwZDJhZDE2ZTBhZDRhYzc2YzFhZDRhMjAwM2RlMGU1YzgyNzZjMTIKFwiHxLDc1fWTBRCUqOGYBhiwFDgCQPEHGgJsZiIgMGYzOTIxZWZiZWVlODExNzg0MjdkMTkxZGM5MzNjOGQ; _tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%257B%2522user_unique_id%2522%253A%25227140549309589620262%2522%252C%2522web_id%2522%253A%25227140549309589620262%2522%252C%2522timestamp%2522%253A1662538744534%257D; _ga=GA1.2.353106850.1662538775; _gid=GA1.2.466433140.1662538775; MONITOR_WEB_ID=173d24a6-3bd4-430c-b89f-a4c543349d7d",
  /* 多用户掘金Cookie, 当有1名以上用户时填写, 支持同时最多可配置5名用户 */
  COOKIE_2: env.COOKIE_2,
  COOKIE_3: env.COOKIE_3,
  COOKIE_4: env.COOKIE_4,
  COOKIE_5: env.COOKIE_5,
  /**
   * 邮箱配置
   * user 发件人邮箱, pass, 发件人密码, to收件人
   */
  EMAIL_USER: "17601615572@163.com",
  EMAIL_PASS: "GZOZGMOJRRGBMNBO",
  EMAIL_TO: "17601615572@163.com",
  /**
   * 钉钉配置
   * https://open.dingtalk.com/document/robots/custom-robot-access
   */
  DINGDING_WEBHOOK: env.DINGDING_WEBHOOK,
  /**
   * PushPlus配置
   * http://www.pushplus.plus/doc/guide/openApi.html
   */
  PUSHPLUS_TOKEN: "19a583b5e1f545cb8ad052b220135230",
  /**
   * 企业微信机器人配置
   * https://developer.work.weixin.qq.com/document/path/91770
   */
  WEIXIN_WEBHOOK: env.WEIXIN_WEBHOOK
};
