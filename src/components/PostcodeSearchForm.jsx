import { useState } from "react";
export default function PostcodeSearchForm({ setPostcode, invalidInput }) {
  const [postcodeTextInput, setPostcodeTextInput] = useState("");

  const handleChange = (event) => {
    setPostcodeTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPostcode(postcodeTextInput);
    setPostcodeTextInput("");
  };

  return (
    <form className="postcodeSearchForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter the outcode part of the postcode (eg: BB10 for 'BB10 2BQ)"
        onChange={handleChange}
        value={postcodeTextInput}
        className="postcodeText"
        required
      />
      {invalidInput ? <span>Enter a valid postcode</span> : null}
      <button className="searchBtn">Search</button>
    </form>
  );
}
