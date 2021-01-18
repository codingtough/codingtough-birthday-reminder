import React, { Fragment } from 'react';

const List = ({ people }) => {

   return (

      <Fragment>
         {
            people.map(({ id, name, age, image }) => {

               return (

                  <article key={id} className="person">
                     <img src={image} alt={name} />
                     <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                     </div>
                  </article>

               );
            })
         }
      </Fragment>

   );
}

export default List;
