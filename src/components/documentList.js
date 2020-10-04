import React, { useState } from 'react';

import buttonStyles from './Button.module.css'
import { saveData } from '../redux/actions/documentInfo';
import { useDispatch } from 'react-redux';

function DocumentList(props) {
    const { layout, definition } = props.documentInfo
    const dispatch = useDispatch()

    const [data, setData] = useState(definition || {})
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
                        <tbody>
                            {layout.header.rows.map((row, index) =>
                                <tr key={index}>
                                    {row.columns.map((column, index) => {
                                        let schemaInput = data.schema.fields.find(res => res._id === column.fieldId)
                                        return schemaInput &&
                                            <td key={index}>
                                                <label >
                                                    {schemaInput.label}
                                                    <input
                                                        type={schemaInput.type}
                                                        value={schemaInput.value || ""}
                                                        onChange={e => handleChangeInput(e, column)}
                                                    />
                                                </label>
                                            </td>
                                    })}
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <button className={buttonStyles.btnMain} onClick={e => handleSaveInput(e, data)}>Save</button>
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
