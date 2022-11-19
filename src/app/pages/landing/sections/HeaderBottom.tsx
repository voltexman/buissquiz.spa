import Typewriter from 'typewriter-effect'
import Gradient from 'rgt'
import { KTSVG } from '../../../../_metronic/helpers'

const HeaderBottom = () => {
    return (
        <div className="d-lg-flex my-10 my-lg-20">
            <div className="col-12 col-lg-4 text-center">
                <img className="img-fluid rounded" src="media/books/2.png" alt="" />
            </div>
            <div className="col-12 col-lg-8 mt-15 mt-lg-0 ps-lg-20">
                <h1 className="text-white text-center text-lg-start lh-base fw-bolder fs-2x">
                    <Gradient dir="left-to-right" from="#12CE5D" to="#FFD80C">
                        СТВОРЮЙТЕ, ОТРИМУЙТЕ, АНАЛІЗУЙТЕ
                    </Gradient>
                    <br />
                    <span className='fw-normal text-uppercase'>з нами ви зможете
                        <Typewriter
                            options={{
                                strings: [
                                    'отримувати заявки',
                                    'допомагати робити вибір',
                                    'визначати потреби'
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 20,
                                deleteSpeed: 20,
                                cursor: ''
                            }}
                        />
                    </span>
                </h1>

                <div className="d-flex flex-center">
                    <div className="d-flex flex-wrap flex-center justify-content-lg-between mx-auto my-10 w-xl-900px">
                        <div className="d-flex flex-column flex-center h-125px w-125px h-lg-200px w-lg-200px m-lg-3 bgi-no-repeat bgi-position-center bgi-size-contain" style={{ backgroundImage: "url('media/svg/misc/octagon.svg')" }}>
                            <span className="svg-icon svg-icon-2tx svg-icon-white mb-1 mb-lg-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect x="2" y="2" width="9" height="9" rx="2" fill="black" />
                                    <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black" />
                                    <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black" />
                                    <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black" />
                                </svg>
                            </span>
                            <div className="mb-0 text-center">
                                <div className="fs-lg-2hx fs-2x fw-bolder text-white d-flex flex-center">
                                    <div className="min-w-70px" data-kt-countup="true" data-kt-countup-value="7" data-kt-countup-suffix="+">7 днів</div>
                                </div>
                                <span className="text-gray-600 fw-bold fs-5 lh-0">безкоштовне<br />тестування</span>
                            </div>
                        </div>

                        <div className="d-flex flex-column flex-center h-125px w-125px h-lg-200px w-lg-200px m-1 m-lg-3 bgi-no-repeat bgi-position-center bgi-size-contain" style={{ backgroundImage: "url('media/svg/misc/octagon.svg')" }}>
                            <span className="svg-icon svg-icon-2tx svg-icon-white mb-1 mb-lg-3">
                                <KTSVG path="/media/icons/duotune/general/gen013.svg" className="svg-icon-muted svg-icon-2hx" />
                            </span>
                            <div className="mb-0 text-center">
                                <div className="fs-lg-2hx fs-2x fw-bolder text-white d-flex flex-center">
                                    <div className="min-w-70px" data-kt-countup="true" data-kt-countup-value="15" data-kt-countup-suffix="+">15 хв</div>
                                </div>
                                <span className="text-gray-600 fw-bold fs-5 lh-0">створення<br />квіза</span>
                            </div>
                        </div>

                        <div className="d-flex flex-column flex-center h-125px w-125px h-lg-200px w-lg-200px m-1 m-lg-3 bgi-no-repeat bgi-position-center bgi-size-contain" style={{ backgroundImage: "url('media/svg/misc/octagon.svg')" }}>
                            <span className="svg-icon svg-icon-2tx svg-icon-white mb-1 mb-lg-3">
                                <KTSVG path="/media/icons/duotune/layouts/lay009.svg" className="svg-icon-muted svg-icon-2hx" />
                            </span>
                            <div className="mb-0 text-center">
                                <div className="fs-lg-2hx fs-2x fw-bolder text-white d-flex flex-center">
                                    <div className="min-w-70px" data-kt-countup="true" data-kt-countup-value="10" data-kt-countup-suffix="+">10+</div>
                                </div>
                                <span className="text-gray-600 fw-bold fs-5 lh-0">готових<br />шаблонів</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="d-flex justify-content-center justify-content-lg-start mt-5 mt-lg-0">
                    <a href="/" className="btn btn-flex btn-primary d-inline-flex px-6">
                        <span className="svg-icon svg-icon-2x">
                            <KTSVG
                                path='/media/icons/duotune/communication/com006.svg'
                                className='svg-icon svg-icon-3x'
                            />
                        </span>
                        <span className="d-flex flex-column align-items-start ms-2">
                            <span className="fs-3 fw-bolder">Спробувати</span>
                            <span className="fs-7">Демо версія</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom