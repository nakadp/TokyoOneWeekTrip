// --- 1. 模拟数据 (Sample Data) ---
// 后续可以改为使用 fetch('data/trips.json') 从外部加载
const tripsData = {
  "trips": [
    {
      "id": "tokyo_part1",
      "name": "东京第一段（7/22–24）",
      "days": [
        {
          "date": "2026-07-22",
          "title": "到达东京",
          "summary": "成田机场入境，乘坐 Skyaccess 前往浅草，傍晚在浅草寺、隅田川周边散步及用餐。",
          "segments": [
            {
              "id": "seg_1",
              "timeRange": "14:00-15:00",
              "title": "成田机场 T1 落地 & 入境",
              "route": {
                "type": "walk",
                "points": [
                  { "name": "成田机场 T1", "lat": 35.7645, "lng": 140.3860 }
                ]
              },
              "places": [
                {
                  "id": "narita_t1",
                  "name": "成田国际机场 (T1)",
                  "type": "airport",
                  "lat": 35.7645,
                  "lng": 140.3860,
                  "description": "乘坐国航 CA929 落地，预计入境需要 1 小时。",
                  "stayMinutes": 60,
                  "transport": "航班抵达",
                  "notes": `<div class="structured-guide">
  <h4><i class="fa-solid fa-passport"></i> Visit Japan Web (VJW) 填写指南</h4>
  <ul>
    <li><strong>用途：</strong> 提前在线申报入境审查与海关申报。</li>
    <li><strong>填写内容：</strong> 护照信息、航班号(CA929)、日本住宿地址（HOTEL AMANEK Asakusa Ekimae / 111-0043 / 03-5830-6234）。</li>
    <li><strong>重要操作：</strong> 填写完毕后，务必截图保存生成的二维码，以防机场网络不佳。</li>
  </ul>
  <h4><i class="fa-solid fa-pen-to-square"></i> 纸质版入境卡 & 税务申报卡</h4>
  <ul>
    <li><strong>备用方案：</strong> 若未提前填报 VJW，请在飞机上向乘务员索要。</li>
    <li><strong>入境卡必填：</strong> 姓名、出生日期、国籍、航班号(CA929)、停留期、酒店名称及电话。</li>
    <li><strong>海关卡必填：</strong> 个人物品申报（一般勾选全“否”），家庭同行只需填一张海关卡。</li>
  </ul>
  <h4><i class="fa-solid fa-train-subway"></i> Suica (西瓜卡) 购买指引</h4>
  <ul>
    <li><strong>地点：</strong> 成田机场 T1 航站楼地下一层（B1F）的 JR 东日本旅行服务中心或自动售票机。</li>
    <li><strong>提示：</strong> 乘车前必须购卡。建议充值 3000-5000 日元/人。目前因芯片短缺，可购买游客专属的 Welcome Suica（红色免押金版，28天有效）或在 Apple Wallet 绑定电子 Suica。</li>
  </ul>
</div>`
                }
              ]
            },
            {
              "id": "seg_2",
              "timeRange": "15:00-18:00",
              "title": "乘坐电车前往酒店",
              "route": {
                "type": "train",
                "points": [
                  { "name": "成田机场", "lat": 35.7645, "lng": 140.3860 },
                  { "name": "成田汤川", "lat": 35.7950, "lng": 140.2917 },
                  { "name": "印旛日本医大", "lat": 35.8016, "lng": 140.1915 },
                  { "name": "千叶新城中央", "lat": 35.8037, "lng": 140.1170 },
                  { "name": "新镰谷", "lat": 35.7797, "lng": 139.9987 },
                  { "name": "东松户", "lat": 35.7699, "lng": 139.9436 },
                  { "name": "京成八幡", "lat": 35.7237, "lng": 139.9276 },
                  { "name": "京成高砂", "lat": 35.7505, "lng": 139.8669 },
                  { "name": "青砥", "lat": 35.7466, "lng": 139.8550 },
                  { "name": "押上", "lat": 35.7107, "lng": 139.8131 },
                  { "name": "浅草站", "lat": 35.7111, "lng": 139.7975 },
                  { "name": "酒店", "lat": 35.7067, "lng": 139.7947 }
                ]
              },
              "places": [
                {
                  "id": "hotel_amanek",
                  "name": "HOTEL AMANEK Asakusa Ekimae",
                  "type": "hotel",
                  "lat": 35.7067,
                  "lng": 139.7947,
                  "description": "位于浅草的酒店，交通便利。地址：2 Chome-7-2 Komagata, Taito Ward, Tokyo, 111-0043。电话：+81-3-58306234。",
                  "stayMinutes": 60,
                  "transport": "从机场乘坐 Keisei Narita Skyaccess 直达浅草周边，车费约 1380 日元。",
                  "notes": "抵达后先办理入住、放下行李休整。"
                }
              ]
            },
            {
              "id": "seg_3",
              "timeRange": "18:00-21:00",
              "title": "浅草寺、隅田川周边散步 & 晚餐",
              "route": {
                "type": "walk",
                "points": [
                  { "name": "酒店 AMANEK", "lat": 35.7067, "lng": 139.7947 },
                  { "name": "江户通 (1)", "lat": 35.7070, "lng": 139.7948 },
                  { "name": "江户通 (2)", "lat": 35.7073, "lng": 139.7949 },
                  { "name": "江户通 (3)", "lat": 35.7076, "lng": 139.7950 },
                  { "name": "江户通 (4)", "lat": 35.7079, "lng": 139.7951 },
                  { "name": "驹形桥西十字路口", "lat": 35.7085, "lng": 139.7954 },
                  { "name": "江户通 (5)", "lat": 35.7090, "lng": 139.7956 },
                  { "name": "江户通 (6)", "lat": 35.7096, "lng": 139.7958 },
                  { "name": "吾妻桥西十字路口", "lat": 35.7102, "lng": 139.7960 },
                  { "name": "吾妻桥 (西端)", "lat": 35.71015, "lng": 139.7965 },
                  { "name": "吾妻桥 (中段)", "lat": 35.7101, "lng": 139.7975 },
                  { "name": "吾妻桥 (东段)", "lat": 35.71005, "lng": 139.7985 },
                  { "name": "吾妻桥东十字路口", "lat": 35.7100, "lng": 139.8000 },
                  { "name": "隅田川步道 (1)", "lat": 35.7106, "lng": 139.8003 },
                  { "name": "隅田川步道 (2)", "lat": 35.7112, "lng": 139.8006 },
                  { "name": "隅田川步道 (3)", "lat": 35.7118, "lng": 139.8009 },
                  { "name": "隅田川步道 (4)", "lat": 35.7124, "lng": 139.8012 },
                  { "name": "隅田川步道 (5)", "lat": 35.7130, "lng": 139.8015 },
                  { "name": "隅田川步道 (6)", "lat": 35.7136, "lng": 139.8018 },
                  { "name": "隅田川步道 (7)", "lat": 35.7142, "lng": 139.8021 },
                  { "name": "言问桥下", "lat": 35.7148, "lng": 139.8024 },
                  { "name": "言问桥东十字路口", "lat": 35.7153, "lng": 139.8042 },
                  { "name": "水户街道 (1)", "lat": 35.7150, "lng": 139.8048 },
                  { "name": "水户街道 (2)", "lat": 35.7147, "lng": 139.8055 },
                  { "name": "水户街道 (3)", "lat": 35.7143, "lng": 139.8068 },
                  { "name": "水户街道 (4)", "lat": 35.7138, "lng": 139.8081 },
                  { "name": "水户街道 (5)", "lat": 35.7133, "lng": 139.8094 },
                  { "name": "水户街道 (6)", "lat": 35.7128, "lng": 139.8107 },
                  { "name": "晴空塔东北", "lat": 35.7123, "lng": 139.8120 },
                  { "name": "晴空塔东", "lat": 35.7115, "lng": 139.8122 },
                  { "name": "押上站前", "lat": 35.7108, "lng": 139.8124 },
                  { "name": "浅草通 (1)", "lat": 35.7107, "lng": 139.8110 },
                  { "name": "浅草通 (2)", "lat": 35.7106, "lng": 139.8095 },
                  { "name": "浅草通 (3)", "lat": 35.7105, "lng": 139.8080 },
                  { "name": "浅草通 (4)", "lat": 35.7104, "lng": 139.8065 },
                  { "name": "浅草通 (5)", "lat": 35.7103, "lng": 139.8050 },
                  { "name": "浅草通 (6)", "lat": 35.7102, "lng": 139.8035 },
                  { "name": "浅草通 (7)", "lat": 35.7101, "lng": 139.8020 },
                  { "name": "吾妻桥东", "lat": 35.7100, "lng": 139.8000 },
                  { "name": "水岸向南 (1)", "lat": 35.7095, "lng": 139.7997 },
                  { "name": "水岸向南 (2)", "lat": 35.7090, "lng": 139.7994 },
                  { "name": "驹形桥东十字路口", "lat": 35.7085, "lng": 139.7991 },
                  { "name": "驹形桥 (东段)", "lat": 35.7085, "lng": 139.7980 },
                  { "name": "驹形桥 (中段)", "lat": 35.7085, "lng": 139.7965 },
                  { "name": "驹形桥西十字路口", "lat": 35.7085, "lng": 139.7954 },
                  { "name": "江户通向南 (1)", "lat": 35.7079, "lng": 139.7951 },
                  { "name": "江户通向南 (2)", "lat": 35.7073, "lng": 139.7949 },
                  { "name": "回到酒店 AMANEK", "lat": 35.7067, "lng": 139.7947 }
                ]
              },
              "places": [
                {
                  "id": "sensoji",
                  "name": "浅草寺 & 隅田川周边",
                  "type": "temple",
                  "lat": 35.7147,
                  "lng": 139.7966,
                  "description": "东京最古老的寺院之一，傍晚时分人流减少，非常适合带父母散步。可以顺便欣赏隅田川夜景。",
                  "stayMinutes": 60,
                  "transport": "从酒店步行前往",
                  "notes": "第一天行程不要太满，以散步和放松为主。"
                },
                {
                  "id": "daikokuya",
                  "name": "大黑家天妇罗（大黒家天麩羅）",
                  "type": "restaurant",
                  "lat": 35.7130,
                  "lng": 139.7955,
                  "description": "【浅草名店 / 传统日式 / 父母最喜欢的类型】浅草百年老店，天妇罗偏甜的江户前风味。炸物不油腻，氛围传统，作为第一餐非常“到位”。",
                  "stayMinutes": 60,
                  "transport": "步行",
                  "notes": "招牌：天丼（天妇罗盖饭）。适合度：⭐⭐⭐⭐⭐（父母最稳妥）"
                },
                {
                  "id": "imahan",
                  "name": "浅草今半（国際通本店）",
                  "type": "restaurant",
                  "lat": 35.7138,
                  "lng": 139.7915,
                  "description": "【高级但不贵到离谱 / 和牛寿喜烧 / 到日本必须吃一次】东京老字号和牛店，寿喜烧甜咸适中，服务非常好，适合作为“到达日本的仪式感第一餐”。",
                  "stayMinutes": 90,
                  "transport": "步行",
                  "notes": "招牌：和牛寿喜烧、和牛涮涮锅。适合度：⭐⭐⭐⭐⭐（仪式感最强）"
                },
                {
                  "id": "magurojin",
                  "name": "まぐろ人（Magurojin）浅草本店",
                  "type": "restaurant",
                  "lat": 35.7121,
                  "lng": 139.7954,
                  "description": "【高品质寿司 / 不排队的寿司名店 / CP 值高】不像筑地那样排队，鱼新鲜、价格合理。父母如果喜欢寿司，这是浅草最稳的选择。",
                  "stayMinutes": 60,
                  "transport": "步行",
                  "notes": "招牌：中トロ、海胆、三文鱼。适合度：⭐⭐⭐⭐（寿司党首选）"
                },
                {
                  "id": "mugitoro",
                  "name": "浅草むぎとろ（麦とろ）",
                  "type": "restaurant",
                  "lat": 35.7099,
                  "lng": 139.7965,
                  "description": "【健康 / 清淡 / 父母友好 / 日本家庭料理】主打“山药泥＋日式定食”，非常健康。旅途刚到不想吃太油腻的话，这是最好的选择。靠近隅田川景观好。",
                  "stayMinutes": 60,
                  "transport": "步行",
                  "notes": "招牌：とろろ御膳（山药泥套餐）。适合度：⭐⭐⭐⭐（健康清淡派）"
                },
                {
                  "id": "menchi",
                  "name": "浅草メンチ（浅草炸肉饼）",
                  "type": "restaurant",
                  "lat": 35.7126,
                  "lng": 139.7950,
                  "description": "【浅草名物 / 快速轻食 / 不想坐下来吃】如果你们到达后不想正式吃饭，可以先吃一个浅草名物炸肉饼，然后再去浅草寺散步。",
                  "stayMinutes": 15,
                  "transport": "步行",
                  "notes": "招牌：炸肉饼（メンチカツ）。适合度：⭐⭐⭐（轻食路线）"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-07-23",
          "title": "东京中心",
          "summary": "皇居深度游 → 东京站/银座午餐散步 → 增上寺/东京塔夜景 → 六本木散步",
          "segments": [
            {
              "id": "seg_23_1",
              "timeRange": "10:00-12:00",
              "title": "皇居深度游览",
              "route": {
                "type": "walk",
                "points": [
                  { "name": "二重桥前", "lat": 35.6795, "lng": 139.7533 },
                  { "name": "皇居外苑", "lat": 35.6800, "lng": 139.7565 },
                  { "name": "大手门", "lat": 35.6853, "lng": 139.7610 },
                  { "name": "东御苑", "lat": 35.6875, "lng": 139.7560 }
                ]
              },
              "places": [
                {
                  "id": "imperial_plaza",
                  "name": "皇居外苑",
                  "type": "park",
                  "lat": 35.6800,
                  "lng": 139.7565,
                  "description": "有宽阔的大草坪，非常适合散步拍照。",
                  "stayMinutes": 30,
                  "transport": "地铁站出来即是",
                  "notes": "推荐在此走走停停，不要太累。"
                },
                {
                  "id": "nijubashi",
                  "name": "二重桥",
                  "type": "park",
                  "lat": 35.6795,
                  "lng": 139.7533,
                  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Nijubashi_bridge_at_the_Imperial_Palace_in_Tokyo.jpg/800px-Nijubashi_bridge_at_the_Imperial_Palace_in_Tokyo.jpg",
                  "description": "最经典的皇居拍照机位，父母一定会喜欢在这里留影。",
                  "stayMinutes": 30,
                  "transport": "从外苑步行前往",
                  "notes": "拍照后沿着护城河走到大手门入口。"
                },
                {
                  "id": "east_gardens",
                  "name": "皇居东御苑",
                  "type": "park",
                  "lat": 35.6875,
                  "lng": 139.7560,
                  "description": "皇居的附属庭园，免费入场。内部有本丸大草坪、桃华乐堂、二之丸庭园和天守台遗迹。",
                  "stayMinutes": 60,
                  "transport": "从大手门进入",
                  "notes": "<h4>内部参观（需预约）</h4><ul><li>官网预约：sankan.kunaicho.go.jp/register/visit</li><li>现场排队不保证名额</li><li>建议直接游览东御苑即可，坡度平缓。</li></ul>"
                }
              ]
            },
            {
              "id": "seg_23_2",
              "timeRange": "12:00-13:00",
              "title": "东京站轻量午餐",
              "route": {
                "type": "walk",
                "points": [
                  { "name": "大手门", "lat": 35.6853, "lng": 139.7610 },
                  { "name": "东京站丸之内口", "lat": 35.6812, "lng": 139.7656 },
                  { "name": "KITTE大楼", "lat": 35.6800, "lng": 139.7655 }
                ]
              },
              "places": [
                {
                  "id": "dashi_chazuke",
                  "name": "だし茶漬け えん (KITTE)",
                  "type": "restaurant",
                  "lat": 35.6800,
                  "lng": 139.7655,
                  "description": "主打出汁茶泡饭，极其轻量且不会油腻，日本人日常吃法，非常适合父母。",
                  "stayMinutes": 45,
                  "transport": "从东御苑步行15分钟",
                  "notes": "推荐：鲑鱼茶泡饭、明太子茶泡饭。吃完不撑，下午走路舒服。"
                },
                {
                  "id": "tsurutontan",
                  "name": "つるとんたん (KITTE)",
                  "type": "restaurant",
                  "lat": 35.6798,
                  "lng": 139.7656,
                  "description": "高级乌冬面店，环境好，面条可以选择细乌冬，父母接受度高。",
                  "stayMinutes": 45,
                  "transport": "就在同大楼",
                  "notes": "推荐柚子乌冬，清淡开胃。"
                },
                {
                  "id": "soranoiro",
                  "name": "ソラノイロ (拉面街)",
                  "type": "restaurant",
                  "lat": 35.6802,
                  "lng": 139.7681,
                  "description": "东京站地下拉面街中比较清淡的一家，主打蔬菜拉面。",
                  "stayMinutes": 45,
                  "transport": "在东京站地下街",
                  "notes": "如果特别想吃拉面，这家是不太会感到油腻的选择。"
                }
              ]
            },
            {
              "id": "seg_23_3",
              "timeRange": "13:00-16:00",
              "title": "银座散步与商场休息",
              "route": {
                "type": "walk",
                "points": [
                  { "name": "东京站", "lat": 35.6812, "lng": 139.7656 },
                  { "name": "银座一丁目", "lat": 35.6745, "lng": 139.7675 },
                  { "name": "和光钟楼", "lat": 35.6713, "lng": 139.7648 },
                  { "name": "银座三越", "lat": 35.6716, "lng": 139.7658 },
                  { "name": "GINZA SIX", "lat": 35.6696, "lng": 139.7640 }
                ]
              },
              "places": [
                {
                  "id": "wako_clock",
                  "name": "银座和光钟楼",
                  "type": "shopping_street",
                  "lat": 35.6713,
                  "lng": 139.7648,
                  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Wako_store_in_Ginza%2C_Tokyo_2.jpg/800px-Wako_store_in_Ginza%2C_Tokyo_2.jpg",
                  "description": "银座的地标建筑，十字路口必拍点。周末会有步行街封路，非常适合散步。",
                  "stayMinutes": 20,
                  "transport": "沿银座中央通直走",
                  "notes": "拍照打卡即走。"
                },
                {
                  "id": "mitsukoshi_ginza",
                  "name": "银座三越",
                  "type": "mall",
                  "lat": 35.6716,
                  "lng": 139.7658,
                  "description": "老牌百货公司。内部有座位和洗手间，还有轻食区。",
                  "stayMinutes": 45,
                  "transport": "位于和光钟楼斜对面",
                  "notes": "父母可以坐在休息区，你们可以去逛楼层。"
                },
                {
                  "id": "ginza_six",
                  "name": "GINZA SIX",
                  "type": "mall",
                  "lat": 35.6696,
                  "lng": 139.7640,
                  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Ginza_Six_201704.jpg/800px-Ginza_Six_201704.jpg",
                  "description": "银座最新最高端的商场，内部空间宽敞不拥挤。顶楼花园视野极佳，微风吹拂非常舒服。",
                  "stayMinutes": 60,
                  "transport": "沿中央通向南步行5分钟",
                  "notes": "强烈推荐带父母去顶楼花园休息，商场内的艺术装置也值得一看。"
                }
              ]
            },
            {
              "id": "seg_23_4",
              "timeRange": "16:00-18:30",
              "title": "日比谷周边休息与参观",
              "route": {
                "type": "walk",
                "points": [
                  { "name": "GINZA SIX", "lat": 35.6696, "lng": 139.7640 },
                  { "name": "Tokyo Midtown Hibiya", "lat": 35.6738, "lng": 139.7588 },
                  { "name": "日比谷公园", "lat": 35.6735, "lng": 139.7554 }
                ]
              },
              "places": [
                {
                  "id": "midtown_hibiya",
                  "name": "Tokyo Midtown Hibiya",
                  "type": "mall",
                  "lat": 35.6738,
                  "lng": 139.7588,
                  "description": "位于银座和日比谷公园之间的高级商场。室内空调舒适，有室外观景台可以俯瞰日比谷公园和皇居。",
                  "stayMinutes": 45,
                  "transport": "从银座步行约10分钟",
                  "notes": "如果觉得外面太热，这里是最佳的避暑休息点。"
                },
                {
                  "id": "hibiya_park",
                  "name": "日比谷公园",
                  "type": "park",
                  "lat": 35.6735,
                  "lng": 139.7554,
                  "description": "历史悠久的城市公园，树荫密集，有大量长椅，还有著名的喷泉和日比谷松本楼咖啡。",
                  "stayMinutes": 60,
                  "transport": "就在Midtown旁边",
                  "notes": "非常适合父母在自然环境中放松。"
                }
              ]
            },
            {
              "id": "seg_23_5",
              "timeRange": "18:50-19:30",
              "title": "芝公园大门周边晚餐",
              "route": {
                "type": "train",
                "points": [
                  { "name": "日比谷站", "lat": 35.6740, "lng": 139.7590 },
                  { "name": "御成门/大门站", "lat": 35.6580, "lng": 139.7530 }
                ]
              },
              "places": [
                {
                  "id": "sarashina_soba",
                  "name": "芝大门 更科そば",
                  "type": "restaurant",
                  "lat": 35.6565,
                  "lng": 139.7536,
                  "description": "老字号荞麦面店。口味清淡，分量刚好，父母特别喜欢这种传统日式面食。",
                  "stayMinutes": 45,
                  "transport": "乘坐都营三田线从日比谷到御成门",
                  "notes": "最推荐的一家！吃完正好散步去增上寺，完全顺路。"
                },
                {
                  "id": "maisen_daimon",
                  "name": "とんかつ まい泉 (大门店)",
                  "type": "restaurant",
                  "lat": 35.6568,
                  "lng": 139.7548,
                  "description": "知名连锁炸猪排店，肉质软嫩不油腻，可选择小份量。",
                  "stayMinutes": 45,
                  "transport": "位于大门站附近",
                  "notes": "如果想吃点肉但又不想太撑的选择。"
                }
              ]
            },
            {
              "id": "seg_23_6",
              "timeRange": "19:30-20:30",
              "title": "增上寺夜景 & 东京塔",
              "route": {
                "type": "walk",
                "points": [
                  { "name": "大门十字路口", "lat": 35.6565, "lng": 139.7536 },
                  { "name": "增上寺大门", "lat": 35.6570, "lng": 139.7505 },
                  { "name": "增上寺", "lat": 35.6573, "lng": 139.7483 },
                  { "name": "东京塔脚下", "lat": 35.6586, "lng": 139.7454 }
                ]
              },
              "places": [
                {
                  "id": "zojoji",
                  "name": "增上寺",
                  "type": "temple",
                  "lat": 35.6573,
                  "lng": 139.7483,
                  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zojo-ji_Temple_and_Tokyo_Tower_2018.jpg/800px-Zojo-ji_Temple_and_Tokyo_Tower_2018.jpg",
                  "description": "古老的德川家庙，也是拍摄古寺与东京塔同框的绝佳机位。夜间氛围宁静平和。",
                  "stayMinutes": 30,
                  "transport": "从餐厅步行即可到达",
                  "notes": "地面平坦好走，父母非常喜欢的景点。灯光柔和，极为浪漫。"
                },
                {
                  "id": "tokyo_tower",
                  "name": "东京塔脚下",
                  "type": "tower",
                  "lat": 35.6586,
                  "lng": 139.7454,
                  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tokyo_Tower_2020.jpg/800px-Tokyo_Tower_2020.jpg",
                  "description": "走到东京塔正下方，仰望红白铁塔的夜间打灯，感受日剧般的经典场景。",
                  "stayMinutes": 30,
                  "transport": "从增上寺穿过小路直接到达",
                  "notes": "不一定要登塔，在塔下拍照效果最好。"
                }
              ]
            },
            {
              "id": "seg_23_7",
              "timeRange": "20:30-22:00",
              "title": "东京塔 → 六本木夜景散步",
              "route": {
                "type": "walk",
                "points": [
                  { "name": "东京塔", "lat": 35.6586, "lng": 139.7454 },
                  { "name": "芝公园散步道", "lat": 35.6555, "lng": 139.7476 },
                  { "name": "麻布十番", "lat": 35.6550, "lng": 139.7350 },
                  { "name": "Keyakizaka 街", "lat": 35.6592, "lng": 139.7288 },
                  { "name": "六本木之丘", "lat": 35.6604, "lng": 139.7292 }
                ]
              },
              "places": [
                {
                  "id": "shiba_park",
                  "name": "芝公园",
                  "type": "park",
                  "lat": 35.6555,
                  "lng": 139.7476,
                  "description": "离开东京塔时穿过的公园绿地，回头再拍一张远景。",
                  "stayMinutes": 15,
                  "transport": "步行",
                  "notes": "有长椅可稍作停留。"
                },
                {
                  "id": "azabu_juban",
                  "name": "麻布十番商店街",
                  "type": "shopping_street",
                  "lat": 35.6550,
                  "lng": 139.7350,
                  "description": "一条非常安静、高档又充满生活气息的街区，沿途有许多精品咖啡馆和小店。",
                  "stayMinutes": 30,
                  "transport": "向西步行约15-20分钟",
                  "notes": "避开人潮的散步路线，如果走累了随时可以找咖啡馆坐下。"
                },
                {
                  "id": "roppongi_hills",
                  "name": "六本木之丘 & Keyakizaka",
                  "type": "tower",
                  "lat": 35.6604,
                  "lng": 139.7292,
                  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roppongi_Hills_Mori_Tower.jpg/800px-Roppongi_Hills_Mori_Tower.jpg",
                  "description": "六本木的地标。榉坂大街 (Keyakizaka) 的路灯夜景和远处的东京塔相映成辉，是经典拍照地。",
                  "stayMinutes": 45,
                  "transport": "从麻布十番上坡直达",
                  "notes": "如有精力可以登顶六本木展望台(Tokyo City View)观看无遮挡的东京夜景。"
                }
              ]
            }
          ]
        },
        {
          "date": "2026-07-24",
          "title": "东京东侧",
          "summary": "葛饰校区参观 → 押上天空树深度游 → 休闲活动 → 秋叶原暴走 → 浅草夜间散步",
          "segments": [
            {
              "id": "seg_24_1",
              "timeRange": "09:00-11:00",
              "title": "东京理科大学葛饰校区",
              "route": {
                "type": "walk",
                "points": [
                  { "name": "正门", "lat": 35.7716, "lng": 139.8626 },
                  { "name": "葛饰图书馆", "lat": 35.7718, "lng": 139.8624 },
                  { "name": "理学部1号馆", "lat": 35.7714, "lng": 139.8628 },
                  { "name": "校内庭园", "lat": 35.7715, "lng": 139.8620 }
                ]
              },
              "places": [
                {
                  "id": "katsushika_library",
                  "name": "葛饰图书馆",
                  "type": "museum",
                  "lat": 35.7718,
                  "lng": 139.8624,
                  "description": "现代化建筑，设计感极强，适合外观拍照打卡。",
                  "stayMinutes": 30,
                  "transport": "校园内步行",
                  "notes": "理科大学标志性建筑之一。"
                },
                {
                  "id": "katsushika_garden",
                  "name": "校内庭园",
                  "type": "park",
                  "lat": 35.7715,
                  "lng": 139.8620,
                  "description": "开阔的绿地与休闲区，非常适合父母放松散步。",
                  "stayMinutes": 30,
                  "transport": "步行",
                  "notes": "感受校园浓厚的学术与青春氛围。"
                },
                {
                  "id": "tus_shop",
                  "name": "纪念品店 (TUS Shop)",
                  "type": "shopping_street",
                  "lat": 35.7717,
                  "lng": 139.8625,
                  "description": "可以在这里购买东京理科大学的校徽、文具等周边纪念品。",
                  "stayMinutes": 20,
                  "transport": "步行",
                  "notes": "买点纪念品留念。"
                }
              ]
            },
            {
              "id": "seg_24_2",
              "timeRange": "11:00-12:00",
              "title": "校区附近轻量午餐",
              "route": {
                "type": "walk",
                "points": [
                  { "name": "葛饰校区", "lat": 35.7716, "lng": 139.8626 },
                  { "name": "金町站周边", "lat": 35.7680, "lng": 139.8700 }
                ]
              },
              "places": [
                {
                  "id": "hidakaya",
                  "name": "日高屋 (金町店)",
                  "type": "restaurant",
                  "lat": 35.7680,
                  "lng": 139.8700,
                  "description": "主打轻量拉面和定食。上菜快、价格实惠，分量刚好不会让人吃撑，父母接受度极高。",
                  "stayMinutes": 45,
                  "transport": "从校区步行至金町站附近",
                  "notes": "最推荐的选择，稳妥不踩雷。"
                },
                {
                  "id": "sukiya",
                  "name": "すき家",
                  "type": "restaurant",
                  "lat": 35.7682,
                  "lng": 139.8705,
                  "description": "知名牛丼连锁店。轻量、不油腻、出餐极快，适合赶时间的情境。",
                  "stayMinutes": 30,
                  "transport": "步行",
                  "notes": "可选择小碗（Mini），减轻肠胃负担。"
                },
                {
                  "id": "gusto",
                  "name": "ガスト (Gusto)",
                  "type": "restaurant",
                  "lat": 35.7685,
                  "lng": 139.8710,
                  "description": "连锁家庭餐厅，有各种沙拉、轻食，空调环境极好，适合想多坐一会儿休息。",
                  "stayMinutes": 60,
                  "transport": "步行",
                  "notes": "带饮料吧（Drink Bar），可以喝杯咖啡休息。"
                }
              ]
            },
            {
              "id": "seg_24_checkout",
              "timeRange": "12:00-14:00",
              "title": "回酒店退房 & 行李寄存东向岛",
              "route": {
                "type": "train",
                "points": [
                  { "name": "金町站", "lat": 35.7680, "lng": 139.8700 },
                  { "name": "北千住站", "lat": 35.7495, "lng": 139.8050 },
                  { "name": "南千住站", "lat": 35.7330, "lng": 139.7990 },
                  { "name": "浅草站", "lat": 35.7111, "lng": 139.7975 },
                  { "name": "过隅田川", "lat": 35.7110, "lng": 139.8020 },
                  { "name": "东京晴空塔站", "lat": 35.7105, "lng": 139.8100 },
                  { "name": "曳舟站", "lat": 35.7190, "lng": 139.8180 },
                  { "name": "东向岛站", "lat": 35.7248, "lng": 139.8188 }
                ]
              },
              "places": [
                {
                  "id": "hotel_checkout",
                  "name": "HOTEL AMANEK (退房)",
                  "type": "hotel",
                  "lat": 35.7067,
                  "lng": 139.7947,
                  "description": "返回浅草酒店退房并提取行李。",
                  "stayMinutes": 30,
                  "transport": "从金町乘坐常磐线转车至浅草",
                  "notes": "中午办理退房。"
                },
                {
                  "id": "higashi_mukojima",
                  "name": "东向岛站 (寄存行李)",
                  "type": "station",
                  "lat": 35.7248,
                  "lng": 139.8188,
                  "description": "前往东向岛站，将大件行李存入投币储物柜，以便轻装游览晴空塔。",
                  "stayMinutes": 20,
                  "transport": "从浅草乘坐东武晴空塔线至东向岛",
                  "notes": "务必保管好储物柜钥匙或存条。"
                }
              ]
            },
            {
              "id": "seg_24_3",
              "timeRange": "14:00-16:30",
              "title": "东京晴空塔深度游玩",
              "route": {
                "type": "train",
                "points": [
                  { "name": "东向岛站", "lat": 35.7248, "lng": 139.8188 },
                  { "name": "铁道转弯处", "lat": 35.7220, "lng": 139.8185 },
                  { "name": "曳舟站", "lat": 35.7190, "lng": 139.8180 },
                  { "name": "向南行驶", "lat": 35.7150, "lng": 139.8140 },
                  { "name": "晴空塔", "lat": 35.7100, "lng": 139.8107 }
                ]
              },
              "places": [
                {
                  "id": "skytree_deck",
                  "name": "天望甲板 (350m) & 天望回廊 (450m)",
                  "type": "tower",
                  "lat": 35.7100,
                  "lng": 139.8107,
                  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Tokyo_Sky_Tree_2012_May.jpg/800px-Tokyo_Sky_Tree_2012_May.jpg",
                  "description": "高达350米的观景台视野极佳（可俯瞰皇居、浅草）。450米天望回廊有更高层的玻璃步道，轻度刺激。",
                  "stayMinutes": 90,
                  "transport": "乘电梯直达",
                  "notes": "父母最适合的高度，视觉震撼但不会太累。"
                },
                {
                  "id": "skytree_starbucks",
                  "name": "Skytree Starbucks",
                  "type": "restaurant",
                  "lat": 35.7101,
                  "lng": 139.8108,
                  "description": "位于中层商场的星巴克，有靠窗座位，非常适合下塔后补充体力。",
                  "stayMinutes": 30,
                  "transport": "位于商场内",
                  "notes": "推荐抹茶拿铁或季节限定饮品。父母可以在这里坐着休息。"
                },
                {
                  "id": "solamachi",
                  "name": "Solamachi 商场深度逛",
                  "type": "mall",
                  "lat": 35.7102,
                  "lng": 139.8110,
                  "description": "塔下的超大型商业设施。内有 Pokemon Center、无印良品、LOFT 和日本伴手礼区。",
                  "stayMinutes": 60,
                  "transport": "位于塔下",
                  "notes": "年轻人可以去暴走扫货，父母在商场内休息。"
                }
              ]
            },
            {
              "id": "seg_24_4",
              "timeRange": "16:30-18:00",
              "title": "天空树周边休闲活动",
              "route": {
                "type": "walk",
                "points": [
                  { "name": "晴空塔出口", "lat": 35.7100, "lng": 139.8107 },
                  { "name": "源森桥", "lat": 35.7110, "lng": 139.8060 },
                  { "name": "沿河步道东", "lat": 35.7115, "lng": 139.8058 },
                  { "name": "隅田川公园南段", "lat": 35.7120, "lng": 139.8056 },
                  { "name": "隅田川公园中段", "lat": 35.7125, "lng": 139.8055 },
                  { "name": "隅田川河岸", "lat": 35.7130, "lng": 139.8055 },
                  { "name": "向东折返", "lat": 35.7130, "lng": 139.8080 },
                  { "name": "浅草通交叉口", "lat": 35.7125, "lng": 139.8100 },
                  { "name": "押上站西侧", "lat": 35.7120, "lng": 139.8110 },
                  { "name": "押上咖啡店", "lat": 35.7115, "lng": 139.8120 }
                ]
              },
              "places": [
                {
                  "id": "sumida_riverside",
                  "name": "隅田川河岸散步",
                  "type": "park",
                  "lat": 35.7130,
                  "lng": 139.8055,
                  "description": "距离天空树步行 5-8 分钟。河岸风非常舒服，可以拍到晴空塔倒影。",
                  "stayMinutes": 60,
                  "transport": "从晴空塔步行即可",
                  "notes": "最推荐的休闲方式！完全不累，父母可以坐在长椅上吹风休息。"
                },
                {
                  "id": "be_a_good_neighbor",
                  "name": "BE A GOOD NEIGHBOR COFFEE",
                  "type": "restaurant",
                  "lat": 35.7115,
                  "lng": 139.8120,
                  "description": "押上站附近的文青风咖啡店，咖啡好喝，座位舒适。",
                  "stayMinutes": 45,
                  "transport": "从晴空塔步行",
                  "notes": "如果在外面嫌热，这里是完美的避暑点。"
                },
                {
                  "id": "postal_museum",
                  "name": "邮政博物馆 (Postal Museum)",
                  "type": "museum",
                  "lat": 35.7103,
                  "lng": 139.8115,
                  "description": "位于 Solamachi 内。展示日本邮政历史，空调充足，安静且不累。",
                  "stayMinutes": 45,
                  "transport": "就在商场内部",
                  "notes": "门票仅约 300 左右，有趣且小众的打发时间地点。"
                }
              ]
            },
            {
              "id": "seg_24_5",
              "timeRange": "18:00-20:00",
              "title": "秋叶原暴走 & 晚餐",
              "route": {
                "type": "train",
                "points": [
                  { "name": "押上站", "lat": 35.7110, "lng": 139.8130 },
                  { "name": "本所吾妻桥", "lat": 35.7085, "lng": 139.8015 },
                  { "name": "浅草站地下", "lat": 35.7100, "lng": 139.7970 },
                  { "name": "藏前站", "lat": 35.7035, "lng": 139.7910 },
                  { "name": "浅草桥站", "lat": 35.6975, "lng": 139.7850 },
                  { "name": "总武线过河", "lat": 35.6978, "lng": 139.7800 },
                  { "name": "秋叶原站外", "lat": 35.6980, "lng": 139.7750 },
                  { "name": "秋叶原站", "lat": 35.6983, "lng": 139.7731 },
                  { "name": "电器街南", "lat": 35.6985, "lng": 139.7720 },
                  { "name": "电器街", "lat": 35.6990, "lng": 139.7710 }
                ]
              },
              "places": [
                {
                  "id": "yodobashi_akiba",
                  "name": "Yodobashi Camera & Bic Camera",
                  "type": "mall",
                  "lat": 35.6985,
                  "lng": 139.7745,
                  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Yodobashi-Akiba.jpg/800px-Yodobashi-Akiba.jpg",
                  "description": "全品类电器天堂。Yodobashi 的模型区极强，Bic Camera 则适合深度淘宝。",
                  "stayMinutes": 60,
                  "transport": "秋叶原站旁",
                  "notes": "这里足够大，父母也有地方坐着休息。"
                },
                {
                  "id": "anime_shops",
                  "name": "Animate & Mandarake",
                  "type": "shopping_street",
                  "lat": 35.7005,
                  "lng": 139.7705,
                  "description": "动漫爱好者的圣地。Animate 涵盖新番周边，Mandarake 则是淘中古手办的宝库，还可以去 Super Potato 看看复古游戏。",
                  "stayMinutes": 60,
                  "transport": "沿电器街主干道步行",
                  "notes": "纯血二次元暴走时间。"
                },
                {
                  "id": "ootoya_akiba",
                  "name": "大户屋 (晚餐推荐)",
                  "type": "restaurant",
                  "lat": 35.6988,
                  "lng": 139.7725,
                  "description": "极度稳妥的日式定食屋。健康、轻量、不踩雷，父母一定会满意的晚餐。",
                  "stayMinutes": 45,
                  "transport": "步行",
                  "notes": "如果想换口味，秋叶原也有一兰拉面或 CoCo 咖喱可选。"
                }
              ]
            },
            {
              "id": "seg_24_6",
              "timeRange": "20:00-21:30",
              "title": "秋叶原 → 浅草夜间散步",
              "route": {
                "type": "walk",
                "points": [
                  { "name": "秋叶原", "lat": 35.6983, "lng": 139.7731 },
                  { "name": "和泉桥", "lat": 35.6980, "lng": 139.7760 },
                  { "name": "清洲桥通", "lat": 35.6978, "lng": 139.7800 },
                  { "name": "浅草桥", "lat": 35.6975, "lng": 139.7850 },
                  { "name": "柳桥", "lat": 35.6970, "lng": 139.7880 },
                  { "name": "藏前桥向北", "lat": 35.7000, "lng": 139.7900 },
                  { "name": "厩桥", "lat": 35.7040, "lng": 139.7910 },
                  { "name": "隅田川夜景", "lat": 35.7050, "lng": 139.7915 },
                  { "name": "驹形桥", "lat": 35.7080, "lng": 139.7950 },
                  { "name": "雷门通", "lat": 35.7100, "lng": 139.7955 },
                  { "name": "雷门", "lat": 35.7111, "lng": 139.7964 }
                ]
              },
              "places": [
                {
                  "id": "asakusa_night_walk",
                  "name": "隅田川 & 雷门夜景",
                  "type": "temple",
                  "lat": 35.7111,
                  "lng": 139.7964,
                  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kaminarimon_in_daytime.jpg/800px-Kaminarimon_in_daytime.jpg",
                  "description": "从秋叶原一路步行过浅草桥，沿着隅田川欣赏桥梁夜景，最后来到夜晚亮灯的雷门与浅草寺。",
                  "stayMinutes": 90,
                  "transport": "全程步行",
                  "notes": "夜晚的浅草寺几乎没有游客，非常宁静舒服，是极佳的夜间参拜体验。"
                }
              ]
            },
            {
              "id": "seg_24_7",
              "timeRange": "21:30-24:15",
              "title": "前往东京站乘坐夜行巴士前往大阪",
              "route": {
                "type": "train",
                "points": [
                  { "name": "浅草站", "lat": 35.7111, "lng": 139.7975 },
                  { "name": "过隅田川", "lat": 35.7110, "lng": 139.8020 },
                  { "name": "东京晴空塔站", "lat": 35.7105, "lng": 139.8100 },
                  { "name": "曳舟站", "lat": 35.7190, "lng": 139.8180 },
                  { "name": "东向岛站", "lat": 35.7248, "lng": 139.8188 },
                  { "name": "返回曳舟", "lat": 35.7190, "lng": 139.8180 },
                  { "name": "押上地下", "lat": 35.7110, "lng": 139.8130 },
                  { "name": "锦丝町", "lat": 35.6965, "lng": 139.8140 },
                  { "name": "马喰町", "lat": 35.6930, "lng": 139.7820 },
                  { "name": "新日本桥", "lat": 35.6880, "lng": 139.7720 },
                  { "name": "东京站八重洲地下", "lat": 35.6816, "lng": 139.7695 }
                ]
              },
              "places": [
                {
                  "id": "higashi_mukojima_pickup",
                  "name": "东向岛站 (取行李)",
                  "type": "station",
                  "lat": 35.7248,
                  "lng": 139.8188,
                  "description": "从浅草前往东向岛站，取出白天寄存的行李。",
                  "stayMinutes": 20,
                  "transport": "乘坐东武线",
                  "notes": "取回行李后，准备前往东京站乘车。"
                },
                {
                  "id": "tokyo_yaesu_bus",
                  "name": "バスターミナル東京八重洲地下A",
                  "type": "station",
                  "lat": 35.6816,
                  "lng": 139.7695,
                  "description": "【夜行巴士前往大阪】23:30 到达东京站八重洲北口 トフロムヤエスタワー B1F。<br/>乗車場所案内：<a href='https://www.busnoru.jp/ride1378' target='_blank'>乘车点地图</a><br/>降車場所：難波OCAT（湊町バスターミナル）<br/>到着予定時刻：25日07時50分頃",
                  "stayMinutes": 45,
                  "transport": "携行李前往巴士站，23:30到达，24日24:15出发（集合时间24:00）。",
                  "notes": "务必提前到达，以免错过夜班车。可以在车上休息，次日早上到达大阪难波。"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "osaka",
      "name": "大阪（7/25–26）",
      "days": [] // 占位，等待后续数据
    }
  ]
};

// --- 2. 状态管理 (State) ---
let map;
let markersLayer;
let routesLayer;

let state = {
  currentTripId: tripsData.trips[0].id,
  currentDate: tripsData.trips[0].days[0]?.date,
  currentSegmentId: null // null 表示显示全天
};

// 保存生成的 Marker 实例，方便点击定位时使用
let markerInstances = {};

// --- 3. 初始化 (Initialization) ---
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  populateTripSelector();
  initMobileInteractions();
  renderUI();
});

// 移动端交互事件
function initMobileInteractions() {
  const mask = document.getElementById('mobile-mask');
  const sidebarLeft = document.getElementById('sidebar-left');
  const sidebarRight = document.getElementById('sidebar-right');
  const fabSchedule = document.getElementById('fab-schedule');
  const fabDetails = document.getElementById('fab-details');
  const closeLeftBtn = document.getElementById('close-left-btn');

  function closeAll() {
    sidebarLeft.classList.remove('active');
    sidebarRight.classList.remove('active');
    mask.classList.remove('active');
  }

  if (mask) mask.addEventListener('click', closeAll);
  if (closeLeftBtn) closeLeftBtn.addEventListener('click', closeAll);

  if (fabSchedule) {
    fabSchedule.addEventListener('click', () => {
      closeAll();
      sidebarLeft.classList.add('active');
      mask.classList.add('active');
    });
  }

  if (fabDetails) {
    fabDetails.addEventListener('click', () => {
      closeAll();
      sidebarRight.classList.add('active');
      mask.classList.add('active');
    });
  }
  
  // Expose closeAll for use when clicking a segment
  window.closeMobilePanels = closeAll;
}

function initMap() {
  // 初始化 Leaflet 地图，默认中心在东京
  map = L.map('map', {
    zoomControl: false // 将重置缩放控件位置
  }).setView([35.6895, 139.6917], 11);

  L.control.zoom({
    position: 'bottomright'
  }).addTo(map);

  // 使用更现代、干净的底图 (CartoDB Positron)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  markersLayer = L.layerGroup().addTo(map);
  routesLayer = L.layerGroup().addTo(map);
}

// --- 4. 数据提取辅助函数 ---
function getCurrentTrip() {
  return tripsData.trips.find(t => t.id === state.currentTripId);
}

function getCurrentDay() {
  const trip = getCurrentTrip();
  if (!trip || !trip.days) return null;
  return trip.days.find(d => d.date === state.currentDate);
}

// --- 5. 渲染 UI (Render Logic) ---

// 填充顶部下拉框
function populateTripSelector() {
  const selector = document.getElementById('trip-selector');
  selector.innerHTML = '';
  tripsData.trips.forEach(trip => {
    const option = document.createElement('option');
    option.value = trip.id;
    option.textContent = trip.name;
    selector.appendChild(option);
  });

  selector.addEventListener('change', (e) => {
    state.currentTripId = e.target.value;
    const trip = getCurrentTrip();
    state.currentDate = trip.days.length > 0 ? trip.days[0].date : null;
    state.currentSegmentId = null;
    renderUI();
  });
}

// 主渲染函数
function renderUI() {
  renderSidebarLeft();
  renderSidebarRight();
  renderMapData();
}

// 渲染左侧日期列表
function renderSidebarLeft() {
  const daysList = document.getElementById('days-list');
  daysList.innerHTML = '';
  const trip = getCurrentTrip();

  if (!trip || trip.days.length === 0) {
    daysList.innerHTML = '<p style="color: #64748b; text-align: center; margin-top: 20px;">暂无行程数据</p>';
    return;
  }

  trip.days.forEach(day => {
    const isDayActive = day.date === state.currentDate;

    const card = document.createElement('div');
    card.className = `day-card ${isDayActive ? 'active' : ''}`;

    // 日期与标题
    card.innerHTML = `
              <div class="day-date">${formatDate(day.date)}</div>
              <div class="day-title">${day.title}</div>
              <div class="day-summary">${day.summary || ''}</div>
          `;

    // 如果该天被选中，且有 segments，则渲染时间段
    if (isDayActive && day.segments && day.segments.length > 0) {
      const segList = document.createElement('div');
      segList.className = 'segments-list';

      // 添加一个“全天”选项
      const allDayEl = document.createElement('div');
      allDayEl.className = `segment-item ${state.currentSegmentId === null ? 'active' : ''}`;
      allDayEl.textContent = '查看全天路线';
      allDayEl.addEventListener('click', (e) => {
        e.stopPropagation();
        state.currentSegmentId = null;
        renderUI();
        if (window.innerWidth <= 768 && window.closeMobilePanels) window.closeMobilePanels();
      });
      segList.appendChild(allDayEl);

      // 遍历具体时间段
      day.segments.forEach(seg => {
        const segEl = document.createElement('div');
        segEl.className = `segment-item ${state.currentSegmentId === seg.id ? 'active' : ''}`;
        segEl.innerHTML = `<span class="segment-time">${seg.timeRange}</span> <span class="segment-title">${seg.title}</span>`;
        segEl.addEventListener('click', (e) => {
          e.stopPropagation();
          state.currentSegmentId = seg.id;
          renderUI();
          if (window.innerWidth <= 768 && window.closeMobilePanels) window.closeMobilePanels();
        });
        segList.appendChild(segEl);
      });

      card.appendChild(segList);
    }

    // 点击卡片切换日期
    card.addEventListener('click', () => {
      if (state.currentDate !== day.date) {
        state.currentDate = day.date;
        state.currentSegmentId = null; // 切换日期时默认看全天
        renderUI();
      }
    });

    daysList.appendChild(card);
  });
}

// 渲染右侧详情面板
function renderSidebarRight() {
  const overviewPanel = document.getElementById('overview-panel');
  const placesList = document.getElementById('places-list');

  const day = getCurrentDay();

  if (!day) {
    overviewPanel.innerHTML = `
              <div class="empty-state">
                  <i class="fa-solid fa-route"></i>
                  <p>请在左侧选择一天以查看详情</p>
              </div>`;
    placesList.innerHTML = '';
    return;
  }

  // 提取要显示的 places (全天或特定时间段)
  let displayPlaces = [];
  if (state.currentSegmentId) {
    const seg = day.segments.find(s => s.id === state.currentSegmentId);
    if (seg && seg.places) displayPlaces = displayPlaces.concat(seg.places);
  } else {
    day.segments.forEach(seg => {
      if (seg.places) displayPlaces = displayPlaces.concat(seg.places);
    });
  }

  // 渲染概览
  overviewPanel.innerHTML = `
          <h3 class="overview-title">${day.title}</h3>
          <p class="overview-desc">${day.summary}</p>
          <div class="stats-container">
              <div class="stat-item"><i class="fa-solid fa-location-dot"></i> 共 ${displayPlaces.length} 个地点</div>
          </div>
      `;

  // 渲染地点列表
  placesList.innerHTML = '';
  if (displayPlaces.length === 0) {
    placesList.innerHTML = '<p style="color: #64748b; text-align: center;">该时间段暂无地点信息</p>';
    return;
  }

  displayPlaces.forEach(place => {
    const wrapper = document.createElement('div');
    wrapper.className = `place-card-wrapper type-${place.type || 'default'}`;
    wrapper.innerHTML = `<div class="timeline-dot"></div>`;

    const pCard = document.createElement('div');
    pCard.className = 'place-card collapsible';
    pCard.id = `place-card-${place.id}`;

    let metaHtml = '';
    if (place.stayMinutes) {
      metaHtml += `<div class="meta-item"><i class="fa-regular fa-clock"></i> 建议停留约 ${place.stayMinutes} 分钟</div>`;
    }
    if (place.transport) {
      metaHtml += `<div class="meta-item"><i class="fa-solid fa-train-subway"></i> ${place.transport}</div>`;
    }

    let notesHtml = '';
    if (place.notes) {
      notesHtml = `<div class="place-notes"><i class="fa-solid fa-circle-info"></i> ${place.notes}</div>`;
    }

    let imageHtml = '';
    if (place.imageUrl) {
      imageHtml = `
                  <div class="place-image-container">
                      <img src="${place.imageUrl}" alt="${place.name}" class="place-image" loading="lazy">
                  </div>
              `;
    }

    pCard.innerHTML = `
              <div class="place-header-toggle" onclick="togglePlaceCard('${place.id}')">
                  <div class="place-title-area">
                      <div class="place-name">${place.name}</div>
                      <div class="place-type">${formatPlaceType(place.type)}</div>
                  </div>
                  <i class="fa-solid fa-chevron-down toggle-icon"></i>
              </div>
              <div class="place-details">
                  ${imageHtml}
                  <div class="place-desc">${place.description}</div>
                  <div class="place-meta">
                      ${metaHtml}
                  </div>
                  ${notesHtml}
                  <button class="btn-locate" onclick="focusOnPlace('${place.id}', ${place.lat}, ${place.lng})">
                      <i class="fa-solid fa-location-crosshairs"></i> 在地图中定位
                  </button>
              </div>
          `;
    wrapper.appendChild(pCard);
    placesList.appendChild(wrapper);
  });
}

// 展开/收起卡片
window.togglePlaceCard = function (placeId) {
  const card = document.getElementById(`place-card-${placeId}`);
  if (card) {
    card.classList.toggle('expanded');
  }
};

// 渲染地图上的点和线
function renderMapData() {
  // 清空现有图层
  markersLayer.clearLayers();
  routesLayer.clearLayers();
  markerInstances = {};

  const day = getCurrentDay();
  if (!day) return;

  let bounds = L.latLngBounds();
  let hasData = false;

  // 决定渲染哪些段
  const segmentsToRender = state.currentSegmentId
    ? day.segments.filter(s => s.id === state.currentSegmentId)
    : day.segments;

  segmentsToRender.forEach(seg => {
    // 1. 绘制路线
    if (seg.route && seg.route.points && seg.route.points.length > 1) {
      const latlngs = seg.route.points.map(p => [p.lat, p.lng]);

      // 路线样式设置
      let routeStyle = { color: 'var(--route-walk)', weight: 4, opacity: 0.8, dashArray: null };
      let transportName = '步行';

      if (seg.route.type === 'train') {
        routeStyle = { color: 'var(--route-train)', weight: 4, opacity: 0.8, dashArray: '5, 10' };
        transportName = '电车 / 地铁';
      } else if (seg.route.type === 'bus') {
        routeStyle = { color: 'var(--route-bus)', weight: 5, opacity: 0.8 };
        transportName = '巴士';
      } else if (seg.route.type === 'night-bus') {
        routeStyle = { color: '#8b5cf6', weight: 6, opacity: 0.9 };
        transportName = '夜间巴士';
      }

      const polyline = L.polyline(latlngs, routeStyle).addTo(routesLayer);

      // 添加 Tooltip
      const startPoint = seg.route.points[0].name;
      const endPoint = seg.route.points[seg.route.points.length - 1].name;
      polyline.bindTooltip(
        `<b>${startPoint} ➔ ${endPoint}</b><br><span style="color:#666;">${transportName}</span>`,
        { sticky: true, className: 'route-tooltip' }
      );

      bounds.extend(polyline.getBounds());
      hasData = true;
    }

    // 2. 绘制地点 Marker
    if (seg.places && seg.places.length > 0) {
      seg.places.forEach(place => {
        // 创建自定义图标
        const iconHtml = `<div class="custom-map-marker" id="marker-icon-${place.id}"><i class="${getIconClassForType(place.type)}"></i></div>`;
        const customIcon = L.divIcon({
          html: iconHtml,
          className: 'custom-div-icon',
          iconSize: [32, 32],
          iconAnchor: [16, 16]
        });

        const marker = L.marker([place.lat, place.lng], { icon: customIcon }).addTo(markersLayer);

        // Marker 交互
        marker.bindTooltip(`<b>${place.name}</b>`, { direction: 'top', offset: [0, -10] });

        marker.on('click', () => {
          // 滚动右侧栏到对应卡片
          const card = document.getElementById(`place-card-${place.id}`);
          if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // 高亮动画
            document.querySelectorAll('.place-card').forEach(c => c.classList.remove('highlight'));
            card.classList.add('highlight');
            setTimeout(() => card.classList.remove('highlight'), 2000);
          }
          focusOnPlace(place.id, place.lat, place.lng, false);
        });

        markerInstances[place.id] = marker;
        bounds.extend([place.lat, place.lng]);
        hasData = true;
      });
    }
  });

  // 缩放地图以适应所有点
  if (hasData) {
    const isMobile = window.innerWidth <= 768;
    // Calculate padding dynamically based on screen size so sidebars don't cover the route
    const paddingOpts = isMobile 
        ? { paddingTopLeft: [20, 20], paddingBottomRight: [20, window.innerHeight * 0.4] } 
        : { paddingTopLeft: [360, 40], paddingBottomRight: [420, 40] };
        
    map.flyToBounds(bounds, { ...paddingOpts, maxZoom: 16, duration: 1.2 });
  }
}

// --- 6. 工具函数 ---

// 在地图上居中并放大某地点
window.focusOnPlace = function (placeId, lat, lng, panOnly = false) {
  if (window.innerWidth <= 768 && window.closeMobilePanels && !panOnly) {
      window.closeMobilePanels(); // Mobile: close details panel to show map
  }

  map.flyTo([lat, lng], 17, { animate: true, duration: 1 });

  // 高亮 marker 效果
  document.querySelectorAll('.custom-map-marker').forEach(el => el.classList.remove('highlight-marker'));
  const markerEl = document.getElementById(`marker-icon-${placeId}`);
  if (markerEl) {
    markerEl.classList.add('highlight-marker');
  }
};

// 格式化日期显示
function formatDate(dateString) {
  const d = new Date(dateString);
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return `${month}月${day}日`;
}

// 地点类型翻译
function formatPlaceType(type) {
  const types = {
    'temple': '寺院/神社',
    'shopping_street': '商店街',
    'park': '公园',
    'tower': '展望台/塔',
    'museum': '博物馆/美术馆',
    'mall': '购物中心',
    'restaurant': '餐饮美食',
    'airport': '机场',
    'hotel': '酒店'
  };
  return types[type] || '推荐地点';
}

// 获取类型对应的图标
function getIconClassForType(type) {
  const icons = {
    'temple': 'fa-solid fa-torii-gate',
    'shopping_street': 'fa-solid fa-store',
    'park': 'fa-solid fa-tree',
    'tower': 'fa-solid fa-tower-broadcast',
    'museum': 'fa-solid fa-building-columns',
    'mall': 'fa-solid fa-bag-shopping',
    'restaurant': 'fa-solid fa-utensils',
    'airport': 'fa-solid fa-plane-arrival',
    'hotel': 'fa-solid fa-bed'
  };
  return icons[type] || 'fa-solid fa-location-dot';
}
