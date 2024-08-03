import VideoPlayer from '@/app/home/VideoPlayer.tsx'

export default function Home() {
  return (
    <div className="p-12 mx-auto max-w-[960px]">
      <header className="mb-8 text-center flex flex-col items-center">
        <img className="h-16 w-16 mb-8" src="/cinema-paradiso-docs/cp.svg" alt="Cinema Paradiso" />
        <h1>Cinema Paradiso</h1>
        <p>A video player built on top of React JS</p>
      </header>

      <div>
        <VideoPlayer/>
      </div>
    </div>
  )
}
