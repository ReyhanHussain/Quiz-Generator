
function Loader({ generationText = 'generating..' }) {
  return (
    <div className="loaderOuterContainer">
      <div className="loaderCard">

          <div className="logoImg">
            🌀
          </div>
        <div className="logo">
          <p>{generationText}</p>
        </div>
        <div className="quote">
          <p>Our AI is crafting personalized questions</p>
          <p>just for you. This might take time.</p>

          <p>Till then visit us: <a href="https://www.linkedin.com/in/reyhanhussain/" target="_blank">here</a></p>
        </div>
        <div className="loaderContainerSection">
          <div className="loaderSection"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
