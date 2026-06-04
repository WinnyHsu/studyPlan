import { StudyPlanDay } from "@/types";

// ─── 週一~五 120分鐘；週六日 180分鐘 ───────────────────────────

export const STUDY_PLAN: StudyPlanDay[] = [

  // ═══════════════════════════════════════════════════════
  // WEEK 1：基礎幾何、向量與直線運動
  // ═══════════════════════════════════════════════════════
  {id:"w1mon",week:1,dayOfWeek:"monday",stage:1,
   mathTopic:"國中幾何、畢氏定理",
   mathDetail:"📌 懶人包\n• 三角形面積 = 底×高÷2\n• 畢氏定理：a²+b²=c²（直角三角形）\n• 特殊比：3-4-5、5-12-13 要背起來\n• 練習：已知兩股求斜邊，已知斜邊+一股求另一股",
   physicsTopic:"基礎單位換算",
   physicsDetail:"📌 懶人包\n• 1 knot = 1.852 km/h\n• 1 nm（海浬）= 1.852 km\n• 1 ft = 0.3048 m（考試常用：1000 ft ≈ 300 m）\n• 練習：120 knots → km/h；5000 ft → m",
   keyFormulas:["a²+b²=c²","1 knot=1.852 km/h","1 ft≈0.3048 m"]},

  {id:"w1tue",week:1,dayOfWeek:"tuesday",stage:1,
   mathTopic:"相似形與比例觀念",
   mathDetail:"📌 懶人包\n• 相似三角形條件：AA / SAS / SSS\n• 對應邊成比例，面積比 = 邊長比²\n• 內角和 180°，外角 = 兩遠內角和\n• 練習：給兩相似△，求未知邊長",
   physicsTopic:"直線運動基本定義",
   physicsDetail:"📌 懶人包\n• 位移（向量）≠ 路徑長（純量）\n• 平均速度 v = Δx / Δt\n• 來回一圈：位移可能為 0，路徑長不為 0\n• 練習：飛機 A→B→A，位移與路徑長各為何",
   keyFormulas:["v=Δx/Δt","位移≠路徑長"]},

  {id:"w1wed",week:1,dayOfWeek:"wednesday",stage:1,
   mathTopic:"幾何與相似形綜合練習",
   mathDetail:"📌 懶人包\n• 混合題：畢氏 + 相似形比例\n• 每題目標 3 分鐘內\n• 做完立刻對答案，標記錯題",
   physicsTopic:"加速度運動與 v-t 圖、x-t 圖",
   physicsDetail:"📌 懶人包\n• x-t 圖斜率 = 速度，水平線 = 靜止\n• v-t 圖斜率 = 加速度，面積 = 位移\n• a = Δv / Δt\n• 練習：看圖說故事，判斷運動狀態",
   keyFormulas:["a=Δv/Δt","v-t面積=位移","x-t斜率=速度"]},

  {id:"w1thu",week:1,dayOfWeek:"thursday",stage:1,
   mathTopic:"幾何基礎題型錯誤檢討",
   mathDetail:"📌 懶人包\n• 把週一~三所有錯題重新手算一遍\n• 找出錯因：計算失誤 or 觀念不清\n• 觀念不清的：重看定義 → 自己造一題",
   physicsTopic:"等加速度三大公式推導與手算",
   physicsDetail:"📌 懶人包\n• ① v = v₀ + at\n• ② x = v₀t + ½at²\n• ③ v² = v₀² + 2ax\n• 從 a=Δv/Δt 親自推導一遍，不要死背\n• 練習：v₀=0, a=3m/s², 求 100m 後速度",
   keyFormulas:["v=v₀+at","x=v₀t+½at²","v²=v₀²+2ax"]},

  {id:"w1fri",week:1,dayOfWeek:"friday",stage:1,
   mathTopic:"本週數學弱點總複習",
   mathDetail:"📌 懶人包\n• 整理本週公式卡（畢氏+相似形）\n• 限時 20 分鐘做 10 題混合題\n• 重算所有標記過的錯題",
   physicsTopic:"本週物理錯題重算與概念統整",
   physicsDetail:"📌 懶人包\n• 三大公式：題目給哪三個量，選對應公式\n• 單位統一：全部用 m、s、m/s\n• 做 3 題航空情境題收尾",
   keyFormulas:["三大等加速度公式","1 knot=1.852 km/h"]},

  {id:"w1sat",week:1,dayOfWeek:"saturday",stage:1,
   mathTopic:"週六加強：幾何綜合大演練（3小時）",
   mathDetail:"📌 懶人包\n• 上午 60min：做 15 題幾何計算（畢氏+相似形）\n• 下午 60min：做 15 題直線運動應用題\n• 最後 30min：錯題分析 + 整理公式卡\n• 全程不用計算機，每題目標 2 分鐘",
   physicsTopic:"週六加強：直線運動綜合計算",
   physicsDetail:"📌 懶人包\n• 三大公式混合 15 題\n• 航空情境：飛機加速起飛、降落減速\n• 減速時 a 為負，方向要注意\n• 練習：v₀=60m/s, a=-3m/s², 求停止距離",
   keyFormulas:["三大等加速度公式","全週公式整合"]},

  {id:"w1sun",week:1,dayOfWeek:"sunday",stage:1,
   mathTopic:"週日複習：錯題本全面檢討（3小時）",
   mathDetail:"📌 懶人包\n• 翻開本週所有錯題，重新作答（不看答案）\n• 還是錯的：標記 ★，下週一定要再看\n• 整理本週公式卡並默背一遍\n• 預覽下週主題：直線方程式+牛頓定律",
   physicsTopic:"週日複習：物理觀念整合",
   physicsDetail:"📌 懶人包\n• 用自己的話解釋：位移、速度、加速度定義\n• 畫一個 v-t 圖說出圖形意義\n• 換算複習：5000 ft=?m；250 knots=?km/h\n• 預覽：牛頓第一定律",
   keyFormulas:["本週所有公式","預習：F=ma"]},

  // ═══════════════════════════════════════════════════════
  // WEEK 2：直線方程式與牛頓前兩大運動定律
  // ═══════════════════════════════════════════════════════
  {id:"w2mon",week:2,dayOfWeek:"monday",stage:1,
   mathTopic:"直線方程式、斜率定義",
   mathDetail:"📌 懶人包\n• 斜率 m = (y₂-y₁)/(x₂-x₁)\n• 斜截式：y = mx + b（b 為 y 截距）\n• 水平線斜率=0，垂直線斜率=無定義\n• 練習：兩點(1,2)(3,6)求直線方程式",
   physicsTopic:"牛頓第一運動定律（慣性定律）",
   physicsDetail:"📌 懶人包\n• 合力=0 → 靜止 or 等速直線運動\n• 質量越大，慣性越大\n• 航空：平飛時推力=阻力、升力=重力\n• 練習：判斷以下情況合力是否為零",
   keyFormulas:["m=(y₂-y₁)/(x₂-x₁)","y=mx+b","合力=0→等速or靜止"]},

  {id:"w2tue",week:2,dayOfWeek:"tuesday",stage:1,
   mathTopic:"平面兩點距離公式、中點公式",
   mathDetail:"📌 懶人包\n• 距離：d = √((x₂-x₁)²+(y₂-y₁)²)\n• 中點：M = ((x₁+x₂)/2, (y₁+y₂)/2)\n• 練習：A(1,0) B(4,4)，求距離和中點",
   physicsTopic:"牛頓第二運動定律",
   physicsDetail:"📌 懶人包\n• F = ma（合力=質量×加速度）\n• a 方向與合力方向相同\n• 單位：N = kg·m/s²\n• 航空：飛機爬升時升力>重力 → 向上加速\n• 練習：1000kg 飛機，合力 500N，求 a",
   keyFormulas:["d=√(Δx²+Δy²)","F=ma","1N=1kg·m/s²"]},

  {id:"w2wed",week:2,dayOfWeek:"wednesday",stage:1,
   mathTopic:"直線方程式綜合題演練",
   mathDetail:"📌 懶人包\n• 平行：m₁=m₂；垂直：m₁×m₂=-1\n• 點到直線距離：d=|ax₀+by₀+c|/√(a²+b²)\n• 做 10 題直線方程式綜合計算",
   physicsTopic:"摩擦力",
   physicsDetail:"📌 懶人包\n• 靜摩擦力：0 ≤ f ≤ μₛN（隨外力調整）\n• 最大靜摩擦：fₛmax = μₛN\n• 動摩擦力：fₖ = μₖN（固定值），μₖ < μₛ\n• 跑道摩擦力影響飛機起降距離！\n• 練習：μₖ=0.3, N=5000N，求動摩擦力",
   keyFormulas:["fₛmax=μₛN","fₖ=μₖN","平行m₁=m₂","垂直m₁m₂=-1"]},

  {id:"w2thu",week:2,dayOfWeek:"thursday",stage:1,
   mathTopic:"直線題型錯題檢討",
   mathDetail:"📌 懶人包\n• 整理週一~三直線方程式錯題\n• 特別注意：截距定義不要混淆\n• 重算點到直線距離公式至少 3 題",
   physicsTopic:"重力與地心加速度計算",
   physicsDetail:"📌 懶人包\n• W = mg，g = 9.8 m/s²（考試取 10）\n• 自由落體：v = gt，h = ½gt²\n• 練習：5000kg 飛機重量幾 N？從 100m 落下幾秒？",
   keyFormulas:["W=mg","g≈10m/s²","自由落體h=½gt²"]},

  {id:"w2fri",week:2,dayOfWeek:"friday",stage:1,
   mathTopic:"本週數學公式統整與複習",
   mathDetail:"📌 懶人包\n• 整理直線方程式公式卡\n• 5 題計時速算（斜率/距離/中點）\n• 斜率公式不要代錯順序",
   physicsTopic:"F=ma 與摩擦力綜合題演練",
   physicsDetail:"📌 懶人包\n• 步驟：①畫受力圖 ②列方程式 ③代數字\n• 練習：水平地面推 1000N 物體，μₖ=0.2，求 a",
   keyFormulas:["F=ma","fₖ=μₖN","W=mg"]},

  {id:"w2sat",week:2,dayOfWeek:"saturday",stage:1,
   mathTopic:"週六加強：直線方程式大題演練（3小時）",
   mathDetail:"📌 懶人包\n• 上午 60min：15 題直線方程式（斜率/距離/截距混合）\n• 下午 60min：10 題 F=ma 與摩擦力混合題\n• 最後 30min：錯題整理\n• 全程計時，目標每題 2 分鐘",
   physicsTopic:"週六加強：牛頓定律綜合計算",
   physicsDetail:"📌 懶人包\n• 連續體問題：兩物體相連\n• 重力+摩擦力+F=ma 綜合\n• 定好正方向，不要混",
   keyFormulas:["本週所有公式整合"]},

  {id:"w2sun",week:2,dayOfWeek:"sunday",stage:1,
   mathTopic:"週日複習：週一~五錯題本重算（3小時）",
   mathDetail:"📌 懶人包\n• 不看解答，重新作答所有標記錯題\n• 還是錯的：找影片或問人\n• 預覽下週：平面向量定義",
   physicsTopic:"週日複習：牛頓三定律預習",
   physicsDetail:"📌 懶人包\n• 複習：第一（慣性）、第二（F=ma）\n• 預習：第三定律——作用力與反作用力\n• 思考：火箭如何利用第三定律升空",
   keyFormulas:["預習：F₁₂=-F₂₁"]},

  // ═══════════════════════════════════════════════════════
  // WEEK 3：平面向量與牛頓第三定律
  // ═══════════════════════════════════════════════════════
  {id:"w3mon",week:3,dayOfWeek:"monday",stage:1,
   mathTopic:"平面向量基本定義、加減法",
   mathDetail:"📌 懶人包\n• 向量有大小和方向（≠ 純量）\n• 加法：平行四邊形法 / 三角形法\n• 減法：→a - →b = →a + (-→b)\n• 練習：→a=(3,4), →b=(1,-2)，求 →a+→b、→a-→b",
   physicsTopic:"牛頓第三運動定律",
   physicsDetail:"📌 懶人包\n• 大小相等、方向相反、作用在不同物體\n• 不能把作用力和反作用力畫在同一物體！\n• 航空：噴氣（作用力）→ 飛機前進（反作用力）\n• 練習：列出飛機停在地面時所有作用-反作用對",
   keyFormulas:["→a+→b（平行四邊形）","F₁₂=-F₂₁","作用在不同物體"]},

  {id:"w3tue",week:3,dayOfWeek:"tuesday",stage:1,
   mathTopic:"向量內積公式與幾何意義",
   mathDetail:"📌 懶人包\n• 內積：→a·→b = |a||b|cosθ\n• 座標公式：→a·→b = x₁x₂ + y₁y₂\n• 內積=0 ⟺ 兩向量垂直\n• 練習：→a=(3,4), →b=(4,-3)，求內積，是否垂直？",
   physicsTopic:"向量力分解（斜面受力分析）",
   physicsDetail:"📌 懶人包\n• 重力沿斜面分解：\n  ↘ 平行斜面（向下）：mg sinθ\n  ↘ 垂直斜面（向內）：mg cosθ\n• 法向力 N = mg cosθ\n• 練習：θ=30°, m=1000kg，求斜面各分力",
   keyFormulas:["→a·→b=|a||b|cosθ","→a·→b=x₁x₂+y₁y₂","斜面mgsinθ / mgcosθ"]},

  {id:"w3wed",week:3,dayOfWeek:"wednesday",stage:1,
   mathTopic:"向量正射影計算（航向修正應用）",
   mathDetail:"📌 懶人包\n• →a 在 →b 方向的正射影 = (→a·→b)/|→b|\n• 航空實用：側風向量投影到航向 → 順/逆風分量\n• 練習：風速(4,3)，航向(0,1)，求順風分量",
   physicsTopic:"斜面受力與摩擦力綜合應用",
   physicsDetail:"📌 懶人包\n• 靜止斜面：mg sinθ = f\n• 加速下滑：ma = mg sinθ - fₖ\n• 等速下滑：mg sinθ = fₖ（合力=0）\n• 步驟：①畫受力圖 ②分解重力 ③列方程\n• 練習：θ=30°, μₖ=0.2，求 a",
   keyFormulas:["正射影=(→a·→b)/|→b|","斜面ma=mgsinθ-fₖ"]},

  {id:"w3thu",week:3,dayOfWeek:"thursday",stage:1,
   mathTopic:"平面向量綜合題型錯誤檢討",
   mathDetail:"📌 懶人包\n• 整理向量加減、內積、正射影錯題\n• 易錯點：座標內積算時符號搞錯\n• 重算至少 5 題向量綜合題",
   physicsTopic:"力分解與牛頓三大定律全範圍練習",
   physicsDetail:"📌 懶人包\n• 常見錯誤：把作用力反作用力畫在同一物體\n• 練習：飛機在斜坡跑道起飛，分析所有受力",
   keyFormulas:["三大定律綜合","向量正射影"]},

  {id:"w3fri",week:3,dayOfWeek:"friday",stage:1,
   mathTopic:"向量與正射影公式弱點複習",
   mathDetail:"📌 懶人包\n• 限時 30min：10 題向量速算\n• 內積兩種寫法都要熟\n• 整理本週公式卡",
   physicsTopic:"本週物理力學錯題重算",
   physicsDetail:"📌 懶人包\n• 所有標記錯題重算\n• 受力圖要畫清楚，每個力都標方向\n• 做 2 題完整航空受力情境題",
   keyFormulas:["→a·→b=x₁x₂+y₁y₂","正射影公式","F₁₂=-F₂₁"]},

  {id:"w3sat",week:3,dayOfWeek:"saturday",stage:1,
   mathTopic:"週六加強：向量綜合大演練（3小時）",
   mathDetail:"📌 懶人包\n• 上午 60min：15 題向量（加減/內積/正射影）\n• 下午 60min：10 題斜面力學計算\n• 特別練習：側風修正角度計算（航空實用）\n• 最後 30min：錯題整理",
   physicsTopic:"週六加強：牛頓定律綜合題",
   physicsDetail:"📌 懶人包\n• 多物體系統（繩子連接兩物體）\n• 含摩擦力的斜面問題\n• 每題不超過 5 分鐘",
   keyFormulas:["本週向量+力學整合"]},

  {id:"w3sun",week:3,dayOfWeek:"sunday",stage:1,
   mathTopic:"週日：前三週數學大複習（3小時）",
   mathDetail:"📌 懶人包\n• 翻出第1、2、3週公式卡，默背一遍\n• 混合題：幾何+直線+向量各5題\n• 計時練習，目標提速",
   physicsTopic:"週日：前三週物理大複習",
   physicsDetail:"📌 懶人包\n• 用飛機起飛流程串聯所有力學：\n  靜止(一律)→加速(F=ma)→升空(作用反作用)\n• 預覽下週：靜力平衡與力矩",
   keyFormulas:["第1-3週公式整合"]},

  // ═══════════════════════════════════════════════════════
  // WEEK 4：空間向量與靜力平衡
  // ═══════════════════════════════════════════════════════
  {id:"w4mon",week:4,dayOfWeek:"monday",stage:1,
   mathTopic:"空間向量基礎、三維座標系",
   mathDetail:"📌 懶人包\n• 三維座標 (x, y, z)\n• 空間向量加減：各分量分別加減\n• 模長：|→a| = √(x²+y²+z²)\n• 練習：→a=(1,2,2)，求 |→a|",
   physicsTopic:"靜力平衡條件（合力為零）",
   physicsDetail:"📌 懶人包\n• 平衡條件：ΣFₓ=0 且 ΣFᵧ=0\n• 航空：等速平飛時升力=重力、推力=阻力\n• 練習：三條繩吊重物，求各繩張力",
   keyFormulas:["|→a|=√(x²+y²+z²)","ΣFₓ=0, ΣFᵧ=0"]},

  {id:"w4tue",week:4,dayOfWeek:"tuesday",stage:1,
   mathTopic:"空間中兩點距離與空間向量加減",
   mathDetail:"📌 懶人包\n• d = √((x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²)\n• 練習：A(1,0,0) B(4,4,3)，求距離",
   physicsTopic:"力矩定義與計算",
   physicsDetail:"📌 懶人包\n• 力矩 τ = F × d（力 × 力臂）\n• 單位：N·m\n• 平衡：Στ = 0\n• 練習：蹺蹺板左邊 60kg@2m，右邊幾 kg@3m 才平衡？",
   keyFormulas:["τ=F×d","Στ=0"]},

  {id:"w4wed",week:4,dayOfWeek:"wednesday",stage:1,
   mathTopic:"空間座標與向量綜合題練習",
   mathDetail:"📌 懶人包\n• 空間向量內積：同平面公式，加 z 分量\n• 方向餘弦：cosα=x/|→a|, cosβ=y/|→a|, cosγ=z/|→a|\n• 練習：10 題",
   physicsTopic:"槓桿原理與飛機重心（CG）計算",
   physicsDetail:"📌 懶人包\n• CG = Σ(重量 × 力臂) ÷ Σ重量\n• 必須在前限~後限範圍內！\n• 範例：機身1000kg@2m + 燃油200kg@4m → CG=2.33m",
   keyFormulas:["CG=Σ(W×ARM)/ΣW","Στ=0"]},

  {id:"w4thu",week:4,dayOfWeek:"thursday",stage:1,
   mathTopic:"空間幾何題型錯誤檢討",
   mathDetail:"📌 懶人包\n• 三維距離公式不要忘 z 分量\n• 方向餘弦：三個 cos² 之和 = 1",
   physicsTopic:"靜力平衡、力矩與槓桿綜合演練",
   physicsDetail:"📌 懶人包\n• 做 5 題飛機 CG 計算\n• 做 5 題力矩平衡\n• 單位統一，力臂方向看清楚",
   keyFormulas:["CG計算","Στ=0","ΣF=0"]},

  {id:"w4fri",week:4,dayOfWeek:"friday",stage:1,
   mathTopic:"前四週數學（幾何與向量）大複習",
   mathDetail:"📌 懶人包\n• 建立完整公式卡冊：畢氏→直線→平面向量→空間向量\n• 限時測驗：20 題，40 分鐘\n• 整理並背熟",
   physicsTopic:"前四週物理（力學大魔王）大複習",
   physicsDetail:"📌 懶人包\n• 完整流程：受力分析→F=ma→靜力平衡→力矩→CG\n• 做 5 題綜合題",
   keyFormulas:["第1-4週公式整合"]},

  {id:"w4sat",week:4,dayOfWeek:"saturday",stage:1,
   mathTopic:"週六加強：向量+幾何混合模擬（3小時）",
   mathDetail:"📌 懶人包\n• 模擬小考：30 題（幾何10+直線10+向量10）\n• 限時 60 分鐘，不看公式卡\n• 對完答案做詳細錯誤分析",
   physicsTopic:"週六加強：力學+CG計算模擬",
   physicsDetail:"📌 懶人包\n• 20 題力學題，限時 40 分鐘\n• 含受力分析、F=ma、靜力平衡、CG 計算\n• 每題寫完整解題步驟",
   keyFormulas:["第1-4週全範圍"]},

  {id:"w4sun",week:4,dayOfWeek:"sunday",stage:1,
   mathTopic:"週日：第一大段落總整理（3小時）",
   mathDetail:"📌 懶人包\n• 公式卡分類整齊：幾何類/直線類/向量類\n• 默背測驗：看題目說出公式，不看卡\n• 標記還不熟的公式",
   physicsTopic:"週日：力學觀念用飛機故事串聯",
   physicsDetail:"📌 懶人包\n• 飛機從停機坪到起飛，套用所有力學：\n  停機→推出(牛一)→引擎(牛二)→輪子摩擦→升空(升力>重力)→平飛(靜力平衡)\n• 確認每個環節都能計算",
   keyFormulas:["第1-4週完整複習"]},

  // ═══════════════════════════════════════════════════════
  // WEEK 5：銳角三角函數與功和功率
  // ═══════════════════════════════════════════════════════
  {id:"w5mon",week:5,dayOfWeek:"monday",stage:1,
   mathTopic:"銳角三角函數定義",
   mathDetail:"📌 懶人包\n• SOH-CAH-TOA：sin=對/斜，cos=鄰/斜，tan=對/鄰\n• 互餘：sin θ = cos(90°-θ)\n• 練習：斜邊=10，角=30°，求兩股",
   physicsTopic:"功的定義與計算",
   physicsDetail:"📌 懶人包\n• W = Fs cosθ\n• θ=0°：功最大；θ=90°：功=0（如法向力）\n• 單位：J = N·m\n• 練習：1000N 推力，50m，θ=30°，求功",
   keyFormulas:["sinθ=對/斜","cosθ=鄰/斜","tanθ=對/鄰","W=Fscosθ"]},

  {id:"w5tue",week:5,dayOfWeek:"tuesday",stage:1,
   mathTopic:"特殊角數值熟記（必考！）",
   mathDetail:"📌 懶人包 ⚠️ 每天早上背一遍，不能看表！\n• 30°：sin=1/2, cos=√3/2, tan=1/√3\n• 45°：sin=cos=√2/2, tan=1\n• 60°：sin=√3/2, cos=1/2, tan=√3\n• 記憶法：sin 0→1/2→√2/2→√3/2→1（0°到90°）",
   physicsTopic:"功率的定義與單位換算",
   physicsDetail:"📌 懶人包\n• P = W/t = Fv\n• 1 hp（馬力）= 746W；1kW=1000W\n• 引擎功率決定飛機爬升率！\n• 練習：1000hp 換算 kW；500N@200km/h 求功率",
   keyFormulas:["sin30°=1/2","cos45°=√2/2","tan60°=√3","P=W/t=Fv"]},

  {id:"w5wed",week:5,dayOfWeek:"wednesday",stage:1,
   mathTopic:"三角函數基礎邊長與角度變換題",
   mathDetail:"📌 懶人包\n• 已知角度→乘以三角函數求邊長\n• 已知兩邊→用反三角求角度\n• 練習：10 題計算",
   physicsTopic:"動能與重力位能",
   physicsDetail:"📌 懶人包\n• 動能：Eₖ = ½mv²（速度加倍→動能×4！）\n• 位能：Eₚ = mgh\n• 功能定理：W合 = ΔEₖ\n• 練習：5000kg 飛機從 0 加速到 60m/s，求動能變化",
   keyFormulas:["Eₖ=½mv²","Eₚ=mgh","W合=ΔEₖ"]},

  {id:"w5thu",week:5,dayOfWeek:"thursday",stage:1,
   mathTopic:"特殊角變換題型錯誤檢討",
   mathDetail:"📌 懶人包\n• 特殊角是考試高頻考點！\n• 做 20 題特殊角速算，限時 10 分鐘",
   physicsTopic:"功率與動能位能綜合題",
   physicsDetail:"📌 懶人包\n• 爬升：引擎做功 → 轉換成動能+位能\n• 做 5 題完整能量轉換計算",
   keyFormulas:["Eₖ=½mv²","Eₚ=mgh","P=Fv"]},

  {id:"w5fri",week:5,dayOfWeek:"friday",stage:1,
   mathTopic:"三角函數定義複習與速算",
   mathDetail:"📌 懶人包\n• 限時 30min：20 題三角函數計算\n• 整理本週公式卡",
   physicsTopic:"本週能量錯題整理",
   physicsDetail:"📌 懶人包\n• 整理所有能量計算錯題\n• 確認守恆條件：有無非守恆力做功",
   keyFormulas:["三角函數+功與能量公式"]},

  {id:"w5sat",week:5,dayOfWeek:"saturday",stage:1,
   mathTopic:"週六加強：三角函數大演練（3小時）",
   mathDetail:"📌 懶人包\n• 上午 60min：15 題三角計算（邊長角度互換）\n• 下午 60min：10 題能量計算\n• 航空：爬升角θ、爬升功率計算",
   physicsTopic:"週六加強：能量守恆預覽",
   physicsDetail:"📌 懶人包\n• 預習：力學能守恆 Eₖ+Eₚ=常數\n• 練習：自由落體的能量轉換\n• 飛機俯衝加速，動能/位能如何變化？",
   keyFormulas:["Eₖ+Eₚ=常數（預覽）"]},

  {id:"w5sun",week:5,dayOfWeek:"sunday",stage:1,
   mathTopic:"週日：三角+向量整合複習（3小時）",
   mathDetail:"📌 懶人包\n• 向量夾角→用內積→對應三角函數求值\n• 做 5 題整合題\n• 默背所有特殊角（閉眼默寫）",
   physicsTopic:"週日：功與能量概念整合",
   physicsDetail:"📌 懶人包\n• 飛機爬升：引擎功率→做功→動能+位能增加\n• 複習所有公式並整理進公式卡",
   keyFormulas:["第5週公式整合"]},

  // ═══════════════════════════════════════════════════════
  // WEEK 6：廣義角三角函數與力學能守恆
  // ═══════════════════════════════════════════════════════
  {id:"w6mon",week:6,dayOfWeek:"monday",stage:1,
   mathTopic:"廣義角三角函數、同界角",
   mathDetail:"📌 懶人包\n• ASTC（全正/正弦/正切/餘弦）象限符號\n• sin(180°-θ)=sinθ，cos(180°-θ)=-cosθ\n• 練習：求 sin150°, cos240°, tan315°",
   physicsTopic:"力學能守恆定律",
   physicsDetail:"📌 懶人包\n• 守恆條件：只有重力（或彈力）做功\n• ½mv₁²+mgh₁ = ½mv₂²+mgh₂\n• 飛機俯衝：位能轉動能（速度增）\n• 練習：從100m高自由落下，到地時速度？",
   keyFormulas:["ASTC象限","½mv₁²+mgh₁=½mv₂²+mgh₂"]},

  {id:"w6tue",week:6,dayOfWeek:"tuesday",stage:1,
   mathTopic:"正弦定理公式與應用",
   mathDetail:"📌 懶人包\n• a/sinA = b/sinB = c/sinC = 2R\n• 適用：已知兩角一邊（AAS/ASA）\n• 練習：A=30°, B=60°, a=5，求 b 和 c",
   physicsTopic:"力學能守恆於自由落體與斜面",
   physicsDetail:"📌 懶人包\n• 無摩擦斜面：mgh = ½mv²，v=√(2gh)（與斜面角度無關！）\n• 有摩擦時：mgh - W摩 = ½mv²\n• 做 5 道能量守恆計算題",
   keyFormulas:["a/sinA=2R","v=√(2gh)"]},

  {id:"w6wed",week:6,dayOfWeek:"wednesday",stage:1,
   mathTopic:"餘弦定理公式與應用",
   mathDetail:"📌 懶人包\n• c² = a²+b²-2ab cosC\n• 適用：三邊（SSS）或兩邊夾角（SAS）\n• 畢氏定理是餘弦定理 C=90° 的特例！\n• 練習：a=3, b=4, C=60°，求 c",
   physicsTopic:"彈性位能公式與計算",
   physicsDetail:"📌 懶人包\n• 虎克定律：F = kx\n• 彈性位能：Eₚ = ½kx²\n• 練習：k=500N/m, x=0.1m，求彈性位能",
   keyFormulas:["c²=a²+b²-2abcosC","Eₚ=½kx²","F=kx"]},

  {id:"w6thu",week:6,dayOfWeek:"thursday",stage:1,
   mathTopic:"正餘弦定理綜合題演練與檢討",
   mathDetail:"📌 懶人包\n• 有角對邊 → 正弦定理\n• 兩邊夾角 or 三邊 → 餘弦定理\n• 做 10 題混合題",
   physicsTopic:"力學能與彈性位能綜合題",
   physicsDetail:"📌 懶人包\n• ½mv²+mgh+½kx² = 常數\n• 注意 x 和 h 方向統一",
   keyFormulas:["正弦/餘弦定理判斷","½mv²+mgh+½kx²=常數"]},

  {id:"w6fri",week:6,dayOfWeek:"friday",stage:1,
   mathTopic:"本週三角函數核心公式總整理",
   mathDetail:"📌 懶人包\n• 整理：廣義角→正弦定理→餘弦定理\n• 默背測驗：遮住公式自己寫出來",
   physicsTopic:"力學能守恆錯題重算",
   physicsDetail:"📌 懶人包\n• 整理能量計算錯題\n• 確認守恆條件",
   keyFormulas:["第6週公式整合"]},

  {id:"w6sat",week:6,dayOfWeek:"saturday",stage:1,
   mathTopic:"週六加強：三角定理大題演練（3小時）",
   mathDetail:"📌 懶人包\n• 模擬測驗：20 題（廣義角+正弦+餘弦定理）限時 40min\n• 做完詳細分析錯誤\n• 補強弱點 20min",
   physicsTopic:"週六加強：能量守恆大題演練",
   physicsDetail:"📌 懶人包\n• 15 題能量計算（含彈性位能）限時 30min\n• 航空題：俯衝、爬升、投彈等情境",
   keyFormulas:["第5-6週整合複習"]},

  {id:"w6sun",week:6,dayOfWeek:"sunday",stage:1,
   mathTopic:"週日：第5-6週總複習（3小時）",
   mathDetail:"📌 懶人包\n• 公式卡：三角函數所有公式默背\n• 混合計算：10 題（三角+向量+幾何）\n• 預覽下週：指數對數",
   physicsTopic:"週日：能量整合回顧",
   physicsDetail:"📌 懶人包\n• 飛行完整過程串聯所有能量觀念\n• 預覽下週：動量守恆",
   keyFormulas:["第5-6週公式整合"]},

  // ═══════════════════════════════════════════════════════
  // WEEK 7–12：生成函式（保持詳細程度）
  // ═══════════════════════════════════════════════════════
  ...generateWeeks7to12(),

  // ═══════════════════════════════════════════════════════
  // WEEK 13–16：第二階段（題海戰術）
  // ═══════════════════════════════════════════════════════
  ...generateStage2(13, 16),

  // ═══════════════════════════════════════════════════════
  // WEEK 17–20：第三階段（模擬考場）
  // ═══════════════════════════════════════════════════════
  ...generateStage3(17, 20),
];

function generateWeeks7to12(): StudyPlanDay[] {
  const wkData = [
    {w:7,
     ma:["指數律與指數函數","📌 懶人包\n• aᵐ×aⁿ=aᵐ⁺ⁿ，(aᵐ)ⁿ=aᵐⁿ，a⁰=1，a⁻ⁿ=1/aⁿ\n• 分數指數：a^(m/n)=ⁿ√(aᵐ)\n• 練習：化簡 (2³×2⁻¹)²"],
     mb:["對數定義與對數律","📌 懶人包\n• logₐb=c ⟺ aᶜ=b\n• log(xy)=logx+logy，log(xⁿ)=nlogx\n• 換底公式：logₐb=logb/loga"],
     mc:["常用對數熟記","📌 懶人包\n• log2≈0.3010, log3≈0.4771, log5≈0.6990（=1-log2）\n• 練習：計算 log6, log12, log18"],
     pa:["動量定義與衝量","📌 懶人包\n• p=mv（向量！方向很重要）\n• 衝量 J=FΔt=Δp\n• 練習：5000kg 飛機@80m/s，求動量"],
     pb:["動量守恆定律","📌 懶人包\n• m₁v₁+m₂v₂=m₁v₁'+m₂v₂'（無外力）\n• 注意方向！先定正方向\n• 航空：投彈後飛機反衝"],
     pc:["碰撞問題","📌 懶人包\n• 完全彈性：動能+動量都守恆\n• 完全非彈性：合為一體，只動量守恆\n• 動能損失 = 非彈性程度"],
     kf:["p=mv","J=FΔt=Δp","m₁v₁+m₂v₂=m₁v₁'+m₂v₂'","log2≈0.3010","log3≈0.4771"]},
    {w:8,
     ma:["一元二次方程式速解","📌 懶人包\n• 因式分解：找兩數和=-b/a，積=c/a\n• 公式解：x=(-b±√Δ)/2a，Δ=b²-4ac\n• Δ>0兩實根；Δ=0重根；Δ<0無實根"],
     mb:["配方法與韋達定理","📌 懶人包\n• 韋達定理：x₁+x₂=-b/a，x₁x₂=c/a\n• 不解方程式也能求兩根的平方和\n• 練習：x²-5x+6=0，不解方程求兩根平方和"],
     mc:["一元二次綜合題","📌 懶人包\n• 混合：因式分解+公式解+韋達\n• 10 題計時練習"],
     pa:["等速率圓周運動","📌 懶人包\n• ω=2π/T=2πf，v=rω\n• 向心加速度方向：指向圓心，大小 aᶜ=v²/r"],
     pb:["向心力與向心加速度","📌 懶人包\n• Fᶜ=mv²/r=mrω²（指向圓心）\n• 向心力是合力，不是額外的力！"],
     pc:["飛機轉彎與G力","📌 懶人包\n• 傾斜角θ：tanθ=v²/rg\n• G力=升力/重力=1/cosθ\n• 60°傾斜→G力=2G\n• 練習：v=100m/s, r=5000m，求θ和G力"],
     kf:["aᶜ=v²/r","Fᶜ=mv²/r","tanθ=v²/rg","G力=1/cosθ","Δ=b²-4ac"]},
    {w:9,
     ma:["等差數列與等差級數","📌 懶人包\n• aₙ=a₁+(n-1)d\n• Sₙ=n(a₁+aₙ)/2\n• 練習：a₁=3, d=4，求 a₁₀ 和 S₁₀"],
     mb:["等比數列與等比級數","📌 懶人包\n• aₙ=a₁rⁿ⁻¹\n• Sₙ=a₁(1-rⁿ)/(1-r)\n• 無窮等比：|r|<1 時 S=a₁/(1-r)"],
     mc:["數列級數綜合題","📌 懶人包\n• Σk=n(n+1)/2\n• 混合：等差+等比判斷\n• 10 題練習"],
     pa:["流體壓力與大氣壓力","📌 懶人包\n• P=F/A，液體壓力 P=ρgh\n• 1atm=101325Pa≈760mmHg\n• 高空大氣壓下降（每升1000ft約降1inHg）"],
     pb:["浮力與白努利定律","📌 懶人包\n• 浮力：F浮=ρ液Vg\n• 白努利：P+½ρv²+ρgh=常數\n• 速度大→壓力小→機翼升力！\n• 這是 PPL 最重要的物理觀念之一"],
     pc:["帕斯卡原理與連續性方程","📌 懶人包\n• A₁v₁=A₂v₂（連續性方程）\n• 管子窄→流速快→壓力低"],
     kf:["P+½ρv²+ρgh=常數","A₁v₁=A₂v₂","1atm=101325Pa","aₙ=a₁+(n-1)d"]},
    {w:10,
     ma:["直線排列與計數原理","📌 懶人包\n• 乘法原理：各步驟相乘\n• Pₙᵣ=n!/(n-r)!（順序有關）\n• 練習：5 人排成一列有幾種？"],
     mb:["組合與巴斯卡三角","📌 懶人包\n• Cₙᵣ=n!/(r!(n-r)!)\n• Pₙᵣ=r!×Cₙᵣ\n• 練習：10 人選 3 人有幾種？"],
     mc:["排列組合混合應用","📌 懶人包\n• 圓排列=(n-1)!\n• 有限制條件的排列\n• 10 題混合題"],
     pa:["溫度與熱量計算","📌 懶人包\n• °F=°C×9/5+32，K=°C+273\n• Q=mcΔT（水 c=4200J/kg·K）\n• 練習：1kg 水從 20°C 加熱到 100°C 需幾 J"],
     pb:["物質三態與潛熱","📌 懶人包\n• 相變時溫度不變！\n• Q=mL（L 為潛熱）\n• 飛機結冰融化需要吸熱"],
     pc:["熱傳遞觀念","📌 懶人包\n• 傳導：固體接觸\n• 對流：流體流動（空氣冷卻）\n• 輻射：電磁波（太陽）"],
     kf:["Q=mcΔT","Q=mL（潛熱）","Pₙᵣ=n!/(n-r)!","Cₙᵣ=n!/r!(n-r)!","°F=°C×9/5+32"]},
    {w:11,
     ma:["集合概念與古典機率","📌 懶人包\n• P(A)=有利/總數，0≤P≤1\n• P(Ā)=1-P(A)\n• 互斥：P(A∪B)=P(A)+P(B)"],
     mb:["條件機率與獨立事件","📌 懶人包\n• P(A|B)=P(A∩B)/P(B)\n• 獨立：P(A∩B)=P(A)×P(B)\n• 練習：有放回 vs 無放回抽牌機率"],
     mc:["期望值公式","📌 懶人包\n• E(X)=Σ[xᵢ×P(xᵢ)]\n• 代表「平均結果」"],
     pa:["波以耳定律與查理定律","📌 懶人包\n• 波以耳（T不變）：P₁V₁=P₂V₂\n• 查理（P不變）：V₁/T₁=V₂/T₂，T 必須用 K！\n• 高空氣壓低→體積膨脹"],
     pb:["理想氣體方程式","📌 懶人包\n• PV=nRT（R=8.314J/mol·K）\n• 綜合定律：P₁V₁/T₁=P₂V₂/T₂\n• 密度高度：高熱濕 → 密度低 → 推力下降！"],
     pc:["氣體定律綜合題","📌 懶人包\n• High, Hot, Humid → 飛行性能最差！\n• 5 題氣體定律計算"],
     kf:["P₁V₁=P₂V₂","P₁V₁/T₁=P₂V₂/T₂","PV=nRT","E(X)=ΣxP(x)","高熱濕→性能差"]},
    {w:12,
     ma:["統計圖表與集中趨勢","📌 懶人包\n• 平均數=Σx/n；中位數：排序後中間值；眾數：最多次\n• 練習：讀直方圖，計算三種集中趨勢"],
     mb:["標準差公式與意義","📌 懶人包\n• σ=√(Σ(xᵢ-x̄)²/n)\n• σ越大→資料越分散\n• 練習：5 筆資料計算標準差"],
     mc:["相關係數基礎","📌 懶人包\n• -1≤r≤1；r≈1 正相關，r≈-1 負相關\n• 看散佈圖判斷方向"],
     pa:["靜電學與歐姆定律","📌 懶人包\n• 庫倫：F=kq₁q₂/r²，k=9×10⁹\n• 歐姆定律：V=IR"],
     pb:["電路串並聯","📌 懶人包\n• 串聯：I 相同，R=R₁+R₂\n• 並聯：V 相同，1/R=1/R₁+1/R₂\n• 練習：混合電路求等效電阻"],
     pc:["電功率與焦耳定律","📌 懶人包\n• P=IV=I²R=V²/R\n• Q=I²Rt\n• 航電系統：28V 直流系統功率計算"],
     kf:["V=IR","串聯R=R₁+R₂","並聯1/R=1/R₁+1/R₂","P=IV=I²R","σ=√(Σ(x-x̄)²/n)"]},
  ];

  const result: StudyPlanDay[] = [];
  for (const wk of wkData) {
    const days: Array<{day:StudyPlanDay["dayOfWeek"],mt:string,md:string,pt:string,pd:string,mins:120|180}> = [
      {day:"monday",   mt:wk.ma[0],md:wk.ma[1],pt:wk.pa[0],pd:wk.pa[1],mins:120},
      {day:"tuesday",  mt:wk.mb[0],md:wk.mb[1],pt:wk.pb[0],pd:wk.pb[1],mins:120},
      {day:"wednesday",mt:wk.mc[0],md:wk.mc[1],pt:wk.pc[0],pd:wk.pc[1],mins:120},
      {day:"thursday", mt:`第${wk.w}週數學錯題檢討`,
        md:`📌 懶人包\n• 整理本週所有數學錯題\n• 分析錯因：計算失誤 or 觀念不清\n• 重新手算，寫出完整解題步驟`,
        pt:`第${wk.w}週物理錯題檢討`,
        pd:`📌 懶人包\n• 整理本週所有物理錯題\n• 畫受力圖/能量圖重新分析\n• 確認公式使用是否正確`,
        mins:120},
      {day:"friday",   mt:`第${wk.w}週數學弱點複習`,
        md:`📌 懶人包\n• 本週數學公式卡默背測驗\n• 做 10 題計時速算\n• 整理錯題本`,
        pt:`第${wk.w}週物理弱點複習`,
        pd:`📌 懶人包\n• 本週物理公式卡默背\n• 做 5 題完整計算題\n• 確認航空應用情境都理解`,
        mins:120},
      {day:"saturday", mt:`週六加強：第${wk.w}週數學大演練（3小時）`,
        md:`📌 懶人包\n• 模擬測驗：20 題本週數學，限時 40 分鐘\n• 不看公式卡\n• 對完答案做詳細錯誤分析`,
        pt:`週六加強：第${wk.w}週物理大演練`,
        pd:`📌 懶人包\n• 15 題本週物理題，限時 30 分鐘\n• 航空情境應用題至少 3 題`,
        mins:180},
      {day:"sunday",   mt:`週日：第${wk.w}週總複習＋下週預習（3小時）`,
        md:`📌 懶人包\n• 公式卡默背（本週）\n• 錯題本重新作答（不看答案）\n• 預覽下週主題`,
        pt:`週日：物理觀念用飛行情境串聯`,
        pd:`📌 懶人包\n• 用飛機某個動作串聯本週所有物理\n• 用自己的話解釋一遍\n• 預覽下週`,
        mins:180},
    ];
    days.forEach(d => result.push({
      id:`w${wk.w}${d.day}`,week:wk.w,dayOfWeek:d.day,stage:1,
      mathTopic:d.mt,mathDetail:d.md,physicsTopic:d.pt,physicsDetail:d.pd,
      keyFormulas:wk.kf,
    }));
  }
  return result;
}

function generateStage2(from:number, to:number): StudyPlanDay[] {
  const result: StudyPlanDay[] = [];
  for (let w=from; w<=to; w++) {
    const n = w-12;
    const configs: Array<{day:StudyPlanDay["dayOfWeek"],mt:string,md:string,pt:string,pd:string,mins:120|180}> = [
      {day:"monday",mins:120,
       mt:`題海第${n}回：力學與幾何/向量（25題）`,
       md:`📌 懶人包\n• 狂刷統測/學測歷屆試題\n• 不准計算機，全程手算\n• 限時 50 分鐘（25題，每題2分鐘）\n• 做完立刻對答案，標記錯題`,
       pt:`題海第${n}回：力學（25題）`,
       pd:`📌 懶人包\n• 牛頓力學、受力分析、能量守恆混合\n• 計時作答，分析錯誤原因`},
      {day:"tuesday",mins:120,
       mt:`題海第${n}回：三角函數/指對數（25題）`,
       md:`📌 懶人包\n• 歷屆試題混合\n• 重點練習特殊角速算\n• 限時 50 分鐘`,
       pt:`題海第${n}回：熱學/流體（25題）`,
       pd:`📌 懶人包\n• 白努利+氣體定律+熱量計算\n• 航空應用題優先`},
      {day:"wednesday",mins:120,
       mt:`題海第${n}回：排列組合/機率（25題）`,
       md:`📌 懶人包\n• 機率+數列+統計混合\n• 注意文字理解\n• 限時 50 分鐘`,
       pt:`題海第${n}回：電學（25題）`,
       pd:`📌 懶人包\n• 電路+電功率+歐姆定律計時練習`},
      {day:"thursday",mins:120,
       mt:`全範圍錯題詳細訂正（第${n}回）`,
       md:`📌 懶人包\n• 剪貼本週所有錯題\n• 逐題分析：計算失誤？觀念錯誤？\n• 重新手算，寫出完整步驟\n• 建立「高頻錯誤清單」`,
       pt:`全範圍錯題詳細訂正（第${n}回）`,
       pd:`📌 懶人包\n• 物理錯題詳細分析\n• 畫圖重新理解\n• 建立個人高頻錯誤清單`},
      {day:"friday",mins:120,
       mt:`限時快算特訓第${n}回（50題/50分鐘）`,
       md:`📌 懶人包 ⚠️\n• 嚴格 1 分鐘 1 題\n• 卡住 15 秒 → 盲猜跳過！不准回頭改\n• 練習考場心理素質\n• 完成後統計正確率，目標每週進步`,
       pt:`限時快算特訓（物理50題/50分鐘）`,
       pd:`📌 懶人包\n• 同上，嚴格限時\n• 目標：每週進步 5% 正確率`},
      {day:"saturday",mins:180,
       mt:`週六模擬考：全範圍數學（3小時）`,
       md:`📌 懶人包\n• 完整模擬考場環境（關手機、安靜）\n• 不看公式卡，不用計算機\n• 嚴格計時\n• 計算本次模擬分數`,
       pt:`週六模擬考：全範圍物理（3小時）`,
       pd:`📌 懶人包\n• 完整模擬考場環境\n• 計時作答\n• 對完答案做弱點分析`},
      {day:"sunday",mins:180,
       mt:`週日：弱點補強＋下週規劃（3小時）`,
       md:`📌 懶人包\n• 根據本週成績找出最弱 2 個主題\n• 針對弱點複習觀念 + 做 10 題\n• 預覽下週進度`,
       pt:`週日：物理弱點補強`,
       pd:`📌 懶人包\n• 針對本週物理最弱項目複習\n• 整理「必錯題型」清單`},
    ];
    configs.forEach(d => result.push({
      id:`w${w}${d.day}`,week:w,dayOfWeek:d.day,stage:2,
      mathTopic:d.mt,mathDetail:d.md,physicsTopic:d.pt,physicsDetail:d.pd,
      keyFormulas:["限時手算","不得使用計算機","目標1題/分鐘"],
    }));
  }
  return result;
}

function generateStage3(from:number, to:number): StudyPlanDay[] {
  const result: StudyPlanDay[] = [];
  for (let w=from; w<=to; w++) {
    const n = w-16;
    const configs: Array<{day:StudyPlanDay["dayOfWeek"],mt:string,md:string,pt:string,pd:string,mins:120|180}> = [
      {day:"monday",mins:120,
       mt:`英文航空數理題練習（第${n}回）`,
       md:`📌 懶人包\n• 英文版數學題練習\n• 重點：altitude高度, velocity速度, acceleration加速度\n• 做 20 題英文數學題`,
       pt:`FAA PPL 題庫練習（第${n}回）`,
       pd:`📌 懶人包\n• 刷 FAA 題庫\n• Lift升力, Thrust推力, Drag阻力, Weight重力\n• Density Altitude 密度高度\n• 目標 30 題，記錄錯誤`},
      {day:"tuesday",mins:120,
       mt:`航空英文術語全面複習（第${n}回）`,
       md:`📌 懶人包\n• 導航術語：heading航向, bearing方位, track航跡\n• 氣象術語：visibility能見度, turbulence亂流, icing結冰\n• 今日目標：背熟 30 個術語`,
       pt:`FAA 題庫繼續（第${n}回）`,
       pd:`📌 懶人包\n• 每日至少 30 題 FAA 題庫\n• 重點複習：氣象、導航、性能計算`},
      {day:"wednesday",mins:120,
       mt:`全範圍模擬考（嚴格限時）第${n}場`,
       md:`📌 懶人包 ⚠️\n• 嚴格 1 分鐘 1 題\n• 卡住 15 秒 → 盲猜跳過，不回頭\n• 完整模擬考場環境（關手機）\n• 計算分數，分析錯誤分布`,
       pt:`全範圍模擬考物理場`,
       pd:`📌 懶人包\n• 同上，嚴格限時\n• 訓練心理抗壓`},
      {day:"thursday",mins:120,
       mt:`模擬考第二場（針對弱點加強）`,
       md:`📌 懶人包\n• 根據週三成績強化最弱 2 個主題\n• 再做一次限時模擬\n• 目標：兩場平均 80% 以上`,
       pt:`模擬考檢討與弱點強化`,
       pd:`📌 懶人包\n• 詳細分析兩場差異\n• 持續弱點練習`},
      {day:"friday",mins:120,
       mt:`錯題本最後盲測（數學）`,
       md:`📌 懶人包\n• 翻出整本錯題本，完全不看答案\n• 還是錯的：最後衝刺複習\n• 目標：錯題本正確率 >90%`,
       pt:`錯題本最後盲測（物理）`,
       pd:`📌 懶人包\n• 物理錯題本完整盲測\n• 最後確認 FAA 航空術語\n• 考前一天：輕鬆複習，早睡！`},
      {day:"saturday",mins:180,
       mt:`週六全真模擬考（完整3小時）`,
       md:`📌 懶人包\n• 完整 3 小時模擬：數學+物理+航空英文\n• 嚴格考場規定\n• 計算最終模擬分數`,
       pt:`週六全真模擬考（完整3小時）`,
       pd:`📌 懶人包\n• 與數學同場進行\n• 做完後詳細檢討\n• 確認剩餘弱點安排最後複習`},
      {day:"sunday",mins:180,
       mt:`週日：考前最後衝刺（3小時）`,
       md:`📌 懶人包\n• 輕量複習：只看公式卡，不做大題\n• 確認考試地點、時間、攜帶物品\n• 晚上 10 點前睡覺！充足睡眠比熬夜重要`,
       pt:`週日：考前準備`,
       pd:`📌 懶人包\n• 輕鬆複習航空英文詞彙\n• 相信自己 20 週的努力\n• 保持狀態，明天發揮最佳！`},
    ];
    configs.forEach(d => result.push({
      id:`w${w}${d.day}`,week:w,dayOfWeek:d.day,stage:3,
      mathTopic:d.mt,mathDetail:d.md,physicsTopic:d.pt,physicsDetail:d.pd,
      keyFormulas:["1題/分鐘","卡15秒→盲猜","Lift=Thrust>Drag=Weight"],
    }));
  }
  return result;
}
