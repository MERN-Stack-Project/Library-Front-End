import video from "../images/video.mp4"

function Home() {
  return (
    <>
      <h1> WelCome To My Library... </h1>
      <video src={video} autoPlay muted loop />
    </>
  )
}

export default Home
