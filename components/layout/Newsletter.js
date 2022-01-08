import emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';

const Newsletter = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      from_name: '',
      reply_to: '',
    },
    validationSchema: Yup.object({
      from_name: Yup.string()
        .max(20, 'Should not exceed 20 characters')
        .required('*Name field is required'),
      reply_to: Yup.string()
        .email('Invalid email address')
        .required('*Email field is required'),
    }),
    onSubmit: (values) => {
      try {
        emailjs
          .send(
            process.env.NEXT_PUBLIC_SERVICE,
            process.env.NEXT_PUBLIC_TEMPLATE,
            values,
            process.env.NEXT_PUBLIC_USER
          )
          .then(() => {
            router.push('/thanks');
          });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <section className=''>
      <div className='container max-w-screen-xl'>
        <div className=''>
          <h2>
            Weekly
            <br />
            Newsletter.
          </h2>
          <ul>
            <li>
              <FontAwesomeIcon className='' icon={faCheck} />
              <p>Travel discounts</p>
            </li>
          </ul>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <input
            id='from_name'
            name='from_name'
            type='text'
            autoComplete='off'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.from_name}
            placeholder='Name'
            required
          />
          {formik.errors.from_name ? (
            <div className='text-red-500'>{formik.errors.from_name}</div>
          ) : null}
          <input
            placeholder='Email'
            type='email'
            id='reply_to'
            name='reply_to'
            autoComplete='off'
            className='rounded'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.reply_to}
          />
          {formik.errors.reply_to ? (
            <div className='text-red-500'>{formik.errors.reply_to}</div>
          ) : null}
          <input type='hidden' name='to_name' value='To Miri' />
          <button type='submit'>
            <FontAwesomeIcon
              className=''
              icon={faLongArrowAltRight}
              disabled={formik.isSubmitting}
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
