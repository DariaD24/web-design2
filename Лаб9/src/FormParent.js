import React, { useState } from "react";
import FormInput from './FormInput';
import FormDisplay from './FormDisplay';

function FormParent() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div>
            <h1>Форма</h1>
            <FormInput 
                formData={formData} 
                onInputChange={handleInputChange} 
            />
            <FormDisplay formData={formData} />
        </div>
    );
}

export default FormParent;