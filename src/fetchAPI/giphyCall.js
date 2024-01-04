export default async function callGiphy(q) {
  const img = document.querySelector('.mainImage');
    const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=soxaaxPuKt6EKETgCVcyjuBVv3E8Wt7H&q=${q}`,
    { mode: "cors" },
  );
  let json;
  try {
    json = await response.json();
    img.src = json.data[0].images.original.url;
  } catch(err) {
    throw new Error("날씨에 맞는 사진이 없습니다.");
  }
}