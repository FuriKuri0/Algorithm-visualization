import { AudioOutlined , TranslationOutlined, DotChartOutlined  } from '@ant-design/icons';
// const logoUrl = 'http://10.252.40.1:8888/static/img/logo.ico'
import logo from './logo.png'
import ocr_0 from './img/ocr_0.jpg'
import ocr_invoice_bg from './img/ocr_invoice_bg.jpg'
import ocr_1 from './img/ocr_1.jpg'
import audio_0 from './img/audio_0.jpg'
import tts from './img/tts.png'
import aichat from './img/aichat.png'
const defaultProps = {
    title: '算法展示平台',
    logo: logo,
    route: {
        path: '/',
        routes: [
            {
                index:0,
                path: '/text',
                name: '文本识别',
                icon: <TranslationOutlined />,
                active:false,
                introduce:'多场景、多语种、高精度的整图文字检测和识别服务，可识别各类印刷文档，可结构化识别各类票据和卡证',
                routes: [
                    {
                        path: '/text/normal',
                        name: '通用场景文字识别',
                        introduce:'多场景、多语种、高精度的整图文字检测和识别服务，可识别各类印刷文档',
                        type:'img',
                        apiType:'generalOCR',
                        iconUrl:ocr_0 
                    },
                    {
                        path: '/text/ticket',
                        name: '票据文本识别',
                        children:[
                            {name:'定额发票识别',path:'/text/ticket/dinge',introduce:'结构化识别各类定额发票的发票号码、发票代码、发票金额关键字段',apiType:'quotaInvoice',},
                            {name:'火车票识别',path:'/text/ticket/huoche',introduce:'结构化识别火车票的始发站、到达站、座位类型、日期、金额关键字段',apiType:'trainInvoice',},
                            {name:'出租车发票识别',path:'/text/ticket/chuzu',introduce:'结构化识别出租车发票的发票代码、发票号码、日期、金额关键字段',apiType:'taxiInvoice'},
                            {name:'增值税发票识别',path:'/text/ticket/zengzhi',introduce:'结构化识别增值税发票的发票代码、发票号码、发票日期、发票金额、校验码等关键字段',apiType:'vatInvoice'}
                        ],
                        introduce:'结构化识别定额发票、火车票、出租车发票、增值税发票等',
                        type:'img',
                        iconUrl:ocr_invoice_bg

                    },
                    {
                        path: '/text/card',
                        name: '卡证文字识别',
                        children:[
                            {name:'身份证识别',path:'/text/card/shenfen',introduce:'结构化识别身份证姓名、出生日期、民族、地址、身份证号、签发机关，有效期限关键字段',apiType:'idcard'},
                            {name:'结婚证识别',path:'/text/card/jiehun',introduce:'结构化识别结婚证各个关键字段',apiType:'marriage'},
                            {name:'户口本识别',path:'/text/card/hukou',introduce:'结构化户口本各个关键字段',apiType:'household_register'},
                            {name:'营业执照识别',path:'/text/card/yingye',introduce:'结构化营业执照各个关键字段',apiType:'businessLicencse'}
                        ],
                        introduce:'结构化识别身份证、结婚证、营业执照、户口本等常用卡片及证照',
                        type:'img',
                        iconUrl:ocr_1
                    },
                ],
            },
            {
                index:1,
                name: '语音识别',
                icon: <AudioOutlined />,
                path: '/voice',
                active:false,
                introduce:'多种语音识别算法，支持中文、英文语音识别的在线体验，可提供稳定易用的在线API、离线SDK、软件部署包、一体机多种服务形式',
                routes: [
                    {
                        path: '/voice/normal',
                        name: '语音识别',
                        children:[
                            {name:'中文语音识别',path:'/voice/normal/zhongwen',introduce:'支持中文语音识别的模型',apiType:'pd'},
                            {name:'中英语音识别',path:'/voice/normal/zhongyin',introduce:'支持中英语音识别的模型',apiType:'pf'},
                            {name:'轻量化模型中文识别',path:'/voice/normal/qingliang',introduce:'轻量化模型，支持中文语音的快速识别',apiType:'k2'},
                            {name:'中文语音流式识别',path:'/voice/normal/liushi',introduce:'支持中文语音流式识别的模型',apiType:'pds'}
                        ],
                        type:'voice',
                        iconUrl:audio_0


                    },
                    {
                        path: '/voice/synthesis',
                        name: '语音合成',
                        introduce:'文本到语音的合成，合成速度快且真实',
                        type:'robot',
                        iconUrl:tts

                    },
                ],
            },
            {
                index:2,
                name: '大模型应用',
                icon: <DotChartOutlined/>,
                path: '/model',
                introduce:'具有超过一千万个参数的深度神经网络模型。 目前，大模型主要应用于自然语言处理、图像识别和推荐系统等领域。 大模型通常采用非常复杂的结构和算法，以便在海量数据中提取出最有效的特征。',
                active:false,
                routes: [
                    {
                        path: '/model/chat',
                        name: 'AIChat智能聊天助手',
                        introduce:'AIChat支持中英双语智能应答对话',
                        type:'robot',
                        iconUrl:aichat
                    },
                ],
            },
        ],
    },
    location: {
        pathname: '/',
    },
    // appList: [
    //     {
    //         icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    //         title: 'Ant Design',
    //         desc: '杭州市较知名的 UI 设计语言',
    //         url: 'https://ant.design',
    //     },
    //     {
    //         icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
    //         title: 'AntV',
    //         desc: '蚂蚁集团全新一代数据可视化解决方案',
    //         url: 'https://antv.vision/',
    //         target: '_blank',
    //     },
    //     {
    //         icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
    //         title: 'Pro Components',
    //         desc: '专业级 UI 组件库',
    //         url: 'https://procomponents.ant.design/',
    //     },
    //     {
    //         icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
    //         title: 'umi',
    //         desc: '插件化的企业级前端应用框架。',
    //         url: 'https://umijs.org/zh-CN/docs',
    //     },

    //     {
    //         icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
    //         title: 'qiankun',
    //         desc: '可能是你见过最完善的微前端解决方案🧐',
    //         url: 'https://qiankun.umijs.org/',
    //     },
    //     {
    //         icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
    //         title: '语雀',
    //         desc: '知识创作与分享工具',
    //         url: 'https://www.yuque.com/',
    //     },
    //     {
    //         icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
    //         title: 'Kitchen ',
    //         desc: 'Sketch 工具集',
    //         url: 'https://kitchen.alipay.com/',
    //     },
    //     {
    //         icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
    //         title: 'dumi',
    //         desc: '为组件开发场景而生的文档工具',
    //         url: 'https://d.umijs.org/zh-CN',
    //     },
    // ],
};
export default defaultProps;
export type defaultType = typeof defaultProps.route.routes[0]