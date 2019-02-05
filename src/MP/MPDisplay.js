import React, { PureComponent } from 'react';

export class MPDisplay extends PureComponent {
  constructor(props) {
    super(props);
  
    this.state = {
      isLoadingImage: true,
    };

    this.setImageToLoadedState = this.setImageToLoadedState.bind(this);
  }
  
  
  setImageToLoadedState() {
    this.setState({
      isLoadingImage: false,
    });
  }
  
  render() {
    const { name, email, elected_office, photo_url, url } = this.props;
    const { isLoadingImage } = this.state;

    const PHOTO_ID = `photo-${email}`;
        
    return (
      <div>
        <h3>{name}</h3>
        <p>Elected Office: {elected_office}</p>
        <p><a href={url}>More Info</a></p>
        <div className="inline-content--centered pos--rel MP-img">
          <img 
            id={PHOTO_ID} 
            src={photo_url} 
            alt="MP photo" 
            className={isLoadingImage ? 'display--hidden' : ''}
            onLoad={this.setImageToLoadedState}
          />
          {isLoadingImage && (
            <div className="overlay--centered">
              Wait for it..
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MPDisplay;
