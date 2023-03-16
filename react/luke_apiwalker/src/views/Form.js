import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export const Form = () => {
    const [id, setId] = useState('');
    const [category, setCategory] = useState('people');
    const [selectedIdError, setSelectedIdError] = useState('Please select an ID!');
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('form submitted');
        navigate(`/${category}/${id}`);
    };

    const formHasErrors = selectedIdError;

    const idChangeHandler = (e) => {
        setId(e.target.value);
        if (e.target.value.length < 1){
            setSelectedIdError('Please select an ID!');
        } else {
            setSelectedIdError('');
        }
    };

    return (
        <>
        <h2 style={{textAlign:'center'}}>Star Wars API</h2>
        <form onSubmit={(e) => {
            onSubmitHandler(e);
        }}>
            <div className="flex-col align-items-center text-center">
                <div className='input-group'>
                <label className='input-group-text'>Search For:</label>
                <select className='form-select' onChange={(e) => {
                    setCategory(e.target.value)}} value={category}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="films">Films</option>
                    <option value="species">Species</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="starships">Starships</option>
                </select>
                </div>
                {selectedIdError !== '' && <p style={{color:'red'}}>{selectedIdError}</p> }
                <div className='input-group'>
                    <label className='input-group-text'>ID:</label>
                    <input value={id} type="number" onChange={(e) => idChangeHandler(e)} className='form-control' />
                </div>
                <button disabled={formHasErrors} type='submit' className="btn btn-outline-secondary">Search</button>
            </div>
        </form>
    </>
    );
};