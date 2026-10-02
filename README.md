# 臺北GTA 靜態鏡像（GitHub Pages 版）

這份檔案來自 `https://taipei-gta.vercel.app/` 於 2026-10-02 公開傳送給瀏覽器的前端檔案，並針對 GitHub Pages 的 `/GTA_Taipei/` 專案路徑調整。它不是原作者的原始碼倉庫，也不包含伺服器端程式。公開發布前，請先確認原作者允許重製及散布。

## 上傳與啟用

1. 建立名稱**正好是 `GTA_Taipei`** 的 GitHub repository。
2. 將本資料夾**內容**上傳到 repository 根目錄；根目錄應直接看得到 `index.html`、`.nojekyll`、`assets/`、`avatars/` 等檔案。
3. 在 repository 的 **Settings → Pages**，將 **Build and deployment → Source** 設為 **Deploy from a branch**，分支選 `main`、資料夾選 `/ (root)`，儲存。
4. 部署後開啟 `https://你的帳號.github.io/GTA_Taipei/`。

`.nojekyll` 讓 GitHub Pages 原樣發佈靜態檔案。原站的「抖內支持」需伺服器 API，在此版本已從介面隱藏。

## 本機預覽

遊戲使用 JavaScript 模組與 WebAssembly，瀏覽器通常不允許直接雙擊 `index.html` 以 `file://` 執行。本機預覽請使用 VS Code Live Server、其他靜態檔案預覽工具，或上傳到 GitHub Pages 後開啟網址。預覽工具需把此資料夾掛在 `/GTA_Taipei/` 路徑，才能與正式 Pages 網址相同。

## 限制

只涵蓋擷取時能發現的前端資產；未觸發載入的區域可能仍有缺檔。PWA 安裝、第三方分析與部分原站線上功能需要在正式 Pages 網址另行驗證。若 repository 更名或改用自訂網域，需從原始檔重新處理路徑。
