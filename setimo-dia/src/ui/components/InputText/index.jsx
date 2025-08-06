import React from 'react';

export default function InputText(props) {
    let changedProps = Object.assign({}, props);
    let className = null;
    let fieldLabel = null;

    if (props.className) {
        className = props.className;
        delete changedProps.className;
    }

    if (props.fieldLabel) {
        fieldLabel = props.fieldLabel;
        delete changedProps.fieldLabel;
    }

    return (
        <label className={className}>
            {fieldLabel}
            <div>
                <input {...changedProps} className="form-input"/>
                {changedProps.errors[changedProps.name] && (<p className="field-error">
                    {<span>{changedProps.errors[changedProps.name].message}</span>}
                </p>)}
            </div>
        </label>
    );
}

/*

                */