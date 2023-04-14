import Proteges from "@/components/Proteges/Proteges";
import getProteges from "@/lib/getProteges";
import Protege from "@/components/Proteges/Protege";
import Loading from "./loading";

export default async function page() {
  // const { loading, error, data } = useFetch(
  //   "http://localhost:1337/api/proteges?populate=Image"
  // );

  const proteges = await getProteges();

  return (
    <div>
      <Proteges>
        {proteges.data.map((protege) => (
          <Protege protege={protege} key={protege.id} />
        ))}
      </Proteges>
    </div>
  );
}
