import React from 'react';

import Header from './Header.jsx';
import Buttons from './Buttons.jsx';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showPage1: true,
      showPage2: false,
      showPage3: false
    }
  }

  render() {
    const { showPage1, showPage2, showPage3 } = this.state;

    return (
    <div className='container'>
      <div className='row'>
        <Header />
      </div>
      <div>
        {
          showPage1 ?
            <Page1 />
          :
            <Page2 />
        }
      </div>
      <div className='row'>
        <Buttons onPage2={ this.handleClickedPage2 }/>
      </div>
    </div>
    );
  }
}

export default App;
