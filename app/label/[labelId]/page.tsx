
export default function Page({ params }: { params: { labelId: string } }) {
  return (
    <div>
      <h1> my label Id is = {params.labelId}</h1>
    </div>
  );
}
