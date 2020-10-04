import React, { useState } from 'react';

import buttonStyles from './Button.module.css'
import initialLayout from '../data/layout.json'
import initialData from '../data/data.json'
import { saveData } from '../redux/actions/documentInfo';
import { useDispatch } from 'react-redux';

function DocumentList() {
    const [layout, setLayout] = useState(initialLayout || {})
    const [data, setData] = useState(initialData || {})
    const dispatch = useDispatch()

    const handleChangeInput = (e, column) => {
        e.preventDefault()
        const value = e.target.value

        const schema = data.schema
        schema.fields.find(res => res._id === column.fieldId)['value'] = value
        setData((prevData) => ({
            ...prevData,
            schema: schema
        }))
    }
    const handleSaveInput = (e) => {
        e.preventDefault()
        dispatch(saveData(data))
    }

    return (
        (Object.keys(layout).length !== 0 && Object.keys(data).length !== 0) ?
            <div className="Document-container">
                <form>
                    <table>
                        {layout.header.rows.map((row, index) =>
                            <tr>
                                {row.columns.map((column, index) => {
                                    let schemaInput = data.schema.fields.find(res => res._id === column.fieldId)
                                    return schemaInput &&
                                        <td>
                                            <label key={index} >
                                                {schemaInput.label}
                                                <input
                                                    key={index}
                                                    type={schemaInput.type}
                                                    value={schemaInput.value || ""}
                                                    onChange={e => handleChangeInput(e, column)}
                                                />
                                            </label>
                                        </td>
                                }
                                )}

                            </tr>
                        )}
                        <button className={buttonStyles.btnMain} onClick={e => handleSaveInput(e, data)}>Save</button>
                    </table>
                </form>
            </div>
            :
            <div>
                There is an issue to fetching information from layout and/or data json files.
                <br />
                Please control the json files.
        </div>
    );
}

export default DocumentList;
