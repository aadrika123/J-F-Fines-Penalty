


import React, { useEffect, useState } from 'react';


const UseCaptchaGenerator = () => {
    const [captcha, setCaptcha] = useState('');

    const newGeneratedCaptcha = () => {
        // Generate a alphanumeric captcha code
        const captchaCode = Math.random().toString(36).slice(2, 8).toUpperCase();
        setCaptcha(captchaCode);
    };

    const verifyCaptcha = (values, resetForm) => {
        if (values === captcha) {
            // Captcha verification success
            return true;
        } else {
            // Captcha verification failed
            //   only reset the captcha field
            resetForm(
                {
                    captcha: ''
                },
                false
            );
            newGeneratedCaptcha();
            return false;
        }
    };

    const canvas = document.createElement('canvas');
    // create a canvas element with 0 margin and padding
    canvas.style.margin = '0';
    canvas.style.padding = '0';
    canvas.width = 100;
    canvas.height = 22;
    const ctx = canvas.getContext('2d');
    //   font bold 15px
    ctx.font = 'bold 15px Arial';
    //   text color red
    ctx.fillStyle = 'blue';
    ctx.fillText(captcha, 21, 16);
    const dataUrl = canvas.toDataURL();

    useEffect(() => {
        newGeneratedCaptcha();
    }, []);

    const catptchaTextField = (formik) => {
        return (
            <div>
                <input  className="w-full leading-5 relative py-2 px-4 rounded  text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600"
     type='text' {...formik?.getFieldProps("captcha")} />
                
                <span className="text-red-600 text-xs">
                    {formik?.touched?.captcha && formik?.errors?.captcha
                        ? formik?.errors?.captcha
                        : null}
                </span>
            </div>
        );
    };

    return {
        catptchaTextField,
        captcha,
        dataUrl,
        verifyCaptcha,
        newGeneratedCaptcha
    };
};

export default UseCaptchaGenerator;