// Central backend endpoint configuration for the standalone frontend pages.
window.API_BASE_URL = window.API_BASE_URL || ((location.hostname === "localhost" || location.hostname === "127.0.0.1") ? "http://127.0.0.1:5000" : "https://saferef-back.onrender.com");
