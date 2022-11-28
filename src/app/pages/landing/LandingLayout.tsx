/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from 'react'
import HeaderTop from './sections/HeaderTop'
import HeaderBottom from './sections/HeaderBottom'
import WhatThis from './sections/WhatThis'
import { ScrollTop } from '../../../_metronic/layout/components/scroll-top'
import HowUse from './sections/HowUse'

const BODY_CLASSES = ['position-relative']
const LandingPage = () => {
  useEffect(() => {
    BODY_CLASSES.forEach((c) => document.body.classList.add(c))
    document.body.setAttribute('data-bs-spy', 'scroll')
    document.body.setAttribute('data-bs-target', '#kt_landing_menu')
    document.body.setAttribute('data-bs-offset', '200')

    document.body.removeAttribute('data-kt-app-layout')
    document.body.removeAttribute('data-kt-name')

    document.body.classList.remove('app-default')
    document.body.setAttribute('id', 'kt_body')

    return () => {
      // BODY_CLASSES.forEach((c) => document.body.classList.remove(c))
      // document.body.style.backgroundImage = 'none'
    }
  }, [])

  return (
    <>
      <div className="mb-0" id="home">
        <div className="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg" style={{ backgroundImage: "url(media/svg/illustrations/landing.svg)" }}>

          <HeaderTop />

          <div className="container">

            <HeaderBottom />

          </div>

          <span>&nbsp;</span>

        </div>
        <div className="landing-curve landing-dark-color mb-10 mb-lg-20">
          <svg viewBox="15 12 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <div className="mb-n10 mb-lg-n50 z-index-2">
        <div className="container">

          <WhatThis />

        </div>
      </div>

      <div className='my-10'>
        <div className="container">

          <HowUse />

        </div>
      </div>
    </>
  )
}

const LandingLayout: FC = () => {
  return (
    <>
      <div className="d-flex flex-column flex-root">
        <LandingPage />

        <ScrollTop />
      </div>
    </>
  )
}

export { LandingLayout }
