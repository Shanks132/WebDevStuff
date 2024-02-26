async function main() {
  const resp = await fetch(
    "https://api-aniwatch.onrender.com/anime/search?q=bocchi&page=1"
  );
  const data = await resp.json();
  console.log(data);

  let img = document.createElement("img")
  img.setAttribute("src", data.animes[0].poster)
  document.body.appendChild(img);



}
main()