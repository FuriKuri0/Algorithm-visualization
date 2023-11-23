const  imgList:{[key:string]:{img:Array<string>,result:Array<Array<string>>},} = {
    '/text/normal':{img:['https://ocr-demo-1254418846.cos.ap-guangzhou.myqcloud.com/general/GeneralBasicOCR/GeneralBasicOCR1.jpg','https://ocr-demo-1254418846.cos.ap-guangzhou.myqcloud.com/general/GeneralBasicOCR/GeneralBasicOCR2.jpg'],result:[['Sun','1月8日','八色鸫','Pitta nympha','八色鸫雌鸟和雄鸟一样漂亮。它经常在亚热带的森林地面上走动,捕','食落叶下的昆虫和晰蜴等小动物,唱歌时会飞到树上。因为森林砍伐',
    '和非法的玩赏鸟贸易,现在它的数量已明显减少。'],['MINI','by','FLOWERPLUS']]},
    '/text/ticket/dinge':{img:['https://ocr-demo-1254418846.cos.ap-guangzhou.myqcloud.com/invoice/DutyPaidProofOCR/DutyPaidProofOCR1.jpg'],
    result:[['(20141)鄂国证28282801：28282801','填发日期：2017年8月4日','税务机关：武昌市国家税务局第三税务分局','纳税人识别号：440524198701010014','纳税人名称：李明','第一联八：收','金额合计大写：壹仟肆佰柒拾陆元叁角玖分','备注：(20141)鄂国证28282801一般申报正税','填票人：李菲菲','发票名称：中华人民共和国税收完税证明','票价/价税合计（小写）/总金额：￥1,476.39']]},
    '/text/ticket/huoche':{img:['https://ocr-demo-1254418846.cos.ap-guangzhou.myqcloud.com/invoice/TrainTicketOCR/TrainTicketOCR1.jpg'],result:[['乘车日期：2017年12月23日','检票口：A5','消费类型：交通','乘车人姓名：周周','发票号码：17C060124','取票地址：南京南','是否存在二维码（1：有，0：无）：0','是否仅供报销使用（0：没有，1：有）：0','座位类型：二等座','座位号：15车18A号','印刷序号：16804000071224C060124','到达车站：上海虹桥','出发车站：南京南','是否始发改签：1','乘车时间：10:33','票价/价税合计（小写）/总金额：134.50','车次：G5','身份证号：3210231993****6499']]},
    '/text/ticket/chuzu':{img:['https://ocr-demo-1254418846.cos.ap-guangzhou.myqcloud.com/invoice/TaxiInvoiceOCR/TaxiInvoiceOCR1.jpg'],result:[['市：蚌埠市','发票代码：134031321361','是否有公司印章（0：没有，1：有）：0','开票日期：2018年05月17日','消费类型：交通','车牌号：皖CC-82851','里程：9.37','发票号码：15326798','发票所在地：安徽省蚌埠市','单价：2.40','省：安徽省','是否存在二维码（1：有，0：无）：0','下车时间：16:32','乘车时间：16:09','发票名称：安徽局交通','票价/价税合计（小写）/总金额：19.00']]},
    '/text/ticket/zengzhi':{img:['https://ocr-demo-1254418846.cos.ap-guangzhou.myqcloud.com/invoice/MixedInvoiceDetect/MixedInvoiceDetect1.jpg'],result:[['是否有代开标记（0：没有，1：有）：0','购买方名称：深圳市腾讯计算机系统有限公司','购买方地址电话：深圳市南山区高新区高新南一路飞亚达大厦5-10楼0755-86013388','购买方银行账号：招商银行深圳分行振兴支行817282299619961','购买方纳税人识别号：440300708461136','密码区：*7-0<84019---5+68315-99->/51,>814<1/7922/<-23/908+>7474+3,78312-072<3<729-+4<6*315-094,->/5>18493/1-60*6-43/90<--78','市：深圳市','发票代码：4403152130','机打发票代码：4403152130','公司印章内容：深圳市游戏科技有限公司,000,发票专用章,NNDN','是否有公司印章（0：没有，1：有）：1','开票日期：2016年04月11日','发票联名：发票联','发票联次：三','开票人/填开单位：张三','消费类型：服务','发票号码：14998456','机打发票号码：14998456','是否有成品油标记：0','税前金额：778.44','省：广东省','是否存在二维码（1：有，0：无）：0','收款人：李明','复核人：晓艾','销售方名称：深圳市游戏科技有限公司','销售方地址电话：深圳市南山区高新南一道3号赋安科技大楼A座301室0755-86315454','销售方银行账号：浦发行深圳科技园支行79210154740015474','销售方纳税人识别号：440300094040109','发票类型：增值税专用发票','合计税额：46.71','发票名称：深圳增值税专用发票','票价/价税合计（小写）/总金额：825.15','价税合计（大写）：捌佰贰拾伍圆壹角伍分','是否有通行费标记：0']]},
    '/text/card/shenfen':{img:['https://ocr-demo-1254418846.cos.ap-guangzhou.myqcloud.com/card/IDCardOCR/IDCardOCR1.jpg'],
    result:[['姓名：刘洋','性别：女','民族：汉','出生：1995/5/13','住址：广东省深圳市南山区腾讯大厦','公民身份号码：440305199505132561',]]},
    '/text/card/jiehun':{img:['https://ocr-demo-1254418846.cos.ap-guangzhou.myqcloud.com/card/IDCardOCR/IDCardOCR1.jpg'],
    result:[['姓名：刘洋','性别：女','民族：汉','出生：1995/5/13','住址：广东省深圳市南山区腾讯大厦','公民身份号码：440305199505132561',]]},
    '/text/card/hukou':{img:['https://ocr-demo-1254418846.cos.ap-guangzhou.myqcloud.com/card/IDCardOCR/IDCardOCR1.jpg'],
    result:[['姓名：刘洋','性别：女','民族：汉','出生：1995/5/13','住址：广东省深圳市南山区腾讯大厦','公民身份号码：440305199505132561',]]},
    '/text/card/yingye':{img:['https://ocr-demo-1254418846.cos.ap-guangzhou.myqcloud.com/card/BizLicenseOCR/BizLicenseOCR1.jpg'],
    result:[['注册号：110000012345678','名称：杭州市魔乐计算机有限公司','类型：有限责任公司','住所：深圳市南山区高新区高新南一路飞亚达大厦','法定代表人：毛华','注册资本：人民币柒仟万','营业期限：1998年11月至长期','成立日期：1998年11月','经营范围：计算机软、硬件的设计、技术开发、销售(不含专营、专控、专卖商品及限制项目);数据库及计算机网络服务;国内商业、物资供销业(不含专营、专控、专卖商品)',]]},


}
export default imgList