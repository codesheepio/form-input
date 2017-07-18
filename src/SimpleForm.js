import React from 'react';

function SimpleForm() {
  return (
    <div className="container">
      <form>
        Name:
        <input type="text" name="name" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SimpleForm;
