export default function Page({ params }: { params: { productId: string } }) {
  return (
    <div>
      <h1>this is my product Id = {params.productId}</h1>
    </div>
  );
}
