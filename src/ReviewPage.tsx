import * as React from 'react';
import ConfirmationPage from './ConfirmationPage';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

interface IReviewPageProps {
    userDetailsToShow: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        passportNo: string;
        nationality: string;
        residence: {
            country: string;
            city: string;
            address: string;
        };
        birthDate: string;
        birthPlace: string;
        passportIssueDate: string;
        passportExpiryDate: string;
        passportIssueCountry: string;
        passportIssueCity: string;
    };
}

const ReviewPage: React.FC<IReviewPageProps> = userDetailsToShow => {
    const data = userDetailsToShow.userDetailsToShow;
    const [showConfirmationPage, setShowConfirmationPage] = React.useState(
        false
    );
    const submitDetails = (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        axios
            .post(
                `https://609e55f633eed8001795849e.mockapi.io/passenger`,
                userDetailsToShow
            )
            .then(response => {
                if (response.status === 201) {
                    setShowConfirmationPage(true);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div>
            {!showConfirmationPage ? (
                <div>
                    <h2 className='text-center mt-5 mb-5 font-weight-bold'>
                        Please review your Information
                    </h2>

                    <div className='col-sm-12 col-md-5 mx-auto pb-4'>
                        <form onSubmit={submitDetails}>
                            <div>
                                <input
                                    name='first_name'
                                    type='name'
                                    className='form-control border border-dark'
                                    placeholder='First Name'
                                    defaultValue={data.firstName}
                                />
                            </div>

                            <div className='mt-4 mb-4'>
                                <input
                                    name='last_name'
                                    type='last_name'
                                    className='form-control  border border-dark'
                                    placeholder='Last Name'
                                    defaultValue={data.lastName}
                                />
                            </div>

                            <DropdownButton
                                alignRight
                                title={
                                    data.nationality
                                        ? data.nationality
                                        : 'Nationality'
                                }
                                id='dropdown-menu-align-right'
                            >
                                <Dropdown.Item eventKey='Austria'>
                                    Austria
                                </Dropdown.Item>
                                <Dropdown.Item eventKey='Belgium'>
                                    Belgium
                                </Dropdown.Item>
                                <Dropdown.Item eventKey='France'>
                                    France
                                </Dropdown.Item>
                                <Dropdown.Item eventKey='Greece'>
                                    Greece
                                </Dropdown.Item>
                                <Dropdown.Item eventKey='Spain'>
                                    Spain
                                </Dropdown.Item>
                            </DropdownButton>

                            <div className='mt-4 mb-4'>
                                <input
                                    name='email'
                                    type='email'
                                    className='form-control  border border-dark'
                                    placeholder='Email'
                                    defaultValue={data.email}
                                />
                            </div>

                            <div className='mt-4 mb-4'>
                                <input
                                    name='phone_no'
                                    type='string'
                                    className='form-control  border border-dark'
                                    placeholder='Phone Number'
                                    defaultValue={data.phone}
                                />
                            </div>

                            <div className='mt-4 mb-4'>
                                <input
                                    name='passport'
                                    type='string'
                                    className='form-control  border border-dark'
                                    placeholder='Passport #'
                                    defaultValue={data.passportNo}
                                />
                            </div>
                            {data.residence.country !== '' && (
                                <div className='mt-4 mb-4'>
                                    <input
                                        name='country'
                                        type='string'
                                        className='form-control  border border-dark'
                                        placeholder='Country'
                                        defaultValue={data.residence.country}
                                    />
                                </div>
                            )}
                            {data.residence.city !== '' && (
                                <div className='mt-4 mb-4'>
                                    <input
                                        name='city'
                                        type='string'
                                        className='form-control  border border-dark'
                                        placeholder='City'
                                        defaultValue={data.residence.city}
                                    />
                                </div>
                            )}
                            {data.residence.address !== '' && (
                                <div className='mt-4 mb-4'>
                                    <input
                                        name='address'
                                        type='string'
                                        className='form-control  border border-dark'
                                        placeholder='address'
                                        defaultValue={data.residence.address}
                                    />
                                </div>
                            )}
                            {data.passportExpiryDate !== '' && (
                                <div className='mt-4 mb-4'>
                                    <input
                                        name='passport-expiry-date'
                                        type='string'
                                        className='form-control  border border-dark'
                                        placeholder='Passport Expiry date'
                                        defaultValue={data.passportExpiryDate}
                                    />
                                </div>
                            )}
                            {data.birthDate !== '' && (
                                <div className='mt-4 mb-4'>
                                    <input
                                        name='birth-date'
                                        type='string'
                                        className='form-control  border border-dark'
                                        placeholder='Birth Date'
                                        defaultValue={data.birthDate}
                                    />
                                </div>
                            )}
                            {data.birthPlace !== '' && (
                                <div className='mt-4 mb-4'>
                                    <input
                                        name='birth-place'
                                        type='string'
                                        className='form-control  border border-dark'
                                        placeholder='Birth Place'
                                        defaultValue={data.birthPlace}
                                    />
                                </div>
                            )}
                            {data.passportIssueDate !== '' && (
                                <div className='mt-4 mb-4'>
                                    <input
                                        name='passport-issue-date'
                                        type='string'
                                        className='form-control  border border-dark'
                                        placeholder='Passport Issue Date'
                                        defaultValue={data.passportIssueDate}
                                    />
                                </div>
                            )}
                            {data.passportIssueCountry !== '' && (
                                <div className='mt-4 mb-4'>
                                    <input
                                        name='passport-country-of-issue'
                                        type='string'
                                        className='form-control  border border-dark'
                                        placeholder='Passport Country of Issue'
                                        defaultValue={data.passportIssueCountry}
                                    />
                                </div>
                            )}
                            {data.passportIssueCity !== '' && (
                                <div className='mt-4 mb-4'>
                                    <input
                                        name='passport-city-of-issue'
                                        type='string'
                                        className='form-control  border border-dark'
                                        placeholder='Passport City of Issue'
                                        defaultValue={data.passportIssueCity}
                                    />
                                </div>
                            )}
                            <button
                                className='btn d-block mx-auto w-100'
                                type='submit'
                            >
                                Continue
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <ConfirmationPage />
            )}
        </div>
    );
};

export default ReviewPage;
