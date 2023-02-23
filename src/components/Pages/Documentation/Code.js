import React from 'react';

const Code = ({code}) => {

    return (
        <div>
           <pre data-prefix="$"><code>{code}</code></pre> 
        </div>
    );
};

export default Code;