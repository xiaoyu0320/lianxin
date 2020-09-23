'use strict'
const path = require('path')
const defaultSettings = require('./src/config/index.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const merge = require('webpack-merge')
const resolve = dir => path.join(__dirname, dir)
// page title
const name = defaultSettings.title || 'vue mobile template'
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

// externals
// 配置后生产环境不会进行打包
const externals = {}
// CDN外链，会插入到index.html中
const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: []
  },
  // 生产环境
  build: {
    css: [],
    js: []
  }
}

module.exports = {
  publicPath: './', // 署应用包时的基本 URL。 vue-router hash 模式使用
  outputDir: 'dist', //  生产环境构建文件的目录
  assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: !IS_PROD,
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  devServer: {
    hot: true, // 热加载
    host: '0.0.0.0', // 允许外部ip访问
    port: 9020, // 端口
    open: false, // 启动后打开浏览器
    overlay: {
      //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
      warnings: false,
      errors: true
    },
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://192.168.0.115:8100',
        // ws:true,
        changOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  css: {
    extract: IS_PROD, // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码).
    sourceMap: false,
    loaderOptions: {
      scss: {
        // 向全局sass样式传入共享的全局变量, $src可以配置图片cdn前缀
        prependData: `
          @import "@s/css/mixin.scss";
          @import "@s/css/variables.scss";
          $cdn: "${defaultSettings.$cdn}";
          `
      }
    }
  },
  configureWebpack: config => {
    config.name = name
    // 为生产环境修改配置
    if (IS_PROD) {
      // externals
      config.externals = externals
    }
    Object.assign(config, {
      performance: {
        hints: 'warning',
        // 入口起点的最大体积 整数类型（以字节为单位）
        maxEntrypointSize: 50000000,
        // 生成文件的最大体积 整数类型（以字节为单位 300k）
        maxAssetSize: 24400000,
        // 只给出 js 文件的性能提示
        assetFilter: function(assetFilename) {
          return assetFilename.endsWith('.js')
        }
      },
      // 开发共同配置
      resolve: {
        mainFields: ['main'],
        extensions: ['.vue', '.js', '.css'],
        // 别名配置
        alias: {
          '@': resolve('src'),
          '@c': resolve('src/components'),
          '@v': resolve('src/views'),
          '@s': resolve('src/assets'),
          '@img': resolve('static'),
          api: resolve('src/api/wallet')
        }
      }
    })
  },

  chainWebpack: config => {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    /**
     * 设置保留空格
     */
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
    config.module
      .rule('images')
      .test(/\.(png|gif)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        return merge(options, {
          limit: 1
        })
      })
      .end()
    /**
     * 添加CDN参数到htmlWebpackPlugin配置中
     */
    config.plugin('html').tap(args => {
      if (IS_PROD) {
        args[0].cdn = cdn.build
      } else {
        args[0].cdn = cdn.dev
      }
      return args
    })
    /**
     * 打包分析
     */
    if (IS_PROD) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static'
        }
      ])
      config.optimization.minimizer('terser').tap(args => {
        args[0] = {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false, // 注释是否单独提取成一个文件
          sourceMap: true,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined, // 对哪些文件生效
          exclude: undefined,
          minify: undefined, // 自定义minify函数
          terserOptions: {
            compress: {
              arrows: true, // 转换成箭头函数
              collapse_vars: false, // 可能有副作用，所以关掉
              comparisons: true, // 简化表达式，如：!(a <= b) → a > b
              computed_props: true, // 计算变量转换成常量，如：{["computed"]: 1} → {computed: 1}
              drop_console: true, // 去除 console.* 函数
              hoist_funs: false, // 函数提升声明
              hoist_props: false, // 常量对象属性转换成常量，如：var o={p:1, q:2}; f(o.p, o.q) → f(1, 2);
              hoist_vars: false, // var声明变量提升，关掉因为会增大输出体积
              inline: true, // 只有return语句的函数的调用变成inline调用，有以下几个级别：0(false)，1，2，3(true)
              loops: true, // 优化do, while, for循环，当条件可以静态决定的时候
              negate_iife: false, // 当返回值被丢弃的时候，取消立即调用函数表达式。
              properties: false, // 用圆点操作符替换属性访问方式，如：foo["bar"] → foo.bar
              reduce_funcs: false, // 旧选项
              reduce_vars: true, // 变量赋值和使用时常量对象转常量
              switches: true, // 除去switch的重复分支和未使用部分
              toplevel: false, // 扔掉顶级作用域中未被使用的函数和变量
              typeofs: false, // 转换typeof foo == "undefined" 为 foo === void 0，主要用于兼容IE10之前的浏览器
              booleans: true, // 简化布尔表达式，如：!!a ? b : c → a ? b : c
              if_return: true, // 优化if/return 和 if/continue
              sequences: true, // 使用逗号运算符连接连续的简单语句，可以设置为正整数，以指定将生成的最大连续逗号序列数。默认200。
              unused: true, // 扔掉未被使用的函数和变量
              conditionals: true, // 优化if语句和条件表达式
              dead_code: true, // 扔掉未被使用的代码
              evaluate: true // 尝试计算常量表达式
              // passes: 2, // compress的最大运行次数，默认是1，如果不在乎执行时间可以调高
            },
            mangle: {
              safari10: true
            }
          }
        }
        return args
      })
    }
    config.when(!IS_PROD, config => config.devtool('cheap-source-map'))
    config.when(IS_PROD, config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // 将 runtime 作为内联引入不单独存在
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      config.optimization.splitChunks({
        chunks: 'all',
        minSize: 30000, // 大小超过30kb的模块才会被提取
        maxSize: 0, // 只是提示，可以被违反，会尽量将chunk分的比maxSize小，当设为0代表能分则分，分不了不会强制
        minChunks: 1, // 某个模块至少被多少代码块引用，才会被提取成新的chunk
        maxAsyncRequests: 5, // 分割后，按需加载的代码块最多允许的并行请求数，在webpack5里默认值变为6
        maxInitialRequests: 3, // 分割后，入口代码块最多允许的并行请求数，在webpack5里默认值变为4
        automaticNameDelimiter: '~', // 代码块命名分割符
        name: true, // 每个缓存组打包得到的代码块的名称
        cacheGroups: {
          // cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块
          // 涉及vue的模块
          // vue: {
          //   test: /[\\/]node_modules[\\/](vue|vuex|vue-router)/, // 匹配node_modules中的vue|vuex|vue-router模块
          //   priority: 10, // 优先级，当模块同时命中多个缓存组的规则时，分配到优先级高的缓存组
          //   name: 'vue'
          // },
          // commons: {
          //   name: 'chunk-commons',
          //   chunks: 'initial',
          //   test: resolve('src/components'),
          //   maxInitialRequests: 5, // 默认为3时，无法满足我们的分包数量
          //   minChunks: 2, //  被至少用两次以上打包分离
          //   priority: -20, // 优先级
          //   reuseExistingChunk: true // 表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的。
          // },
          // node_vendors: {
          //   name: 'chunk-libs',
          //   chunks: 'initial', // 只打包初始时依赖的第三方
          //   test: /[\\/]node_modules[\\/]/,
          //   priority: -10,
          //   minChunks: 2
          // },
          // vantUI: {
          //   name: 'chunk-vantUI', // 单独将 vantUI 拆包
          //   priority: 20, // 数字大权重到，满足多个 cacheGroups 的条件时候分到权重高的
          //   test: /[\\/]node_modules[\\/]_?vant(.*)/
          // }
          // 新版优化测试
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
              return `npm.${packageName.replace('@', '')}`
            },
            priority: 10
          }
        }
      })
      config.optimization.runtimeChunk('single')
    })
  }
}
