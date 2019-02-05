import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import MPDisplay from './MPDisplay';

const OPENNORTH_API_URL = 'https://represent.opennorth.ca/postcodes/';

const genRequestURL = postalCode => `${OPENNORTH_API_URL}${postalCode}`;

export class PostalSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postalCode: '',
      MPs: null, // either an array, or null
      renderedError: null,
    };

    this.handleChangePostalCode = this.handleChangePostalCode.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.getMPfromPostalCode = this.getMPfromPostalCode.bind(this);
  }

  handleChangePostalCode(e) {
    const nxtValue = e.target.value;
    this.setState({
      postalCode: nxtValue.trim(),
    });
  }

  // this could be split into more functions if I was interested
  // in retaining more of the requested information
  // but for now lets just focus on the MP..
  async getMPfromPostalCode(postalCode) {
    try {
      // call the api and treat the data..
      const res = await fetchJsonp(genRequestURL(postalCode));
      const jsonData = await res.json();
      const representatives = jsonData.representatives_centroid;

      // basic guard if the data is currupt for some reason
      if (!representatives || !Array.isArray(representatives)) return null;
      // otherwise return an array of elected MPs
      return representatives.filter(rep => rep.elected_office === 'MP');
    } catch (err) {
      // we're here if something went wrong with the fetch
      this.setState({
        renderedError:
          'Something went wrong.  Are you sure that\'s a real postal code?',
      });
      return null;
    }
  }

  // get the MPs when form is submitted
  async handleFormSubmit(e) {
    e.preventDefault();

    const { postalCode } = this.state;
    const formattedPostalCode = postalCode.toUpperCase();

    // check if postal code is valid with this sweeet regex 
    // (TEST MORE FOR PRODUCTION CODE)
    const isValidPostalCode = /^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(
      formattedPostalCode
    );

    // set an error msg if postal code isn't valid
    if (!isValidPostalCode) {
      this.setState({
        renderedError: 'Not a valid postal code',
      });
      return null;
    } else {
      this.setState({
        renderedError: null,
      });
    }

    const MPs = await this.getMPfromPostalCode(formattedPostalCode);
    // note, MP could be null if something went wrong here
    // however we can still set it directly to state (see constructor)
    this.setState({
      MPs,
    });
  }

  render() {
    const { renderedError, MPs } = this.state;
    return (
      <div className="App-intro">
        <form onSubmit={this.handleFormSubmit}>
          {/* do we still use brs? */}
          {/* <br /> */}
          <input
            placeholder="ex. V0A1H6"
            value={this.state.postalCode}
            onChange={this.handleChangePostalCode}
          />
          <button>Go</button>
        </form>
        <p className="text--emp">Enter your postal code to find your MP!</p>
        <p>Spaces between characters aren't allowed.</p>
        <p>It handles a few errors.. try a non postal code</p>
        <p>Or try this postal code that "looks" real V0Y1H7</p>
        {renderedError && <p className="text--error">{renderedError}</p>}
        {MPs && MPs.map(MP => <MPDisplay {...MP} key={MP.email} />)}
      </div>
    );
  }
}

export default PostalSearch;
