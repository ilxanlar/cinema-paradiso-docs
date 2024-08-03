import { Player, RenderTime } from 'cinema-paradiso'

import PlaySVG from '@/icons/play-filled.svg'
import PauseSVG from '@/icons/pause.svg'
import MuteSVG from '@/icons/volume-off-filled.svg'
import UnmuteSVG from '@/icons/volume-up-filled.svg'
import FullscreenSVG from '@/icons/fullscreen.svg'
import FullscreenExitSVG from '@/icons/fullscreen-exit.svg'

import Content from '@/components/Content'
import Example from '@/components/Example'

const sampleVideo = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

const playButtonCode = `import { Player } from 'cinema-paradiso'\n
function App() {
  <Player src="${sampleVideo}">
    {player => (
      <div className="absolute bottom-0 left-0 right-0 flex items-center px-1 text-white bg-[rgba(0,0,0,0.2)]">
        <button onClick={() => player.api.togglePlay()}>
          {player.paused ? <PlaySVG /> : <PauseSVG />}
        </button>
      </div>
    )}
  </Player>
}`

const step2Code = `import { Player } from 'cinema-paradiso'\n
function App() {
  <Player src="${sampleVideo}">
    {player => (
      <div className="absolute bottom-0 left-0 right-0 flex items-center px-1 text-white bg-[rgba(0,0,0,0.2)]">
        <button onClick={() => player.api.togglePlay()}>
          {player.paused ? <PlaySVG /> : <PauseSVG />}
        </button>
        <button onClick={() => player.api.toggleMute()}>
          {player.muted ? <MuteSVG /> : <UnmuteSVG />}
        </button>
      </div>
    )}
  </Player>
}`

const step3Code = `import { Player } from 'cinema-paradiso'\n
function App() {
  <Player src="${sampleVideo}">
    {player => (
      <div className="absolute bottom-0 left-0 right-0 flex items-center px-1 text-white bg-[rgba(0,0,0,0.2)]">
        <button onClick={() => player.api.togglePlay()}>
          {player.paused ? <PlaySVG /> : <PauseSVG />}
        </button>
        <button onClick={() => player.api.toggleMute()}>
          {player.muted ? <MuteSVG /> : <UnmuteSVG />}
        </button>
        <div className="grow" />
        <button onClick={() => player.api.toggleFullscreen()}>
          {player.fullscreen ? <FullscreenExitSVG /> : <FullscreenSVG />}
        </button>
      </div>
    )}
  </Player>
}`

const step4Code = `import { Player, RenderTime } from 'cinema-paradiso'\n
function App() {
  <Player src="${sampleVideo}">
    {player => (
      <div className="absolute bottom-0 left-0 right-0 flex items-center px-1 text-white bg-[rgba(0,0,0,0.2)]">
        <button onClick={() => player.api.togglePlay()}>
          {player.paused ? <PlaySVG /> : <PauseSVG />}
        </button>
        <button onClick={() => player.api.toggleMute()}>
          {player.muted ? <MuteSVG /> : <UnmuteSVG />}
        </button>
        <div className="grow" />
        <RenderTime>
          {({ currentTime, duration }) => (
            <span>{currentTime}{' / '}{duration}</span>
          )}
        </RenderTime>
        <button onClick={() => player.api.toggleFullscreen()}>
          {player.fullscreen ? <FullscreenExitSVG /> : <FullscreenSVG />}
        </button>
      </div>
    )}
  </Player>
}`

export default function DocsIndex() {
  return (
    <>
      <Content>
        <h1>Cinema Paradiso</h1>
        <p>Cinema Paradiso is one of the best movies out there, directed by Giuseppe Tornatore. Don't forget to watch it
          if you haven't yet.</p>
        <p>Other than the great movie, Cinema Paradiso is a video player library built on top of React. Its main focus
          is to make customizing your video player a real breeze.</p>
        <p>Let's start with a basic example so we get on the same page quickly.</p>
      </Content>

      <br/>
      <br/>

      <Content>
        <h2>Play/Pause Button</h2>
        <p>Say you want to build a video player that has a play/pause button on the bottom-left corner of the video.</p>
      </Content>

      <Example code={playButtonCode}>
        <Player className="rounded" src={sampleVideo}>
          {player => (
            <div className="absolute bottom-0 left-0 right-0 flex items-center px-1 text-white bg-[rgba(0,0,0,0.2)]">
              <button className="fill-current p-2" onClick={() => player.api.togglePlay()}>
                {player.paused ? <PlaySVG className="h-8 w-8"/> : <PauseSVG className="h-8 w-8"/>}
              </button>
            </div>
          )}
        </Player>
      </Example>

      <br/>
      <br/>

      <h2>Mute/Unmute Button</h2>

      <Example code={step2Code}>
        <Player className="rounded" src={sampleVideo}>
          {player => (
            <div className="absolute bottom-0 left-0 right-0 flex items-center px-1 text-white bg-[rgba(0,0,0,0.2)]">
              <button className="fill-current p-2" onClick={() => player.api.togglePlay()}>
                {player.paused ? <PlaySVG className="h-8 w-8"/> : <PauseSVG className="h-8 w-8"/>}
              </button>
              <button className="fill-current p-2" onClick={() => player.api.toggleMute()}>
                {player.muted ? <MuteSVG className="h-8 w-8"/> : <UnmuteSVG className="h-8 w-8"/>}
              </button>
            </div>
          )}
        </Player>
      </Example>

      <br/>
      <br/>

      <h2>Fullscreen Button</h2>

      <Example code={step3Code}>
        <Player className="rounded" src={sampleVideo}>
          {player => (
            <div className="absolute bottom-0 left-0 right-0 flex items-center px-1 text-white bg-[rgba(0,0,0,0.2)]">
              <button className="fill-current p-2" onClick={() => player.api.togglePlay()}>
                {player.paused ? <PlaySVG className="h-8 w-8"/> : <PauseSVG className="h-8 w-8"/>}
              </button>
              <button className="fill-current p-2" onClick={() => player.api.toggleMute()}>
                {player.muted ? <MuteSVG className="h-8 w-8"/> : <UnmuteSVG className="h-8 w-8"/>}
              </button>
              <div className="grow"/>
              <button className="fill-current p-2" onClick={() => player.api.toggleFullscreen()}>
                {player.fullscreen ? <FullscreenExitSVG className="h-8 w-8"/> : <FullscreenSVG className="h-8 w-8"/>}
              </button>
            </div>
          )}
        </Player>
      </Example>

      <br/>
      <br/>

      <h2>Current Time and Duration</h2>

      <p>To access the current time and the duration of the media, you will use the <code
        className="prop">RenderTime</code> component.</p>

      <Example code={step4Code}>
        <Player className="rounded" src={sampleVideo}>
          {player => (
            <div className="absolute bottom-0 left-0 right-0 flex items-center px-1 text-white bg-[rgba(0,0,0,0.2)]">
              <button className="fill-current p-2" onClick={() => player.api.togglePlay()}>
                {player.paused ? <PlaySVG className="h-8 w-8"/> : <PauseSVG className="h-8 w-8"/>}
              </button>
              <button className="fill-current p-2" onClick={() => player.api.toggleMute()}>
                {player.muted ? <MuteSVG className="h-8 w-8"/> : <UnmuteSVG className="h-8 w-8"/>}
              </button>
              <div className="grow"/>
              <RenderTime>
                {({ currentTime, duration }) => (
                  <span>
                    {currentTime}{' / '}{duration}
                  </span>
                )}
              </RenderTime>
              <button className="fill-current p-2" onClick={() => player.api.toggleFullscreen()}>
                {player.fullscreen ? <FullscreenExitSVG className="h-8 w-8"/> : <FullscreenSVG className="h-8 w-8"/>}
              </button>
            </div>
          )}
        </Player>
      </Example>

      <br/>
      <br/>

      <h2>Player Object</h2>

      <p>So what's inside the <code>player</code> object?</p>

      <section className="doc-box bg-gray-100 rounded-2xl p-8 -mx-8">
        <h2>Basics: Play, Mute and Fullscreen</h2>
        <ul>
          <li><code className="prop">player.paused</code> <code className="type">boolean</code> Is the media paused or
            playing?
          </li>
          <li><code className="prop">player.muted</code> <code className="type">boolean</code> Is the media muted or
            not?
          </li>
          <li><code className="prop">player.fullscreen</code> <code className="type">boolean</code> Has the media player
            entered the fullscreen mode or not?
          </li>
          <li><code className="prop">player.api.togglePlay()</code> <code
            className="type">{'() => void'}</code> Play/pause the media.
          </li>
          <li><code className="prop">player.api.toggleMute()</code> <code
            className="type">{'() => void'}</code> Mute/unmute the media.
          </li>
          <li><code className="prop">player.api.toggleFullscreen()</code> <code
            className="type">{'() => void'}</code> Enter/exit fullscreen mode.
          </li>
        </ul>
      </section>

    </>
  )
}
