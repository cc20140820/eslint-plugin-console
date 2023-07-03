# eslint-plugin-console

### 安装包

安装`eslint`:

```
npm i eslint -D
```

安装`eslint-plugin-console`

```
npm install eslint-plugin-console -D
```

## 配置

将插件添加到`.eslintrc`文件的`plugins`中：

### 继承插件配置

在插件中会将所有规则都导出，然后可以使用`extends`来继承插件的配置。

PS: 不止这种继承方式，即使你传入一个对象，一个文件，eslint 也能继承其中的配置。

```js
// .eslintrc.js
module.exports = {
  extends: ["plugin:console/no-console-args"], // 继承插件导出的配置
};
```

### 引入插件一条条写入规则

```js
// .eslintrc.js
module.exports = {
  plugins: ["console"],
  rules: {
    "console/no-console-args": "error",
    // 更多插件规则
  },
};
```

## 提供的规则

- no-console-args: 禁止`console.log()`无参数
