
import  { useRef } from 'react';
import emailjs from '@emailjs/browser'

const EmailSection = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_93xqtvs', 'template_n58z6h4', form.current, 'tbZxN_bnwffA5dWLo')
      .then((result) => {
          if(result.status == 200) {
            form.current.reset()
          }
          
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className='  bg-cover text-white bg-no-repeat' style={{ backgroundImage: `url(https://quizapi.io/storage/Newsletter.jpeg)` }}>
            <div className='bg-black bg-opacity-60  py-20 text-center  ' >
                <p className='text-3xl py-8 '>Stay Tuned</p>
                <p className='py-10  font-thin'>Subscribe to our newsletter and receive the latest news from QuzApi.</p>
                <form ref={form} onSubmit={sendEmail} className="mt-6 ">
                    <div className="relative w-full mx-auto max-w-lg">
                        <label className="sr-only" htmlFor="email"> Email </label>

                        <input
                            className="w-full text-black rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                            id="email"
                            type="email"
                            name='user_email'
                            placeholder="john@doe.com"
                        />

                        <button
                            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-green-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default EmailSection;