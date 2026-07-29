(function () {
    var STORAGE_KEY = "renhelp-theme";
    var THEMES = ["light", "dark"]; // extend here when adding more palettes (e.g. "modern")

    function apply(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
        var btn = document.getElementById("theme-toggle");
        if (btn) {
            btn.setAttribute("aria-checked", theme === "dark" ? "true" : "false");
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        var btn = document.getElementById("theme-toggle");
        if (!btn) return;

        apply(document.documentElement.getAttribute("data-theme") || "light");

        btn.addEventListener("click", function () {
            var current = document.documentElement.getAttribute("data-theme") || "light";
            var next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
            apply(next);
        });
    });
})();
