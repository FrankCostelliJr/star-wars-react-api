import React from "react";
import App from '../App';
export const NotFound = () => (

  <>
    <div 
    className="jumbotron bg-info centered" 
    style={{padding: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}>
      <div style={{flex: '1'}}>
        <h1 className="display-4">Page Not Found</h1>
      </div>
      <div style={{flex: '1'}}>
        <p>
          <a href='/' className='btn btn-primary'>Return Home</a>
        </p>
      </div>    
    </div>
    <div>

    </div>
  </>
);

export default NotFound;
