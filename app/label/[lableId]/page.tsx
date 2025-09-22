
// export default function page({params}:{params:{labelId:string}}){  
//   return( 
//   <div>
// <h1>this is my lable id ={params.labelId} </h1>
//   </div>
//   )
// }


export default function Page({ params }: { params: { labelId: string } }) {
  return (
    <div>
      <h1>this is my label Id = {params.labelId}</h1>
    </div>
  );
}
