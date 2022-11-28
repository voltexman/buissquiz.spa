import React from "react"
import { useState } from "react";
import { KTSVG } from "../../../../_metronic/helpers";
import { motion } from "framer-motion"

const HowUse = () => {
    return (
        <>
            <div className="text-center mb-17">
                <h3 className="fs-2hx text-dark mb-5" id="how-use" data-kt-scroll-offset="{default: 100, lg: 150}">Як використовувати?</h3>
            </div>

            <ul className="nav row mb-10">
                <li className="nav-item col-6 col-lg mb-5 mb-lg-0">
                    <a className="nav-link btn btn-flex btn-color-gray-700 btn-outline bg-white btn-active-danger opacity-state-15 d-flex flex-grow-1 flex-column flex-center active py-5 h-1250px h-lg-175px" data-bs-toggle="tab" href="#how_use_1">
                        <span className="svg-icon svg-icon-3x mb-5 mx-0">
                            <KTSVG path="/media/icons/duotune/graphs/gra010.svg" className="svg-icon-muted svg-icon-2hx" />
                        </span>
                        <span className="fs-6 fw-bold text-gray-800">Дослідження</span>
                    </a>
                </li>
                <li className="nav-item col-6 col-lg mb-5 mb-lg-0">
                    <a className="nav-link btn btn-flex btn-color-gray-800 btn-outline bg-white btn-active-danger opacity-state-15 d-flex flex-grow-1 flex-column flex-center py-5 h-1250px h-lg-175px" data-bs-toggle="tab" href="#how_use_2">
                        <span className="svg-icon svg-icon-3x mb-5 mx-0">
                            <KTSVG path="/media/icons/duotune/text/txt009.svg" className="svg-icon-muted svg-icon-2hx" />
                        </span>
                        <span className="fs-6 fw-semibold">Тестування</span>
                    </a>
                </li>
                <li className="nav-item col-6 col-lg mb-5 mb-lg-0">
                    <a className="nav-link btn btn-flex btn-color-gray-700 btn-outline bg-white btn-active-danger opacity-state-15 d-flex flex-grow-1 flex-column flex-center py-5 h-1250px h-lg-175px" data-bs-toggle="tab" href="#how_use_3">
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
                    <a className="nav-link btn btn-flex btn-color-gray-700 btn-outline bg-white btn-active-danger opacity-state-15 d-flex flex-grow-1 flex-column flex-center py-5 h-1250px h-lg-175px" data-bs-toggle="tab" href="#how_use_4">
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
                {/* <li className="nav-item col-12 col-lg mb-5 mb-lg-0">
                    <a className="nav-link btn btn-flex btn-color-gray-400 btn-outline btn-active-primary d-flex flex-grow-1 flex-column flex-center py-5 h-1250px h-lg-175px" data-bs-toggle="tab" href="#kt_general_widget_1_5">
                        <span className="svg-icon svg-icon-3x mb-5 mx-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                                <path d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z" fill="currentColor" />
                            </svg>
                        </span>
                        <span className="fs-6 fw-bold">Access
                            <br />Control</span>
                    </a>
                </li> */}
            </ul>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="how_use_1">
                    <div className="card bg-danger bg-opacity-15">
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
                    <div className="card bg-danger bg-opacity-15">
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
                    <div className="card bg-danger bg-opacity-15">
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
                    <div className="card bg-danger bg-opacity-15">
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
    )
}

export default HowUse