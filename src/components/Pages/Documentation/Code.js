import React from "react";

const Code = ({ code, yellow }) => {
  return (
    <>
      {code && (
        <pre>
          <code className="text-xl text-base-100">{code}</code>
        </pre>
      )}
      {
        yellow &&
        <div className="text-xl">{yellow}</div>
      }
    </>
  );
};

export default Code;
