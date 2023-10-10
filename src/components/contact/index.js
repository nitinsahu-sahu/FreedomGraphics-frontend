import React from 'react'
import { ButtonComponents, FormInputModule, FormLabelModule,  TextAreaComponents } from '../global-components/Form.components'
import { useForm, ValidationError } from '@formspree/react';
function ContactIndexComponent() {
  const [state, handleSubmit] = useForm("xpzgwvqo");

  return (
    <>
      <div className='py-5 text-center'>
        <h2>Contact Us</h2>
      </div>
      
      <div className='container'>
        <div className='mx-5'>
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <FormInputModule typ="text" cn="form-control form-control-lg" nm="name" id="name" />
              <FormLabelModule cn="form-label" title="Name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="form-outline mb-4">
              <FormInputModule typ="email" cn="form-control form-control-lg" nm="email" id="email" />
              <FormLabelModule cn="form-label" title="Email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-outline mb-4">
              <TextAreaComponents id="message" cn="form-control" plh="Enter your message" nm="message" rw="4" />
              <FormLabelModule cn="form-label" title="Message" />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <ButtonComponents typ="submit" btnname="Send" cn="btn btn-block fs-5 fw-bold mb-4" disabled={state.submitting} />
          </form>
          <div>{state.succeeded ? <p>Thanks for joining!</p> : ''}</div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.988658383927!2d75.8933380760585!3d22.72866292723096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4a43e5146b%3A0x178ba9c57a11f04e!2sAnmol%20Spaces!5e0!3m2!1sen!2sin!4v1690377810761!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Office Location Geo map"
      />
    </>
  )
}
export default ContactIndexComponent
