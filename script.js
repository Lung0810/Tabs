const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

function setActiveTab(tabElement) {
  // Remove active from all tabs & panels
  tabs.forEach((t) => t.classList.remove("active"));
  panels.forEach((p) => p.classList.remove("active"));

  // Add active to clicked tab
  tabElement.classList.add("active");

  // Show corresponding panel
  const tabId = tabElement.dataset.tab;
  document.getElementById(`tab-${tabId}`).classList.add("active");
}

// Click handler for all tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveTab(tab);
  });
});
