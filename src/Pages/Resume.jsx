import { useRef } from 'react';
import Navbar from '../Components/Navbar';
import ResumeItem from '../Components/ResumeItem';
import './HomePage.css';

const Resume = () => {
    let education = {
        
    }
    return (
        <div>
            <Navbar />
            <div className='container' style={{ 'padding-top': '120px','padding-bottom': '80px' }}>
                <div className=''>
                    <div>
                        <h2 className="font-manrope fw-semibold" style={{ 'font-size': '41px' }}>Education</h2>
                    </div>
                    <div style={{ 'cursor': 'pointer' }} className='my-4' data-bs-toggle="collapse" data-bs-target="#collapseWidthExample0" aria-expanded="false" aria-controls="collapseWidthExample">
                        <div className='d-flex justify-content-between'>
                            <div>
                                <div>
                                    <span className='font-karla fw-bold text-gray' style={{ 'font-size': '25px' }}>Bachelors in Science, Computer Science</span>
                                </div>
                            </div>
                            <div>
                                <span className='badge text-bg-success bg-teal'>Full time</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <div className='d-flex align-items-center me-3'>
                                    {/* <svg className='me-1' fill="#000000" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M16 6.28a1.23 1.23 0 0 0-.62-1.07l-6.74-4a1.27 1.27 0 0 0-1.28 0l-6.75 4a1.25 1.25 0 0 0 0 2.15l1.92 1.12v2.81a1.28 1.28 0 0 0 .62 1.09l4.25 2.45a1.28 1.28 0 0 0 1.24 0l4.25-2.45a1.28 1.28 0 0 0 .62-1.09V8.45l1.24-.73v2.72H16V6.28zm-3.73 5L8 13.74l-4.22-2.45V9.22l3.58 2.13a1.29 1.29 0 0 0 1.28 0l3.62-2.16zM8 10.27l-6.75-4L8 2.26l6.75 4z"></path></g></svg> */}
                                    <i class="fa-solid fa-graduation-cap me-1"></i>
                                    <span className='font-manrope fw-semibold text-gray' style={{ 'font-size': '14px' }}>University of Nebraska-Lincoln</span>
                                </div>
                                <div className='d-flex align-items-center'>
                                    {/* <svg className='me-1' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <path d="M12.8159 20.6077C16.8509 18.5502 20 15.1429 20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11C4 15.1429 7.14909 18.5502 11.1841 20.6077C11.6968 20.8691 12.3032 20.8691 12.8159 20.6077Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
                                    <i class="fa-solid fa-location-dot me-1"></i>
                                    <span className='font-manrope fw-semibold text-gray' style={{ 'font-size': '14px' }}>Lincoln, NE</span>
                                </div>
                            </div>
                            <div>
                                <span className='font-manrope fw-semibold text-gray' style={{ 'font-size': '13px' }}>2021-2023 (Est)</span>
                            </div>
                        </div>
                        <div className="collapse" id="collapseWidthExample0">
                            <div className="card card-body" style={{ 'border': 'none' }}>
                                <p className='mb-0'>
                                    <strong>Relevant courseworks:</strong><span> Data Structures & Algorithms, Software Engineering, Deep Learning, Operating Systems & Kernels.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-5'>
                    <div>
                        <h2 className="font-manrope fw-semibold" style={{ 'font-size': '41px' }}>Work Experience</h2>
                    </div>
                    <div>
                        <ResumeItem data={{ 'title': 'Software Engineering Intern', 'type': 'work', 'time': 'Part-Time', 'organization': 'Maptician, Inc.', 'location': 'Lincoln, NE', 'date': 'Jan 2023 - Present' }} />
                        <ResumeItem data={{ 'title': 'Full stack Developer', 'type': 'work', 'time': 'Part-Time', 'organization': 'Maptician, Inc.', 'location': 'Lincoln, NE', 'date': 'April 2022 - Present' }} />
                        <ResumeItem data={{ 'title': 'Web Applications Programmer', 'type': 'work', 'time': 'Part-Time', 'organization': 'Maptician, Inc.', 'location': 'Lincoln, NE', 'date': 'Nov 2021 - Present' }} />
                        <ResumeItem data={{ 'title': 'Web Applications QA Tester Intern', 'type': 'work', 'time': 'Part-Time', 'organization': 'ITS, University of Nebraska System', 'location': 'Lincoln, NE', 'date': 'Aug 2022 - Jan 2023' }} />
                        <ResumeItem data={{ 'title': 'Software Developer', 'type': 'work', 'time': 'Part-Time', 'organization': 'Kathmandu International Mountain Film Festival', 'location': 'Kathmandu, Nepal', 'date': 'Apr 2019 - Apr 2022' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;