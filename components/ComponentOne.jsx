import React from 'react';

const nextCard = (props) => (
      <div>
          <p>
              BATTER: 
              <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-arrow-left" onClick={props.subtractBatter} value={'subtract'}></span></button>
               <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-menu-up"></span></button>
               <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-arrow-right" onClick={props.addBatter} value={'add'}></span></button>
          </p>
          <p>
              INNING: 
              <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-arrow-left" onClick={props.subtractInning} ></span></button>
               <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-menu-up"></span></button>
               <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-arrow-right" onClick={props.addInning} ></span></button>
          </p>
      </div>
);

export default nextCard;