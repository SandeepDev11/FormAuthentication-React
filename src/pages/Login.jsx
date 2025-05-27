import { useFormik } from 'formik';
import React from 'react'
import Cookies from 'js-cookie';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';

const signUpSchmema = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email Address"),
  password: Yup.string().min(6).required("Please Enter Your Password"),
})

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchmema,
    onSubmit: (values) => {
      console.log(values, 'user-details');
      
      // Cookies.set(value,name,options)
      Cookies.set('token', '1234568sxdbdhjxgasdhjgxasyuidgsauidgasyuidgsayuidgasyuid', { expires: 7 });
      navigate('/dashboard');

    },
  });
  console.log(errors)


  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onClick={handleSubmit}>
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                    name="email"
                    id="email"
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email} />
                  {errors.email && touched.email ? <small style={{ color: 'red' }}>{errors.email}</small> : null}
                </div>
                <div>
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="password"
                    id="password"
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password} />
                  {errors.password && touched.password ? <small style={{ color: 'red' }}>{errors.password}</small> : null}

                </div>
                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer">Sign in</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login;
