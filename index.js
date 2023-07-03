const rules = {
  "no-console-args": require("./rules/no-console-args"),
};

const configs = {
  // 导出自定义规则 在项目中直接引用
  consoleRule: {
    plugins: ['console'], // 引入插件
    rules: {
      // 开启规则
      'console/no-console-args': 'error'
    }
  }
}

module.exports = {
  rules,
  configs
};
