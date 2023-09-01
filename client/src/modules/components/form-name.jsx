import { useEffect, useState } from "react";

const FormName = ({ register, errors, userName, setUserName, setEditing }) => {
    return (
        <div className="form-outline mb-4" onClick={() => setEditing(true)}>
            <label className="form-label float-start" htmlFor="name">
                Name:
            </label>
            <input
                {...register("name")}
                type="text"
                id="name"
                className="form-control"
                value={userName || ""}
                placeholder="Enter your name"
                onChange={(e) => {

                    setUserName(e.target.value);
                }}
            />
            {errors.name && (
                <p className="text-danger"> {errors.name.message} </p>
            )}
        </div>
    );
};

export default FormName;
