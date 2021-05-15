import * as React from 'react';
import axios from 'axios';
import DetailsPage from './DetailsPage';
const MainPage = () => {
    const [error, setError] = React.useState(false);
    const [flightNoField, setFlightNoField] = React.useState('');
    const [lastNameField, setLastNameField] = React.useState('');
    const [showNextPage, setshowNextPage] = React.useState(false);
    const [userData, setUserdata] = React.useState({
        userData: {
            firstName: '',
            lastName: '',
            flightno: '',
            id: ''
        }
    });
    const submitDetails = (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!flightNoField) {
            setError(true);
        }
        if (!lastNameField) {
            setError(true);
        }

        axios
            .get(
                `https://609e55f633eed8001795849e.mockapi.io/users?lastName=${lastNameField}`
            )
            .then(response => {
                setUserdata({ userData: response.data[0] });
            });

        userData && setshowNextPage(true);
    };

    const onFieldChange = (e: any) => {
        if (e.target.name === 'flight_no') {
            setFlightNoField(e.target.value);
        }

        if (e.target.name === 'last_name') {
            setLastNameField(e.target.value);
        }
    };
    return (
        <div>
            {!showNextPage ? (
                <div>
                    <h2 className='text-center mt-5 mb-5 font-weight-bold'>
                        Welcome to your web check-in
                    </h2>
                    <div>
                        <div className='col-sm-12 col-md-5 mx-auto'>
                            <form onSubmit={submitDetails}>
                                <div>
                                    <input
                                        name='flight_no'
                                        type='string'
                                        className='form-control border border-dark'
                                        placeholder='Flight No.'
                                        onChange={onFieldChange}
                                        value={flightNoField}
                                    />
                                    {error && (
                                        <p className='text-danger'>
                                            Please provide a valid value
                                        </p>
                                    )}
                                </div>

                                <div className='mt-4 mb-4'>
                                    <input
                                        name='last_name'
                                        type='last_name'
                                        className='form-control  border border-dark'
                                        placeholder='Last Name'
                                        onChange={onFieldChange}
                                        value={lastNameField}
                                    />
                                    {error && (
                                        <p className='text-danger'>
                                            Please provide a valid value
                                        </p>
                                    )}
                                </div>
                                <button
                                    className='btn btn-primary mx-auto d-block w-100'
                                    type='submit'
                                >
                                    Search Flight
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                <DetailsPage userData={userData.userData} />
            )}
        </div>
    );
};

export default MainPage;
