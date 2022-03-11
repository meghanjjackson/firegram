import React, { useState } from "react";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select an image file");
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
    </form>
  );
}

export default UploadForm;
