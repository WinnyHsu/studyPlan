import { StudyPlanDay } from "@/types";

export const STUDY_PLAN: StudyPlanDay[] = [
  // ===== WEEK 1 =====
  {id:"w1d1",week:1,dayOfWeek:"monday",stage:1,
    mathTopic:"國中幾何、畢氏定理",mathDetail:"三角形面積、畢氏定理 a²+b²=c²、直角三角形邊長關係",
    physicsTopic:"基礎單位換算",physicsDetail:"長度、重量換算，knots 與 km/h 互換（1 knot = 1.852 km/h）",
    keyFormulas:["a²+b²=c²","1 knot = 1.852 km/h","1 nm = 1.852 km"]},
  {id:"w1d2",week:1,dayOfWeek:"tuesday",stage:1,
    mathTopic:"相似形與比例觀念",mathDetail:"相似三角形判定條件、比例關係、AA/SAS/SSS 相似",
    physicsTopic:"直線運動基本定義",physicsDetail:"位移、路徑長差異、平均速度 v=Δx/Δt",
    keyFormulas:["v = Δx/Δt","路徑長 ≥ |位移|"]},
  {id:"w1d3",week:1,dayOfWeek:"wednesday",stage:1,
    mathTopic:"國中幾何與相似形綜合題練習",mathDetail:"混合題型演練，注意比例關係的建立",
    physicsTopic:"加速度運動與 v-t 圖、x-t 圖",physicsDetail:"v-t 圖斜率=加速度，面積=位移；x-t 圖斜率=速度",
    keyFormulas:["a = Δv/Δt","x-t 斜率 = 速度","v-t 斜率 = 加速度","v-t 面積 = 位移"]},
  {id:"w1d4",week:1,dayOfWeek:"thursday",stage:1,
    mathTopic:"幾何基礎題型錯誤檢討",mathDetail:"針對週一至週三錯誤題型重新整理觀念",
    physicsTopic:"等加速度運動三大公式推導與手算",physicsDetail:"v=v₀+at, x=v₀t+½at², v²=v₀²+2ax 手寫推導並代入數字",
    keyFormulas:["v = v₀ + at","x = v₀t + ½at²","v² = v₀² + 2ax"]},
  {id:"w1d5",week:1,dayOfWeek:"friday",stage:1,
    mathTopic:"本週數學弱點總複習",mathDetail:"整理本週所有錯題，重新手算一遍",
    physicsTopic:"本週物理錯題重算與概念統整",physicsDetail:"三大公式靈活運用，注意單位統一",
    keyFormulas:["畢氏定理","三大等加速度公式","單位換算 knots↔km/h"]},

  // ===== WEEK 2 =====
  {id:"w2d1",week:2,dayOfWeek:"monday",stage:1,
    mathTopic:"直線方程式、斜率定義",mathDetail:"斜率 m=(y₂-y₁)/(x₂-x₁)，斜截式 y=mx+b",
    physicsTopic:"牛頓第一運動定律",physicsDetail:"慣性定律：靜者恆靜，動者恆做等速直線運動，與飛機巡航關係",
    keyFormulas:["m = (y₂-y₁)/(x₂-x₁)","y = mx + b","合力 = 0 → 等速或靜止"]},
  {id:"w2d2",week:2,dayOfWeek:"tuesday",stage:1,
    mathTopic:"平面兩點距離公式、中點公式",mathDetail:"d=√((x₂-x₁)²+(y₂-y₁)²)，中點 M=((x₁+x₂)/2,(y₁+y₂)/2)",
    physicsTopic:"牛頓第二運動定律",physicsDetail:"F=ma 基礎觀念，合力與加速度方向相同",
    keyFormulas:["d = √((Δx)²+(Δy)²)","F = ma","a 方向 = 合力方向"]},
  {id:"w2d3",week:2,dayOfWeek:"wednesday",stage:1,
    mathTopic:"直線方程式與斜率綜合題演練",mathDetail:"兩直線平行/垂直條件，交點計算",
    physicsTopic:"摩擦力",physicsDetail:"靜摩擦力（0 到 μₛN）、最大靜摩擦 fₛmax=μₛN、動摩擦力 fₖ=μₖN",
    keyFormulas:["fₛ ≤ μₛN","fₖ = μₖN","平行：m₁=m₂","垂直：m₁×m₂=-1"]},
  {id:"w2d4",week:2,dayOfWeek:"thursday",stage:1,
    mathTopic:"直線與兩點距離題型錯題檢討",mathDetail:"點到直線距離公式 d=|ax₀+by₀+c|/√(a²+b²)",
    physicsTopic:"重力與地心加速度計算",physicsDetail:"W=mg，g=9.8 m/s²（考試常取 10），自由落體應用",
    keyFormulas:["W = mg","g ≈ 9.8 m/s² (考試取10)","點到線距 d=|ax₀+by₀+c|/√(a²+b²)"]},
  {id:"w2d5",week:2,dayOfWeek:"friday",stage:1,
    mathTopic:"本週數學公式統整與複習",mathDetail:"整理直線方程式所有公式，建立公式卡",
    physicsTopic:"F=ma 與摩擦力綜合題演練",physicsDetail:"含斜面、水平面的摩擦力題型，注意靜/動摩擦切換條件",
    keyFormulas:["F=ma","fₖ=μₖN","W=mg"]},

  // ===== WEEK 3 =====
  {id:"w3d1",week:3,dayOfWeek:"monday",stage:1,
    mathTopic:"平面向量基本定義、加減法",mathDetail:"向量的幾何意義，→a+→b 平行四邊形法，→a-→b，零向量",
    physicsTopic:"牛頓第三運動定律",physicsDetail:"作用力與反作用力大小相等、方向相反、作用在不同物體上",
    keyFormulas:["→a + →b（平行四邊形法）","作用力 = -反作用力","F₁₂ = -F₂₁"]},
  {id:"w3d2",week:3,dayOfWeek:"tuesday",stage:1,
    mathTopic:"向量內積公式與幾何意義",mathDetail:"→a·→b = |a||b|cosθ = x₁x₂+y₁y₂，內積為零⟺垂直",
    physicsTopic:"向量的力分解（斜面上的受力分析）",physicsDetail:"重力分解為平行斜面分量 mgsinθ 和垂直分量 mgcosθ，畫受力圖",
    keyFormulas:["→a·→b = |a||b|cosθ","→a·→b = x₁x₂+y₁y₂","斜面平行分量 = mgsinθ","斜面垂直分量 = mgcosθ"]},
  {id:"w3d3",week:3,dayOfWeek:"wednesday",stage:1,
    mathTopic:"向量正射影計算（與風向、航向修正高度相關）",mathDetail:"→a 在 →b 方向的正射影 = (→a·→b)/|→b|，應用到航空：側風分量計算",
    physicsTopic:"斜面受力與摩擦力綜合應用題",physicsDetail:"物體在斜面上靜止/運動的受力分析，結合 F=ma 與摩擦力",
    keyFormulas:["正射影 = (→a·→b)/|→b|","側風分量 = V_wind × sin(夾角)","斜面：ma = mgsinθ - fₖ"]},
  {id:"w3d4",week:3,dayOfWeek:"thursday",stage:1,
    mathTopic:"平面向量綜合題型錯誤檢討",mathDetail:"整理向量加減、內積、正射影的易錯題型",
    physicsTopic:"力分解與牛頓三大定律全範圍練習",physicsDetail:"綜合應用三大定律，注意作用力反作用力不可混入同一物體受力圖",
    keyFormulas:["→a·→b = 0 ⟺ 垂直","三大定律綜合運用"]},
  {id:"w3d5",week:3,dayOfWeek:"friday",stage:1,
    mathTopic:"向量與正射影公式弱點複習",mathDetail:"本週所有向量錯題重新手算，確認公式熟練度",
    physicsTopic:"本週物理力學錯題重算",physicsDetail:"整理受力分析錯誤，練習標準畫受力圖步驟",
    keyFormulas:["本週重點：向量正射影 = (→a·→b)/|→b|","牛頓三定律要點整理"]},

  // ===== WEEK 4 =====
  {id:"w4d1",week:4,dayOfWeek:"monday",stage:1,
    mathTopic:"空間向量基礎、三維座標系定義",mathDetail:"空間座標 (x,y,z)，空間向量加減，基底向量 i,j,k",
    physicsTopic:"靜力平衡條件（合力為零）",physicsDetail:"多力平衡：ΣFₓ=0, ΣFᵧ=0，吊燈/懸掛問題應用",
    keyFormulas:["ΣF = 0（靜力平衡）","ΣFₓ = 0, ΣFᵧ = 0"]},
  {id:"w4d2",week:4,dayOfWeek:"tuesday",stage:1,
    mathTopic:"空間中兩點距離與空間向量加減",mathDetail:"d=√((x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²)",
    physicsTopic:"力矩定義與計算",physicsDetail:"力矩 τ = F × d（力臂），順/逆時針方向，單位 N·m",
    keyFormulas:["τ = F × d","空間距離 d=√(Δx²+Δy²+Δz²)"]},
  {id:"w4d3",week:4,dayOfWeek:"wednesday",stage:1,
    mathTopic:"空間座標與向量綜合題練習",mathDetail:"空間中向量的方向餘弦、空間夾角",
    physicsTopic:"槓桿原理與轉動平衡（飛機重心 CG 計算基礎）",physicsDetail:"順力矩 = 逆力矩，飛機 CG 計算：CG = Σ(重量×力臂)/Σ重量",
    keyFormulas:["ΣτCW = ΣτCCW","飛機 CG = Σ(W×ARM)/ΣW"]},
  {id:"w4d4",week:4,dayOfWeek:"thursday",stage:1,
    mathTopic:"空間幾何題型錯誤檢討",mathDetail:"整理空間向量易錯題型，特別是方向餘弦與夾角",
    physicsTopic:"靜力平衡、力矩與槓桿綜合題演練",physicsDetail:"飛機載重平衡計算完整題型演練",
    keyFormulas:["CG 計算","靜力平衡 ΣF=0, Στ=0"]},
  {id:"w4d5",week:4,dayOfWeek:"friday",stage:1,
    mathTopic:"前四週數學（幾何與向量）大複習",mathDetail:"建立錯題本，整理所有公式卡，全範圍手算複習",
    physicsTopic:"前四週物理（力學大魔王）大複習",physicsDetail:"從牛頓三定律到靜力平衡完整複習，注意航空應用情境",
    keyFormulas:["第1-4週所有公式整理"]},

  // ===== WEEKS 5–20: abbreviated entries (5 days each) =====
  ...generateWeeks5to20()
];

function generateWeeks5to20(): StudyPlanDay[] {
  const weeks: Omit<StudyPlanDay,"id">[][] = [
    // Week 5
    [{week:5,dayOfWeek:"monday",stage:1,mathTopic:"銳角三角函數定義",mathDetail:"sin, cos, tan 定義與 SOH-CAH-TOA 記憶法",physicsTopic:"功的定義與計算",physicsDetail:"W = Fs cosθ，力與位移的夾角關係",keyFormulas:["sinθ=對/斜","cosθ=鄰/斜","W=Fscosθ"]},
     {week:5,dayOfWeek:"tuesday",stage:1,mathTopic:"特殊角數值熟記",mathDetail:"30°/45°/60° 的 sin/cos/tan 值，不可查表，必須秒背",physicsTopic:"功率的定義與單位換算",physicsDetail:"P=W/t=Fv，1 hp=746 W，kW 換算",keyFormulas:["sin30°=½","cos45°=√2/2","tan60°=√3","P=W/t=Fv"]},
     {week:5,dayOfWeek:"wednesday",stage:1,mathTopic:"三角函數基礎邊長與角度變換題",mathDetail:"已知一邊一角求其他邊，或已知兩邊求角",physicsTopic:"動能公式與計算",physicsDetail:"Eₖ=½mv²，速度加倍則動能變四倍",keyFormulas:["Eₖ = ½mv²","P = Fv"]},
     {week:5,dayOfWeek:"thursday",stage:1,mathTopic:"特殊角變換題型錯誤檢討",mathDetail:"針對計算失誤重新演算",physicsTopic:"重力位能公式與計算",physicsDetail:"Eₚ=mgh，以參考面為零點，高度判斷注意方向",keyFormulas:["Eₚ = mgh"]},
     {week:5,dayOfWeek:"friday",stage:1,mathTopic:"三角函數定義複習與速算",mathDetail:"限時30分鐘完成20題特殊角速算",physicsTopic:"功、功率與動能位能綜合題",physicsDetail:"能量轉換關係複習",keyFormulas:["Eₖ=½mv²","Eₚ=mgh","W=Fscosθ"]}],
    // Week 6
    [{week:6,dayOfWeek:"monday",stage:1,mathTopic:"廣義角三角函數、同界角與極座標",mathDetail:"ASTC 象限符號判斷，sin(π-θ)=sinθ 等公式",physicsTopic:"力學能守恆定律觀念",physicsDetail:"動能+位能=常數（無摩擦），Eₖ₁+Eₚ₁=Eₖ₂+Eₚ₂",keyFormulas:["Eₖ+Eₚ=常數","½mv₁²+mgh₁=½mv₂²+mgh₂"]},
     {week:6,dayOfWeek:"tuesday",stage:1,mathTopic:"正弦定理公式與應用",mathDetail:"a/sinA=b/sinB=c/sinC=2R，用於已知兩角一邊",physicsTopic:"力學能守恆於自由落體與斜面應用題",physicsDetail:"拋體、滾動體的能量轉換",keyFormulas:["a/sinA = 2R","正弦定理三種形式"]},
     {week:6,dayOfWeek:"wednesday",stage:1,mathTopic:"餘弦定理公式與應用",mathDetail:"c²=a²+b²-2ab cosC，用於三邊或兩邊夾角",physicsTopic:"彈性位能公式與計算",physicsDetail:"Eₚ=½kx²，彈簧彈力 F=kx（虎克定律）",keyFormulas:["c²=a²+b²-2abcosC","Eₚ=½kx²","F=kx"]},
     {week:6,dayOfWeek:"thursday",stage:1,mathTopic:"正餘弦定理綜合題演練與檢討",mathDetail:"判斷用正弦還是餘弦定理的條件",physicsTopic:"力學能與彈性位能綜合題練習",physicsDetail:"彈簧系統的能量守恆",keyFormulas:["正弦定理 vs 餘弦定理判斷"]},
     {week:6,dayOfWeek:"friday",stage:1,mathTopic:"本週三角函數核心公式總整理",mathDetail:"整理所有三角恆等式與定理到公式卡",physicsTopic:"力學能守恆錯題重算",physicsDetail:"確認能量守恆計算無誤",keyFormulas:["第5-6週公式整理"]}],
    // Week 7
    [{week:7,dayOfWeek:"monday",stage:1,mathTopic:"指數律與指數函數基礎",mathDetail:"aᵐ×aⁿ=aᵐ⁺ⁿ，(aᵐ)ⁿ=aᵐⁿ，負指數與分數指數",physicsTopic:"動量定義與衝量觀念",physicsDetail:"p=mv（向量），衝量 J=FΔt=Δp",keyFormulas:["p = mv","J = FΔt = Δp","aᵐ×aⁿ=aᵐ⁺ⁿ"]},
     {week:7,dayOfWeek:"tuesday",stage:1,mathTopic:"對數定義與對數律",mathDetail:"logₐb 定義，log(xy)=logx+logy，log(x/y)=logx-logy",physicsTopic:"動量守恆定律",physicsDetail:"碰撞前後動量總和不變（無外力），m₁v₁+m₂v₂=m₁v₁'+m₂v₂'",keyFormulas:["m₁v₁+m₂v₂=m₁v₁'+m₂v₂'","log(xy)=logx+logy"]},
     {week:7,dayOfWeek:"wednesday",stage:1,mathTopic:"常用對數計算與查表",mathDetail:"log2≈0.3010, log3≈0.4771 熟記，log5=log(10/2)=1-log2",physicsTopic:"碰撞問題觀念",physicsDetail:"完全彈性碰撞（動能守恆+動量守恆），完全非彈性碰撞（合為一體）",keyFormulas:["log2≈0.3010","log3≈0.4771","log5≈0.6990"]},
     {week:7,dayOfWeek:"thursday",stage:1,mathTopic:"指對數方程式與不等式題型檢討",mathDetail:"換底公式 logₐb=logb/loga，解指數/對數方程式",physicsTopic:"動量守恆與碰撞應用題演練",physicsDetail:"多物體碰撞計算，注意向量方向",keyFormulas:["換底公式 logₐb=logb/loga"]},
     {week:7,dayOfWeek:"friday",stage:1,mathTopic:"對數律變換公式弱點加強",mathDetail:"限時練習對數計算20題",physicsTopic:"動量與碰撞錯題總檢討",physicsDetail:"整理碰撞題型分類",keyFormulas:["第7週公式整理"]}],
    // Week 8
    [{week:8,dayOfWeek:"monday",stage:1,mathTopic:"一元二次方程式速解、因式分解",mathDetail:"十字交乘、提公因式，注意根的正負與題意",physicsTopic:"等速率圓周運動基礎",physicsDetail:"角速度ω=2π/T，線速度v=rω，週期T與頻率f=1/T",keyFormulas:["v=rω","ω=2π/T","f=1/T"]},
     {week:8,dayOfWeek:"tuesday",stage:1,mathTopic:"配方法與一元二次公式解",mathDetail:"x=(-b±√(b²-4ac))/2a，判別式 Δ=b²-4ac",physicsTopic:"向心力與向心加速度公式",physicsDetail:"aᶜ=v²/r=rω²，向心力 F=mv²/r（指向圓心）",keyFormulas:["aᶜ=v²/r","Fᶜ=mv²/r","Δ=b²-4ac"]},
     {week:8,dayOfWeek:"wednesday",stage:1,mathTopic:"一元二次方程式根與係數關係題",mathDetail:"韋達定理：x₁+x₂=-b/a，x₁×x₂=c/a",physicsTopic:"圓周運動與向心力應用（飛機轉彎與 G 力來源）",physicsDetail:"飛機盤旋：升力提供向心力，G力=L/W，傾斜角θ：tanθ=v²/rg",keyFormulas:["飛機轉彎 tanθ=v²/rg","G力=合力/重力","x₁+x₂=-b/a"]},
     {week:8,dayOfWeek:"thursday",stage:1,mathTopic:"二次方程式綜合題型錯誤檢討",mathDetail:"整理判別式應用與根的討論",physicsTopic:"向心力與圓周運動題型演練檢討",physicsDetail:"飛機轉彎半徑計算，G 力計算",keyFormulas:["Fᶜ=mv²/r","G力計算"]},
     {week:8,dayOfWeek:"friday",stage:1,mathTopic:"第 5-8 週數學章節錯題總複習",mathDetail:"三角函數+指對數+二次方程全範圍錯題重算",physicsTopic:"第 5-8 週物理章節錯題總複習",physicsDetail:"能量守恆+動量+圓周運動全範圍複習",keyFormulas:["第5-8週階段複習"]}],
    // Week 9
    [{week:9,dayOfWeek:"monday",stage:1,mathTopic:"等差數列與等差級數求和",mathDetail:"aₙ=a₁+(n-1)d，Sₙ=n(a₁+aₙ)/2=n/2×[2a₁+(n-1)d]",physicsTopic:"流體壓力與大氣壓力觀念",physicsDetail:"P=F/A，大氣壓 1 atm=101325 Pa≈760 mmHg，高空氣壓遞減",keyFormulas:["aₙ=a₁+(n-1)d","Sₙ=n(a₁+aₙ)/2","P=F/A","1atm≈101325Pa"]},
     {week:9,dayOfWeek:"tuesday",stage:1,mathTopic:"等比數列與等比級數公式",mathDetail:"aₙ=a₁rⁿ⁻¹，Sₙ=a₁(1-rⁿ)/(1-r)，r≠1",physicsTopic:"液體浮力與阿基米德原理",physicsDetail:"浮力 F=ρVg（排開液體重），浮沈條件",keyFormulas:["F浮=ρ液Vg","aₙ=a₁rⁿ⁻¹","Sₙ=a₁(1-rⁿ)/(1-r)"]},
     {week:9,dayOfWeek:"wednesday",stage:1,mathTopic:"級數求和公式與 Σ 符號計算",mathDetail:"Σ符號使用，特殊級數求和（1+2+...+n=n(n+1)/2）",physicsTopic:"帕斯卡原理與流體連續性方程式",physicsDetail:"A₁v₁=A₂v₂（連續性方程式），面積小速度大",keyFormulas:["A₁v₁=A₂v₂","Σk=n(n+1)/2"]},
     {week:9,dayOfWeek:"thursday",stage:1,mathTopic:"數列與級數綜合題型檢討",mathDetail:"等差等比混合題，找規律題型",physicsTopic:"白努利定律（機翼產生升力的核心原理，極重要）",physicsDetail:"P+½ρv²+ρgh=常數，機翼上方流速快→壓力低→升力產生",keyFormulas:["P+½ρv²+ρgh=常數","升力原理：上快下慢→壓差"]},
     {week:9,dayOfWeek:"friday",stage:1,mathTopic:"等比級數公式弱點強化",mathDetail:"無窮等比級數：|r|<1 時 S=a₁/(1-r)",physicsTopic:"浮力與白努利定律綜合應用題",physicsDetail:"航空升力計算情境題，白努利方程應用",keyFormulas:["白努利定律","升力 L = CL × ½ρv²S"]}],
    // Week 10
    [{week:10,dayOfWeek:"monday",stage:1,mathTopic:"直線排列與 P 的計算",mathDetail:"Pₙᵣ=n!/(n-r)!，從 n 取 r 個排列",physicsTopic:"溫度計原理與溫標換算",physicsDetail:"°C與°F換算：°F=°C×9/5+32，絕對溫標 K=°C+273",keyFormulas:["°F=°C×9/5+32","K=°C+273","Pₙᵣ=n!/(n-r)!"]},
     {week:10,dayOfWeek:"tuesday",stage:1,mathTopic:"重複排列與基本計數原理",mathDetail:"加法原理、乘法原理，重複排列 nʳ",physicsTopic:"熱量計算與比熱公式",physicsDetail:"Q=mcΔT，比熱 c（水 c=4200 J/kg·K），注意 ΔT 方向",keyFormulas:["Q = mcΔT","水 c = 4200 J/kg·K"]},
     {week:10,dayOfWeek:"wednesday",stage:1,mathTopic:"組合定義與 C 的計算、巴斯卡三角形",mathDetail:"Cₙᵣ=n!/(r!(n-r)!)，與排列的關係 Pₙᵣ=r!×Cₙᵣ",physicsTopic:"物質三態變化與潛熱觀念",physicsDetail:"熔化潛熱、汽化潛熱，相變時溫度不變 Q=mL",keyFormulas:["Q=mL（潛熱）","Cₙᵣ=n!/r!(n-r)!"]},
     {week:10,dayOfWeek:"thursday",stage:1,mathTopic:"排列與組合混合應用題演練",mathDetail:"分組、圓排列、有限制條件的排列組合",physicsTopic:"熱傳導、熱對流與熱輻射觀念",physicsDetail:"三種熱傳遞方式在航空器上的應用（機艙保溫、引擎冷卻）",keyFormulas:["圓排列=(n-1)!","Cₙ₀+Cₙ₁+...+Cₙₙ=2ⁿ"]},
     {week:10,dayOfWeek:"friday",stage:1,mathTopic:"排列組合易混淆題型錯誤檢討",mathDetail:"重新整理 P 與 C 的使用時機",physicsTopic:"熱量與比熱綜合題演練檢討",physicsDetail:"混合溶液的熱平衡計算",keyFormulas:["第9-10週公式整理"]}],
    // Week 11
    [{week:11,dayOfWeek:"monday",stage:1,mathTopic:"集合概念與古典機率定義",mathDetail:"P(A)=有利結果數/樣本空間總數，0≤P≤1",physicsTopic:"氣體壓力與體積關係（波以耳定律）",physicsDetail:"P₁V₁=P₂V₂（T不變），高空氣壓低→體積膨脹（機艙增壓原因）",keyFormulas:["P₁V₁=P₂V₂（波以耳）","P(A)=n(A)/n(S)"]},
     {week:11,dayOfWeek:"tuesday",stage:1,mathTopic:"條件機率與獨立事件觀念",mathDetail:"P(A|B)=P(A∩B)/P(B)，獨立：P(A∩B)=P(A)P(B)",physicsTopic:"溫度與體積關係（查理定律）",physicsDetail:"V₁/T₁=V₂/T₂（P不變），T 必須用絕對溫標(K)",keyFormulas:["V₁/T₁=V₂/T₂（查理）","T(K)=T(°C)+273"]},
     {week:11,dayOfWeek:"wednesday",stage:1,mathTopic:"期望值公式與計算",mathDetail:"E(X)=Σ[xᵢ×P(xᵢ)]，期望值的物理意義",physicsTopic:"理想氣體方程式",physicsDetail:"PV=nRT（R=8.314 J/mol·K），高空：P低T低→密度低→引擎進氣量少",keyFormulas:["PV=nRT","E(X)=Σxᵢ·P(xᵢ)","R=8.314 J/mol·K"]},
     {week:11,dayOfWeek:"thursday",stage:1,mathTopic:"機率與期望值綜合題型檢討",mathDetail:"複合事件、期望值在決策中的應用",physicsTopic:"理想氣體與氣體定律綜合題演練",physicsDetail:"航空應用：不同高度的氣壓/密度計算，密度高度概念",keyFormulas:["密度 = PM/RT","綜合氣體定律 P₁V₁/T₁=P₂V₂/T₂"]},
     {week:11,dayOfWeek:"friday",stage:1,mathTopic:"機率觀念統整與計算複習",mathDetail:"整理所有機率公式，做20題速算",physicsTopic:"氣體定律與高空氣壓觀念題目加強",physicsDetail:"密度高度、壓力高度，對飛機性能影響",keyFormulas:["第11週公式整理"]}],
    // Week 12
    [{week:12,dayOfWeek:"monday",stage:1,mathTopic:"統計圖表、平均數、中位數、眾數",mathDetail:"三種集中趨勢的計算與差異，資料排列後讀值",physicsTopic:"庫倫定律與靜電學基礎",physicsDetail:"F=kq₁q₂/r²，k=9×10⁹ N·m²/C²，靜電感應",keyFormulas:["F=kq₁q₂/r²","k=9×10⁹"]},
     {week:12,dayOfWeek:"tuesday",stage:1,mathTopic:"標準差公式與計算意義",mathDetail:"σ=√(Σ(xᵢ-x̄)²/n)，標準差代表資料分散程度",physicsTopic:"電流、電壓定義與歐姆定律",physicsDetail:"I=Q/t，V=IR，電阻R（Ω），導體/絕緣體概念",keyFormulas:["V=IR","I=Q/t","σ=√(Σ(xᵢ-x̄)²/n)"]},
     {week:12,dayOfWeek:"wednesday",stage:1,mathTopic:"數據分析、相關係數基礎觀念",mathDetail:"正/負相關的散佈圖判讀，-1≤r≤1",physicsTopic:"電路串聯與並聯分析",physicsDetail:"串聯：I相同，V=V₁+V₂，R總=R₁+R₂；並聯：V相同，I=I₁+I₂，1/R總=1/R₁+1/R₂",keyFormulas:["串聯 R=R₁+R₂","並聯 1/R=1/R₁+1/R₂"]},
     {week:12,dayOfWeek:"thursday",stage:1,mathTopic:"數據分析與統計題型錯誤檢討",mathDetail:"整理常見統計圖表題型",physicsTopic:"電功率與焦耳定律",physicsDetail:"P=IV=I²R=V²/R，電熱 Q=I²Rt=Pt，航電系統功率計算",keyFormulas:["P=IV=I²R=V²/R","Q=I²Rt"]},
     {week:12,dayOfWeek:"friday",stage:1,mathTopic:"第一階段數學全範圍大盤點",mathDetail:"1-12週所有公式整理，建立完整公式卡冊",physicsTopic:"第一階段物理全範圍大盤點",physicsDetail:"力學→熱學→流體→電學全面複習，標記弱點",keyFormulas:["第一階段完整複習"]}],
    // Weeks 13-16: Stage 2
    [{week:13,dayOfWeek:"monday",stage:2,mathTopic:"題海：力學與幾何/向量（25題）",mathDetail:"狂刷統測/學測歷屆試題，不准用計算機，限時50分鐘",physicsTopic:"題海：力學與幾何/向量（25題）",physicsDetail:"牛頓力學、向量合力、斜面綜合題，嚴格計時",keyFormulas:["限時手算","不得使用計算機"]},
     {week:13,dayOfWeek:"tuesday",stage:2,mathTopic:"題海：熱學/流體與三角函數/指對數（25題）",mathDetail:"混合題海，提升答題速度與正確率",physicsTopic:"題海：熱學/流體與三角函數/指對數（25題）",physicsDetail:"白努利+三角函數應用+氣體定律混合",keyFormulas:["答題速度目標：1題/2分鐘"]},
     {week:13,dayOfWeek:"wednesday",stage:2,mathTopic:"題海：電學/波動與排列組合/機率（25題）",mathDetail:"第三大類主題題海，注意機率題的文字理解",physicsTopic:"題海：電學/波動與排列組合/機率（25題）",physicsDetail:"電路+機率+數列混合，強化弱項",keyFormulas:["本週主題：全範圍速度訓練"]},
     {week:13,dayOfWeek:"thursday",stage:2,mathTopic:"當週全範圍錯題詳細訂正與重算",mathDetail:"剪貼錯題、分析錯誤原因、重新手算",physicsTopic:"當週全範圍錯題詳細訂正與重算",physicsDetail:"建立錯題本，標記高頻錯誤觀念",keyFormulas:["錯題分析與整理"]},
     {week:13,dayOfWeek:"friday",stage:2,mathTopic:"限時快算特訓（50題 / 50分鐘）",mathDetail:"設計時器，嚴格1分鐘1題，卡關直接跳過",physicsTopic:"限時快算特訓（50題 / 50分鐘）",physicsDetail:"模擬考場節奏，訓練時間感",keyFormulas:["目標：50題/50分鐘"]}],
     ...[14,15,16].map(w=>([
      {week:w,dayOfWeek:"monday" as const,stage:2 as const,mathTopic:"題海：力學與幾何/向量（25題）",mathDetail:"持續刷題，不准用計算機",physicsTopic:"力學與幾何/向量混合題海",physicsDetail:"提升速度與穩定度",keyFormulas:["限時手算"]},
      {week:w,dayOfWeek:"tuesday" as const,stage:2 as const,mathTopic:"題海：熱學/流體與三角函數（25題）",mathDetail:"第二類主題混合刷題",physicsTopic:"熱學流體混合題海",physicsDetail:"白努利+氣體定律強化",keyFormulas:["速度目標提升"]},
      {week:w,dayOfWeek:"wednesday" as const,stage:2 as const,mathTopic:"題海：電學與機率/數列（25題）",mathDetail:"第三類主題刷題",physicsTopic:"電學機率混合題海",physicsDetail:"弱點補強",keyFormulas:["全範圍覆蓋"]},
      {week:w,dayOfWeek:"thursday" as const,stage:2 as const,mathTopic:"全範圍錯題詳細訂正",mathDetail:"本週錯題深度分析",physicsTopic:"全範圍錯題詳細訂正",physicsDetail:"建立最終錯題本",keyFormulas:["錯題整理"]},
      {week:w,dayOfWeek:"friday" as const,stage:2 as const,mathTopic:`限時快算特訓（50題 / 50分鐘）第${w-12}回`,mathDetail:"設計時器，嚴格1分鐘1題",physicsTopic:"限時快算特訓",physicsDetail:"模擬考場節奏",keyFormulas:["目標50題50分鐘"]}
     ])).flat(),
    // Weeks 17-20: Stage 3
    ...[17,18,19,20].map(w=>([
      {week:w,dayOfWeek:"monday" as const,stage:3 as const,mathTopic:"英文航空數理題練習",mathDetail:"Lift, Thrust, Drag, Altimeter, Airspeed 等術語中英切換",physicsTopic:"FAA PPL 題庫英文題練習",physicsDetail:"熟悉英文題目格式，practice with FAA written test bank",keyFormulas:["Lift, Thrust, Drag, Weight","IAS/TAS/GS 換算","Density Altitude"]},
      {week:w,dayOfWeek:"tuesday" as const,stage:3 as const,mathTopic:"英文航空術語全面複習",mathDetail:"建立中英對照詞彙表，重點：導航、氣象、性能術語",physicsTopic:"FAA 題庫練習（繼續）",physicsDetail:"每日至少完成30題FAA題庫，記錄錯題",keyFormulas:["航空英文詞彙表"]},
      {week:w,dayOfWeek:"wednesday" as const,stage:3 as const,mathTopic:"全範圍模擬考（嚴格限時）",mathDetail:"1分鐘1題，卡住15秒直接盲猜跳過，模擬真實考場",physicsTopic:"全範圍模擬考（嚴格限時）",physicsDetail:"嚴格計時，訓練心理抗壓能力",keyFormulas:["1題/分鐘","卡15秒→盲猜跳過"]},
      {week:w,dayOfWeek:"thursday" as const,stage:3 as const,mathTopic:"全範圍模擬考（第二場）",mathDetail:"針對週三弱項加強，再次限時演練",physicsTopic:"全範圍模擬考（第二場）",physicsDetail:"提高穩定度，目標達到80分以上",keyFormulas:["目標：模擬考80分以上"]},
      {week:w,dayOfWeek:"friday" as const,stage:3 as const,mathTopic:"錯題本最後盲測",mathDetail:"不看解答，直接作答錯題本所有題目，確保不重複犯錯",physicsTopic:"錯題本最後盲測",physicsDetail:"考前最後確認，建立信心",keyFormulas:["考前最後盲測"]}
     ])).flat()
  ];
  return weeks.flat().map((d,i)=>({...d,id:`w${d.week}d${i}`}));
}
