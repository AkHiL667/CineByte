function Loading() {
  return (
    <div className="w-screen h-screen flex items-center bg-black justify-center">
      <video src="/loader.mp4" autoPlay loop muted className="w-[50%]  h-[50%]  object-cover" />
    </div>
  )
}

export default Loading
