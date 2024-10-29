const burnableWaste = {
  vi: [
    "giấy",
    "lá",
    "nhựa",
    "gỗ",
    "vải",
    "bìa cứng",
    "xốp",
    "da",
    "thức ăn thừa",
    "xơ dừa",
    "cỏ",
    "lá chuối",
    "mùn cưa",
    "tre",
    "tăm tre",
    "đũa gỗ",
    "bông gòn",
    "vỏ trứng",
    "bánh mì",
    "giấy ăn",
  ],
  ja: [
    "紙",
    "葉",
    "プラスチック",
    "木材",
    "布",
    "段ボール",
    "発泡スチロール",
    "皮",
    "食べ残し",
    "ココナッツファイバー",
    "草",
    "バナナの葉",
    "おがくず",
    "竹",
    "竹串",
    "木製の箸",
    "綿",
    "卵の殻",
    "パン",
    "ティッシュペーパー",
  ],
  en: [
    "paper",
    "leaves",
    "plastic",
    "wood",
    "fabric",
    "cardboard",
    "styrofoam",
    "leather",
    "leftover food",
    "coconut fiber",
    "grass",
    "banana leaves",
    "sawdust",
    "bamboo",
    "bamboo skewers",
    "wooden chopsticks",
    "cotton",
    "eggshell",
    "bread",
    "tissue paper",
  ],
  mn: [
    "цаас",
    "навч",
    "хуванцар",
    "мод",
    "даавуу",
    "картон",
    "хөөсөнцөр",
    "арьс",
    "хоолны үлдэгдэл",
    "кокосын ширхэг",
    "өвс",
    "гадилны навч",
    "модны үртэс",
    "хулс",
    "хулсны шорлог",
    "модон савх",
    "хөвөн",
    "өндөгний хальс",
    "талх",
    "сальфетка",
  ],
};

const nonBurnableWaste = {
  vi: [
    "kim loại",
    "thủy tinh",
    "pin",
    "điện tử",
    "gạch",
    "gốm sứ",
    "nhôm",
    "inox",
    "thủy tinh chịu nhiệt",
    "bóng đèn",
    "màn hình",
    "đồ sứ",
    "bình xịt",
    "túi nilon",
    "ống nhựa",
    "vật liệu composite",
    "vỏ sò",
    "kính cường lực",
    "chai lọ thủy tinh",
    "gạch men",
  ],
  ja: [
    "金属",
    "ガラス",
    "電池",
    "電子機器",
    "レンガ",
    "陶器",
    "アルミ",
    "ステンレス",
    "耐熱ガラス",
    "電球",
    "スクリーン",
    "陶磁器",
    "スプレー缶",
    "ビニール袋",
    "プラスチック管",
    "複合材料",
    "貝殻",
    "強化ガラス",
    "ガラス瓶",
    "タイル",
  ],
  en: [
    "metal",
    "glass",
    "battery",
    "electronics",
    "brick",
    "ceramics",
    "aluminum",
    "stainless steel",
    "heat-resistant glass",
    "light bulb",
    "screen",
    "porcelain",
    "spray can",
    "plastic bag",
    "plastic pipe",
    "composite materials",
    "seashells",
    "tempered glass",
    "glass bottles",
    "tiles",
  ],
  mn: [
    "металл",
    "шил",
    "зай",
    "цахилгаан хэрэгсэл",
    "тоосго",
    "шаазан",
    "хөнгөн цагаан",
    "зэвэрдэггүй ган",
    "дулаанд тэсвэртэй шил",
    "гэрэл",
    "дэлгэц",
    "шаазан эдлэл",
    "шүршүүрийн сав",
    "гялгар уут",
    "хуванцар хоолой",
    "композит материал",
    "дурсгалт хясаа",
    "хатуулгатай шил",
    "шилэн лонх",
    "плита",
  ],
};

function classifyWaste() {
  const keyword = document
    .getElementById("keywordInput")
    .value.trim()
    .toLowerCase();
  const selectedLanguage = document.getElementById("languageSelect").value;
  const resultDiv = document.getElementById("result");

  if (!keyword) {
    if (selectedLanguage === "vi") {
      resultDiv.innerText = "Vui lòng nhập từ khóa để phân loại rác.";
    } else if (selectedLanguage === "ja") {
      resultDiv.innerText = "キーワードを入力してください。";
    } else if (selectedLanguage === "en") {
      resultDiv.innerText = "Please enter a keyword to classify waste.";
    } else if (selectedLanguage === "mn") {
      resultDiv.innerText = "Хог ангилахын тулд түлхүүр үг оруулна уу.";
    }
    resultDiv.style.color = "black";
    return;
  }

  if (burnableWaste[selectedLanguage].includes(keyword)) {
    if (selectedLanguage === "vi") {
      resultDiv.innerText = `Rác "${keyword}" là rác cháy được.`;
    } else if (selectedLanguage === "ja") {
      resultDiv.innerText = `ゴミ「${keyword}」は燃えるゴミです。`;
    } else if (selectedLanguage === "en") {
      resultDiv.innerText = `Waste "${keyword}" is burnable.`;
    } else if (selectedLanguage === "mn") {
      resultDiv.innerText = `Хог "${keyword}" нь шатдаг.`;
    }
    resultDiv.style.color = "green";
  } else if (nonBurnableWaste[selectedLanguage].includes(keyword)) {
    if (selectedLanguage === "vi") {
      resultDiv.innerText = `Rác "${keyword}" là rác không cháy được.`;
    } else if (selectedLanguage === "ja") {
      resultDiv.innerText = `ゴミ「${keyword}」は燃えないゴミです。`;
    } else if (selectedLanguage === "en") {
      resultDiv.innerText = `Waste "${keyword}" is non-burnable.`;
    } else if (selectedLanguage === "mn") {
      resultDiv.innerText = `Хог "${keyword}" нь шатдаггүй.`;
    }
    resultDiv.style.color = "red";
  } else {
    if (selectedLanguage === "vi") {
      resultDiv.innerText = `Không tìm thấy thông tin về loại rác "${keyword}" trong ngôn ngữ đã chọn.`;
    } else if (selectedLanguage === "ja") {
      resultDiv.innerText = `選択した言語で「${keyword}」のゴミ情報が見つかりません。`;
    } else if (selectedLanguage === "en") {
      resultDiv.innerText = `No waste information found for "${keyword}" in the selected language.`;
    } else if (selectedLanguage === "mn") {
      resultDiv.innerText = `Сонгосон хэлээр "${keyword}" хогийн мэдээлэл олдсонгүй.`;
    }
    resultDiv.style.color = "black";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("classifyButton")
    .addEventListener("click", classifyWaste);
});
