import React from "react";

function Heading(props) {

    const {h1, title, label, description, position, className, subTitle} = props;

    return (
        <header className={`el-heading ${position} ${className}`}>
            {h1 && <h1>{h1}</h1>}
            {subTitle && <p className="subtitle">{subTitle}</p>}
            {title && <h2>{label && <span className="display-block fw-100">{label}</span>}{title}</h2>}
            {description && <p>{description}</p>}
        </header>
    )
}

export default Heading;

