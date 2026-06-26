const MAP_CONFIG = window.CYCLING_MAP_CONFIG || {};

const plan = [
  {
    day: "D1",
    route: "清华大学 → 武清/北辰",
    km: "100-115km",
    climb: "180-300m",
    difficulty: "中",
    type: "ride",
    roads: "清华大学 → 中关村/北四环辅路 → 东四环外缘 → 通州 → 香河 → 武清 → 北辰。优先四环辅路、G103/京津公路辅路、通武线和并行县乡路。",
    note: "第一天从海淀西北侧出发，比北京市中心版多约 10km，仍然压强度。",
    riskText: "海淀到朝阳的城市路口密集，四环辅路并入口多；通州到香河一线早晚高峰车流明显。",
    lodging: "武清城区或北辰外缘。优先住武清站、杨村、北辰非主干道旁，住宿密、补给足，第二天出天津更顺。",
    food: "北京出发前可吃豆浆、包子、面条这类稳妥碳水；到武清/北辰后适合吃天津煎饼果子、锅巴菜、牛肉烧饼或面馆，别第一晚吃太油。",
    shortOption: "少骑：住通州或香河，约 45-70km；路线仍走通州-香河，第二天补到静海/青县。",
    longOption: "多骑：继续到静海北侧，约 125-135km；只在出城顺利、无逆风时考虑。",
    detours: [
      { type: "避险", text: "北京出城如果四环辅路拥堵，改走清河-望京外缘-通州绿道/辅路，少穿主干路口。" },
      { type: "撤退", text: "香河是第一天最合适的撤退住宿点，身体不适就在这里收。" },
    ],
    why: "从清华出发先横穿北京北部和东部，尽量用四环辅路与通州方向出城，避免进二环/三环核心区。替代线是走大兴-廊坊-天津南侧，路不一定更短，且城郊货车和快速路匝道更多。",
    points: [
      ["清华大学", 116.326936, 40.003213],
      ["中关村", 116.316, 39.983],
      ["东四环外缘", 116.486, 39.948],
      ["通州", 116.6564, 39.9099],
      ["香河", 117.0061, 39.7614],
      ["武清", 117.0444, 39.3841],
      ["北辰", 117.1355, 39.2246],
    ],
  },
  {
    day: "D2",
    route: "武清/北辰 → 沧州",
    km: "125-145km",
    climb: "90-190m",
    difficulty: "高",
    type: "ride",
    roads: "北辰/武清 → 天津外环西侧 → 静海 → 青县 → 沧州。优先 G104/G205 旧线辅路和并行县道。",
    note: "这是压缩到 12 天后的第一个长日，建议天亮即出发。",
    riskText: "天津外环和静海北侧快速路匝道多；青县到沧州国道大车比例上升。",
    lodging: "沧州城区西侧/南侧。不要住在出城大货主通道边，优先靠近老城区或运河附近。",
    food: "沧州适合补一顿火锅鸡、羊肠汤、驴肉火烧或牛肉面；长途第二天优先选热汤面、米饭盖浇，少喝酒。",
    shortOption: "少骑：住青县或沧州北，约 95-115km；第二天青县-德州会变成长日。",
    longOption: "多骑：到泊头，约 150-165km；不建议常规执行，只适合顺风且身体状态很好。",
    detours: [
      { type: "避险", text: "天津外环西侧如果匝道压力大，宁可绕静海县乡路，不进快速路主线。" },
      { type: "撤退", text: "静海、青县都适合提前住宿，尤其逆风时不要硬顶到沧州。" },
    ],
    why: "这天把天津城市带一次穿过去，换来 D3 能直接沿沧州-德州平原推进。替代线是经廊坊-霸州-衡水再南下，绕路更多，且不利于后面接聊城-济宁低爬升走廊。",
    points: [
      ["北辰", 117.1355, 39.2246],
      ["天津外环西", 117.0869, 39.0853],
      ["静海", 116.9743, 38.9474],
      ["青县", 116.8032, 38.5834],
      ["沧州", 116.8575, 38.3106],
    ],
  },
  {
    day: "D3",
    route: "沧州 → 德州",
    km: "115-130km",
    climb: "90-180m",
    difficulty: "高",
    type: "ride",
    roads: "沧州 → 泊头 → 东光 → 吴桥 → 德州。主走 G104/G105 走廊，差路段切县道。",
    note: "平原长距离日，风向比爬升更影响体感。",
    riskText: "北段大车风险最高的一天之一；没有非机动车道或硬路肩时不要贴主路硬骑。",
    lodging: "德州城区或运河开发区附近。住宿选择多，车店/补给更稳，第二天往夏津、临清转向方便。",
    food: "德州扒鸡很有代表性，但骑行后别只吃肉；搭配米饭、面条、蔬菜汤更适合恢复。",
    shortOption: "少骑：住吴桥，约 80-95km；第二天吴桥-临清/聊城需要补距离。",
    longOption: "多骑：到夏津，约 145-155km；可把 D4 压力降低，但会连续两天长距离。",
    detours: [
      { type: "风景/文化", text: "吴桥可作为短停点，适合补给和避开正午大车高峰。" },
      { type: "避险", text: "G104/G105 货车密时，切泊头、东光、吴桥并行县道，别贴主路硬骑。" },
    ],
    why: "沧州-德州是最直接的平原走廊，爬升少、补给密。替代线经衡水更西，离后续临清-聊城走廊更绕；经济南会把你带向泰安/鲁中丘陵边缘。",
    points: [
      ["沧州", 116.8575, 38.3106],
      ["泊头", 116.5784, 38.0834],
      ["东光", 116.5371, 37.8865],
      ["吴桥", 116.3915, 37.6266],
      ["德州", 116.3575, 37.4341],
    ],
  },
  {
    day: "D4",
    route: "德州 → 阳谷/梁山",
    km: "125-140km",
    climb: "140-260m",
    difficulty: "高",
    type: "ride",
    roads: "德州 → 夏津 → 临清 → 聊城 → 阳谷/梁山。优先 S323/S254/G240/G341 走廊和运河边并行路。",
    note: "12 天版会把原 D5/D6 合并，强度明显上升。",
    riskText: "临清到聊城车流密度上升；黄河过河点要当天确认是否允许非机动车、是否施工。",
    lodging: "阳谷县城、梁山北侧或过黄河后的乡镇。核心是把第二天去济宁的过河不确定性提前处理掉。",
    food: "聊城、临清一带可吃临清烧麦、羊汤、鲁西面食、烧饼夹肉；当天长，晚餐重点补盐和碳水。",
    shortOption: "少骑：住临清或聊城，约 75-105km；第二天必须早起处理黄河过河和济宁长距离。",
    longOption: "多骑：过黄河后到梁山/汶上北，约 145-160km；能明显减轻 D5，但只适合顺风。",
    detours: [
      { type: "文化", text: "临清运河老城可短停，但不要把停留拖到下午热风时段。" },
      { type: "避险", text: "黄河桥如遇施工或禁非机动车，直接改最近普通公路桥，不上高速桥。" },
    ],
    why: "选临清-聊城-阳谷/梁山，是为了绕开济南-泰安-曲阜一线的起伏和城市交通。替代线经济南更知名但爬升、车流和进出城成本更高。",
    points: [
      ["德州", 116.3575, 37.4341],
      ["夏津", 116.0018, 36.9486],
      ["临清", 115.7049, 36.8383],
      ["聊城", 115.9854, 36.4559],
      ["阳谷", 115.7918, 36.1144],
      ["梁山北", 116.0958, 35.8024],
    ],
  },
  {
    day: "D5",
    route: "阳谷/梁山 → 济宁",
    km: "105-125km",
    climb: "160-280m",
    difficulty: "高",
    type: "ride",
    roads: "阳谷/梁山 → 汶上 → 济宁。优先 G105/S246 走廊，避开泰安、曲阜、邹城方向丘陵。",
    note: "山东段关键日，别被导航带去泰安、曲阜一线。",
    riskText: "乡镇穿越和路口多，济宁北侧交通密度上升；下午疲劳时不要抢红绿灯。",
    lodging: "济宁城区北部/西部或任城附近。住宿多，第二天可直接向邹城西、微山北和滕州方向切出。",
    food: "济宁可吃甏肉干饭、糁汤、夹饼、羊汤；D6 很硬，建议晚餐多吃米饭/面食，早餐提前买好。",
    shortOption: "少骑：住汶上，约 70-85km；第二天汶上-台儿庄会过长，不建议除非 D6 拆分。",
    longOption: "多骑：到邹城西或微山北，约 130-145km；可给 D6 最难日减负，但要避开 G104 快速化主路。",
    detours: [
      { type: "撤退", text: "汶上是最稳的少骑住宿点，适合膝盖、跟腱不舒服时提前收。" },
      { type: "避险", text: "不要为参观点位切曲阜/邹城市中心，D6 已经要经过鲁南丘陵边缘。" },
    ],
    why: "梁山-汶上-济宁是避开泰安、曲阜、邹城丘陵的关键。替代线走曲阜/邹城文化点更多，但会增加起伏和 G104 重车压力。",
    points: [
      ["梁山北", 116.0958, 35.8024],
      ["梁山", 116.0956, 35.8019],
      ["汶上", 116.489, 35.7328],
      ["济宁北", 116.5666, 35.5056],
      ["济宁", 116.5872, 35.4149],
    ],
  },
  {
    day: "D6",
    route: "济宁 → 滕州市",
    km: "95-115km",
    climb: "320-560m",
    difficulty: "最高",
    type: "ride",
    roads: "济宁 → 邹城西/城外 → 微山北 → 滕州市。优先 G104 辅路、并行县乡路和城外绕行线，避开快速路主线和邹城/滕州城区核心拥堵。",
    note: "这是为经过滕州新增的爬升日。里程比原台儿庄方案短，但起伏和重车压力明显更高。",
    riskText: "邹城-滕州一线靠近鲁南丘陵，G104 走廊车流和货车多；不要为了省路进快速化主路或硬贴大车。",
    lodging: "滕州城区东侧/南侧或滕州站周边外缘。住宿、补给和车店都多，第二天可向枣庄/峄城或台儿庄方向切出。",
    food: "滕州可吃滕州菜煎饼、辣子鸡、羊肉汤、面食和粥类；这天爬升多，晚餐要补足碳水和盐分。",
    shortOption: "少骑：住邹城或微山北，约 45-80km；第二天再补到滕州/枣庄方向，建议把总行程加 1 天。",
    longOption: "多骑：继续到枣庄市中/峄城外缘，约 125-145km；不建议常规执行，因为 D7 还要处理徐州外缘。",
    detours: [
      { type: "避险", text: "G104 主路货车密时，优先切邹城西侧、微山北侧并行县乡路，接受绕路。" },
      { type: "撤退", text: "邹城、微山北都可撤退住宿；这天不要为了赶到滕州导致夜骑。" },
      { type: "文化", text: "滕州城区可作为补给停留点，但不要深入拥堵核心。" },
    ],
    why: "改经滕州后，路线从原本湖西/韩庄运河低地转向 G104 鲁南丘陵边缘，能满足经过滕州市，但牺牲了低爬升优势。替代线是保留原鱼台-微山湖西-台儿庄，爬升更少；或者经济南-泰安-曲阜，更绕且爬升更高。",
    points: [
      ["济宁", 116.5872, 35.4149],
      ["邹城西", 116.93, 35.405],
      ["微山北", 117.13, 35.08],
      ["滕州市", 117.1658, 35.1142],
    ],
  },
  {
    day: "D7",
    route: "滕州市 → 睢宁",
    km: "130-155km",
    climb: "260-460m",
    difficulty: "最高",
    type: "ride",
    roads: "滕州 → 枣庄/峄城外缘 → 台儿庄外缘 → 邳州 → 徐州外缘 → 睢宁。优先普通省道、县道和城市外缘路，绕开徐州市中心与快速路系统。",
    note: "这是经滕州后被拉长的一天。若 D6 已经吃力，D7 应拆分，不要硬顶。",
    riskText: "滕州到枣庄/峄城有起伏和重车，台儿庄到徐州外缘又有物流交通；高架匝道、施工绕行和货车混行是主要风险。",
    lodging: "睢宁县城。住在城内比住徐州外缘更安静，第二天接宿迁/淮安顺。",
    food: "枣庄、徐州、睢宁一带可吃辣子鸡、地锅鸡、把子肉、羊肉汤、烙馍卷菜；当天长且起伏多，路上要提前备正餐。",
    shortOption: "少骑：住枣庄市中/峄城、台儿庄或邳州，约 45-105km；这是更稳的安全备选，代价是总行程加 1 天。",
    longOption: "多骑：到宿迁，约 170km 以上；不建议，除非轻装、有顺风且前两天状态非常好。",
    detours: [
      { type: "避险", text: "枣庄市中/峄城交通复杂时，从外缘绕行台儿庄外缘再去邳州。" },
      { type: "撤退", text: "台儿庄或邳州是拆分 D7 的优先住宿点。" },
      { type: "加里程", text: "状态很好才考虑越过睢宁到宿迁，不建议作为默认目标。" },
    ],
    why: "经滕州后继续南下，必须在枣庄/峄城和徐州外缘之间做取舍。选择城市外缘和普通省县道，是为了避开徐州市中心、高架和快速路。替代线是从滕州东南切台儿庄再邳州，稍绕但更容易避开主城；直接走枣庄-徐州主走廊更短，但大车和起伏压力更高。",
    points: [
      ["滕州市", 117.1658, 35.1142],
      ["枣庄外缘", 117.32, 34.82],
      ["峄城外缘", 117.59, 34.77],
      ["台儿庄外缘", 117.734, 34.563],
      ["邳州", 117.9639, 34.3147],
      ["徐州外缘", 117.2841, 34.2058],
      ["睢宁", 117.9414, 33.9137],
    ],
  },
  {
    day: "D8",
    route: "睢宁 → 淮安",
    km: "115-130km",
    climb: "80-180m",
    difficulty: "中-高",
    type: "ride",
    roads: "睢宁 → 宿迁 → 泗阳 → 淮安。优先 S324/G235 走廊和运河边道路。",
    note: "地形不难，但逆风会显著拉高体感。",
    riskText: "宿迁周边货车和城市路口较多；如果 D6/D7 已经伤膝盖，这天不要硬顶。",
    lodging: "淮安城区或清江浦附近。住宿、车店、洗衣补给都好，是全程最适合恢复的节点之一。",
    food: "淮安是淮扬菜重镇，适合吃软兜长鱼、平桥豆腐、淮安茶馓、阳春面；这一晚适合吃清淡些恢复肠胃。",
    shortOption: "少骑：住宿迁或泗阳，约 55-90km；第二天泗阳-扬州会变长，可改住高邮。",
    longOption: "多骑：到宝应北，约 150-160km；可减轻 D9，但连续长日风险高。",
    detours: [
      { type: "风景", text: "宿迁到泗阳可优先贴运河边道路，风景更好但路口仍要慢。" },
      { type: "撤退", text: "宿迁、泗阳都是优质撤退点；D6/D7 后有伤痛就别硬顶淮安。" },
    ],
    why: "宿迁-泗阳-淮安沿运河和普通国省道推进，爬升少、补给密。替代线经徐州南下再折东更绕，且城市交通成本高。",
    points: [
      ["睢宁", 117.9414, 33.9137],
      ["宿迁", 118.2752, 33.963],
      ["泗阳", 118.7036, 33.7236],
      ["淮安", 119.1132, 33.5515],
    ],
  },
  {
    day: "D9",
    route: "淮安 → 扬州",
    km: "115-140km",
    climb: "60-160m",
    difficulty: "中-高",
    type: "ride",
    roads: "淮安 → 宝应 → 高邮 → 扬州。优先 G233/S237/S264 和运河绿道、堤顶路。",
    note: "平但长，适合早出发、午间长休。",
    riskText: "村镇路口、电动车横穿和夏季暴晒是主要问题；不要为了凑均速走快车道。",
    lodging: "扬州城区北部/东部或瘦西湖外缘。住宿丰富，第二天去镇扬汽渡很方便。",
    food: "扬州可吃扬州炒饭、干丝、三丁包、狮子头、阳春面；早餐点心好，但别吃到太晚影响出发。",
    shortOption: "少骑：住高邮，约 80-95km；第二天高邮-常州会增加到约 135-150km。",
    longOption: "多骑：过江到镇江，约 145-155km；能降低 D10 过江不确定性，但别夜间赶汽渡。",
    detours: [
      { type: "风景", text: "高邮湖、运河绿道可作为轻松支线，顺风时体验更好。" },
      { type: "撤退", text: "高邮是最稳的少骑住宿点，适合高温或逆风日。" },
    ],
    why: "淮安-高邮-扬州沿运河线低爬升、补给密，是全程最适合拉长的一段。替代线走南京方向过江绕路明显，且南京进出城成本高。",
    points: [
      ["淮安", 119.1132, 33.5515],
      ["宝应", 119.3584, 33.2414],
      ["高邮", 119.4597, 32.7813],
      ["扬州", 119.421, 32.3932],
    ],
  },
  {
    day: "D10",
    route: "扬州 → 常州",
    km: "105-125km",
    climb: "120-240m",
    difficulty: "中-高",
    type: "ride",
    roads: "扬州 → 镇扬汽渡 → 镇江 → 丹阳 → 常州。优先镇扬汽渡、G312/S338 外缘和城市慢行路。",
    note: "重点不是体能，是安全过江和城市带穿越。",
    riskText: "不要上禁行桥或快速路；镇江到常州红绿灯多、车流密，夜骑风险高。",
    lodging: "常州城区西侧/北侧或武进外缘。住宿多，第二天接无锡、苏州城市带顺。",
    food: "常州可吃银丝面、常州大麻糕、豆腐汤、砂锅类；过江日后建议热汤面加蛋肉，补盐更重要。",
    shortOption: "少骑：住镇江或丹阳，约 45-80km；第二天丹阳-苏州会变成 120km 左右。",
    longOption: "多骑：到无锡西侧，约 145-155km；只有过江很早且城市段顺利时考虑。",
    detours: [
      { type: "避险", text: "镇扬汽渡受雾天、大风影响时，先住扬州或镇江，不强行换危险桥路。" },
      { type: "文化", text: "镇江可短停补给，但不要深入景区拖慢到夜骑。" },
    ],
    why: "扬州-镇江用汽渡，是为了合法安全过长江，避免大桥/快速路禁行问题。替代线走南京或江阴过江都更绕，且车流压力更大。",
    points: [
      ["扬州", 119.421, 32.3932],
      ["镇扬汽渡扬州侧", 119.467, 32.277],
      ["镇江", 119.4558, 32.2044],
      ["丹阳", 119.6065, 32.0102],
      ["常州", 119.9741, 31.8112],
    ],
  },
  {
    day: "D11",
    route: "常州 → 苏州",
    km: "90-110km",
    climb: "80-180m",
    difficulty: "中",
    type: "ride",
    roads: "常州 → 无锡 → 苏州。优先 G312 辅路、太湖/运河边慢行路和城市绿道。",
    note: "江南城市密集，均速会下降，不要按北方平原估算到达时间。",
    riskText: "红绿灯密、机非混行多，外卖车和电动车横穿多。",
    lodging: "苏州城区西侧/新区或古城外缘。不要住太靠古城核心，第二天向昆山/青浦出城更顺。",
    food: "苏州可吃苏式汤面、焖肉面、奥灶面、糕团；江南口味偏甜，长途后记得额外补盐。",
    shortOption: "少骑：住无锡，约 45-60km；第二天无锡-浦东终点会过长，不建议除非增加一天。",
    longOption: "多骑：到昆山，约 125-135km；可显著降低 D12 进上海压力。",
    detours: [
      { type: "风景", text: "太湖/运河慢行线可作为舒适支线，但绕路多时优先保留体力。" },
      { type: "加里程", text: "如果到苏州很早且状态好，推进到昆山能明显降低最后一天压力。" },
    ],
    why: "常州-无锡-苏州走 G312 辅路和运河/太湖慢行线，住宿与维修密度高。替代线贴太湖南岸风景更好，但绕路多，不符合 12 天压缩目标。",
    points: [
      ["常州", 119.9741, 31.8112],
      ["无锡", 120.3119, 31.4912],
      ["苏州新区", 120.551, 31.299],
      ["苏州", 120.5853, 31.2989],
    ],
  },
  {
    day: "D12",
    route: "苏州 → 上海浦发有家申鸿苑",
    km: "105-125km",
    climb: "70-160m",
    difficulty: "中-高",
    type: "ride",
    roads: "苏州 → 昆山 → 青浦/虹桥外缘 → 上海市区慢行路 → 黄浦江轮渡 → 浦东金桥 → 浦发有家申鸿苑。优先 G312 辅路、青浦慢行线、市区非机动车道和金定线等可带自行车轮渡。",
    note: "终点在浦东金桥镇庙港路188弄，最后一天比到上海市中心更长，务必白天完成过江。",
    riskText: "进上海后的路口密度、机非混行、轮渡排队和疲劳叠加；不要走隧道、高架或禁行桥，过江优先查当天可带自行车的轮渡。",
    lodging: "终点住宿：浦发有家申鸿苑，上海浦东新区金桥镇庙港路188弄。若当天状态差，先住青浦、虹桥/长宁外缘或浦西轮渡附近。",
    food: "到浦东后可吃本帮面、排骨年糕、小笼、生煎或盖浇饭；最后一天先保证补水和正餐，再考虑庆祝餐。",
    shortOption: "少骑：住青浦或虹桥外缘，约 45-80km；第二天白天再过江到浦东金桥。",
    longOption: "多骑：无必要。已经到终点；如果前一天住昆山，D12 会轻松很多。",
    detours: [
      { type: "避险", text: "过江优先查可带自行车轮渡，绝不走隧道、高架或禁行桥。" },
      { type: "撤退", text: "青浦、虹桥外缘、浦西轮渡附近都适合最后一天状态差时拆分。" },
      { type: "风景", text: "时间充足可从青浦贴淀山湖慢行，但不要因此夜骑进浦东。" },
    ],
    why: "终点在浦东金桥，路线需要解决上海西入城和过黄浦江两个问题。选择青浦/虹桥外缘进城，再用可带自行车轮渡转浦东，比硬找隧道、高架或大桥安全。替代线可从昆山更北侧经嘉定、宝山绕到浦东，但绕路大、货车多。",
    points: [
      ["苏州", 120.5853, 31.2989],
      ["昆山", 120.9807, 31.3856],
      ["青浦", 121.1242, 31.1505],
      ["虹桥外缘", 121.33, 31.2],
      ["黄浦江轮渡点", 121.515, 31.265],
      ["浦东金桥", 121.615, 31.257],
      ["浦发有家申鸿苑", 121.639092, 31.258857],
    ],
  },
];

let map = null;
let polylines = [];
let markers = [];
let terrainMode = false;
let terrainLayers = [];
let terrainOverlays = [];
let selectedDayIndex = 0;

const listEl = document.querySelector("#day-list");
const daySelectorEl = document.querySelector("#day-selector");
const terrainToggleEl = document.querySelector("#terrain-toggle");

const terrainZones = [
  {
    title: "鲁中/泰山丘陵避开区",
    copy: "济南-泰安-曲阜更短但起伏和城市交通更重",
    center: [117.13, 36.0],
    color: "#b42318",
    path: [
      [116.55, 36.6],
      [117.4, 36.75],
      [118.05, 36.25],
      [117.85, 35.35],
      [116.95, 35.25],
      [116.45, 35.75],
    ],
  },
  {
    title: "滕州/鲁南丘陵边缘",
    copy: "滕州固定后，这一带是全程爬升最集中的位置",
    center: [117.22, 35.08],
    color: "#b45309",
    path: [
      [116.85, 35.45],
      [117.55, 35.48],
      [117.85, 34.92],
      [117.55, 34.55],
      [116.95, 34.7],
      [116.75, 35.05],
    ],
  },
  {
    title: "华北-江淮低地走廊",
    copy: "主线沿运河、湖西和平原推进，用少量绕行换低爬升",
    center: [118.4, 33.3],
    color: "#0f766e",
    path: [
      [116.0, 38.6],
      [116.7, 38.45],
      [117.0, 36.8],
      [117.3, 35.2],
      [118.4, 33.8],
      [119.6, 32.5],
      [121.3, 31.3],
      [121.0, 30.95],
      [118.8, 31.85],
      [117.7, 33.1],
      [116.2, 35.9],
      [115.55, 37.7],
    ],
  },
];

function viewportPadding(extra = 0) {
  const isStacked = window.matchMedia("(max-width: 860px)").matches;
  return isStacked
    ? [96 + extra, 40 + extra, 48 + extra, 40 + extra]
    : [64 + extra, 64 + extra, 64 + extra, 64 + extra];
}

function formatRoute(day) {
  return day.route;
}

function dayPath(day) {
  return day.points.map((point) => [point[1], point[2]]);
}

function dayPlaces(day) {
  return day.points.map((point) => point[0]).join(" → ");
}

function renderDaySelector() {
  daySelectorEl.innerHTML = "";
  plan.forEach((day, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-selector-button";
    button.classList.toggle("active", index === selectedDayIndex);
    button.classList.toggle("hard", isHardDay(day));
    button.textContent = String(index + 1);
    button.title = `${day.day} ${day.route}`;
    button.addEventListener("click", () => selectDay(index));
    daySelectorEl.appendChild(button);
  });
}

function renderList() {
  const template = document.querySelector("#day-template");
  listEl.innerHTML = "";
  const day = plan[selectedDayIndex];
  const node = template.content.firstElementChild.cloneNode(true);
  node.dataset.index = String(selectedDayIndex);
  node.dataset.type = day.type;
  node.dataset.difficulty = day.difficulty;
  node.classList.add("selected");
  node.querySelector(".day-index").textContent = day.day;
  node.querySelector(".day-route").textContent = formatRoute(day);
  node.querySelector(".day-meta").textContent = `${day.km} · 爬升 ${day.climb} · 难度 ${day.difficulty}`;
  node.querySelector(".day-note").textContent = day.note;
  node.querySelector(".day-lodging").textContent = day.lodging;
  node.querySelector(".day-food").textContent = day.food;
  node.querySelector(".day-roads").textContent = `${day.roads} 途经：${dayPlaces(day)}。`;
  node.querySelector(".day-risk").textContent = day.riskText;
  node.querySelector(".day-options").textContent = `少骑：${day.shortOption} 多骑：${day.longOption}`;
  node.querySelector(".day-detours").innerHTML = renderDetours(day.detours);
  node.querySelector(".day-why").textContent = day.why;
  node.querySelector(".day-button").addEventListener("click", () => focusSelectedDay());
  listEl.appendChild(node);
}

function renderDetours(detours = []) {
  return detours
    .map((detour) => `<span class="detour-chip"><strong>${detour.type}</strong>${detour.text}</span>`)
    .join("");
}

function isHardDay(day) {
  return ["高", "中-高", "最高"].includes(day.difficulty);
}

function routeColor(day) {
  if (day.difficulty === "最高") return "#b42318";
  if (["高", "中-高"].includes(day.difficulty)) return "#b45309";
  return "#0f766e";
}

function selectDay(index) {
  selectedDayIndex = index;
  renderDaySelector();
  renderList();
  drawManualMap({ fitAll: false });
  if (terrainMode) drawTerrainOverlays();
  focusSelectedDay();
}

function focusSelectedDay() {
  if (!map || !window.AMap) return;
  const dayObjects = [...polylines, ...markers].filter((item) => item.__dayIndex === selectedDayIndex);
  if (dayObjects.length) {
    map.setFitView(dayObjects, false, viewportPadding(100));
    applyMapView();
  }
}

function clearMapObjects() {
  if (!map || !window.AMap) return;
  [...polylines, ...markers].forEach((item) => map.remove(item));
  polylines = [];
  markers = [];
}

function clearTerrainOverlays() {
  if (!map || !window.AMap) return;
  terrainOverlays.forEach((item) => map.remove(item));
  terrainOverlays = [];
}

function fitFullRoute(padding = viewportPadding()) {
  if (!map || !window.AMap) return;
  const objects = [...polylines, ...markers];
  if (objects.length) {
    map.setFitView(objects, false, padding);
    applyMapView();
  }
}

function drawManualMap(options = {}) {
  if (!map || !window.AMap) return;
  const { fitAll = true } = options;
  clearMapObjects();

  plan.forEach((day, dayIndex) => {
    const path = dayPath(day);
    const selected = dayIndex === selectedDayIndex;
    const line = new AMap.Polyline({
      path,
      strokeColor: routeColor(day),
      strokeWeight: selected ? 10 : day.difficulty === "最高" ? 7 : 5,
      strokeOpacity: selected ? 1 : 0.62,
      lineJoin: "round",
      lineCap: "round",
      zIndex: selected ? 80 : 40,
      map,
    });
    line.__dayIndex = dayIndex;
    polylines.push(line);

    path.forEach((position, index) => {
      const marker = new AMap.Marker({
        position,
        title: day.points[index][0],
        anchor: "bottom-center",
        content: `<div class="marker ${isHardDay(day) ? "risk-marker" : ""}">${day.day.replace("D", "")}.${index + 1}</div>`,
        map,
      });
      marker.__dayIndex = dayIndex;
      marker.on("click", () => openInfo(day, index));
      markers.push(marker);
    });
  });

  if (fitAll) fitFullRoute();
}

function createTerrainLayers() {
  if (!window.AMap || terrainLayers.length) return;
  if (AMap.TileLayer?.Satellite) {
    terrainLayers.push(new AMap.TileLayer.Satellite());
  }
  if (AMap.TileLayer?.RoadNet) {
    terrainLayers.push(new AMap.TileLayer.RoadNet());
  }
  if (AMap.Buildings) {
    terrainLayers.push(
      new AMap.Buildings({
        zooms: [10, 20],
        zIndex: 11,
      }),
    );
  }
}

function drawTerrainOverlays() {
  if (!terrainMode || !map || !window.AMap) return;
  clearTerrainOverlays();

  terrainZones.forEach((zone) => {
    const polygon = new AMap.Polygon({
      path: zone.path,
      strokeColor: zone.color,
      strokeOpacity: 0.85,
      strokeWeight: 2,
      fillColor: zone.color,
      fillOpacity: zone.color === "#0f766e" ? 0.12 : 0.16,
      zIndex: zone.color === "#0f766e" ? 18 : 20,
      map,
    });
    terrainOverlays.push(polygon);

    const label = new AMap.Marker({
      position: zone.center,
      anchor: "center",
      content: `<div class="terrain-label"><strong>${zone.title}</strong><span>${zone.copy}</span></div>`,
      zIndex: 120,
      map,
    });
    terrainOverlays.push(label);
  });
}

function applyMapView() {
  if (!map) return;
  if (typeof map.setPitch === "function") {
    map.setPitch(terrainMode ? 55 : 0);
  }
  if (typeof map.setRotation === "function") {
    map.setRotation(terrainMode ? -18 : 0);
  }
}

function setTerrainMode(enabled) {
  if (!map || !window.AMap) return;
  terrainMode = enabled;
  terrainToggleEl?.classList.toggle("active", terrainMode);
  terrainToggleEl?.setAttribute("aria-pressed", String(terrainMode));
  if (terrainToggleEl) {
    terrainToggleEl.textContent = terrainMode ? "退出 3D" : "3D 地势";
  }

  createTerrainLayers();
  terrainLayers.forEach((layer) => {
    if (terrainMode) {
      map.add(layer);
    } else {
      map.remove(layer);
    }
  });

  if (terrainMode) {
    drawTerrainOverlays();
  } else {
    clearTerrainOverlays();
  }
  applyMapView();
  fitFullRoute(viewportPadding(120));
}

function openInfo(day, index) {
  const point = day.points[index];
  const info = new AMap.InfoWindow({
    content: `<div class="info-window"><strong>${day.day} ${point[0]}</strong><p>${day.route}<br>${day.km} · 爬升 ${day.climb} · 难度 ${day.difficulty}</p></div>`,
    offset: new AMap.Pixel(0, -26),
  });
  info.open(map, [point[1], point[2]]);
}

function loadAmapScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.onload = () => {
      if (window.AMap) {
        resolve(window.AMap);
      } else {
        script.remove();
        reject(new Error("高德 JS API 返回异常"));
      }
    };
    script.onerror = () => {
      script.remove();
      reject(new Error("高德 JS API 加载失败"));
    };
    document.head.appendChild(script);
  });
}

async function loadAmap(key) {
  if (window.AMap) return window.AMap;
  if (MAP_CONFIG.amapSecurityCode) {
    window._AMapSecurityConfig = { securityJsCode: MAP_CONFIG.amapSecurityCode };
  }
  const query = `v=2.0&key=${encodeURIComponent(key)}&plugin=AMap.Scale,AMap.ToolBar,AMap.Riding`;
  const urls = [`https://webapi.amap.com/maps?${query}`, `http://webapi.amap.com/maps?${query}`];
  let lastError = null;
  for (const [index, url] of urls.entries()) {
    try {
      const api = await loadAmapScript(url);
      return api;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("高德 JS API 加载失败");
}

function initMap() {
  map = new AMap.Map("map", {
    zoom: 6,
    center: [118.62, 35.55],
    viewMode: "3D",
    pitch: 0,
    rotation: 0,
    mapStyle: "amap://styles/normal",
  });
  map.addControl(new AMap.Scale());
  map.addControl(new AMap.ToolBar({ position: "RB" }));
  drawManualMap();
}

async function autoLoadAmap() {
  if (!MAP_CONFIG.amapKey) {
    return;
  }
  try {
    await loadAmap(MAP_CONFIG.amapKey);
    initMap();
  } catch (error) {
    // Keep the route notes usable even when the online map fails to load.
  }
}

renderDaySelector();
renderList();
terrainToggleEl?.addEventListener("click", () => setTerrainMode(!terrainMode));
autoLoadAmap();

const markerStyle = document.createElement("style");
markerStyle.textContent = `
  .marker {
    display: grid;
    place-items: center;
    min-width: 28px;
    height: 26px;
    border: 2px solid #fffdf7;
    border-radius: 999px;
    background: #0f766e;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .25);
    color: #fff;
    font-size: 11px;
    font-weight: 800;
    padding: 0 5px;
  }
  .risk-marker { background: #b42318; }
  .terrain-label {
    display: grid;
    gap: 3px;
    width: 178px;
    border: 1px solid rgba(32, 33, 31, .16);
    border-radius: 8px;
    background: rgba(255, 253, 247, .92);
    box-shadow: 0 8px 24px rgba(0, 0, 0, .18);
    padding: 9px 10px;
    color: #20211f;
    line-height: 1.35;
    white-space: normal;
  }
  .terrain-label strong {
    font-size: 12px;
  }
  .terrain-label span {
    color: #686b61;
    font-size: 11px;
  }
  .info-window {
    max-width: 260px;
    color: #20211f;
    line-height: 1.5;
  }
  .info-window p {
    margin: 6px 0 0;
    color: #686b61;
  }
`;
document.head.appendChild(markerStyle);
