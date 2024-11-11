// classificationFunctions.js

import { wasteData } from "./wasteData.js";

function classifyWaste() {
  const keyword = document
    .getElementById("keywordInput")
    .value.trim()
    .toLowerCase();
  const selectedLanguage = document.getElementById("languageSelect").value;
  const resultDiv = document.getElementById("result");
  const usageLink = document.getElementById("usageLink");
  const usageSection = document.getElementById("usageSection");

  if (!keyword) {
    const messages = {
      vi: "Vui lòng nhập từ khóa để phân loại rác.",
      ja: "キーワードを入力してください。",
      en: "Please enter a keyword to classify waste.",
      mn: "Хог ангилахын тулд түлхүүр үг оруулна уу.",
    };
    resultDiv.innerText = messages[selectedLanguage];
    resultDiv.style.color = "black";
    usageLink.style.display = "none";
    usageSection.style.display = "none";
    return;
  }

  let foundCategory = null;

  for (const category in wasteData) {
    if (wasteData[category][selectedLanguage].includes(keyword)) {
      foundCategory = category;
      break;
    }
  }

  if (foundCategory) {
    const categoryMessages = {
      recyclable: {
        vi: `Rác "${keyword}" là rác tái chế.`,
        ja: `ゴミ「${keyword}」はリサイクル可能です。`,
        en: `Waste "${keyword}" is recyclable.`,
        mn: `Хог "${keyword}" нь дахин боловсруулах боломжтой.`,
      },
      burnable: {
        vi: `Rác "${keyword}" là rác cháy được.`,
        ja: `ゴミ「${keyword}」は燃えるゴミです。`,
        en: `Waste "${keyword}" is burnable.`,
        mn: `Хог "${keyword}" нь шатдаг.`,
      },
      nonBurnable: {
        vi: `Rác "${keyword}" là rác không cháy được.`,
        ja: `ゴミ「${keyword}」は燃えないゴミです。`,
        en: `Waste "${keyword}" is non-burnable.`,
        mn: `Хог "${keyword}" нь шатдаггүй.`,
      },
      oversized: {
        vi: `Rác "${keyword}" là đồ quá khổ.`,
        ja: `ゴミ「${keyword}」は大型ゴミです。`,
        en: `Waste "${keyword}" is oversized.`,
        mn: `Хог "${keyword}" нь том хэмжээтэй.`,
      },
      appliances: {
        vi: `Rác "${keyword}" là đồ gia dụng.`,
        ja: `ゴミ「${keyword}」は家電です。`,
        en: `Waste "${keyword}" is a household appliance.`,
        mn: `Хог "${keyword}" нь гэр ахуйн цахилгаан хэрэгсэл.`,
      },
      electronics: {
        vi: `Rác "${keyword}" là thiết bị điện tử.`,
        ja: `ゴミ「${keyword}」は電子機器です。`,
        en: `Waste "${keyword}" is an electronic device.`,
        mn: `Хог "${keyword}" нь цахилгаан хэрэгсэл.`,
      },
    };

    resultDiv.innerText = categoryMessages[foundCategory][selectedLanguage];
    resultDiv.style.color = "green";
    usageLink.style.display = "inline";
    usageSection.style.display = "none";
  } else {
    const notFoundMessages = {
      vi: `Không tìm thấy thông tin về loại rác "${keyword}" trong ngôn ngữ đã chọn.`,
      ja: `選択した言語で「${keyword}」のゴミ情報が見つかりません。`,
      en: `No waste information found for "${keyword}" in the selected language.`,
      mn: `Сонгосон хэлээр "${keyword}" хогийн мэдээлэл олдсонгүй.`,
    };
    resultDiv.innerText = notFoundMessages[selectedLanguage];
    resultDiv.style.color = "black";
    usageLink.style.display = "none";
    usageSection.style.display = "none";
  }
}

function showUsageSection() {
  const usageSection = document.getElementById("usageSection");
  usageSection.style.display = "block";
}

// Gắn sự kiện cho các nút khi trang tải
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("classifyButton")
    .addEventListener("click", classifyWaste);
});

export { classifyWaste, showUsageSection };