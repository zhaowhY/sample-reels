// domain 在 .env.[mode] 文件中添加
const getDomainByEnv = key => process.env[`VUE_APP_DOMAINS_${key.toUpperCase()}`];
export const domains = {
  demo: getDomainByEnv('demo')
};
