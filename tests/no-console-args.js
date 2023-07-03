'use strict'
const rule = require('../rules/no-console-args') // 引入rule
const { RuleTester } = require('eslint')

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  globals: {
    Reflect: 'readonly'
  }
})

// 运行测试用例
ruleTester.run('no-console-args', rule, {
  valid: [   // 正确的测试用例
    'console.log("Hello, world!")'
  ],
  invalid: [   // 错误的测试用例
    {
      code: 'console.log()',
      errors: [{
        message: 'Avoid using console.log with no arguments', // 与rule抛出的错误保持一致
        type: 'CallExpression' // rule监听的对应钩子
      }]
    }
  ]
})