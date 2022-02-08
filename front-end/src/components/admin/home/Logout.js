import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './admin.css';

function Logout() {
    const history = useHistory();
    const handleRoute = () => {
        history.push('/');
      };
  return (
    <div className="container" id="aabu">
      <div className="card " id="abu">
        <label className="subheading mt-4">Click here To logout</label>
        <form>
          <div className="form-group mt-3" id="forma">
          </div>
        </form>
        <Button  id="yo" className="mt-4" onClick={handleRoute}>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Logout;


