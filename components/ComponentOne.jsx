import React from 'react';

const nextCard = () => (
      <div>
          <p>
              BATTER: 
              <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-arrow-left"></span></button>
               <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-menu-up"></span></button>
               <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-arrow-right"></span></button>
          </p>
          <p>
              INNING: 
              <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-arrow-left"></span></button>
               <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-menu-up"></span></button>
               <button type="button" className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-arrow-right"></span></button>
          </p>
      </div>
);

export default nextCard;