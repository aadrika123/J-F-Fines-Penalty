


import React, { useEffect, useState } from 'react';


const UseCaptchaGenerator = () => {
    const [captcha, setCaptcha] = useState('');
   
    const [captchaImage, setCaptchaImage] = useState("");
    const newGeneratedCaptcha = () => {
        const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Avoid confusing characters
        const captchaText = Array.from(
         { length: 6 },
         () => characters[Math.floor(Math.random() * characters.length)]
        ).join("");
        setCaptcha(captchaText);
        drawCaptcha(captchaText);
    };
    const drawCaptcha = (captchaText) => {
        const canvas = document.createElement("canvas");
        canvas.width = 200;
        canvas.height = 60;
        const ctx = canvas.getContext("2d");
      
        // Background color
      
        ctx.fillStyle = "#E3F2FD";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      
        // Add random curves & noise
      
        for (let i = 0; i < 7; i++) {
         ctx.beginPath();
         ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
         ctx.bezierCurveTo(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * canvas.width,
          Math.random() * canvas.height
         );
      
         ctx.strokeStyle = `rgba(0, 0, 0, 0.3)`;
         ctx.lineWidth = 2;
         ctx.stroke();
      
        }
      
        // Draw text with random skew and rotation
      
        ctx.font = "bold 30px Arial";
        for (let i = 0; i < captchaText.length; i++) {
         ctx.save();
         const x = 20 + i * 30;
         const y = 40 + Math.random() * 10;
         const angle = (Math.random() - 0.5) * 0.6;
         ctx.translate(x, y);
         ctx.rotate(angle);
         ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.9 + 0.1})`;
         ctx.fillText(captchaText[i], 0, 0);
         ctx.restore();
      
        }
      
        // Convert to Data URL
        setCaptchaImage(canvas.toDataURL());
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
        captchaImage,
        verifyCaptcha,
        newGeneratedCaptcha
    };
};

export default UseCaptchaGenerator;