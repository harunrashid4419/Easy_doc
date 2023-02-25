import React from "react";

const Code = ({ code, yellow }) => {
  return (
    <>
      {code && (
        <pre>
          <code>{code}</code>
        </pre>
      )}
      {yellow && <p className="py-1 text-xl">{yellow}</p>}
    </>
  );
};

export default Code;
