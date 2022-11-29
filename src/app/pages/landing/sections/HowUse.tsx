import React from "react"
import { KTSVG } from "../../../../_metronic/helpers";
import { motion } from "framer-motion"
import { isMobile } from 'react-device-detect';

const HowUse = () => {
    return (
        <>
            <div className="text-center mb-17">
                <h3 className="fs-2hx text-dark mb-5" id="how-use" data-kt-scroll-offset="{default: 100, lg: 150}">Як використовувати?</h3>
            </div>
            {isMobile ? (
                <>
                    <style>{`
.accordion-button:not(.collapsed) {
    background-color: #f4dde4;
}
    `}</style>
                    <div className='accordion' id='kt_accordion_1'>
                        <div className='accordion-item bg-light-corporate-red rounded border-0 mb-5'>
                            <h2 className='accordion-header' id='kt_accordion_1_header_1'>
                                <button
                                    className='accordion-button fs-4 fw-bold text-dark shadow-none rounded-top collapsed'
                                    type='button'
                                    data-bs-toggle='collapse'
                                    data-bs-target='#kt_accordion_1_body_1'
                                    aria-expanded='false'
                                    aria-controls='kt_accordion_1_body_1'
                                >
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div
                                id='kt_accordion_1_body_1'
                                className='accordion-collapse collapse'
                                aria-labelledby='kt_accordion_1_header_1'
                                data-bs-parent='#kt_accordion_1'
                            >
                                <div className='accordion-body'>
                                    <strong>This is the first item's accordion body.</strong>It is hidden by
                                    default, until the collapse plugin adds the appropriate classes that we use to
                                    style each element. These classes control the overall appearance, as well as the
                                    showing and hiding via CSS transitions. You can modify any of this with custom
                                    CSS or overriding our default variables. It's also worth noting that just about
                                    any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className='accordion-item bg-light-corporate-red rounded border-0 mb-5'>
                            <h2 className='accordion-header rounded' id='kt_accordion_1_header_2'>
                                <button
                                    className='accordion-button fs-4 fw-bold text-dark shadow-none rounded-top collapsed'
                                    type='button'
                                    data-bs-toggle='collapse'
                                    data-bs-target='#kt_accordion_1_body_2'
                                    aria-expanded='false'
                                    aria-controls='kt_accordion_1_body_2'
                                >
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div
                                id='kt_accordion_1_body_2'
                                className='accordion-collapse collapse'
                                aria-labelledby='kt_accordion_1_header_2'
                                data-bs-parent='#kt_accordion_1'
                            >
                                <div className='accordion-body'>
                                    <strong>This is the second item's accordion body.</strong>It is hidden by
                                    default, until the collapse plugin adds the appropriate classes that we use to
                                    style each element. These classes control the overall appearance, as well as the
                                    showing and hiding via CSS transitions. You can modify any of this with custom
                                    CSS or overriding our default variables. It's also worth noting that just about
                                    any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className='accordion-item bg-light-corporate-red rounded border-0 mb-5'>
                            <h2 className='accordion-header' id='kt_accordion_1_header_3'>
                                <button
                                    className='accordion-button fs-4 fw-bold text-dark shadow-none rounded-top collapsed'
                                    type='button'
                                    data-bs-toggle='collapse'
                                    data-bs-target='#kt_accordion_1_body_3'
                                    aria-expanded='false'
                                    aria-controls='kt_accordion_1_body_3'
                                >
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div
                                id='kt_accordion_1_body_3'
                                className='accordion-collapse collapse'
                                aria-labelledby='kt_accordion_1_header_3'
                                data-bs-parent='#kt_accordion_1'
                            >
                                <div className='accordion-body'>
                                    <strong>This is the third item's accordion body.</strong>It is hidden by
                                    default, until the collapse plugin adds the appropriate classes that we use to
                                    style each element. These classes control the overall appearance, as well as the
                                    showing and hiding via CSS transitions. You can modify any of this with custom
                                    CSS or overriding our default variables. It's also worth noting that just about
                                    any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <ul className="nav row mb-10">
                        <li className="nav-item col-6 col-lg mb-5 mb-lg-0">
                            <a className="nav-link btn btn-flex btn-color-gray-700 btn-outline bg-white btn-active-light-corporate-red d-flex flex-grow-1 flex-column flex-center active py-5 h-1250px h-lg-175px" data-bs-toggle="tab" href="#how_use_1">
                                <span className="svg-icon svg-icon-3x mb-5 mx-0">
                                    <KTSVG path="/media/icons/duotune/graphs/gra010.svg" className="svg-icon-muted svg-icon-2hx" />
                                </span>
                                <span className="fs-6 fw-bold">Дослідження</span>
                            </a>
                        </li>
                        <li className="nav-item col-6 col-lg mb-5 mb-lg-0">
                            <a className="nav-link btn btn-flex btn-color-gray-700 btn-outline bg-white btn-active-light-corporate-red d-flex flex-grow-1 flex-column flex-center py-5 h-1250px h-lg-175px" data-bs-toggle="tab" href="#how_use_2">
                                <span className="svg-icon svg-icon-3x mb-5 mx-0">
                                    <KTSVG path="/media/icons/duotune/text/txt009.svg" className="svg-icon-muted svg-icon-2hx" />
                                </span>
                                <span className="fs-6 fw-bold">Тестування</span>
                            </a>
                        </li>
                        <li className="nav-item col-6 col-lg mb-5 mb-lg-0">
                            <a className="nav-link btn btn-flex btn-color-gray-700 btn-outline bg-white btn-active-light-corporate-red d-flex flex-grow-1 flex-column flex-center py-5 h-1250px h-lg-175px" data-bs-toggle="tab" href="#how_use_3">
                                <span className="svg-icon svg-icon-3x mb-5 mx-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="currentColor" />
                                        <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="currentColor" />
                                    </svg>
                                </span>
                                <span className="fs-6 fw-bold">Order</span>
                            </a>
                        </li>
                        <li className="nav-item col-6 col-lg mb-5 mb-lg-0">
                            <a className="nav-link btn btn-flex btn-color-gray-700 btn-outline bg-white btn-active-light-corporate-red d-flex flex-grow-1 flex-column flex-center py-5 h-1250px h-lg-175px" data-bs-toggle="tab" href="#how_use_4">
                                <span className="svg-icon svg-icon-3x mb-5 mx-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="8" y="9" width="3" height="10" rx="1.5" fill="currentColor" />
                                        <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="currentColor" />
                                        <rect x="18" y="11" width="3" height="8" rx="1.5" fill="currentColor" />
                                        <rect x="3" y="13" width="3" height="6" rx="1.5" fill="currentColor" />
                                    </svg>
                                </span>
                                <span className="fs-6 fw-bold">Sales</span>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="how_use_1">
                            <div className="card bg-light-corporate-red">
                                <div className="card-body p-10">
                                    <div className="row align-items-center">
                                        <div className="col-sm-7 pe-0 mb-5 mb-sm-0">
                                            <div className="d-flex justify-content-between h-100 flex-column pt-xl-5 pb-xl-2 ps-xl-7">
                                                <div className="mb-7">
                                                    <div className="mb-6">
                                                        <h3 className="fs-2 fw-bold text-gray-800 text-uppercase">Досліджуйте аудиторію та перевіряйте припущення</h3>
                                                        <span className="fs-4 fw-semibold text-gray-600">Бізквіз допомагає перевіряти будь-які гіпотези чи припущення. Створюйте опитування, збирайте результати та у зручній аналітиці в персональому кабінеті аналізуйте відповіді, на основі яких приймайте вірні рішення.</span>
                                                    </div>
                                                </div>
                                                <div className="m-0">
                                                    <a href="#" className="btn btn-color-white bg-danger bg-opacity-75 bg-hover-opacity-50 fw-normal p-3 pe-5 position-relative" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">
                                                        <img src="/media/avatars/300-4.jpg" className="img-fluid h-40px me-4 symbol symbol-circle" alt="" />Кейс використання квіза для психолога
                                                        <span className="position-absolute top-0 right-0">
                                                            <i className="fa fa-arrow-up-right-from-square"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <img
                                                src="/media/product-demos/demo4.png"
                                                className="h-200px h-lg-250px my-n6 rounded"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="how_use_2">
                            <div className="card bg-light-corporate-red">
                                <div className="card-body p-10">
                                    <div className="row align-items-center">
                                        <div className="col-sm-7 pe-0 mb-5 mb-sm-0">
                                            <div className="d-flex justify-content-between h-100 flex-column pt-xl-5 pb-xl-2 ps-xl-7">
                                                <div className="mb-7">
                                                    <div className="mb-6">
                                                        <h3 className="fs-2 fw-semibold text-gray-800 text-uppercase">Консультуйте ваших клієнтів по асортименту товарів або послуг та допомагайте робити вибір</h3>
                                                        <span className="fw-semibold text-gray-600">Flat cartoony and illustrations with vivid color</span>
                                                    </div>
                                                </div>
                                                <div className="m-0">
                                                    <a href="#" className="btn btn-color-white bg-danger bg-opacity-75 bg-hover-opacity-50 fw-normal p-3 pe-5 position-relative" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">
                                                        <img src="/media/avatars/300-4.jpg" className="img-fluid h-40px me-4 symbol symbol-circle" alt="" />Кейс використання квіза для психолога
                                                        <span className="position-absolute top-0 right-0">
                                                            <i className="fa fa-arrow-up-right-from-square"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <img src="/media/product-demos/demo4.png" className="h-200px h-lg-250px my-n6 rounded" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="how_use_3">
                            <div className="card bg-light-corporate-red">
                                <div className="card-body p-10">
                                    <div className="row align-items-center">
                                        <div className="col-sm-7 pe-0 mb-5 mb-sm-0">
                                            <div className="d-flex justify-content-between h-100 flex-column pt-xl-5 pb-xl-2 ps-xl-7">
                                                <div className="mb-7">
                                                    <div className="mb-6">
                                                        <h3 className="fs-2 fw-semibold text-gray-800 text-uppercase">Консультуйте ваших клієнтів по асортименту товарів або послуг та допомагайте робити вибір</h3>
                                                        <span className="fw-semibold text-gray-600">Flat cartoony and illustrations with vivid color</span>
                                                    </div>
                                                </div>
                                                <div className="m-0">
                                                    <a href="#" className="btn btn-color-white bg-danger bg-opacity-75 bg-hover-opacity-50 fw-normal p-3 pe-5 position-relative" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">
                                                        <img src="/media/avatars/300-4.jpg" className="img-fluid h-40px me-4 symbol symbol-circle" alt="" />Кейс використання квіза для психолога
                                                        <span className="position-absolute top-0 right-0">
                                                            <i className="fa fa-arrow-up-right-from-square"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <img src="/media/product-demos/demo4.png" className="h-200px h-lg-250px my-n6 rounded" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="how_use_4">
                            <div className="card bg-light-corporate-red">
                                <div className="card-body p-10">
                                    <div className="row align-items-center">
                                        <div className="col-sm-7 pe-0 mb-5 mb-sm-0">
                                            <div className="d-flex justify-content-between h-100 flex-column pt-xl-5 pb-xl-2 ps-xl-7">
                                                <div className="mb-7">
                                                    <div className="mb-6">
                                                        <h3 className="fs-2 fw-semibold text-gray-800 text-uppercase">Консультуйте ваших клієнтів по асортименту товарів або послуг та допомагайте робити вибір</h3>
                                                        <span className="fw-semibold text-gray-600">Flat cartoony and illustrations with vivid color</span>
                                                    </div>
                                                </div>
                                                <div className="m-0">
                                                    <a href="#" className="btn btn-color-white bg-danger bg-opacity-75 bg-hover-opacity-50 fw-normal p-3 pe-5 position-relative" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">
                                                        <img src="/media/avatars/300-4.jpg" className="img-fluid h-40px me-4 symbol symbol-circle" alt="" />Кейс використання квіза для психолога
                                                        <span className="position-absolute top-0 right-0">
                                                            <i className="fa fa-arrow-up-right-from-square"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <img src="/media/product-demos/demo4.png" className="h-200px h-lg-250px my-n6 rounded" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </>
            )}
        </>
    )
}

export default HowUse