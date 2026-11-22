import {React} from 'react'

export default function SelectGender({ gender, setGender }) {

    return (

        <select
            name="gender"
            id="gender-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
        >
            <option value="">Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
        </select>

    )
}
