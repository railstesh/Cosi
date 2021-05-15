import * as React from 'react';
import ReviewPage from './ReviewPage';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './DetailsPage.css';

interface IDetailsPageProps {
    userData: {
        firstName: string;
        lastName: string;
        flightno: string;
        id: string;
    };
}

const DetailsPage: React.FC<IDetailsPageProps> = userData => {
    const userDetails = userData;
    const [userDetailsToShow, setUserDeatilsToShow] = React.useState({
        userDetailsToShow: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            passportNo: '',
            nationality: '',
            residence: {
                country: '',
                city: '',
                address: ''
            },
            birthDate: '',
            birthPlace: '',
            passportIssueDate: '',
            passportExpiryDate: '',
            passportIssueCountry: '',
            passportIssueCity: ''
        }
    });
    const [emailField, setEmailField] = React.useState('');
    const [phoneNoField, setPhoneNoField] = React.useState('');
    const [passportField, setPassportField] = React.useState('');
    const [dropDownValue, setDropDownValue] = React.useState('');
    const [showAustriaField, setShowAustriaField] = React.useState(false);
    const [showBelgiumField, setShowBelgiumField] = React.useState(false);
    const [showFranceField, setShowFranceField] = React.useState(false);
    const [showGreeceField, setShowGreeceField] = React.useState(false);
    const [showSpainField, setShowSpainField] = React.useState(false);
    const [checkboxValue, setCheckboxValue] = React.useState(false);
    const [countryField, setCountryField] = React.useState('');
    const [cityField, setCityField] = React.useState('');
    const [addressField, setAddressField] = React.useState('');
    const [birthField, setBirthField] = React.useState('');
    const [birthPlaceField, setBirthPlaceField] = React.useState('');
    const [passportIssueField, setPassportIssueField] = React.useState('');
    const [passportExpiryField, setPassportExpiryField] = React.useState('');
    const [passportCountryField, setPassportCountryField] = React.useState('');
    const [passportCityField, setPassportCityField] = React.useState('');

    const [showReviewPage, setShowReviewPage] = React.useState(false);
    React.useEffect(() => {
        if (dropDownValue === 'Austria') {
            setShowAustriaField(true);
            setShowBelgiumField(false);
            setShowFranceField(false);
            setShowGreeceField(false);
            setShowSpainField(false);
        } else if (dropDownValue === 'Belgium') {
            setShowBelgiumField(true);
            setShowAustriaField(false);
            setShowFranceField(false);
            setShowGreeceField(false);
            setShowSpainField(false);
        } else if (dropDownValue === 'France') {
            setShowFranceField(true);
            setShowBelgiumField(false);
            setShowAustriaField(false);
            setShowGreeceField(false);
            setShowSpainField(false);
        } else if (dropDownValue === 'Greece') {
            setShowGreeceField(true);
            setShowBelgiumField(false);
            setShowAustriaField(false);
            setShowFranceField(false);
            setShowSpainField(false);
        } else if (dropDownValue === 'Spain') {
            setShowSpainField(true);
            setShowBelgiumField(false);
            setShowAustriaField(false);
            setShowFranceField(false);
            setShowGreeceField(false);
        }
    }, [dropDownValue]);

    const submitDetails = (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setUserDeatilsToShow({
            userDetailsToShow: {
                firstName: userDetails.userData.firstName,
                lastName: userDetails.userData.lastName,
                email: emailField,
                phone: phoneNoField,
                passportNo: passportField,
                nationality: dropDownValue,
                residence: {
                    country: countryField,
                    city: cityField,
                    address: addressField
                },
                birthDate: birthField,
                birthPlace: birthPlaceField,
                passportIssueDate: passportIssueField,
                passportExpiryDate: passportExpiryField,
                passportIssueCountry: passportCountryField,
                passportIssueCity: passportCityField
            }
        });
        if (!checkboxValue) {
            setShowReviewPage(true);
        } else {
            setShowReviewPage(true);
        }
    };

    const onFieldChange = (e: any) => {
        if (e.target.name === 'email') {
            setEmailField(e.target.value);
        }

        if (e.target.name === 'phone_no') {
            setPhoneNoField(e.target.value);
        }

        if (e.target.name === 'passport') {
            setPassportField(e.target.value);
        }
        if (e.target.name === 'country') {
            setCountryField(e.target.value);
        }
        if (e.target.name === 'city') {
            setCityField(e.target.value);
        }
        if (e.target.name === 'address') {
            setAddressField(e.target.value);
        }
        if (e.target.name === 'passport-expiry-date') {
            setPassportExpiryField(e.target.value);
        }
        if (e.target.name === 'birth-date') {
            setBirthField(e.target.value);
        }
        if (e.target.name === 'birth-place') {
            setBirthPlaceField(e.target.value);
        }
        if (e.target.name === 'passport-issue-date') {
            setPassportIssueField(e.target.value);
        }
        if (e.target.name === 'passport-country-of-issue') {
            setPassportCountryField(e.target.value);
        }
        if (e.target.name === 'passport-city-of-issue') {
            setPassportCityField(e.target.value);
        }
    };
    const handleSelect = (e: string | null) => {
        e && setDropDownValue(e);
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(e.target.checked);
    };
    const firstName = userDetails.userData.firstName;
    const lastName = userDetails.userData.lastName;
    return (
        <div>
            {!showReviewPage ? (
                <div>
                    <h2 className='text-center mt-5 mb-5 font-weight-bold'>
                        Hi, Mr.{firstName}!
                    </h2>
                    <div className='col-sm-12 col-md-5 mx-auto pb-4'>
                        <form onSubmit={submitDetails}>
                            <div>
                                <input
                                    name='first_name'
                                    type='name'
                                    className='form-control border border-dark'
                                    placeholder='First Name'
                                    onChange={onFieldChange}
                                    value={firstName}
                                    required
                                />
                            </div>

                            <div className='mt-4 mb-4'>
                                <input
                                    name='last_name'
                                    type='last_name'
                                    className='form-control  border border-dark'
                                    placeholder='Last Name'
                                    onChange={onFieldChange}
                                    value={lastName}
                                    required
                                />
                            </div>

                            <DropdownButton
                                alignRight
                                title={
                                    dropDownValue
                                        ? dropDownValue
                                        : 'Nationality'
                                }
                                id='dropdown-menu-align-right'
                                onSelect={e => handleSelect(e)}
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
                                    onChange={onFieldChange}
                                    value={emailField}
                                    required
                                />
                            </div>

                            <div className='mt-4 mb-4'>
                                <input
                                    name='phone_no'
                                    type='string'
                                    className='form-control  border border-dark'
                                    placeholder='Phone Number'
                                    onChange={onFieldChange}
                                    value={phoneNoField}
                                    required
                                />
                            </div>

                            <div className='mt-4 mb-4'>
                                <input
                                    name='passport'
                                    type='string'
                                    className='form-control  border border-dark'
                                    placeholder='Passport #'
                                    onChange={onFieldChange}
                                    value={passportField}
                                    required
                                />
                            </div>
                            {(showAustriaField ||
                                showBelgiumField ||
                                showFranceField) && (
                                <div>
                                    <div className='mt-4 mb-4'>
                                        <input
                                            name='country'
                                            type='string'
                                            className='form-control  border border-dark'
                                            placeholder='Country'
                                            onChange={onFieldChange}
                                            value={countryField}
                                            required
                                        />
                                    </div>
                                    <div className='mt-4 mb-4'>
                                        <input
                                            name='city'
                                            type='string'
                                            className='form-control  border border-dark'
                                            placeholder='City'
                                            onChange={onFieldChange}
                                            value={cityField}
                                            required
                                        />
                                    </div>
                                </div>
                            )}
                            {(showBelgiumField || showSpainField) && (
                                <div className='mt-4 mb-4'>
                                    <input
                                        name='address'
                                        type='string'
                                        className='form-control  border border-dark'
                                        placeholder='address'
                                        onChange={onFieldChange}
                                        value={addressField}
                                        required
                                    />
                                </div>
                            )}
                            {(showAustriaField || showGreeceField) && (
                                <div className='mt-4 mb-4'>
                                    <input
                                        name='passport-expiry-date'
                                        type='string'
                                        className='form-control  border border-dark'
                                        placeholder='Passport Expiry date'
                                        onChange={onFieldChange}
                                        value={passportExpiryField}
                                        required
                                    />
                                </div>
                            )}
                            {(showBelgiumField || showFranceField) && (
                                <div className='mt-4 mb-4'>
                                    <input
                                        name='birth-date'
                                        type='string'
                                        className='form-control  border border-dark'
                                        placeholder='Birth Date'
                                        onChange={onFieldChange}
                                        value={birthField}
                                        required
                                    />
                                </div>
                            )}
                            {showFranceField && (
                                <div className='mt-4 mb-4'>
                                    <input
                                        name='birth-place'
                                        type='string'
                                        className='form-control  border border-dark'
                                        placeholder='Birth Place'
                                        onChange={onFieldChange}
                                        value={birthPlaceField}
                                        required
                                    />
                                </div>
                            )}
                            {showGreeceField && (
                                <div>
                                    <div className='mt-4 mb-4'>
                                        <input
                                            name='passport-issue-date'
                                            type='string'
                                            className='form-control  border border-dark'
                                            placeholder='Passport Issue Date'
                                            onChange={onFieldChange}
                                            value={passportIssueField}
                                            required
                                        />
                                    </div>

                                    <div className='mt-4 mb-4'>
                                        <input
                                            name='passport-country-of-issue'
                                            type='string'
                                            className='form-control  border border-dark'
                                            placeholder='Passport Country of Issue'
                                            onChange={onFieldChange}
                                            value={passportCountryField}
                                            required
                                        />
                                    </div>
                                    <div className='mt-4 mb-4'>
                                        <input
                                            name='passport-city-of-issue'
                                            type='string'
                                            className='form-control  border border-dark'
                                            placeholder='Passport City of Issue'
                                            onChange={onFieldChange}
                                            value={passportCityField}
                                            required
                                        />
                                    </div>
                                </div>
                            )}
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    value='accepted'
                                    id='flexCheckIndeterminate'
                                    onChange={e => handleCheckboxChange(e)}
                                />
                                <label
                                    className='form-check-label mb-4'
                                    htmlFor='flexCheckIndeterminate'
                                >
                                    Accept T&amp;C
                                </label>
                            </div>
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
                <ReviewPage
                    userDetailsToShow={userDetailsToShow.userDetailsToShow}
                />
            )}
        </div>
    );
};

export default DetailsPage;
