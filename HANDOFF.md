# 現場資格ラボ 引き継ぎ

更新日: 2026-10-13

## プロジェクト概要
- サイト名: 現場資格ラボ
- 目的: 現場系資格の比較・診断型アフィリエイトメディア
- 本番URL: https://genba.rss7.net/
- GitHub Pages: https://oosaka0123-sudo.github.io/genba-shikaku-lab/
- GitHub: oosaka0123-sudo/genba-shikaku-lab
- お問い合わせ: genba@rss7.net
- 現在の本番ソースSHA: https://genba.rss7.net/deploy.json で確認

## 重要ルール
- 「3人クロスチェック」は ChatGPT・Gemini・Claude が実際に独立確認した場合のみそう呼ぶ。
- 2026-10-03に ChatGPT・Gemini(Antigravity)・Claude で正式クロスチェックを実施済み。
- Geminiが postprocess.mjs の正規表現を実ファイルと異なる形で読んだP0指摘は、ChatGPT/Claude/実コード照合で誤検知と判定し採用しなかった。
- 本番デプロイは /genba 専用、mirror --delete は使わない。
- 試験日程・受験資格・費用は必ず一次情報を基準にする。
- build.mjs は旧生成ロジックが破壊的だったため意図的に実行不能化済み。

## 現在の公開状態
- genba.rss7.net は HTTP/HTTPS 200。旧403は解消済み。
- 2026-10-03 本番一括検査: 主要13ページすべてHTTP 200。
- 主要8資格ページすべて文字化け0、共通 menu-btn/nav テンプレート正常。
- 第二種電気工事士ページの旧文字化けは修復済み。
- 危険物乙4の旧テンプレート不統一は修復済み。
- GitHub Site CI / GitHub Pages build は成功。
- deploy.json で本番SHAを確認可能。
- HANDOFF.md / README.md / *.mjs は今後本番公開対象外。

## 自動デプロイ
- 正式経路はリポジトリ oosaka0123-sudo/web-de-nandemo-dekiru の workflow Auto deploy Genba Shikaku Lab。
- workflow ID: 359444917。
- 5分ごとの自動同期＋workflow_dispatch。
- 既存Lolipop Secretsを値を露出せず利用。
- /genba にFTPS上書き、リモート一括削除なし。
- deploy.json のSHA一致と本番HTTPを自動検証。
- genba-shikaku-lab側の旧 Deploy to Lolipop workflow はSecrets未設定のため正式経路として使わない。
- 一時的に追加した重複 deploy-genba.yml は削除済み。

## 再発防止
- CIで文字化け候補 縺|繝|莠|蜿|鬨|蝣|�|Ã|Â を検出。
- 資格ページで旧クラス nav-toggle/site-nav/header-inner を禁止。
- 全資格ページに menu-btn/nav を要求。
- HTMLのルート絶対 href/src を検出。
- postprocess.mjs は8資格すべて（crane含む）を対象。
- enrich.mjs は import.meta.url 基準でパス解決。
- build.mjs は stale generator 再実行による巻き戻りを防ぐため fail-fast。

## 主要資格8本
1. 第二種電気工事士
2. 危険物取扱者 乙4
3. フォークリフト運転技能講習
4. 玉掛け技能講習
5. クレーン関連資格
6. 衛生管理者
7. 二級ボイラー技士
8. 消防設備士

## 収益戦略
- 「自分の仕事に必要な資格を診断するサイト」を中核にする。
- 主力候補は第二種電気工事士と衛生管理者。
- 通信講座・スクール比較を主軸にし、将来的に転職・求人案件も接続。
- data-affiliate-key により案件差し替え可能な構造を維持。
- 薄い大量記事ではなく、診断・比較・公式情報整理で独自性を出す。

## 次回の優先順位
1. A8のChromeAutoログイン確認後、オンスク.JPの提携状態と成果URLを取得し、第二種電気工事士・危険物乙4・衛生管理者の3導線を成果リンク化。
2. ValueCommerceの現場資格ラボ審査通過を確認後、リクナビNEXT / リクルートエージェント / スタディサプリ進路 社会人向けを優先して提携申請。
3. 収益URLが確定するまでは app.js の affiliate=false と通常リンク表示を維持し、見切りで成果リンク化しない。
4. Search Console / Bingの既存登録は維持し、重複登録・重複送信をしない。
5. 30秒資格診断の収益導線は、案件提携後に「資格詳細→講座/転職」の2段階で接続する。

## 注意
- 本番403対応は完了済み。次回403解消作業から再開しない。
- GitHub Secretsの値は表示・複製せず、既存ブリッジ経由で利用する。
- 本番に内部Markdownやビルド用.mjsを公開しない。
- ValueCommerceは現場資格ラボのサイト審査中につき、審査完了前に大量の提携申請を行わない。
- A8は専用ChromeAutoで未ログイン状態を確認。普段使いChromeのログイン状態とは分離して扱う。

## 2026-10-03 収益化進捗
- A8.net公式の「学び・資格」ランキングでオンスク.JP案件を確認。
- A8プログラムID: s00000018694001。
- 公開報酬（2026-09-10更新のA8公式掲載）: ウケホーダイ ライト新規申込1,000円、スタンダード新規申込1,500円。
- オンスク.JP公式で第二種電気工事士・危険物乙4・衛生管理者（第一種/第二種対応）の講座提供を確認。
- 3資格ページに通常の公式講座導線を実装済み。A8提携前なので sponsored 扱いにはせず、「提携準備中・通常リンク」と明示。
- app.js にA8 provider / programId / affiliate=false を保持。提携後は成果URLへ差し替えて affiliate=true に変更するだけでよい。

## 2026-10-13 収益化進捗
- ValueCommerceへ「現場資格ラボ」を新規登録済み。
- ValueCommerceサイトID: 3784465。
- 現在のサイト状態: 【審査中】。
- 登録カテゴリ: 教育・資格。
- ValueCommerce内で現場資格ラボを選択して案件検索まで確認済み。
- 優先候補:
  - リクナビNEXT『会員登録』キャンペーン: 1,803円、審査あり、プログラムID 2098976。
  - リクルートエージェント: 2,200円、審査あり、プログラムID 2117497。
  - スタディサプリ進路 社会人向け: 1,047円、審査あり、プログラムID 2126836。
  - タウンワーク応募登録キャンペーン: 231円、審査あり、プログラムID 2113716。
- ValueCommerce審査通過前は提携申請を急がず、まずサイト審査完了を待つ。
- A8.netは03のChromeAutoではまだ未ログイン。オンスク.JP成果URLは未取得。
- Amazonアソシエイトは03のChromeAutoでログイン済みだが、現場資格ラボの主要収益導線には現時点で採用しない。
- 最大公約数方針: 「案件の確定・審査通過・成果URL確認」までは本番コードを変えず、確定したものだけ段階的に接続する。
