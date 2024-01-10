export default function GameOver({
  handleAgain,
  handleEnd,
  score
}: {
  handleAgain: any;
  handleEnd: any;
  score:number
}) {
  return (
    <div className="max-w-sm bg-white h-48 py-4 w-full rounded-lg flex flex-col justify-around border-4 border-solid border-sky-500">
      <h1 className="text-center font-bold text-3xl">Game over</h1>
      <div className="px-4 flex gap-2 items-center h-8">
        <p className="font-bold text-lg ">{score}/10</p>
      </div>
      <div className="flex gap-4 px-2 py-2 w-full h-16">
        <button onClick={handleEnd} className="w-1/2 p-2 h-12 rounded-md font-bold">End</button>
        <button onClick={handleAgain} className="w-1/2 p-2 h-12  rounded-md bg-sky-500 text-white font-bold">
          Again
        </button>
      </div>
    </div>
  );
}
