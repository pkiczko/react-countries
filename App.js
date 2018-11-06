import React, { Component } from 'react';
import './App.css';


const countries= ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
  ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Virgin Islands"
  ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
  ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
  ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
  ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
  ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
  ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
  ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
  ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
  ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre and Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
  ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts and Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
  ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad and Tobago","Tunisia"
  ,"Turkey","Turkmenistan","Turks and Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
  ,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
function randomHexaNumberGenerator() {
    let decaNumberSize = Math.pow(16,6); //creating a number which is going to be converted to 6 digit hexa number
    let number = Math.floor((Math.random()*decaNumberSize) + 1).toString(16); //now we have the number, only need to convert it to hexa
    return number;
    //divCreate(`#${number}`);
  }



class App extends Component {
  state = {
    text: '',
    list: countries,
    search: false,
  };
  handleChange = e => {
    this.setState ({
      text: e.target.value.toLowerCase(),
    });
    if (!this.state.search) {
      this.setState ({
        list: countries.filter(country => country.toLowerCase().includes(e.target.value.toLowerCase())),
      });
    }
    else
    this.setState ({
      list: countries.filter(country => country.substring(0,e.target.value.length).toLowerCase() === e.target.value.toLowerCase()),
    });
  };
  searchAny = () => {
    this.setState({
      search: false,
      list: countries.filter(country => country.toLowerCase().includes(this.state.text)),
    })

  };
  searchStarts = () => {
    this.setState({
      search: true,
      list: countries.filter(country => country.substring(0,this.state.text.length).toLowerCase() === this.state.text.toLowerCase()),
    })

  };

  render() {
    const list = this.state.list.map(item => <li style={{backgroundColor: `#${randomHexaNumberGenerator()}`}}>{item}</li>);
    return (
      <div className='App'>
        <h2>Colorful Countries</h2>
        <h3>State of the art search engine</h3>
        <input onChange={this.handleChange} type="text" />
        <div class='tabs'>
          <input id="tab1" type="radio" name="tabs" onClick={this.searchStarts}  />
          <label for="tab1">Starts with</label>
          <input id="tab2" type="radio" name="tabs" onClick={this.searchAny} />
          <label for="tab2">Includes</label>
        </div>
        {list}

      </div>
    );
  }
}

export default App;
