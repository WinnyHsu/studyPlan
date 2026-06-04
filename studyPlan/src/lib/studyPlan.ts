import { StudyPlanItem } from '@/types'

// ============================================================
// 20 週讀書計畫完整資料
// ============================================================

export const STUDY_PLAN: StudyPlanItem[] = [
  // ── 第一階段 第 1 週 ──
  { week: 1, day: '週一', mathTopic: '國中幾何、畢氏定理', physicsTopic: '基礎單位換算（長度、重量、knots 與 km/h 互換）', keyFormulas: ['a²+b²=c²', '1 knot = 1.852 km/h'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 1, day: '週二', mathTopic: '相似形與比例觀念', physicsTopic: '直線運動基本定義（位移、路徑長、平均速度）', keyFormulas: ['v = Δx/Δt'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 1, day: '週三', mathTopic: '國中幾何與相似形綜合題練習', physicsTopic: '加速度運動與 v-t 圖、x-t 圖圖形意義', keyFormulas: ['a = Δv/Δt'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 1, day: '週四', mathTopic: '幾何基礎題型錯誤檢討', physicsTopic: '等加速度運動三大公式推導與手算', keyFormulas: ['v=v₀+at', 'x=v₀t+½at²', 'v²=v₀²+2ax'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 1, day: '週五', mathTopic: '本週數學弱點總複習', physicsTopic: '本週物理錯題重算與概念統整', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },

  // ── 第 2 週 ──
  { week: 2, day: '週一', mathTopic: '直線方程式、斜率定義', physicsTopic: '牛頓第一運動定律（慣性定律觀念）', keyFormulas: ['y=mx+b', 'm=(y₂-y₁)/(x₂-x₁)'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 2, day: '週二', mathTopic: '平面兩點距離公式、中點公式', physicsTopic: '牛頓第二運動定律（F=ma 基礎觀念）', keyFormulas: ['d=√((x₂-x₁)²+(y₂-y₁)²)', 'F=ma'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 2, day: '週三', mathTopic: '直線方程式與斜率綜合題演練', physicsTopic: '摩擦力（靜摩擦、最大靜摩擦、動摩擦力）', keyFormulas: ['f=μN'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 2, day: '週四', mathTopic: '直線與兩點距離題型錯題檢討', physicsTopic: '重力與地心加速度計算', keyFormulas: ['W=mg', 'g≈9.8 m/s²'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 2, day: '週五', mathTopic: '本週數學公式統整與複習', physicsTopic: 'F=ma 與摩擦力綜合題演練', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },

  // ── 第 3 週 ──
  { week: 3, day: '週一', mathTopic: '平面向量基本定義、加減法', physicsTopic: '牛頓第三運動定律（作用力與反作用力）', keyFormulas: ['→a+→b', '→a-→b', 'F₁₂=-F₂₁'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 3, day: '週二', mathTopic: '向量內積公式與幾何意義', physicsTopic: '向量的力分解（斜面上的受力分析）', keyFormulas: ['→a·→b=|a||b|cosθ', 'F‖=Fsinθ', 'F⊥=Fcosθ'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 3, day: '週三', mathTopic: '向量正射影計算（與風向、航向修正高度相關）', physicsTopic: '斜面受力與摩擦力綜合應用題', keyFormulas: ['proj_b(a)=(→a·→b)/|→b|'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 3, day: '週四', mathTopic: '平面向量綜合題型錯誤檢討', physicsTopic: '力分解與牛頓三大定律全範圍練習', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 3, day: '週五', mathTopic: '向量與正射影公式弱點複習', physicsTopic: '本週物理力學錯題重算', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },

  // ── 第 4 週 ──
  { week: 4, day: '週一', mathTopic: '空間向量基礎、三維座標系定義', physicsTopic: '靜力平衡條件（合力為零）', keyFormulas: ['ΣF=0'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 4, day: '週二', mathTopic: '空間中兩點距離與空間向量加減', physicsTopic: '力矩定義與計算（L=F×d）', keyFormulas: ['L=F×d', 'τ=rFsinθ'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 4, day: '週三', mathTopic: '空間座標與向量綜合題練習', physicsTopic: '槓桿原理與轉動平衡（飛機重心 CG 計算基礎）', keyFormulas: ['F₁d₁=F₂d₂'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 4, day: '週四', mathTopic: '空間幾何題型錯誤檢討', physicsTopic: '靜力平衡、力矩與槓桿綜合題演練', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 4, day: '週五', mathTopic: '前四週數學（幾何與向量）大複習', physicsTopic: '前四週物理（力學大魔王）大複習', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },

  // ── 第 5 週 ──
  { week: 5, day: '週一', mathTopic: '銳角三角函數定義（sin, cos, tan）', physicsTopic: '功的定義與計算（W=Fs）', keyFormulas: ['sinθ=對邊/斜邊', 'cosθ=鄰邊/斜邊', 'W=Fs'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 5, day: '週二', mathTopic: '特殊角（30°, 45°, 60°）數值熟記', physicsTopic: '功率的定義與單位換算（P=W/t）', keyFormulas: ['sin30°=½', 'cos60°=½', 'tan45°=1', 'P=W/t'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 5, day: '週三', mathTopic: '三角函數基礎邊長與角度變換題', physicsTopic: '動能公式與計算（Ek=½mv²）', keyFormulas: ['Ek=½mv²'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 5, day: '週四', mathTopic: '特殊角變換題型錯誤檢討', physicsTopic: '重力位能公式與計算（Ep=mgh）', keyFormulas: ['Ep=mgh'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 5, day: '週五', mathTopic: '三角函數定義複習與速算', physicsTopic: '功、功率與動能位能綜合題', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },

  // ── 第 6 週 ──
  { week: 6, day: '週一', mathTopic: '廣義角三角函數、同界角與極座標', physicsTopic: '力學能守恆定律觀念（動能與位能轉換）', keyFormulas: ['Ek+Ep=constant'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 6, day: '週二', mathTopic: '正弦定理公式與應用', physicsTopic: '力學能守恆於自由落體與斜面應用題', keyFormulas: ['a/sinA=b/sinB=c/sinC'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 6, day: '週三', mathTopic: '餘弦定理公式與應用', physicsTopic: '彈性位能公式與計算（Ep=½kx²）', keyFormulas: ['c²=a²+b²-2ab·cosC', 'Ep=½kx²'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 6, day: '週四', mathTopic: '正餘弦定理綜合題演練與檢討', physicsTopic: '力學能與彈性位能綜合題練習', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 6, day: '週五', mathTopic: '本週三角函數核心公式總整理', physicsTopic: '力學能守恆錯題重算', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },

  // ── 第 7 週 ──
  { week: 7, day: '週一', mathTopic: '指數律與指數函數基礎', physicsTopic: '動量定義與衝量觀念（p=mv）', keyFormulas: ['aᵐ·aⁿ=aᵐ⁺ⁿ', 'p=mv'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 7, day: '週二', mathTopic: '對數定義與對數律（log 的變換）', physicsTopic: '動量守恆定律', keyFormulas: ['logₐ(xy)=logₐx+logₐy', 'p₁+p₂=p₁\'+p₂\''], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 7, day: '週三', mathTopic: '常用對數計算與查表（log2≈0.3010, log3≈0.4771 熟記）', physicsTopic: '碰撞問題觀念（彈性與非彈性碰撞）', keyFormulas: ['log2≈0.3010', 'log3≈0.4771'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 7, day: '週四', mathTopic: '指對數方程式與不等式題型檢討', physicsTopic: '動量守恆與碰撞應用題演練', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 7, day: '週五', mathTopic: '對數律變換公式弱點加強', physicsTopic: '動量與碰撞錯題總檢討', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },

  // ── 第 8 週 ──
  { week: 8, day: '週一', mathTopic: '一元二次方程式速解、因式分解', physicsTopic: '等速率圓周運動基礎（角速度、線速度）', keyFormulas: ['ω=2π/T', 'v=rω'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 8, day: '週二', mathTopic: '配方法與一元二次公式解', physicsTopic: '向心力與向心加速度公式', keyFormulas: ['x=(-b±√(b²-4ac))/2a', 'ac=v²/r=rω²'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 8, day: '週三', mathTopic: '一元二次方程式根與係數關係題', physicsTopic: '圓周運動與向心力應用（飛機轉彎與G力來源）', keyFormulas: ['Fc=mv²/r'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 8, day: '週四', mathTopic: '二次方程式綜合題型錯誤檢討', physicsTopic: '向心力與圓周運動題型演練檢討', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 8, day: '週五', mathTopic: '第 5-8 週數學章節錯題總複習', physicsTopic: '第 5-8 週物理章節錯題總複習', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },

  // ── 第 9 週 ──
  { week: 9, day: '週一', mathTopic: '等差數列與等差級數求和', physicsTopic: '流體壓力與大氣壓力觀念', keyFormulas: ['Sn=n(a₁+aₙ)/2', 'P=F/A'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 9, day: '週二', mathTopic: '等比數列與等比級數公式', physicsTopic: '液體浮力與阿基米德原理', keyFormulas: ['Sn=a₁(1-rⁿ)/(1-r)', 'F浮=ρVg'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 9, day: '週三', mathTopic: '級數求和公式與Σ符號計算', physicsTopic: '帕斯卡原理與流體連續性方程式', keyFormulas: ['A₁v₁=A₂v₂'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 9, day: '週四', mathTopic: '數列與級數綜合題型檢討', physicsTopic: '白努利定律（機翼產生升力的核心原理，極重要）', keyFormulas: ['P+½ρv²+ρgh=constant'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 9, day: '週五', mathTopic: '等比級數公式弱點強化', physicsTopic: '浮力與白努利定律綜合應用題', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },

  // ── 第 10 週 ──
  { week: 10, day: '週一', mathTopic: '直線排列與P的計算', physicsTopic: '溫度計原理與溫標換算（°C 與 °F）', keyFormulas: ['P(n,r)=n!/(n-r)!', '°F=°C×9/5+32'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 10, day: '週二', mathTopic: '重複排列與基本計數原理', physicsTopic: '熱量計算與比熱公式（H=msΔT）', keyFormulas: ['H=msΔT'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 10, day: '週三', mathTopic: '組合定義與C的計算、巴斯卡三角形', physicsTopic: '物質三態變化與潛熱觀念', keyFormulas: ['C(n,r)=n!/(r!(n-r)!)'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 10, day: '週四', mathTopic: '排列與組合混合應用題演練', physicsTopic: '熱傳導、熱對流與熱輻射觀念', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 10, day: '週五', mathTopic: '排列組合易混淆題型錯誤檢討', physicsTopic: '熱量與比熱綜合題演練檢討', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },

  // ── 第 11 週 ──
  { week: 11, day: '週一', mathTopic: '集合概念與古典機率定義', physicsTopic: '氣體壓力與體積關係（波以耳定律）', keyFormulas: ['P(A)=n(A)/n(S)', 'PV=constant (T固定)'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 11, day: '週二', mathTopic: '條件機率與獨立事件觀念', physicsTopic: '溫度與體積關係（查理定律）', keyFormulas: ['P(A|B)=P(A∩B)/P(B)', 'V/T=constant (P固定)'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 11, day: '週三', mathTopic: '期望值公式與計算', physicsTopic: '理想氣體方程式（PV=nRT 高空壓力與密度關係）', keyFormulas: ['E(X)=Σx·P(x)', 'PV=nRT'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 11, day: '週四', mathTopic: '機率與期望值綜合題型檢討', physicsTopic: '理想氣體與氣體定律綜合題演練', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 11, day: '週五', mathTopic: '機率觀念統整與計算複習', physicsTopic: '氣體定律與高空氣壓觀念題目加強', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },

  // ── 第 12 週 ──
  { week: 12, day: '週一', mathTopic: '統計圖表、平均數、中位數、眾數', physicsTopic: '庫倫定律與靜電學基礎', keyFormulas: ['F=kq₁q₂/r²'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 12, day: '週二', mathTopic: '標準差公式與計算意義', physicsTopic: '電流、電壓定義與歐姆定律（V=IR）', keyFormulas: ['V=IR'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 12, day: '週三', mathTopic: '數據分析、相關係數基礎觀念', physicsTopic: '電路串聯與並聯分析', keyFormulas: ['R串=R₁+R₂', '1/R並=1/R₁+1/R₂'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 12, day: '週四', mathTopic: '數據分析與統計題型錯誤檢討', physicsTopic: '電功率與焦耳定律（P=IV=I²R）', keyFormulas: ['P=IV=I²R=V²/R'], stage: 'phase1', stageName: '第一階段：觀念地基' },
  { week: 12, day: '週五', mathTopic: '第一階段數學全範圍大盤點', physicsTopic: '第一階段物理全範圍大盤點', keyFormulas: [], stage: 'phase1', stageName: '第一階段：觀念地基' },

  // ── 第二階段 第 13-16 週 ──
  ...[13, 14, 15, 16].flatMap(week => [
    { week, day: '週一', mathTopic: '專攻「力學與幾何/向量」綜合題海（25題）', physicsTopic: '力學與幾何/向量 高速手算', keyFormulas: [], stage: 'phase2' as const, stageName: '第二階段：題海戰術' },
    { week, day: '週二', mathTopic: '專攻「熱學/流體與三角函數/指對數」綜合題海（25題）', physicsTopic: '熱學/流體 高速手算', keyFormulas: [], stage: 'phase2' as const, stageName: '第二階段：題海戰術' },
    { week, day: '週三', mathTopic: '專攻「電學/波動與排列組合/機率」綜合題海（25題）', physicsTopic: '電學/波動 高速手算', keyFormulas: [], stage: 'phase2' as const, stageName: '第二階段：題海戰術' },
    { week, day: '週四', mathTopic: '當週全範圍錯題詳細剪貼、訂正與重算', physicsTopic: '錯題整理', keyFormulas: [], stage: 'phase2' as const, stageName: '第二階段：題海戰術' },
    { week, day: '週五', mathTopic: '限時快算特訓（50題 / 50分鐘）', physicsTopic: '計時器特訓', keyFormulas: [], stage: 'phase2' as const, stageName: '第二階段：題海戰術' },
  ]),

  // ── 第三階段 第 17-20 週 ──
  ...[17, 18, 19, 20].flatMap(week => [
    { week, day: '週一', mathTopic: '英文航空數理題 — Lift, Thrust, Altimeter 等專有名詞', physicsTopic: '航空英文術語中英文切換練習', keyFormulas: ['Lift', 'Thrust', 'Drag', 'Altimeter', 'Pitot tube'], stage: 'phase3' as const, stageName: '第三階段：模擬考場' },
    { week, day: '週二', mathTopic: '英文航空數理題練習', physicsTopic: '英文數理題型熟悉', keyFormulas: [], stage: 'phase3' as const, stageName: '第三階段：模擬考場' },
    { week, day: '週三', mathTopic: '全範圍模擬考（1分鐘/題，卡住15秒直接盲猜跳過）', physicsTopic: '全範圍模擬考', keyFormulas: [], stage: 'phase3' as const, stageName: '第三階段：模擬考場' },
    { week, day: '週四', mathTopic: '全範圍模擬考與錯題分析', physicsTopic: '全範圍模擬考', keyFormulas: [], stage: 'phase3' as const, stageName: '第三階段：模擬考場' },
    { week, day: '週五', mathTopic: '針對錯題本進行最後盲測', physicsTopic: '確保考場上絕不重複犯錯', keyFormulas: [], stage: 'phase3' as const, stageName: '第三階段：模擬考場' },
  ]),
]

// 根據開始日期計算每個任務的實際日期
export function assignDates(plan: StudyPlanItem[], startDate: Date): StudyPlanItem[] {
  const DAY_MAP: Record<string, number> = { '週一': 0, '週二': 1, '週三': 2, '週四': 3, '週五': 4 }
  return plan.map(item => {
    const weekOffset = (item.week - 1) * 7
    const dayOffset = DAY_MAP[item.day] ?? 0
    const date = new Date(startDate)
    date.setDate(date.getDate() + weekOffset + dayOffset)
    return { ...item, date: date.toISOString().split('T')[0] }
  })
}

// 根據日期找到對應的計畫項目
export function getPlanForDate(date: string, startDate: Date): StudyPlanItem | null {
  const withDates = assignDates(STUDY_PLAN, startDate)
  return withDates.find(item => item.date === date) ?? null
}

// 根據週數找到所有計畫項目
export function getPlanForWeek(week: number): StudyPlanItem[] {
  return STUDY_PLAN.filter(item => item.week === week)
}

// 計算今天是第幾週
export function getCurrentWeek(startDate: Date): number {
  const now = new Date()
  const diffMs = now.getTime() - startDate.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  return Math.min(20, Math.max(1, Math.floor(diffDays / 7) + 1))
}
