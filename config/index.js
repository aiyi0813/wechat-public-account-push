export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: "wx7e2062ff24966341",

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: "11fd43f817d65bef9fa20efe1cfdc3f7",

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句
    CIBA: true,
    // 每日一言
    oneTalk: true,
    // 土味情话(彩虹屁)
    earthyLoveWords: true,
    // 朋友圈文案
    momentCopyrighting: true,
    // 毒鸡汤
    poisonChickenSoup: true,
    // 古诗古文
    poetry: true,

    /** 星座运势 */
    horoscope: true,

    /** 生日消息和节日消息 */
    birthdayMessage: true,
  },

  /** 每日一言 */

  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "",
  

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "宝贝新怡",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oCb3H5sHUiEU_TX0ZSpLP_HTOuOQ",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "7-EmEzHZN3nMuafRn3RHaPT3GEZU1jaq7JCpxlz1fGg",
      // 所在省份
      province: "陕西",
      // 所在城市
      city: "宝鸡",
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '08-23',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.weibo.com",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {"type": "*生日", "name": "小杨", "year": "1999", "date": "11-21"},
        // {"type": "节日", "name": "相识纪念日", "year": "2022", "date": "07-31"},
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {"type": "生日", "name": "♥新怡", "year": "2001", "date": "08-23"},
        // {"type": "节日", "name": "在一起一周年", "year": "2022", "date": "08-13"},
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        {"keyword": "love_day", date: "2022-08-13"},
        // 结婚纪念日
        {"keyword": "xiangshi_day", date: "2022-07-31"},
        // 退伍日
        {"keyword": "ex_day", date: "2022-09-10"},
      ]
    },
    {
      name: "给宝贝的补充",
      id: "oCb3H5sHUiEU_TX0ZSpLP_HTOuOQ",
      useTemplateId: "jZZIZTNHygACTXa_YbqukO-Ufog8bNBEZM2aacES3WI",
      province: "陕西",
      city: "宝鸡",
      horoscopeDate: '08-23',
      horoscopeDateType: '今日',
      openUrl: "www.weibo.com",
      festivals: [],
      customizedDateList: []
    },
    {
      name: "自己测试",
      id: "oCb3H5txclJjF7EjwoqUMf67MePI",
      useTemplateId: "7-EmEzHZN3nMuafRn3RHaPT3GEZU1jaq7JCpxlz1fGg",
      province: "陕西",
      city: "西安",
      horoscopeDate: '11-21',
      horoscopeDateType: '今日',
      openUrl: "https://wangxinleo.cn",
      festivals: [],
      customizedDateList: []
    },
    {
      name: "老婆3",
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      horoscopeDate: '',
      horoscopeDateType: '',
      openUrl: "https://wangxinleo.cn",
      festivals: [],
      customizedDateList: []
    },
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "",
    },
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "广东",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "惠州",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   * 
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   * 
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   * 
   * --- 是否展示周岁信息开始 ---
   * isShowAge: true 展示岁数, 仅type为生日生效
   * isShowAge: false 不展示岁数, 仅type为生日生效
   * 删除isShowAge属性，也会不展示岁数
   * --- 是否展示周岁信息结束 ---
   */
  FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    // {"type": "*生日", "name": "", "year": "1999", "date": "09-09", isShowAge: true},
    // {"type": "节日", "name": "结婚纪念日", "year": "2020", "date": "09-03"},
    // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
    // {"type": "生日", "name": "李四", "year": "1996", "date": "09-31", isShowAge: true},
    // {"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "09-01"},
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2022-09-08"},
    // 结婚纪念日
    {"keyword": "marry_day", date: "2022-09-09"},
    // 退伍日
    {"keyword": "ex_day", date: "2022-09-10"},
    // 你可以不断按格式往下增加
    // ...
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "我会每天都比昨天更爱宝贝你一点♥"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌！",
      "报告！小杨申请成为新怡爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了82斤的运气，哈哈哈",
      "浪漫情人节，唯爱新怡一生不变",
      "相扶到老情不变，才是浪漫;死心塌地心不贪，才是蜜甜。相敬如宾真心处，才是满足;白头偕老不辜负，才是幸福，我爱新怡",
      "初相见，心相牵，神魂颠倒夜难眠；交往间，情意绵，互道衷肠万语千；光阴转，情不变，携手同行展欢颜；520，我爱你李新怡，爱意绵绵今生伴!",
      "我爱你，所以我的眼里只能看见你，我爱你，所以我的世界只围绕着李新怡转。",
      "都说婚姻是爱情的坟墓，可是自从见到李新怡，我愿意将这块墓地开垦成花园！！！",
      "我爱李新怡，所以卑微到尘埃里，然后开出花来。嘤嘤嘤~",
      "喝了李新怡酿的爱情的酒，我愿意沉醉而不愿醒。呜呜呜~",
      "宝贝开心的时候，我的心情艳阳高照;宝贝悲伤的时候，我的心情雷雨交加。呜呜呜，李新怡我爱你~",
      "因为我爱你，所以我愿感受李新怡所有的感受。嘻嘻",
      "李新怡的微笑，是我这辈子见过最美的景色，我想收藏这样的风景一辈子。爱你~",
      "我的人生放荡不羁，不曾为谁停留，但自从遇到你，李新怡！我会用余生来守护你！",
      "李新怡！我不想做你人生的插曲，我想成为你一生的主题曲。",
      "李新怡！我希望几十年后，你还陪在我的身边，在我的臂弯，像个孩子。",
      "李新怡！我的眼里只有你，自从遇见你，一切繁华都将成为背景。",
      "李新怡！我和你在一起，一辈子好像有点太短。不够，呜呜呜",
      "我路过全世界，却只想停留在李新怡的面前。",
      "我多想不小心，就和李新怡白头到老。",
      "通往幸福的门叫我们。我爱李新怡",
      "此从遇见李新怡，我的心就发了芽，等待着宝贝的浇灌，直到它开花。嘻嘻",
      "宝贝的过去我未曾参与，但你的未来会一直有我。爱你爱你",
      "李新怡！我爱你，哪怕海枯石烂，哪怕天崩地裂。",
      "我在李新怡的脸上，看到了我以后孩子的样子。哈哈哈",
      "呜呜呜，明明刚刚才看到你，可现在思念已经将我掩埋，我想你了。宝贝~",
      "李新怡，我不要害怕孤独和寂寞，只因我根本就不会给你孤独和寂寞的机会，我会用毕生的时间陪你长相厮守，至死不渝，让你忘记孤独和寂寞的滋味。",
      "李新怡，我对你的大爱无形，虽然你感觉不强烈，但是我对你的爱已经无处不在，有我在的地方就有我给你的爱。",
      "李新怡，我会晚睡，只因我想着你会失眠，我也会早起，只因我想尽快知晓你有没有给我发来信息以及带给你来自早上的第一声问候，情在每一时刻，爱在每一瞬间。",
      "李新怡，我爱你的心更爱你的人，无论你将来变成什么样子，我都不会嫌弃，我能做到的事情就是日复一日年复一年越来越爱你，否则我自己都无法原谅自已。",
      "李新怡，人生得你一人足矣，我别无她求，即使给我金山银海来交换你，我也会视之为粪土，只因你在我的内心岂止是价值连城，简直是无价之宝。",
      "李新怡，你的存在才是我活着的意义之所在，我生来就是把你寻找，为了让自己人生不虚度光阴，我会用实际行动将你挽留在我的身边，天长日久永远不分离。",
      "李新怡，或许我没有太阳般狂热的爱，也没有流水般绵长的情，只知道不断的爱你爱你、无所□能的为你。",
      "李新怡，我控制不住自己去想你，无论在何时还是在何地，我都不会忘记想你，否则我将会魂不守舍，唯有忙里偷闲想你才能缓解我的相思之苦，遇上你无怨无悔，想着你心甘情愿。",
      "李新怡，你的身影令我着迷，你的视线让我沉醉，心中盼望着与你牵手，享受有你的甜蜜。",
      "李新怡，任凭时光流转，不变的是对你的深情。",
      "李新怡，我会用行动来证明自己对你的深情厚意，我的做人原则是说到不如做到，做到不如做好，请你给我一个照顾你的机会，你要相信我不会让你受半点委屈，并且还能让你生活比蜜甜。",
      "李新怡，我从来不会对任何一个女人许下这些诺言，也从不会对任何一个女人做我会为你所做的事，你在我心目中是多么地不同!",
      "李新怡，我想当我在想你时你也在想我，我想天冷的时候你表白后背上的棉衣就只有我能为你披上，我想当你病了的时候就只有我在陪伴你，我想在你有困难时我永远可以帮到你，就只有我在，我想在你不开心时我永远可以给你带来欢乐，我想每天我对你的好你都可以微微感觉，我想当我爱你的时候你也在爱我",
      " 皓月清凉， 你是人间曙光.人海冷漠， 你是人间炽热.满眼星河， 你是清风满月.万事沉浮， 你是人间归途.众生平庸， 你是人间星光.世间无常， 你是人间琳琅.",
      "我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡我爱李新怡",
      "我爱你你爱我小杨新怡甜蜜蜜~我爱你你爱我小杨新怡甜蜜蜜~我爱你你爱我小杨新怡甜蜜蜜~嘻嘻爱你爱你",
      "我爱你你爱我小杨新怡甜蜜蜜~我爱你你爱我小杨新怡甜蜜蜜~我爱你你爱我小杨新怡甜蜜蜜~嘻嘻爱你爱你",
      "我爱你你爱我小杨新怡甜蜜蜜~我爱你你爱我小杨新怡甜蜜蜜~我爱你你爱我小杨新怡甜蜜蜜~嘻嘻爱你爱你",
      "我爱你你爱我小杨新怡甜蜜蜜~我爱你你爱我小杨新怡甜蜜蜜~我爱你你爱我小杨新怡甜蜜蜜~嘻嘻爱你爱你",
      
    ]},
]

}
