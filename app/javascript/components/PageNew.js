import React from 'react';

const NewNote = (props) => {
  return (
    <div>
      <h1>New Page Form Here</h1>
      <form action='/pages' method="post">
        <p>title</p>
        {/* <input name='model[attr]' /> */}
        <input name = 'page[title]' />
        <p>Author</p>
        <input name = 'page[author]' />
        
        <button type = 'submit'>add</button> 
      </form>
    </div>
  );
};

export default NewNote;