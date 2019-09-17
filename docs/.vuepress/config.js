module.exports = {
    title: '云乡',
    description: '云之幻的软件中心',
    
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/favicon.ico'
        }],
        //['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    plugins: ['@vuepress/back-to-top',[
        
        {
          base_url: '/', // required
          site_url: 'https://www.richasy.cn', // required
          copyright: '2019 Richasy', // optional
          // How much articles
          count: 20
        }
    ]],
    themeConfig: {
        repo: 'Richasy/AppCenter',
        docsDir: 'docs',
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '修改页面',
        nav: [{
                text: '博客',
                link: 'https://blog.richasy.cn'
            },
            {
                text: 'BiliBili',
                link: 'https://space.bilibili.com/5992670/#/'
            },
        ],
        sidebar: {
            '/apps': [{
                title: '软件集',
                collapsable: true,
                children: [
                    ['/apps/', "软件说明"],
                    ['/apps/wfa', "Warframe Alerting Prime"],
                    ['/apps/acrmd', "Acrylic Markdown"],
                    ['/apps/mdlite', "Markdown Lite"],
                    ['/apps/rss', "RSS Stalker"],
                    ['/apps/pictureshare', "Picture Share"],
                    ['/apps/clean_reader', "Clean Reader"],
                ]
            }],
            '/document/wfa/qa': [{
                title: 'WFA 常见问题',
                collapsable: true,
                children: [
                    ['/document/wfa/qa/', "WFA常见问题"],
                    ['/document/wfa/qa/setup_and_show', "安装与显示问题"],
                    ['/document/wfa/qa/translate_and_toast', "翻译与通知问题"],
                    ['/document/wfa/qa/wm_question', "WM价格查询问题"],
                    ['/document/wfa/qa/riven_market', "紫卡市场问题"],
                    ['/document/wfa/qa/others', "其他问题"],
                ]
            }],
            '/document/wfa/api': [{
                title: 'WFA-API文档',
                collapsable: true,
                children: [
                    ['/document/wfa/api/', "API介绍"],
                    ['/document/wfa/api/how_to_apply', "申请权限"],
                    ['/document/wfa/api/authorize', "获取授权"],
                    ['/document/wfa/api/warframe_status', "Warframe信息"],
                    ['/document/wfa/api/warframe_market', "WM 价格查询"],
                    ['/document/wfa/api/riven_market', "WFA紫卡市场"],
                    ['/document/wfa/api/appendix_1', "附录1"],
                    ['/document/wfa/api/appendix_2', "附录2"],
                ]
            }],
            '/document/pictureshare': [{
                title: 'Picture Share 说明书',
                collapsable: true,
                children: [
                    ['/document/pictureshare/about', "关于PICTURE SHARE"],
                    ['/document/pictureshare/use', "使用说明"],
                    ['/document/pictureshare/qa', "常见问题"],
                ]
            }],
            '/document/acrmd': [{
                title: 'Acrylic Markdown说明书',
                collapsable: true,
                children: [
                    ['/document/acrmd/use', "快速开始"],
                    ['/document/acrmd/module', "功能概览"],
                    ['/document/acrmd/conversion', "部署转换服务"],
                    ['/document/acrmd/shortcut', "快捷操作"],
                    ['/document/acrmd/grammar', "语法综述"],
                    ['/document/acrmd/history', "更新历史"],
                ]
            }],
            '/document/mdlite': [{
                title: 'Markdown Lite说明书',
                collapsable: true,
                children: [
                    ['/document/mdlite/use', "快速开始"],
                    ['/document/mdlite/shortcut', "快捷操作"],
                ]
            }],
            '/document/rss': [{
                title: 'RSS Stalker 说明书',
                collapsable: true,
                children: [
                    ['/document/rss/use', "使用说明"],
                    ['/document/rss/history', "更新历史"],
                ]
            }],
            '/document/cleanreader': [{
                title: 'Clean Reader 说明书',
                collapsable: true,
                children: [
                    ['/document/cleanreader/use', "使用说明"],
                ]
            }],
        }
    },
    markdown: {
        anchor: {
            permalink: true
        },
        extendMarkdown: md => {
            md.use(require('markdown-it-abbr'));
            md.use(require('markdown-it-footnote'));
            md.use(require('markdown-it-task-lists'));
            md.use(require('markdown-it-mark'));
            md.use(require('markdown-it-katex'));
            md.use(require("markdown-it-sup"));
            md.use(require("markdown-it-sub"));
            md.use(require("markdown-it-plantuml"));
        }
    }
}