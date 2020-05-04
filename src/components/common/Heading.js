import React from "react";

function Heading(props) {

    const {h1, title, label, description, position, className} = props;

    return (
        <header className={`el-heading ${position} ${className}`}>
            {h1 && <h1>{h1}</h1>}
            {title && <h2>{label && <span className="display-block fw-100">{label}</span>}{title}</h2>}
            {description && <p>{description}</p>}
        </header>
    )
}

export default Heading;

