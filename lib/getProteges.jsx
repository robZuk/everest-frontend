export default async function getProteges() {
  // const res = await fetch("http://localhost:1337/api/proteges?populate=Image", {
  const res = await fetch(
    "https://everest-ggyc.onrender.com/api/proteges?populate=Image",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  // await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
