export default function Error(){
  return(
    <div className="bg-black/60 relative max-w-[500px] p-8 mx-auto my-[10%] rounded-md">
        <p className="text-2xl text-center pb-6 text-red-600">Error:</p>
        <p className="text-xl text-center text-red-500">No city found, please try again and type it properly.</p>
      </div>
  );
}