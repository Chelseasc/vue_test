/* eslint-disable */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',//不允许使用alert，confirm，prompt语句
    'no-duplicate-imports': 'error',//每个模块使用一个import语句
    'no-return-assign': ['error', 'always'],//不允许返回语句中的所有赋值
    'no-else-return': 'error',//如果if语句有return，else里的return不用放在else里
    'no-use-before-define': 'error',//不允许在未定义之前就使用变量
    'no-nested-ternary': 'error',//不允许使用嵌套的三目运算符
    'no-bitwise': 'error',//不允许按位运算符
    'no-cond-assign': ['error', 'always'],//不允许条件语句中使用模糊赋值运算符
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],//不允许存在未使用的变量，函数和函数参数
    'no-underscore-dangle': 0,//不允许标识符以下划线开头
    'no-trailing-spaces': 'error',//一行最后不允许有空格
    'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
    'no-unneeded-ternary': 2, //禁止不必要的嵌套
    'comma-spacing': 2, // 允许逗号前0空格后1空格
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],//强制最大连续空行数
    'no-restricted-globals': ['error', 'xxxx', 'fdescribe'],//允许您指定不希望在应用程序中使用的全局变量名称
    // 'arrow-body-style': ['error', 'as-needed'],//强制在箭头函数体周围使用大括号default(as-needed)
    'quotes': ['error', 'single'],//强制使用单引号
    'semi': ['error', 'never'],//强制不以分号结尾
    // 'indent': ['error', 2],//强制执行一致的缩进样式,空格数2
    'max-len': ['error', { 'code': 120 }],//一行最大长度，单位为字符
    'max-depth': ['error', 4],//嵌套块深度
    'max-params': ['error', 3],//强制执行函数定义中允许的最大参数数
    // 'max-lines': ['error', 1000],//强制每个文件的最大行数，以便有助于维护并降低复杂性
    'max-statements-per-line': ['error', { 'max': 1 }],//强制每行允许的最大语句数
    'generator-star-spacing': ['error', { 'before': false, 'after': false }],//强制围绕*生成器函数的间距
    'consistent-return': 'error',//无论有没有返回值都强制要求return语句返回一个值
    'global-require': 'error',//此规则要求对require（）的所有调用都位于模块的顶层
    'comma-dangle': ['error', 'only-multiline'],//强制在对象和数组文字中一致使用尾随逗号,多行的情况下
    'object-curly-newline': ['error', { 'consistent': true }],//在对象文字或解构分配的大括号内强制执行一致的换行符
    // 'function-paren-newline': ['error', 'never'],//在函数参数或参数的括号内强制执行一致的换行符
    'require-yield': 'error',//没有yield关键字的生成器函数生成警告
    // 'camelcase': 'error',//强制驼峰命名规则
    // 'guard-for-in': 'error',//监视for in循环，防止出现不可预料的情况
    'keyword-spacing': ['error', { 'before': true }],//强制实施关键字和类似关键字标记的一致间距
    'block-spacing': 'error',//块标记内强制执行一致的间距
    'key-spacing': ['error', { 'afterColon': true }],//对象中冒号后强制空格
    'template-curly-spacing': ['error', 'always'],//要求嵌入的模板字符串表达式周围的间距
    'object-curly-spacing': ['error', 'always'],//大括号内强制执行一致的间距
    'space-before-function-paren': ['error', 'always'],//函数定义时括号前的空格
    'space-before-blocks': 'error',//在块之前强制执行一致的间距
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],//对象属性位置
    'lines-between-class-members': ['error', 'always'],//强制class成员之间换行
    // 'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],//在方法链中的每次调用后都需要换行符,允许链达到指定的深度
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,//启用对实验对象rest / spread属性的支持。
    }
  }
}
