import axios from "axios";
import React from "react";
import ReferCont from "../includes/ReferCont";

class ReferTab_css extends React.Component {
  state = {
    refers: [],
  };

  getReferscss = async () => {
    const {
      data: {
        data: { cssRefer },
      },
    } = await axios.get(
      "https://raw.githubusercontent.com/stronghasu/react/main/cssrefer.json"
    );

    console.log(cssRefer);
    this.setState({ refers: cssRefer });
  };

  componentDidMount() {
    this.getReferscss();
  }

  render() {
    const { refers } = this.state;

    console.log(refers);

    return (
      <ul className="refer__list">
        {refers.map((refer) => (
          <ReferCont
            key={refer.id}
            id={refer.id}
            title={refer.title}
            desc={refer.desc}
          />
        ))}
      </ul>
    );
  }
}

// function ReferTab_css() {
//   return (
//     <div>ReferTab_css</div>
//   )
// }

export default ReferTab_css;
