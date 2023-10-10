import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BsCardChecklist } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

const TextAreaComponents = (props) => {
    return (
        <textarea id={props.id} className={props.cn} type={props.typ} placeholder={props.plh} name={props.nm} rows={props.rw} />
    )
}

const FormInputModule = (props) => {
    return (
        <input
            style={props.style}
            ref={props.ref}
            onClick={props.onClick}
            checked={props.checked}
            defaultValue={props.dv}
            disabled={props.disabled}
            onBlur={props.onBlur}
            value={props.val}
            type={props.typ}
            name={props.nm}
            className={props.cn}
            onChange={props.onChange}
            id={props.id}
            placeholder={props.plh}
        />
    )
}

const FormLabelModule = (props) => {
    return (
        <label className={props.cn}>{props.title}</label>
    )
}
const ButtonComponents = (props) => {
    return (
        <button style={{ backgroundColor: "#bfa9ac" }} type={props.typ} className={props.cn} id={props.id} onClick={props.onClick}>{props.btnname}</button>
    )
}

const RadioComponents = (props) => {
    return (
        <>
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label" for="flexRadioDefault1">
                Default radio
            </label>
        </>
    )
}

const DropdownComponents = (props) => {
    return (
        <>
            <div className="dropdown">
                <button style={{ backgroundColor: "#bfa9ac" }} className={props.cn} type={props.typ} id={props.id} data-bs-toggle="dropdown" aria-expanded="false">
                    {props.dropdownname} <IoIosArrowDown size={15} />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <Link className="dropdown-item" to="/profile"><BiUserCircle size={23} /> My Profile</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/orders"><BsCardChecklist size={23} /> Orders</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" onClick={props.onClickThree}><AiOutlineLogout size={23} /> {props.dropthree}</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export { TextAreaComponents, ButtonComponents, FormInputModule, FormLabelModule, DropdownComponents, RadioComponents }
