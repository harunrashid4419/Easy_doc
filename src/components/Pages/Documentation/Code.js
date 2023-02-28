import React from "react";

const Code = ({ code, yellow }) => {
  return (
    <>
      {code && (
        <pre>
          <code>{code}</code>
        </pre>
      )}
      {
        yellow &&
        <div>{yellow}</div>
      }
    </>
  );
};

export default Code;
