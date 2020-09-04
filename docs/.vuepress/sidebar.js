const blog = [
    {
        title: 'JS',
        collapsable: true,
        children: [
            'js/手写系列',
            "js/元编程",
            "js/原型",
            "js/迭代器",
            "js/EventLoop"
        ],

    },
    {
        title: 'HTTP',
        collapsable: true,
        children: [
            'http/HTTP协议1',
            'http/HTTP缓存',
            'http/TCP-IP'
        ]
    },
    {
        title: 'Node',
        collapsable: true,
        children: [
            'node/自动加载全局路由',
            'node/全局异常处理',
            'node/使用Sequelize操作mySql',
            'node/集成jwt',
            'node/SSR',
            'node/BFF架构初探',
            'node/MPA架构初探'
        ]
    },
    {
        title: '前端工程化',
        collapsable: true,
        children: [
            'engineering/打造属于自己的脚手架',
            'engineering/脚手架的可视化操作',
            'engineering/Jenkins安装',
            'engineering/sonar简单使用'
        ]
    },
    {
        title: '性能优化',
        collapsable: true,
        children: [
            'optimization/性能优化启示录',
            'optimization/网速检测',
            'optimization/指标',
            'optimization/Node性能调优',
            'optimization/MPA性能优化小试'
        ]
    },
    {
        title: 'webpack',
        collapsable: true,
        children: [
            'webpack/webpack基础',
            'webpack/代码分割',
            'webpack/webpack打包',
            'webpack/bundler',
            'webpack/webpack优化'
        ]
    },
    {
        title: 'Nginx',
        collapsable: true
    }
]

// 算法
const arithmetic = [
    {
        title: '递归',
        collapsable: true,
        children: [
            'recursion/递归'
        ]
    },
    {
        title: '栈',
        collapsable: true,
        children: [
            'stack/栈',
            'stack/有效的括号'
        ]
    },
    {
        title: '字典和散列表',
        collapsable: true,
        children: [
            'dictionary/字典和散列表'
        ]
    },
    {
        title: '队列',
        collapsable: true,
        children: [
            "queue/队列"
        ]
    },
    {
        title: '链表',
        collapsable: true,
        children: [
            'linkedList/链表'
        ]
    },
    {
        title: '集合',
        collapsable: true,
        children: [
            'set/集合'
        ]
    },
    {
        title: '排序',
        collapsable: true,
        children: [
            "sort/排序和搜索"
        ]
    },

]


const react = [
    {
        title: '基础',
        collapsable: true,
        children: [
            'API',
            'ReactElement',
            'ReactChildren'
        ]
    },
    {
        title: '创建更新',
        collapsable: true,
        children: [
            "Render",
            "update",
            "Fiber",
            "expirationTime"
        ]
    }
]


module.exports = {
    '/blog/': blog,
    '/arithmetic/': arithmetic,
    '/react/': react
}