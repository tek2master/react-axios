const React = require("react");
const ReactDOM = require("react-dom");
const axios = require("axios");

const styles = {
  img: {
    height: "15em"
  }
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      imgURL: ""
    };
  }

  getRandomImage = () => {
    axios
      .get("https://dog.ceo/api/breed/{breed name}/images/random")
    // .get("https://dog.ceo/api/breeds/image/random")
    .then(response => {
      this.setState({
        imgURL: response.data.message
      });
    })
    .catch(err => {
      console.log("error fetching image");
    });
  };

  componentDidMount() {
    this.getRandomImage();
  }

  render() {
    const { imgURL } = this.state;

    return (
      <div>
        <p> Random Dog Pictures v1 </p>
        <div>
          <img style={styles.img} alt="" src={imgURL} />
        </div>
        <p>
          <button onClick={this.getRandomImage}> 
          {" "}
          one more!{" "} 
          </button>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
