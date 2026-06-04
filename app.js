const OFFICIAL_INDEX =
  "https://www.retio.or.jp/exam/past_ques_ans/other/";

const EXAMS = [
  {
    id: "r7",
    label: "令和7年度",
    year: "2025",
    source:
      "https://www.retio.or.jp/wp-content/uploads/2025/12/R7_question_answer.pdf",
  },
  {
    id: "r6",
    label: "令和6年度",
    year: "2024",
    source:
      "https://www.retio.or.jp/wp-content/uploads/2025/03/R6_question_answer.pdf",
  },
  {
    id: "r5",
    label: "令和5年度",
    year: "2023",
    source:
      "https://www.retio.or.jp/wp-content/uploads/2025/03/R5_qestion_answer%E3%80%80.pdf",
  },
  {
    id: "r4",
    label: "令和4年度",
    year: "2022",
    source: "https://www.retio.or.jp/wp-content/uploads/2024/10/R4-q_a.pdf",
  },
  {
    id: "r3-12",
    label: "令和3年度 12月試験",
    year: "2021",
    source:
      "https://www.retio.or.jp/wp-content/uploads/2024/12/R3-question_002.pdf",
  },
  {
    id: "r3-10",
    label: "令和3年度 10月試験",
    year: "2021",
    source: "https://www.retio.or.jp/wp-content/uploads/2024/12/R3-question.pdf",
  },
  {
    id: "r2-12",
    label: "令和2年度 12月試験",
    year: "2020",
    source:
      "https://www.retio.or.jp/wp-content/uploads/2024/10/R2-question_002.pdf",
  },
  {
    id: "r2-10",
    label: "令和2年度 10月試験",
    year: "2020",
    source: "https://www.retio.or.jp/wp-content/uploads/2024/10/R2-question.pdf",
  },
  {
    id: "r1",
    label: "令和元年度",
    year: "2019",
    source: "https://www.retio.or.jp/wp-content/uploads/2024/10/R1-q_a.pdf",
  },
  {
    id: "h30",
    label: "平成30年度",
    year: "2018",
    source: "https://www.retio.or.jp/wp-content/uploads/2024/10/H30-q_a.pdf",
  },
  {
    id: "h29",
    label: "平成29年度",
    year: "2017",
    source: "https://www.retio.or.jp/wp-content/uploads/2024/10/H29-q_a.pdf",
  },
  {
    id: "h28",
    label: "平成28年度",
    year: "2016",
    source: "https://www.retio.or.jp/wp-content/uploads/2024/10/H28-q_a.pdf",
  },
];

const CATEGORIES = [
  "権利関係",
  "宅建業法",
  "法令上の制限",
  "税・その他",
  "5問免除",
];

const QUESTIONS = [
  {
    id: "r7-01",
    exam: "r7",
    category: "権利関係",
    topic: "意思表示",
    statement:
      "詐欺による意思表示は取り消すことができるが、取消し前に現れた善意無過失の第三者には対抗できない。",
    answer: true,
    explanation:
      "詐欺取消しは原則として可能ですが、取消し前の善意無過失の第三者は保護されます。",
  },
  {
    id: "r7-02",
    exam: "r7",
    category: "権利関係",
    topic: "保証",
    statement:
      "個人が賃貸借から生じる一切の債務を保証する根保証契約では、極度額を定めなくても有効である。",
    answer: false,
    explanation:
      "個人根保証契約は極度額を定めなければ効力を生じません。賃貸借保証でも重要な論点です。",
  },
  {
    id: "r7-03",
    exam: "r7",
    category: "宅建業法",
    topic: "重要事項説明",
    statement:
      "重要事項説明は、宅地建物取引士が宅建士証を提示して行う必要がある。",
    answer: true,
    explanation:
      "35条説明は宅建士が行います。相手方から請求がなくても宅建士証の提示が必要です。",
  },
  {
    id: "r7-04",
    exam: "r7",
    category: "宅建業法",
    topic: "8種制限",
    statement:
      "宅建業者が自ら売主となる宅地の売買で、買主も宅建業者である場合、8種制限は原則として適用されない。",
    answer: true,
    explanation:
      "8種制限は、宅建業者ではない買主を保護するための規制です。",
  },
  {
    id: "r7-05",
    exam: "r7",
    category: "法令上の制限",
    topic: "開発許可",
    statement:
      "市街化調整区域では、開発行為について市街化区域より厳しく許可の要否が判断される。",
    answer: true,
    explanation:
      "市街化調整区域は市街化を抑制する区域なので、開発許可の規制が厳格です。",
  },
  {
    id: "r7-06",
    exam: "r7",
    category: "税・その他",
    topic: "不動産取得税",
    statement:
      "相続により不動産を取得した場合でも、不動産取得税は通常の売買と同じく課される。",
    answer: false,
    explanation:
      "相続による取得は、不動産取得税の課税対象から除かれるのが基本です。",
  },
  {
    id: "r6-01",
    exam: "r6",
    category: "権利関係",
    topic: "相続",
    statement:
      "相続放棄をした者の子は、その放棄者を代襲して相続人となる。",
    answer: false,
    explanation:
      "相続放棄の場合、初めから相続人でなかったものと扱われ、代襲相続は生じません。",
  },
  {
    id: "r6-02",
    exam: "r6",
    category: "権利関係",
    topic: "賃貸借",
    statement:
      "賃借人が賃貸人の承諾なく転貸しても、信頼関係を破壊しない特段の事情があれば解除が認められないことがある。",
    answer: true,
    explanation:
      "無断転貸は解除原因になり得ますが、判例上、背信的行為といえない場合は解除できないことがあります。",
  },
  {
    id: "r6-03",
    exam: "r6",
    category: "宅建業法",
    topic: "免許",
    statement:
      "宅建業免許の有効期間は5年である。",
    answer: true,
    explanation:
      "宅建業免許の有効期間は5年です。更新申請期間とセットで押さえる論点です。",
  },
  {
    id: "r6-04",
    exam: "r6",
    category: "法令上の制限",
    topic: "農地法",
    statement:
      "市街化区域内の農地転用は、一定の場合、あらかじめ農業委員会に届出をすれば許可を要しない。",
    answer: true,
    explanation:
      "市街化区域内の農地転用では、許可ではなく届出で足りる場合があります。",
  },
  {
    id: "r6-05",
    exam: "r6",
    category: "税・その他",
    topic: "固定資産税",
    statement:
      "固定資産税は、毎年1月1日現在の固定資産課税台帳上の所有者に課される。",
    answer: true,
    explanation:
      "固定資産税の賦課期日は1月1日です。",
  },
  {
    id: "r6-06",
    exam: "r6",
    category: "5問免除",
    topic: "不当表示",
    statement:
      "徒歩所要時間の表示では、道路距離80mを1分として計算し、1分未満の端数は切り上げる。",
    answer: true,
    explanation:
      "不動産広告の徒歩時間表示で頻出の基準です。",
  },
  {
    id: "r5-01",
    exam: "r5",
    category: "権利関係",
    topic: "時効",
    statement:
      "所有権の取得時効は、占有者が悪意であっても一定期間の占有により成立し得る。",
    answer: true,
    explanation:
      "悪意占有でも、所有の意思をもって平穏・公然に20年間占有すれば取得時効が成立し得ます。",
  },
  {
    id: "r5-02",
    exam: "r5",
    category: "権利関係",
    topic: "共有",
    statement:
      "共有物の保存行為は、各共有者が単独で行うことができる。",
    answer: true,
    explanation:
      "保存行為は共有者単独で可能です。管理・変更との違いを区別します。",
  },
  {
    id: "r5-03",
    exam: "r5",
    category: "宅建業法",
    topic: "媒介契約",
    statement:
      "専属専任媒介契約では、宅建業者は1週間に1回以上、業務処理状況を依頼者へ報告しなければならない。",
    answer: true,
    explanation:
      "専属専任は1週間に1回以上、専任は2週間に1回以上の報告が必要です。",
  },
  {
    id: "r5-04",
    exam: "r5",
    category: "宅建業法",
    topic: "報酬",
    statement:
      "宅建業者は、媒介報酬について国土交通大臣が定める上限額を超えて受領できる。",
    answer: false,
    explanation:
      "媒介報酬には上限があります。上限を超える受領は宅建業法違反です。",
  },
  {
    id: "r5-05",
    exam: "r5",
    category: "法令上の制限",
    topic: "建築基準法",
    statement:
      "防火地域内の耐火建築物等では、建蔽率の制限が緩和される場合がある。",
    answer: true,
    explanation:
      "防火地域・準防火地域と耐火建築物等の組合せによる建蔽率緩和は頻出です。",
  },
  {
    id: "r5-06",
    exam: "r5",
    category: "税・その他",
    topic: "印紙税",
    statement:
      "紙の契約書を作成せず電子契約だけで締結した場合、通常は印紙税の課税文書は作成されない。",
    answer: true,
    explanation:
      "印紙税は課税文書に対する税です。電子契約の扱いは近年よく問われます。",
  },
  {
    id: "r4-01",
    exam: "r4",
    category: "権利関係",
    topic: "代理",
    statement:
      "無権代理行為は、本人が追認すれば契約時にさかのぼって有効となるのが原則である。",
    answer: true,
    explanation:
      "本人の追認により、原則として契約時にさかのぼって効力が生じます。",
  },
  {
    id: "r4-02",
    exam: "r4",
    category: "権利関係",
    topic: "抵当権",
    statement:
      "抵当権者は、抵当不動産の交換価値から優先弁済を受けることを目的とする。",
    answer: true,
    explanation:
      "抵当権は占有を移さず、目的物の交換価値を把握する担保物権です。",
  },
  {
    id: "r4-03",
    exam: "r4",
    category: "宅建業法",
    topic: "37条書面",
    statement:
      "37条書面は、契約成立後に遅滞なく交付する必要がある。",
    answer: true,
    explanation:
      "35条書面は契約前、37条書面は契約成立後という順序が基本です。",
  },
  {
    id: "r4-04",
    exam: "r4",
    category: "法令上の制限",
    topic: "国土法",
    statement:
      "国土法の事後届出が必要な土地取引では、契約締結後2週間以内に届出を行う。",
    answer: true,
    explanation:
      "事後届出制では、契約締結後2週間以内が基本の期限です。",
  },
  {
    id: "r4-05",
    exam: "r4",
    category: "税・その他",
    topic: "登録免許税",
    statement:
      "不動産の所有権移転登記を受ける場合、登録免許税が課されることがある。",
    answer: true,
    explanation:
      "登記に対して課される税が登録免許税です。",
  },
  {
    id: "r4-06",
    exam: "r4",
    category: "5問免除",
    topic: "建物",
    statement:
      "鉄筋コンクリート造は、一般に木造より耐火性に優れる。",
    answer: true,
    explanation:
      "建物構造の基礎知識として、耐火性・耐久性の特徴を比較して押さえます。",
  },
  {
    id: "r3d-01",
    exam: "r3-12",
    category: "権利関係",
    topic: "契約不適合",
    statement:
      "売買目的物が契約内容に適合しない場合、買主は追完請求や代金減額請求を検討できる。",
    answer: true,
    explanation:
      "契約不適合責任では、追完請求・代金減額請求・損害賠償・解除が整理ポイントです。",
  },
  {
    id: "r3d-02",
    exam: "r3-12",
    category: "権利関係",
    topic: "借地借家法",
    statement:
      "建物所有を目的とする借地権の存続期間を定めない場合、最初の存続期間は30年となる。",
    answer: true,
    explanation:
      "普通借地権の初回期間は、定めがないと30年です。",
  },
  {
    id: "r3d-03",
    exam: "r3-12",
    category: "宅建業法",
    topic: "クーリングオフ",
    statement:
      "事務所等以外の場所で買受けの申込みをした場合でも、買主が宅建業者ならクーリングオフ規定は適用されない。",
    answer: true,
    explanation:
      "クーリングオフも8種制限の一つで、宅建業者でない買主を保護する制度です。",
  },
  {
    id: "r3d-04",
    exam: "r3-12",
    category: "宅建業法",
    topic: "手付金等保全",
    statement:
      "未完成物件では、一定額を超える手付金等を受領する前に保全措置が必要となる。",
    answer: true,
    explanation:
      "未完成物件と完成物件で保全措置が必要となる基準が異なります。",
  },
  {
    id: "r3d-05",
    exam: "r3-12",
    category: "法令上の制限",
    topic: "土地区画整理法",
    statement:
      "仮換地が指定されると、従前の宅地について使用収益が制限されることがある。",
    answer: true,
    explanation:
      "仮換地指定の効果として、使用収益できる土地が変わる点を押さえます。",
  },
  {
    id: "r3d-06",
    exam: "r3-12",
    category: "5問免除",
    topic: "住宅金融支援機構",
    statement:
      "住宅金融支援機構は、民間金融機関による住宅ローン供給を支援する役割を持つ。",
    answer: true,
    explanation:
      "住宅金融支援機構の業務は5問免除分野でよく扱われます。",
  },
  {
    id: "r3o-01",
    exam: "r3-10",
    category: "権利関係",
    topic: "共有",
    statement:
      "共有物の変更行為は、原則として共有者全員の同意を要する。",
    answer: true,
    explanation:
      "共有物の変更は全員同意、管理は持分価格の過半数、保存は単独可能が基本です。",
  },
  {
    id: "r3o-02",
    exam: "r3-10",
    category: "権利関係",
    topic: "抵当権",
    statement:
      "抵当権は、債務者以外の第三者が所有する不動産にも設定できる。",
    answer: true,
    explanation:
      "物上保証人の不動産に抵当権を設定することがあります。",
  },
  {
    id: "r3o-03",
    exam: "r3-10",
    category: "宅建業法",
    topic: "営業保証金",
    statement:
      "営業保証金は、主たる事務所につき1,000万円、その他の事務所につき各500万円を供託する。",
    answer: true,
    explanation:
      "営業保証金の金額は、保証協会の弁済業務保証金分担金と区別します。",
  },
  {
    id: "r3o-04",
    exam: "r3-10",
    category: "法令上の制限",
    topic: "都市計画法",
    statement:
      "用途地域は、市街化調整区域には一切定めることができない。",
    answer: false,
    explanation:
      "用途地域は市街化区域に定めるのが原則ですが、例外的に市街化調整区域にも定め得ます。",
  },
  {
    id: "r3o-05",
    exam: "r3-10",
    category: "税・その他",
    topic: "地価公示",
    statement:
      "地価公示の標準地価格は、毎年1月1日時点の正常な価格として判定される。",
    answer: true,
    explanation:
      "地価公示は1月1日時点、都道府県地価調査は7月1日時点です。",
  },
  {
    id: "r3o-06",
    exam: "r3-10",
    category: "5問免除",
    topic: "広告",
    statement:
      "新築住宅でない中古住宅を広告する場合でも、築年数などの表示ルールに注意が必要である。",
    answer: true,
    explanation:
      "不動産広告は、物件種別・築年数・交通表示などのルールが問われます。",
  },
  {
    id: "r2d-01",
    exam: "r2-12",
    category: "権利関係",
    topic: "不法行為",
    statement:
      "不法行為に基づく損害賠償請求権は、一定期間の経過により時効で消滅し得る。",
    answer: true,
    explanation:
      "損害および加害者を知った時からの期間など、時効期間を整理します。",
  },
  {
    id: "r2d-02",
    exam: "r2-12",
    category: "権利関係",
    topic: "区分所有法",
    statement:
      "区分所有建物の共用部分は、原則として各区分所有者の共有に属する。",
    answer: true,
    explanation:
      "専有部分と共用部分、敷地利用権の関係をセットで確認します。",
  },
  {
    id: "r2d-03",
    exam: "r2-12",
    category: "宅建業法",
    topic: "保証協会",
    statement:
      "保証協会に加入した宅建業者は、営業保証金を別途全額供託する必要がない。",
    answer: true,
    explanation:
      "保証協会に加入する場合は、弁済業務保証金分担金を納付する仕組みです。",
  },
  {
    id: "r2d-04",
    exam: "r2-12",
    category: "法令上の制限",
    topic: "建築確認",
    statement:
      "建築確認は、建築基準関係規定に適合するかを工事前に確認する制度である。",
    answer: true,
    explanation:
      "建築確認は工事着手前のチェック制度です。対象区域や建築物の規模も問われます。",
  },
  {
    id: "r2d-05",
    exam: "r2-12",
    category: "税・その他",
    topic: "譲渡所得",
    statement:
      "土地建物の譲渡所得では、所有期間の長短により税率等の扱いが変わる。",
    answer: true,
    explanation:
      "短期譲渡所得と長期譲渡所得の区分は税分野の定番です。",
  },
  {
    id: "r2d-06",
    exam: "r2-12",
    category: "5問免除",
    topic: "土地",
    statement:
      "低地や谷地では、地盤や浸水リスクを確認することが重要である。",
    answer: true,
    explanation:
      "土地の自然的特性は、災害リスクや利用適性と結びつけて問われます。",
  },
  {
    id: "r2o-01",
    exam: "r2-10",
    category: "権利関係",
    topic: "解除",
    statement:
      "契約解除により契約は初めからなかったものと扱われるが、第三者の権利を害することはできない。",
    answer: true,
    explanation:
      "解除の遡及効と第三者保護の関係は、登記論点とも結びつきます。",
  },
  {
    id: "r2o-02",
    exam: "r2-10",
    category: "権利関係",
    topic: "借家",
    statement:
      "普通建物賃貸借では、賃貸人からの更新拒絶には正当事由が必要となる。",
    answer: true,
    explanation:
      "借地借家法の借家保護として、正当事由の要否を押さえます。",
  },
  {
    id: "r2o-03",
    exam: "r2-10",
    category: "宅建業法",
    topic: "手付",
    statement:
      "宅建業者が自ら売主となり、買主が宅建業者でない売買では、手付の額は代金の20%を超えることができない。",
    answer: true,
    explanation:
      "手付額の制限は8種制限の一つです。",
  },
  {
    id: "r2o-04",
    exam: "r2-10",
    category: "法令上の制限",
    topic: "宅地造成等",
    statement:
      "宅地造成等工事規制区域内では、一定の宅地造成工事について許可が必要となる。",
    answer: true,
    explanation:
      "宅地造成等に関する規制は、区域指定と許可対象工事を整理します。",
  },
  {
    id: "r2o-05",
    exam: "r2-10",
    category: "税・その他",
    topic: "鑑定評価",
    statement:
      "不動産鑑定評価では、市場性を有する不動産について正常価格などの価格概念が用いられる。",
    answer: true,
    explanation:
      "正常価格・限定価格・特定価格など、鑑定評価の価格概念を確認します。",
  },
  {
    id: "r2o-06",
    exam: "r2-10",
    category: "5問免除",
    topic: "建物",
    statement:
      "建物の基礎は、上部構造の荷重を地盤へ伝える重要な部分である。",
    answer: true,
    explanation:
      "建物構造では、基礎・柱・梁・壁などの役割がよく問われます。",
  },
  {
    id: "r1-01",
    exam: "r1",
    category: "権利関係",
    topic: "制限行為能力",
    statement:
      "未成年者が法定代理人の同意を得ずにした法律行為は、原則として取り消すことができる。",
    answer: true,
    explanation:
      "未成年者保護の基本です。単に無効ではなく取消し得る行為です。",
  },
  {
    id: "r1-02",
    exam: "r1",
    category: "権利関係",
    topic: "債務不履行",
    statement:
      "債務不履行による損害賠償請求では、債務者に帰責事由がない場合でも常に賠償責任を負う。",
    answer: false,
    explanation:
      "債務者に帰責事由がない場合、損害賠償責任は原則として生じません。",
  },
  {
    id: "r1-03",
    exam: "r1",
    category: "宅建業法",
    topic: "従業者証明書",
    statement:
      "宅建業者は、従業者に従業者証明書を携帯させなければならない。",
    answer: true,
    explanation:
      "従業者証明書と宅建士証は別物です。",
  },
  {
    id: "r1-04",
    exam: "r1",
    category: "法令上の制限",
    topic: "用途制限",
    statement:
      "用途地域ごとに、建築できる建築物の用途が制限される。",
    answer: true,
    explanation:
      "用途地域は建築物の用途制限と結びつく都市計画法・建築基準法の横断論点です。",
  },
  {
    id: "r1-05",
    exam: "r1",
    category: "税・その他",
    topic: "不動産取得税",
    statement:
      "不動産取得税は、売買だけでなく贈与による取得でも課税対象となり得る。",
    answer: true,
    explanation:
      "有償・無償を問わず、不動産の取得に着目する税です。",
  },
  {
    id: "r1-06",
    exam: "r1",
    category: "5問免除",
    topic: "統計",
    statement:
      "統計問題では、年度や数値が変わるため、受験年度向けの最新資料で確認する必要がある。",
    answer: true,
    explanation:
      "統計は過去問知識だけで固定せず、直前期に最新データを確認します。",
  },
  {
    id: "h30-01",
    exam: "h30",
    category: "権利関係",
    topic: "虚偽表示",
    statement:
      "相手方と通じてした虚偽表示は無効だが、善意の第三者にはその無効を対抗できない。",
    answer: true,
    explanation:
      "民法94条2項の第三者保護です。過失の有無までは要求されません。",
  },
  {
    id: "h30-02",
    exam: "h30",
    category: "権利関係",
    topic: "留置権",
    statement:
      "留置権は、他人の物を占有している者が、その物に関して生じた債権を有する場合に成立し得る。",
    answer: true,
    explanation:
      "留置権は占有と牽連性がポイントです。",
  },
  {
    id: "h30-03",
    exam: "h30",
    category: "宅建業法",
    topic: "案内所",
    statement:
      "契約を締結する案内所等には、一定の場合、専任の宅建士の設置が必要となる。",
    answer: true,
    explanation:
      "事務所以外の場所でも、契約締結や申込み受付を行う場所は規制対象になります。",
  },
  {
    id: "h30-04",
    exam: "h30",
    category: "法令上の制限",
    topic: "農地法",
    statement:
      "農地を農地のまま売買する場合と、農地を宅地に転用して売買する場合では、農地法上の条文が異なる。",
    answer: true,
    explanation:
      "3条・4条・5条の区別が定番です。",
  },
  {
    id: "h30-05",
    exam: "h30",
    category: "税・その他",
    topic: "固定資産税",
    statement:
      "固定資産税の納税義務者は、原則として固定資産課税台帳に所有者として登録されている者である。",
    answer: true,
    explanation:
      "賦課期日と台帳上の所有者を押さえます。",
  },
  {
    id: "h30-06",
    exam: "h30",
    category: "5問免除",
    topic: "広告",
    statement:
      "宅地建物の広告では、実際より著しく有利であると誤認させる表示が問題となる。",
    answer: true,
    explanation:
      "不当表示や誇大広告の規制は、宅建業法と公正競争規約の両面で確認します。",
  },
  {
    id: "h29-01",
    exam: "h29",
    category: "権利関係",
    topic: "抵当権",
    statement:
      "抵当権の順位は、原則として登記の前後によって決まる。",
    answer: true,
    explanation:
      "不動産担保では登記順位が優先弁済順位に直結します。",
  },
  {
    id: "h29-02",
    exam: "h29",
    category: "権利関係",
    topic: "賃貸借",
    statement:
      "賃貸人は、賃借物の使用収益に必要な修繕をする義務を負うのが原則である。",
    answer: true,
    explanation:
      "賃貸人の修繕義務は、必要費償還請求などと合わせて押さえます。",
  },
  {
    id: "h29-03",
    exam: "h29",
    category: "宅建業法",
    topic: "専任媒介",
    statement:
      "専任媒介契約の有効期間は、3か月を超えることができない。",
    answer: true,
    explanation:
      "3か月を超える約定をしても、有効期間は3か月となります。",
  },
  {
    id: "h29-04",
    exam: "h29",
    category: "法令上の制限",
    topic: "建蔽率",
    statement:
      "建蔽率は、建築面積の敷地面積に対する割合である。",
    answer: true,
    explanation:
      "建蔽率は建築面積、容積率は延べ面積が基準です。",
  },
  {
    id: "h29-05",
    exam: "h29",
    category: "税・その他",
    topic: "印紙税",
    statement:
      "不動産売買契約書を紙で作成した場合、契約金額に応じて印紙税が課されることがある。",
    answer: true,
    explanation:
      "紙の契約書は課税文書となる場合があります。",
  },
  {
    id: "h29-06",
    exam: "h29",
    category: "5問免除",
    topic: "土地",
    statement:
      "台地は、一般に低地より水害リスクが低いとされることが多い。",
    answer: true,
    explanation:
      "地形と災害リスクの関係は土地分野でよく出ます。個別地点ではハザードマップ確認が必要です。",
  },
  {
    id: "h28-01",
    exam: "h28",
    category: "権利関係",
    topic: "錯誤",
    statement:
      "錯誤による意思表示は、要件を満たせば取り消すことができる。",
    answer: true,
    explanation:
      "現行民法では、錯誤は無効ではなく取消しとして整理されています。",
  },
  {
    id: "h28-02",
    exam: "h28",
    category: "権利関係",
    topic: "相隣関係",
    statement:
      "相隣関係では、隣地の使用や境界付近の工作物などについて民法上の規律が置かれている。",
    answer: true,
    explanation:
      "相隣関係は、土地利用の調整ルールとして出題されます。",
  },
  {
    id: "h28-03",
    exam: "h28",
    category: "宅建業法",
    topic: "帳簿",
    statement:
      "宅建業者は、事務所ごとに業務に関する帳簿を備え付けなければならない。",
    answer: true,
    explanation:
      "帳簿、従業者名簿、標識などの備付け義務を区別します。",
  },
  {
    id: "h28-04",
    exam: "h28",
    category: "法令上の制限",
    topic: "容積率",
    statement:
      "容積率は、延べ面積の敷地面積に対する割合である。",
    answer: true,
    explanation:
      "容積率と建蔽率は、どの面積を使うかを正確に区別します。",
  },
  {
    id: "h28-05",
    exam: "h28",
    category: "税・その他",
    topic: "地価調査",
    statement:
      "都道府県地価調査の基準地価格は、毎年7月1日時点の価格を基準とする。",
    answer: true,
    explanation:
      "地価公示は1月1日、都道府県地価調査は7月1日です。",
  },
  {
    id: "h28-06",
    exam: "h28",
    category: "5問免除",
    topic: "住宅",
    statement:
      "建築物の耐震性は、構造・地盤・施工状態など複数の要素に左右される。",
    answer: true,
    explanation:
      "建物分野では、単純な構造名だけでなく、地盤や施工状態も考慮します。",
  },
];

const STORAGE_KEY = "takken-one-answer-progress-v2";
const FILTER_KEY = "takken-one-answer-filters-v2";

const elements = {
  studiedCount: document.querySelector("#studiedCount"),
  accuracyRate: document.querySelector("#accuracyRate"),
  reviewCount: document.querySelector("#reviewCount"),
  examFilter: document.querySelector("#examFilter"),
  categoryFilter: document.querySelector("#categoryFilter"),
  modeFilter: document.querySelector("#modeFilter"),
  shuffleButton: document.querySelector("#shuffleButton"),
  resetButton: document.querySelector("#resetButton"),
  examChip: document.querySelector("#examChip"),
  categoryChip: document.querySelector("#categoryChip"),
  topicChip: document.querySelector("#topicChip"),
  bookmarkButton: document.querySelector("#bookmarkButton"),
  questionCounter: document.querySelector("#questionCounter"),
  questionText: document.querySelector("#questionText"),
  trueButton: document.querySelector("#trueButton"),
  falseButton: document.querySelector("#falseButton"),
  feedback: document.querySelector("#feedback"),
  feedbackResult: document.querySelector("#feedbackResult"),
  feedbackText: document.querySelector("#feedbackText"),
  prevButton: document.querySelector("#prevButton"),
  sourceButton: document.querySelector("#sourceButton"),
  nextButton: document.querySelector("#nextButton"),
  examList: document.querySelector("#examList"),
  reviewList: document.querySelector("#reviewList"),
  reviewLabel: document.querySelector("#reviewLabel"),
};

let progress = loadJson(STORAGE_KEY, {});
let filters = loadJson(FILTER_KEY, {
  exam: "all",
  category: "all",
  mode: "all",
});
let queue = [];
let currentIndex = 0;

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function saveFilters() {
  localStorage.setItem(FILTER_KEY, JSON.stringify(filters));
}

function getExam(id) {
  return EXAMS.find((exam) => exam.id === id);
}

function getQuestion(id) {
  return QUESTIONS.find((question) => question.id === id);
}

function hasReviewMark(question) {
  const item = progress[question.id];
  return Boolean(item?.review || item?.correct === false);
}

function buildFilters() {
  elements.examFilter.innerHTML = [
    `<option value="all">すべて</option>`,
    ...EXAMS.map(
      (exam) => `<option value="${exam.id}">${exam.label}</option>`,
    ),
  ].join("");
  elements.categoryFilter.innerHTML = [
    `<option value="all">すべて</option>`,
    ...CATEGORIES.map(
      (category) => `<option value="${category}">${category}</option>`,
    ),
  ].join("");

  elements.examFilter.value = filters.exam;
  elements.categoryFilter.value = filters.category;
  elements.modeFilter.value = filters.mode;
}

function filteredQuestions() {
  return QUESTIONS.filter((question) => {
    if (filters.exam !== "all" && question.exam !== filters.exam) return false;
    if (filters.category !== "all" && question.category !== filters.category) {
      return false;
    }
    if (filters.mode === "unanswered" && progress[question.id]?.answered) {
      return false;
    }
    if (filters.mode === "review" && !hasReviewMark(question)) return false;
    return true;
  });
}

function rebuildQueue(keepId) {
  queue = filteredQuestions();
  if (!queue.length) {
    currentIndex = 0;
    render();
    return;
  }
  const keptIndex = keepId ? queue.findIndex((question) => question.id === keepId) : -1;
  currentIndex = keptIndex >= 0 ? keptIndex : Math.min(currentIndex, queue.length - 1);
  render();
}

function renderStats() {
  const entries = Object.values(progress).filter((item) => item.answered);
  const correct = entries.filter((item) => item.correct).length;
  const review = QUESTIONS.filter(hasReviewMark).length;
  elements.studiedCount.textContent = String(entries.length);
  elements.accuracyRate.textContent = entries.length
    ? `${Math.round((correct / entries.length) * 100)}%`
    : "0%";
  elements.reviewCount.textContent = String(review);
  elements.reviewLabel.textContent = `${review}問`;
}

function renderQuestion() {
  const question = queue[currentIndex];
  if (!question) {
    elements.examChip.textContent = "対象なし";
    elements.categoryChip.textContent = "条件変更";
    elements.topicChip.textContent = "0問";
    elements.questionCounter.textContent = "0 / 0";
    elements.questionText.textContent = "この条件に合う問題がありません。";
    elements.feedback.hidden = true;
    elements.trueButton.disabled = true;
    elements.falseButton.disabled = true;
    elements.bookmarkButton.disabled = true;
    return;
  }

  const exam = getExam(question.exam);
  const record = progress[question.id];
  elements.examChip.textContent = exam.label;
  elements.categoryChip.textContent = question.category;
  elements.topicChip.textContent = question.topic;
  elements.questionCounter.textContent = `${currentIndex + 1} / ${queue.length}`;
  elements.questionText.textContent = question.statement;

  elements.trueButton.disabled = false;
  elements.falseButton.disabled = false;
  elements.bookmarkButton.disabled = false;
  elements.bookmarkButton.textContent = record?.review ? "★" : "☆";
  elements.bookmarkButton.classList.toggle("active", Boolean(record?.review));

  elements.trueButton.classList.remove("is-correct", "is-wrong");
  elements.falseButton.classList.remove("is-correct", "is-wrong");

  if (record?.answered) {
    const selectedButton = record.answer ? elements.trueButton : elements.falseButton;
    const otherButton = record.answer ? elements.falseButton : elements.trueButton;
    selectedButton.classList.add(record.correct ? "is-correct" : "is-wrong");
    if (!record.correct) otherButton.classList.add("is-correct");
    renderFeedback(question, record.correct);
  } else {
    elements.feedback.hidden = true;
  }
}

function renderFeedback(question, isCorrect) {
  elements.feedback.hidden = false;
  elements.feedback.classList.toggle("wrong", !isCorrect);
  elements.feedbackResult.textContent = isCorrect ? "正解" : "不正解";
  elements.feedbackText.textContent = question.explanation;
}

function renderExamList() {
  elements.examList.innerHTML = EXAMS.map((exam) => {
    const count = QUESTIONS.filter((question) => question.exam === exam.id).length;
    return `
      <a class="exam-item" href="${exam.source || OFFICIAL_INDEX}" target="_blank" rel="noreferrer">
        <strong>${exam.label}</strong>
        <span>${exam.year} / 演習 ${count}問 / PDF</span>
      </a>
    `;
  }).join("");
}

function renderReviewList() {
  const reviewQuestions = QUESTIONS.filter(hasReviewMark);
  if (!reviewQuestions.length) {
    elements.reviewList.innerHTML = `<p class="empty">間違えた問題や☆を付けた問題がここに入ります。</p>`;
    return;
  }

  elements.reviewList.innerHTML = reviewQuestions
    .slice(0, 8)
    .map((question) => {
      const exam = getExam(question.exam);
      return `
        <button class="review-item" type="button" data-question-id="${question.id}">
          <strong>${question.topic}</strong>
          <span>${exam.label} / ${question.category}</span>
        </button>
      `;
    })
    .join("");
}

function render() {
  renderStats();
  renderQuestion();
  renderExamList();
  renderReviewList();
}

function answerQuestion(value) {
  const question = queue[currentIndex];
  if (!question) return;

  const correct = value === question.answer;
  const previous = progress[question.id] ?? {};
  progress[question.id] = {
    ...previous,
    answered: true,
    answer: value,
    correct,
    misses: (previous.misses ?? 0) + (correct ? 0 : 1),
    lastAnsweredAt: new Date().toISOString(),
  };

  saveProgress();
  render();
}

function move(step) {
  if (!queue.length) return;
  currentIndex = (currentIndex + step + queue.length) % queue.length;
  render();
}

function shuffleQueue() {
  for (let index = queue.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [queue[index], queue[swapIndex]] = [queue[swapIndex], queue[index]];
  }
  currentIndex = 0;
  render();
}

function updateFilter(key, value) {
  filters = { ...filters, [key]: value };
  saveFilters();
  currentIndex = 0;
  rebuildQueue();
}

function resetProgress() {
  const ok = window.confirm("回答記録と復習マークをリセットしますか？");
  if (!ok) return;
  progress = {};
  saveProgress();
  rebuildQueue();
}

function toggleBookmark() {
  const question = queue[currentIndex];
  if (!question) return;
  const previous = progress[question.id] ?? {};
  progress[question.id] = {
    ...previous,
    review: !previous.review,
  };
  saveProgress();
  render();
}

function openSource() {
  const question = queue[currentIndex];
  const exam = question ? getExam(question.exam) : null;
  window.open(exam?.source || OFFICIAL_INDEX, "_blank", "noreferrer");
}

function jumpToQuestion(id) {
  filters = { ...filters, mode: "all" };
  elements.modeFilter.value = "all";
  saveFilters();
  rebuildQueue(id);
}

function bindEvents() {
  elements.examFilter.addEventListener("change", (event) =>
    updateFilter("exam", event.target.value),
  );
  elements.categoryFilter.addEventListener("change", (event) =>
    updateFilter("category", event.target.value),
  );
  elements.modeFilter.addEventListener("change", (event) =>
    updateFilter("mode", event.target.value),
  );
  elements.trueButton.addEventListener("click", () => answerQuestion(true));
  elements.falseButton.addEventListener("click", () => answerQuestion(false));
  elements.prevButton.addEventListener("click", () => move(-1));
  elements.nextButton.addEventListener("click", () => move(1));
  elements.shuffleButton.addEventListener("click", shuffleQueue);
  elements.resetButton.addEventListener("click", resetProgress);
  elements.bookmarkButton.addEventListener("click", toggleBookmark);
  elements.sourceButton.addEventListener("click", openSource);
  elements.reviewList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-question-id]");
    if (button) jumpToQuestion(button.dataset.questionId);
  });
}

buildFilters();
bindEvents();
rebuildQueue();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
