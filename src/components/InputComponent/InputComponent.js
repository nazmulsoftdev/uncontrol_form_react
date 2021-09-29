import React,{forwardRef} from 'react'

function InputComponent({type,name,required,autoComplete,placeholder},ref) {
    return (
        <>
            <input type={type} name={name} ref={ref} required={required}
                 autoComplete={autoComplete} placeholder={placeholder} />
        </>
    )
}

const InputComponents = forwardRef(InputComponent)


export default InputComponents
