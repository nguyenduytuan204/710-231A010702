// JS chung cho toàn site (menu, tiện ích)
document.addEventListener("DOMContentLoaded", () => {
  // Đánh dấu link đang mở (simple highlight theo pathname)
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("nav.menu a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.style.background = "#084298";
  });
});
