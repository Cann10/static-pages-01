/*
 * ねこ目覚まし（NEKO WAKE）公開サイトの設定（公開前にこの1ファイルだけ編集）。
 * GitHub Pages は静的配信のため、ここに実値を入れてからコミット・デプロイする。
 */
window.NEKOWAKE_CONFIG = {
  // 問い合わせ先メールアドレス（必須・全アプリ共通）。プライバシーポリシー第8章・サポートページに反映される。
  contactEmail: "cannappworks@gmail.com",

  // 運営者名（必須）。フッターとプライバシーポリシーに表示。
  operator: "Cann App Works",

  // App Store 公開後にダウンロード URL を設定（未公開なら空のまま。ボタンは非表示になる）。
  appStoreUrl: "",

  // 最終更新日（プライバシーポリシー表示用）。
  privacyUpdated: "2026年9月28日"
};

// ---- 反映処理（編集不要） ----
(function () {
  var c = window.NEKOWAKE_CONFIG || {};
  function textFill(sel, value) {
    document.querySelectorAll(sel).forEach(function (el) {
      if (value) el.textContent = value;
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    textFill('[data-config="operator"]', c.operator);
    textFill('[data-config="privacyUpdated"]', c.privacyUpdated);

    document.querySelectorAll('[data-config="contactEmail"]').forEach(function (el) {
      if (!c.contactEmail) return;
      el.textContent = c.contactEmail;
      if (el.tagName === "A") el.setAttribute("href", "mailto:" + c.contactEmail);
    });

    var dl = document.querySelector('[data-config="appStoreLink"]');
    if (dl) {
      if (c.appStoreUrl) {
        dl.setAttribute("href", c.appStoreUrl);
      } else {
        dl.style.display = "none";
      }
    }
    var y = document.querySelector('[data-config="year"]');
    if (y) y.textContent = String(new Date().getFullYear());
  });
})();
