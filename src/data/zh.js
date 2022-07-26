const common = {
    t0001: '姓名',
    t0002: '花名',
    t0003: '简历负责人',
    t0004: '手机号',
    t0005: '毕业院校',
    t0006: '毕业年份',
    t0007: '应聘职位',
    t0008: '性别',
    t0009: '个人邮箱',
    t0010: '国家和地区',
    t0011: '现居地',
    t0012: '最高学历',
    t0013: '招聘渠道',
    t0014: '公司名称',
    t0015: '项目名称',
    t0016: '招聘状态',
    t0017: '标签',
    t0018: '简历创建时间',
    t0019: '面试官',
    t0020: '面试时间',
    t0021: '面试地点',
    t0022: '操作人',
    t0023: '申请人',
    t0024: '岗位',
    t0025: '部门主管',
    t0026: '直接主管',
    t0027: '聘用状态',
    t0028: '入职日期',
    t0029: '转正日期',
    t0030: '合同到期日',
    t0031: '续签审批状态',
    t0032: '预转正日期',
    t0033: '审核状态',
    t0034: '离职日期',
    t0035: '学校或专业名称',
    t0036: '员工负责人',
    t0037: '工作地点',
    t0038: '工作形式',
    t0039: '企业邮箱',
    t0040: '异常原因',
    t0041: '个人信息',
    t0042: '渠道',
    t0043: '出生年月',
    t0044: '身份证号/护照号',
    t0045: '学历',
    t0046: '起止时间',
    t0047: '经历描述',
    t0048: '专业',
    t0049: '公司',
    t0050: '工作经历',
    t0051: '地点',
    t0052: '项目描述',
    t0053: '学校',
    t0054: '视频面试',
    t0055: '电话面试',
    t0056: '现场面试',
    t0057: '视频面试链接',
    t0058: '面试岗位',
    t0059: '发送邀请函',
    t0060: '重新发送邀请函',
    t0061: '修改面试安排',
    t0062: '删除面试安排',
    t0063: '编辑面试评价',
    t0064: '无面试安排',
    t0065: '基本信息',
    t0066: '通讯信息',
    t0067: '银行社保账号',
    t0068: '隐私信息',
    t0069: '账号信息',
    t0070: '岗位信息',
    t0071: '入职信息',
    t0072: '合同信息',
    t0073: '离职信息',
    t0074: '员工辞职申请表',
    t0075: '工作交接清单表',
    t0076: 'HR面谈记录表',
    t0077: '材料完整率',
    t0078: '身份证',
    t0079: '学历学位证书、专业资质证书',
    t0080: '上家单位劳动手册、退工单或离职证明',
    t0081: '网申（公共）',
    t0082: '远程面试',
    t0083: '第{num}段',
    t0084: '第{num}轮',
    t0085: '人才库',
    t0086: '高端人才',
    t0087: '录用库',
    t0088: '黑名单',
    t0089: '已入职',
    t0090: '初筛',
    t0091: '用人部门复筛',
    t0092: '面试',
    t0093: 'Offer沟通',
    t0094: '待入职',
    t0095: '今日面试',
    t0096: '今天后的面试',
    t0097: '全部面试日程',
    t0098: '待审核',
    t0099: '已审核',
    t0100: '待反馈',
    t0101: '已反馈',
    t0102: '待评价',
    t0103: '历史评价',
    t0104: '待审批',
    t0105: '已审批',
    t0106: '在职',
    t0107: '最近入职',
    t0108: '待转正',
    t0109: '待签合同',
    t0110: '待续签',
    t0111: '待离职',
    t0112: '离职',
    t0113: '出生日期',
    t0114: '周年',
    t0115: '异常数据',
    t0116: '材料附件',
    t0117: '操作记录',
    t0118: '个人资料',
    t0119: '笔试评测',
    t0120: '推荐到用人部门',
    t0121: '驳回',
    t0122: '分配给我',
    t0123: '提醒',
    t0124: '笔试不通过',
    t0125: '归档至人才库',
    t0126: '放弃入职',
    t0127: '转入面试环节',
    t0128: '补充材料',
    t0129: '添加笔试结果',
    t0130: '转发给同事',
    t0131: '分享简历',
    t0132: '打印',
    t0133: '加入黑名单',
    t0134: '移出黑名单',
    t0135: '安排面试',
    t0136: '添加面试评价',
    t0137: 'Offer流程',
    t0138: '补充入职信息',
    t0139: '发送入职须知',
    t0140: '不合适',
    t0141: '合适',
    t0142: '面试评价',
    t0143: '重新招聘',
    t0144: '复制到',
    t0145: '移除高端人才',
    t0146: '移出录用库',
    t0147: '简历归档',
    t0148: '删除员工',
    t0149: '修改聘用状态',
    t0150: '发起信息采集',
    t0151: '调岗',
    t0152: '合同签订&续签',
    t0153: '修改预转正日期',
    t0154: '重新发起转正审核',
    t0155: '查看员工简历',
    t0156: '简历导出',
    t0157: 'Offer审批中',
    t0158: '审批通过，待发offer',
    t0159: '未通过Offer审批',
    t0160: 'Offer已发送，待确认',
    t0161: '接受',
    t0162: '拒绝',
    t0163: 'Offer到期未确认',
    t0164: '管理员审批中',
    t0165: '管理员审批被驳回',
    t0166: '已取消',
    t0167: '已发起，待反馈',
    t0168: '已反馈，待审核',
    t0169: '审核不通过',
    t0170: '审核通过，待管理员审批',
    t0171: '管理员审批驳回',
    t0172: '管理员审批通过',
    t0173: '添加测评结果',
    t0174: '发起测试',
    t0175: '测评结果',
    t0176: '已创建',
    t0177: '未创建',
    t0178: '需先创建Offer',
    t0179: '需通过Offer审批',
    t0180: '待发送',
    t0181: '需先发送Offer',
    t0182: '需先通过Offer邮件审核',
    t0183: '简历状态',
    t0184: '未创建Offer',
    t0185: '面试不合适',
    t0186: '录用材料不通过',
    t0187: '初筛不通过',
    t0188: '复筛不通过',
    t0189: '面试不通过',
    t0190: '待主管审核',
    t0191: '通过，按期转正',
    t0192: '主管审核不通过',
    t0193: '管理员审批不通过',
    t0194: '通过，完成续签',
    t0195: '复筛',
    t0196: '归档',
    t0197: '用人部门筛选',
    t0198: '未在招聘流程中',
    t0199: '通过业务面',
    t0200: '发放',
    t0201: '转正',
    t0202: '扣除',
    t0203: '待安排面试',
    t0204: '无工作经验',
    t0205: '{num}年工作经验',
    t0206: '高中或中专',
    t0207: '大专',
    t0208: '本科',
    t0209: '硕士',
    t0210: '博士',
    t0211: '未填写',
    t0212: '笔试未通过',
    t0213: '初筛不满意',
    t0214: '复筛不满意',
    t0215: '面试不满意',
    t0216: '更换招聘职位',
    t0217: '拒接Offer',
    t0218: '初筛不合适',
    t0219: '通过',
    t0220: '未通过',
    t0221: '标准简历',
    t0222: '原始简历',
    t0223: '人事补充资料',
    t0224: '笔试测评',
    t0225: '简历重复',
    t0226: '简历疑似重复',
    t0227: '远程',
    t0228: '国内坐班',
    t0229: '海外坐班',
    t0230: '兼职',
    t0231: '实习',
    t0232: '试用',
    t0233: '正式',
    t0234: '中共党员',
    t0235: '共青团员',
    t0236: '群众',
    t0237: '民主党派',
    t0238: '研究生',
    t0239: '大专(高等职校)',
    t0240: '高中(中专、职校、技校)',
    t0241: '初中',
    t0242: '小学',
    t0243: '文盲或半文盲',
    t0244: '农村户口',
    t0245: '非农村户口',
    t0246: '已婚已育',
    t0247: '已婚未育',
    t0248: '非单身',
    t0249: '单身',
    t0250: '丧偶',
    t0251: '已发Offer，待确认',
    t0252: '候选人接受Offer，待提交审核材料',
    t0253: '候选人拒接Offer',
    t0254: '候选人拒绝Offer',
    t0255: '候选人接受Offer',
    t0256: 'Offer已发送',
    t0257: 'Offer已接受',
    t0258: 'Offer被拒绝',
    t0259: '审批中',
    t0260: '审批通过',
    t0261: '被驳回',
    t0262: '已发送，待管理员审批',
    t0263: '审批通过，已发Offer',
    t0264: '审批驳回',
    t0265: '待发起（海外候选人无需发起）',
    t0266: '已发起，待候选人反馈',
    t0267: '已反馈，待人事审核',
    t0268: '人事审核通过，待管理员审批',
    t0269: '待发起',
    t0270: '待提交',
    t0271: '已过期',
    t0272: '已提交',
    t0273: '查看测试题',
    t0274: '重发邮件',
    t0275: '结果未录入',
    t0276: '得分未录入',
    t0277: '简历创建',
    t0278: '简历修改',
    t0279: '打印简历',
    t0280: '修改笔试信息',
    t0281: '笔试通过',
    t0282: '简历移交',
    t0283: '转初筛',
    t0284: '转复筛',
    t0285: '转面试',
    t0286: '转Offer流程',
    t0287: '转待入职',
    t0288: '转已入职',
    t0289: '简历分享',
    t0290: '操作放弃入职，回退至待入职',
    t0291: '操作放弃入职，归档到人才库',
    t0292: '未知用户',
    t0293: '无权限查看',
    t0294: '复筛人',
    t0295: '具体原因{specific_reason}。',
    t0296: '{time} 候选人-{name} 应聘{job}，由【{operator}】转发简历给【{newUser}】',
    t0297: '{time} 候选人-{name} 应聘{job}，由【{operator}】归档到人才库。原因：{reason}。',
    t0298: '{time} 候选人-{name} 应聘{job}，由【{operator}】{op}。原因：{reason}。',
    t0299: '{time} 候选人-{name} 应聘{job}，由【{operator}】推荐到{type}。',
    t0300: '{time} 候选人-{name} 应聘{job}，由【{operator}】分享简历。',
    t0301: '至{receiver}（{emailAddr}）',
    t0302: '简历操作',
    t0303: '请选择需要打印的内容',
    t0304: '继续更新简历',
    t0305: '取消更新简历，后续联系相关人员询问情况后处理',
    t0306: '{num}年经验',
    t0307: '无经验',
    t0308: '无查看权限',
    t0309: '未知面试官',
    t0310: '候选人备注',
    t0311: '生成采集链接',
    t0312: '导入员工',
    t0313: '导入历史员工',
    t0314: '补录员工信息',
    t0315: '测试按钮',
    t0316: '导出员工',
    t0317: '展开筛选条件',
    t0318: '选择文件',
    t0319: '文件校验',
    t0320: '数据导入',
    t0321: '一',
    t0322: '二',
    t0323: '三',
    t0324: '四',
    t0325: '五',
    t0326: '六',
    t0327: '七',
    t0328: '八',
    t0329: '九',
    t0330: '十',
    t0331: '十一',
    t0332: '十二',
    t0333: '基本资料',
    t0334: '当前应聘职位',
    t0335: '职位志愿',
    t0336: '最近归档阶段-原因-日期',
    t0337: '查看全部人才',
    t0338: '职位',
    t0339: '期望职位',
    t0340: '暂无',
    t0341: 'Offer职位',
    t0342: '最近工作经历',
    t0343: '教育经历',
    t0344: 'Offer状态',
    t0345: '录用材料审核',
    t0346: '状态',
    t0347: '面试轮次',
    t0348: '面试历史',
    t0349: 'Offer',
    t0350: '入职',
    t0351: '操作历史',
    t0352: '备注',
    t0353: '项目经历',
    t0354: '自我评价',
    t0355: '候选人资料',
    t0356: '离职原因及是否有提离职',
    t0357: '倒数第一份工作',
    t0358: '倒数第二份工作',
    t0359: '期望薪资',
    t0360: '工作表现',
    t0361: '近一份工作组织架构及人员规模',
    t0362: '别家面试情况及Offer详情',
    t0363: '户籍及家庭情况',
    t0364: '对我司的意向度',
    t0365: '目前住址及以及择业地点',
    t0366: '工作地点是否接受',
    t0367: '工作时间是否接受',
    t0368: '是否有亲友在本公司任职',
    t0369: '亲友姓名',
    t0370: '是否曾与公司有过业务合作',
    t0371: '可到岗时间',
    t0372: '业务合作类型',
    t0373: '在校学习成绩、深造意向（校招）',
    t0374: '从哪里知道我们的招聘信息',
    t0375: '员工姓名',
    t0376: '人事评价',
    t0377: '简历负责HR',
    t0378: '创建时间',
    t0379: '友塔微信公众号',
    t0380: '各类招聘网站',
    t0381: '内部员工',
    t0382: '友塔官网',
    t0383: '薪酬待遇',
    t0384: '入职记录',
    t0385: '暂未获得（原因：{reason}）',
    t0386: '劳动手册、退工单或离职证明',
    t0387: '最近三个月上一家单位收入或银行工资流水证明',
    t0388: '需要招聘负责HR上传',
    t0389: '发起时间',
    t0390: '发起录用材料审核',
    t0391: '重新发起',
    t0392: 'Offer审批',
    t0393: '查看Offer',
    t0394: 'Offer发送记录',
    t0395: '发送时间',
    t0396: '发送人',
    t0397: '接受状态',
    t0398: 'Offer审批历史',
    t0399: 'Offer发送记录历史',
    t0400: 'Offer详情',
    t0401: '学历认证',
    t0402: '项目',
    t0403: '进入测试',
    t0404: '创建Offer',
    t0405: '发送Offer',
    t0406: 'Offer邮件审核',
    t0407: '候选人Offer确认',
    t0408: '点击生成简历分享链接，复制链接分享给对方。链接有效期72小时',
    t0409: '生成简历分享链接',
    t0410: '复制链接',
    t0411: '添加备注',
    t0412: '薪资福利情况',
    t0413: '未开启职业',
    t0414: '处理方式',
    t0415: '原部门',
    t0416: '原岗位',
    t0417: '内推',
    t0418: '入职时间',
    t0419: '入职师傅',
    t0420: '座位',
    t0421: '是否外国人',
    t0422: '是否港澳台',
    t0423: '跟进人',
    t0424: '是否实习',
    t0425: '是否社招',
    t0426: '是否兼职',
    t0427: '工作时间',
    t0428: '是否签三方',
    t0429: '是否在上海交过社保公积金',
    t0430: '公积金账号',
    t0431: '是否是留学生',
    t0432: '是否办理落户',
    t0433: '是否沪籍',
    t0434: '是否有绿码',
    t0435: '签约奖金金额',
    t0436: '入职备注',
    t0437: '公开',
    t0438: '身份证号',
    t0439: '所属部门',
    t0440: '是否落户',
    t0441: '毕业时间',
    t0442: '银行卡号',
    t0443: '民族',
    t0444: '政治面貌',
    t0445: '受教育程度',
    t0446: '户籍类别',
    t0447: '身份证地址',
    t0448: '司龄',
    t0449: '薪资待遇',
    t0450: '国籍',
    t0451: '现居住国家/地区',
    t0452: '微信号',
    t0453: '初签合同开始日期',
    t0454: '初签合同终止日期',
    t0455: '初签合同主体',
    t0456: '{num}次续签开始日期',
    t0457: '{num}次续签终止日期',
    t0458: '{num}次续签合同主体',
    t0459: '审核结果',
    t0460: '审核时间',
    t0461: '申请时间',
    t0462: 'Offer邮件预览',
    t0463: '审核者',
    t0464: '薪资',
    t0465: '实习期薪资',
    t0466: '试用期薪资',
    t0467: '正式薪资',
    t0468: '预览Offer',
    t0469: '处理',
    t0470: '审批',
    t0471: '待定',
    t0472: '取消',
    t0473: '未评价',
    t0474: '待入职时间',
    t0475: '录用材料',
    t0476: '审批结果',
    t0477: '审批人',
    t0478: '审批时间',
    t0479: '待入职职位',
    t0480: '查看录用职位',
    t0481: '资料完整',
    t0482: '人才详情',
    t0483: '面试指引',
    t0484: '部门',
    t0485: '发起合同续签',
    t0486: '合同初签日期',
    t0487: '主体',
    t0488: '合同签订日',
    t0489: '离职申请日期',
    t0490: '预离职日期',
    t0491: '主管离职审批',
    t0492: '离职流程',
    t0493: '审批状态',
    t0494: '续签审核状态',
    t0495: '负责人',
    t0496: '查看全部在职员工',
    t0497: '籍贯',
    t0498: '婚否',
    t0499: '重复内容',
    t0500: '原合同信息',
    t0501: '新合同信息',
    t0502: '当前合同信息',
    t0503: '续签合同信息',
    t0504: '家庭住址',
    t0505: '在沪住址',
    t0506: '紧急联络人姓名',
    t0507: '紧急联络人电话',
    t0508: '家庭主要成员',
    t0509: '开户行',
    t0510: '工作单位',
    t0511: '职务',
    t0512: '证明人',
    t0513: '证明人电话',
    t0514: '档案编号',
    t0515: '签约奖金',
    t0516: '入职跟进人',
    t0517: '是否办落户',
    t0518: '入职岗位',
    t0519: '入职部门',
    t0520: '职位变动记录',
    t0521: '合同',
    t0522: '申请离职时间',
    t0523: '离职时间',
    t0524: '离职状态',
    t0525: '进公司时间',
    t0526: '辞职申请时间',
    t0527: '邮编',
    t0528: '户口所在地',
    t0529: '离公司去向',
    t0530: '离公司原因',
    t0531: '已完成工作事项列表交接',
    t0532: '正在进展中工作事项列表交接',
    t0533: '未完成工作事项列表交接',
    t0534: '接收人',
    t0535: '离职面谈HR',
    t0536: '面谈日期',
    t0537: '离职原因明细',
    t0538: '员工意见反馈',
    t0539: '其他信息',
    t0540: 'HR备注',
    t0541: '候选人不在招聘流程中',
    t0542: '内推伯乐',
    t0543: '投递时间',
    t0544: '内推奖励规则',
    t0545: '奖金',
    t0546: '无奖励',
    t0547: '选择采集范围',
    t0548: '选择采集方式',
    t0549: '只采集未填写项',
    t0550: '采集全部项，员工可更新已有信息',
    t0551: '选择员工类型',
    t0552: '（国内和海外员工采集字段存在差异）',
    t0553: '国内员工',
    t0554: '海外员工',
    t0555: '将二维码或链接发送给员工，员工扫码或进入链接完成填写',
    t0556: '有效期{num}天，{day}截至',
    t0557: '调岗部门',
    t0558: '调岗岗位',
    t0559: '调岗日期',
    t0560: '员工',
    t0561: '当前合同',
    t0562: '续签合同',
    t0563: '（待发起续签）',
    t0564: '招聘环节',
    t0565: '请选择复筛人花名',
    t0566: '合同主体',
    t0567: '发起续签',
    t0568: '主管审核',
    t0569: '管理员审核',
    t0570: '导出合同',
    t0571: '完成续签',
    t0572: '已发起',
    t0573: '审核通过',
    t0574: '需要发起审核',
    t0575: '需要主管先审核',
    t0576: '打印劳动合同',
    t0577: '打印保密协议',
    t0578: '标记为已经完成',
    t0579: '初签',
    t0580: '{num}次续签',
    t0581: '自动计算',
    t0582: '总出勤天数',
    t0583: '合同续签修改',
    t0584: '合同续签审批',
    t0585: '合同签订',
    t0586: '提交修改',
    t0587: '提交审批',
    t0588: '修改合同续签信息后，会立即更新，不会重新进行审核；请确认无误再修改',
    t0589: '员工详情',
    t0590: '原合同主体',
    t0591: '原到期日',
    t0592: '新合同主体',
    t0593: '签订日期',
    t0594: '新到期日',
    t0595: '无固定期限合同',
    t0596: '简历负责人事',
    t0597: '回应Offer',
    t0598: '试用期时长',
    t0599: '预计入职时间',
    t0600: '请选择部门主管花名',
    t0601: '归档原因',
    t0602: '设置人才类型（可在人才库中查看）',
    t0603: '该候选人将完成入职，结束招聘流程，并在员工库创建员工信息。',
    t0604: '驳回原因',
    t0605: '应聘岗位',
    t0606: '重新创建Offer',
    t0607: '确认并提交审批',
    t0608: '职位名称',
    t0609: 'Offer审批人',
    t0610: '请选择Offer审批人',
    t0611: '提醒后，候选人会收到新的通知邮件，进行录用审核资料上传',
    t0612: '发起审核后，候选人会收到通知邮件，进行录用审核资料上传',
    t0613: '时间及面试方式',
    t0614: '查看面试日程',
    t0615: '选择日期时间',
    t0616: '新增面试官',
    t0617: '当前面试官面试安排',
    t0618: '暂无面试安排',
    t0619: '未开启渠道',
    t0620: '查看详细面试日程',
    t0621: '发送面试拒信',
    t0622: '公开简历',
    t0623: '更早的面试',
    t0624: '导入模板',
    t0625: '点击上传',
    t0626: '将文件拖放到此处，或者',
    t0627: '支持扩展名：xls、xlsx',
    t0628: '下载导入模板',
    t0629: '（预计）',
    t0630: '无固定期限',
    t0631: '待发起续签',
    t0632: '将公开的简历，分配给自己进行跟进。',
    t0633: '分配后简历将不再公开',
    t0634: '确认删除',
    t0635: '反馈面试评价',
    t0636: '补充评价',
    t0637: '修改评价',
    t0638: '放弃原因',
    t0639: '简历处理',
    t0640: '社保公积金账号',
    t0641: '重新导入',
    t0642: '筛选方案',
    t0643: '方案名',
    t0644: '提交后将进入面试环节',
    t0645: '请选择不合适的理由',
    t0646: '具体原因',
    t0647: '发送淘汰拒信',
    t0648: '面试结果',
    t0649: '面试评级',
    t0650: 'A：优秀',
    t0651: 'B：良好',
    t0652: 'C：可用',
    t0653: 'D：勉强',
    t0654: 'E：不通过',
    t0655: 'F：强烈反对，不建议录用',
    t0656: '评价',
    t0657: '评级说明：\nA:优秀；\nB:好；\nC:可用；\nD:勉强，或其他面试官看看；\nE:不通过；\nF:强烈反对，也不建议其它面试官录用',
    t0658: '新建标签',
    t0659: '名称',
    t0660: '类别',
    t0661: '选择一个颜色',
    t0662: '候选人属性',
    t0663: '违规行为',
    t0664: '已申请{0}次',
    t0665: '志愿职位',
    t0666: '申请投递时间',
    t0667: '操作',
    t0668: '更换到此职位',
    t0669: '员工导出',
    t0670: '保存方案',
    t0671: '方案名称',
    t0672: '更换应聘职位',
    t0673: '归档当前职位招聘流程，并使用所选职位创建新的招聘流程',
    t0674: '招聘流程',
    t0675: '候选人信息',
    t0676: '使用模板',
    t0677: '试用期',
    t0678: '实习期',
    t0679: '邮件标题',
    t0680: '邮件正文',
    t0681: '题目正文',
    t0682: '作品',
    t0683: '作品链接',
    t0684: '原因',
    t0685: '花名查重',
    t0686: '花名规则：游戏动漫角色名优先，2个字或者3个字，中国人不能取英文名，不要有生僻字，不要跟真名有直接关联',
    t0687: '输入花名进行查询',
    t0688: '同步历史录用材料',
    t0689: '将已入职员工简历中的录用材料审核文件，一键同步至员工材料附件中。是否继续本次操作？',
    t0690: '查看失败记录',
    t0691: '测试题',
    t0692: '发Offer',
    t0693: '提交审核',
    t0694: '邮件内容',
    t0695: '重新生成',
    t0696: '生成Offer合同',
    t0697: '预览',
    t0698: '附件内容预览',
    t0699: '已读取{totalNum}位员工。同步成功{successNum}位员工，同步失败{failureNum}位员工。',
    t0700: '发送审核不通过拒信',
    t0701: '搜索多个{label}，{separator}隔开',
    t0702: '请输入{label}',
    t0703: '请输入关键字搜索',
    t0704: '搜索标签',
    t0705: '请选择',
    t0706: '请输入内容',
    t0707: '开始月份',
    t0708: '结束月份',
    t0709: '管理员',
    t0710: '非必填',
    t0711: '未选择',
    t0712: '已选中 {number} 个筛选条件',
    t0713: '请填写驳回原因',
    t0714: '新建成功',
    t0715: '新建失败',
    t0716: '修改成功',
    t0717: '修改失败',
    t0718: '删除成功',
    t0719: '删除失败',
    t0720: '查询成功',
    t0721: '查询失败',
    t0722: '成功添加到高端人才',
    t0723: '成功添加到录用库',
    t0724: '成功添加到黑名单',
    t0725: '简历将跳过复筛，直接进入面试环节',
    t0726: '操作成功',
    t0727: '操作失败',
    t0728: '保存成功',
    t0729: '保存失败',
    t0730: '服务器异常',
    t0731: '数据加载失败',
    t0732: '消息通知获取失败',
    t0733: '成功更换职位',
    t0734: '请输入方案名',
    t0735: '已经存在方案：{msg}',
    t0736: '以下为历史信息',
    t0737: '简历加载发生错误',
    t0738: '请选择复筛人!',
    t0739: '模板发生修改，请刷新页面更新模板',
    t0740: '找不到对应的模板',
    t0741: '确定要删除员工{0}吗？',
    t0742: '该员工未完成录用材料审核，请先完成审核，再进行合同签订',
    t0743: '请检查填写的信息是否完整',
    t0744: '请确认是否执行此操作？',
    t0745: '驳回原因不能为空',
    t0746: '确认要标记为已完成吗？',
    t0747: 'Offer创建成功，待审批',
    t0748: '未生成PDF，请先点击“生成PDF”按钮',
    t0749: '更新Offer状态成功',
    t0750: '提示：仅需要对办公地点在上海，坐班，并且非兼职的候选人发送入职须知',
    t0751: '请选择拉黑原因',
    t0752: '请至少选择一项信息',
    t0753: '确认重新发送复筛邮件吗？',
    t0754: '该候选人将通过面试，进入OFFER沟通流程。请确认是否执行此操作？',
    t0755: '该候选人将完成入职，结束招聘流程。请确认是否执行此操作？',
    t0756: '面试安排检查失败，请更改面试时间或面试地点后重试',
    t0757: '第一轮均为必填项，其余轮次面试官为必填项，请检查后提交',
    t0758: '添加面试成功',
    t0759: '添加面试失败',
    t0760: '确认将此候选人归档并加入黑名单吗？',
    t0761: '请填写结果',
    t0762: '请填写得分',
    t0763: '该招聘流程将完结，候选人将回到人才库。请确认是否执行此操作？',
    t0764: '添加笔试成绩成功',
    t0765: '复制成功！',
    t0766: '未找到{msg}信息',
    t0767: '{0}未补充完整笔试测评结果',
    t0768: '{0}未补充完整笔试测评结果，是否继续操作其他人员?',
    t0769: '{year}年及以前',
    t0770: '已申请{num}次',
    t0771: '总览',
    t0772: '进入入职',
    t0773: '更多',
    t0774: '筛选',
    t0775: '待筛新简历',
    t0776: '待用人部门复筛',
    t0777: '录用',
    t0778: '待发送offer',
    t0779: '待填写反馈',
    t0780: '已反馈待处理',
    t0781: '提醒事项',
    t0782: '全部',
    t0783: '简历',
    t0784: '候选人{name}，应聘{job_name}职位。',
    t0785: '请及时处理！',
    t0786: '转初筛后已{waiting_day}天以上未进行后续操作。',
    t0787: '转复筛后已{waiting_day}天以上，复筛人{screener_name}尚未进行后续操作。',
    t0788: '复筛通过已{waiting_day}天以上，仍未进行安排面试。',
    t0789: '第{round_times}轮面试已完成{waiting_day}天以上。',
    t0790: '全部面试流程通过已{waiting_day}天以上。',
    t0791: 'Offer邮件已回复',
    t0792: '待入职已过期',
    t0793: '请及时确认员工是否入职',
    t0794: '前往>',
    t0795: '添加评价',
    t0796: '转正审批',
    t0797: '同步历史录用资料',
    t0798: '选择的候选人未完善入职相关信息，请完善后提交',
    t0799: '员工信息创建',
    t0800: '已读取{total}条，成功导入{success}条',
    t0801: '行号及原因：{msg}',
    t0802: '跳过错误数据{num}条',
    t0803: '跳过信息不完整数据{num}条',
    t0804: '跳过不完整合同{num}条',
    t0805: '跳过重复数据{num}条',
    t0806: '面试邮件通知',
    t0807: '提示：该简历已经操作完成，请关闭页面',
    t0808: '操作成功，2秒后关闭页面',
    // TODO：未复制到英文
    t0809: '系统现已升级至新版本，请刷新浏览器页面，以继续使用',
    t0810: '新建简历',
    t0811: '清空',
    t0812: '创建',
    t0813: '人才库自动转入',
    t0814: '应聘信息',
    t0815: '请选择应聘职位',
    t0816: '渠道信息',
    t0817: '期望职位',
    t0818: '邮箱',
    t0819: '附件简历',
    t0820: '上传简历',
    t0821: '上传作品',
    t0822: '简历去向',
    t0823: '目标职位',
    t0824: '出生年份',
    t0825: '请检查教育经历中是否有为空的内容',
    t0826: '请检查工作经历中是否有为空的内容',
    t0827: '请检查项目经历中是否有为空的内容',
    t0828: '手机号码校验不通过',
    t0829: '简历文件未上传完成',
    t0830: '作品未上传完成',
    t0831: '作品链接长度过长，请重新输入',
    t0832: '您没有更新此简历的权限，请联系简历负责HR进行更新或转交。',
    t0833: '未知操作者',
    t0834: '上传归档',
    t0835: '数据已成功录入',
    t0836: '添加标签',
    t0837: '已转正',
    t0838: '修改简历',
    t0839: '标记笔试未通过',
    t0840: '标记笔试通过',
    t0841: '查看录用资料',
    t0842: '手动录入',
    t0843: '批量导入',
    t0844: '批量导入(导入过程中勿关闭或刷新页面！)',
    t0845: '审核结果',
    t0846: '查看详情',
    t0847: '暂未获得 (原因：{reason})',
    t0848: '请确认所有材料已完整提交，并且审核没有问题',
    weeks: {
        Sunday: '星期日',
        Monday: '星期一',
        Tuesday: '星期二',
        Wednesday: '星期三',
        Thursday: '星期四',
        Friday: '星期五',
        Saturday: '星期六',
    },
    month: '月',
    // 下面是一些常出现的文案
    comma: '顿号',
    confirm: '确认',
    cancel: '取消',
    all: '全部',
    save: '保存',
    edit: '编辑',
    delete: '删除',
    append: '添加',
    send: '发送',
    remind: '提醒',
    review: '审核',
    status: '状态',
    resume: '简历',
    update: '更新',
    refresh: '刷新',
    again: '重新',
    preview: '预览',
    warning: '提示',
    dangerous: '警告',
    continue: '继续',
    selectAll: '全选',
    cancelSelectAll: '取消全选',
    uploadFile: '上传文件',
    downloadFile: '下载文件',
    upload: '上传',
    download: '下载',
    reason: '原因',
    stage: '阶段',
    none: '暂无',
    untilNow: '至今',
    import: '导入',
    export: '导出',
    submit: '提交',
    modify: '修改',
    noEnter: '未录入',
    noData: '暂无数据',
    noLimit: '不限',
    result: '结果',
    score: '得分',
    remarks: '备注',
    attachment: '附件',
    addAttachment: '添加附件',
    other: '其他',
    candidate: '候选人',
    exportExcel: '导出Excel',
    handle: '处理',
    suitable: '合适',
    unsuitable: '不合适',
    prevPerson: '上一位',
    nextPerson: '下一位',
    prevStep: '上一步',
    nextStep: '下一步',
    dateStart: '开始日期',
    dateEnd: '结束日期',
    expand: '展开',
    search: '搜索',
    finish: '完成',
    saveFilter: '保存筛选',
    resetFilter: '重置筛选',
    newItems: '新增',
    // 关键字
    male: '男',
    female: '女',
    unknown: '未知',
    numAge: '{num}岁',
    numYear: '{num}年',
    tNo: '否',
    tYes: '是',
    haveConcern: '有顾虑',
    or: '或',
    and: '和',
}
module.exports = {
    common,
}