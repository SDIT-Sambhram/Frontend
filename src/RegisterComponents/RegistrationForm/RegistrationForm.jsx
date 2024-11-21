import './RegistrationForm.css'
import { StoreContext } from '../../Contexts/StoreContext';
import { useContext } from 'react';

const RegistrationForm = () => {
    const collegeNames = [
        "ACS College of Engineering",
        "Advanced Management College",
        "Alva's Institute of Engineering and Technology",
        "Bearys Institute of Technology",
        "B L D E A's V P Dr P G Halakatti College of Engineering and Technology",
        "BMS Institute of Technology and Management",
        "Cambridge Institute of Technology",
        "Canara Engineering College (CE)",
        "City College",
        "Dayananda Sagar College of Engineering",
        "Dr Ambedkar Institute of Technology",
        "Dr M V Shetty Institute of Technology",
        "Dr Sri Sri Sri Shivakumara Mahaswamy College of Engineering",
        "Dr T M A Pai Polytechnic (TMAP Polytechnic)",
        "East West Institute of Technology",
        "Ghousia College of Engineering",
        "Global Academy of Technology",
        "Government Polytechnic for Women, Karkala (GPFW, Karkala)",
        "Government Polytechnic, Bajpe (GP, Bajpe)",
        "Government Polytechnic, Ujire (GP, Ujire)",
        "Guru Nanak Dev Engineering College",
        "HKBK College of Engineering",
        "Impact Polytechnic",
        "Indira Shiva Rao Polytechnic, Udupi",
        "JSS Academy of Technical Education",
        "Jawaharlal Nehru National College of Engineering",
        "K L E Society's College of Engineering and Technology",
        "K L S Gogte Institute of Technology",
        "Karavali Institute of Technology",
        "KVG Engineering College",
        "K V Gowda Polytechnic (KVG Polytechnic)",
        "Manglore Marine College and Technology",
        "Mangalore Institute of Technology and Engineering (MITE)",
        "Manipal Institute of Technology (MIT)",
        "M S Ramaiah Institute of Technology",
        "National Institute of Technology Karnataka (NITK)",
        "Nitte Meenakshi Institute of Technology",
        "NRAMP, Nitte",
        "Oxford Business School",
        "P A College of Engineering, (PACE)",
        "R L Jalappa Institute of Technology",
        "Rajarajeswari College of Engineering",
        "Rajeev Institute of Technology",
        "Reva Institute of Science and Management",
        "Reva Institute of Technology and Management",
        "RNS Institute of Technology",
        "Rural Engineering College",
        "Sahyadri College of Engineering and Management (SCE)",
        "SBRR Mahajana First Grade College",
        "SDM College of Engineering and Technology (SDMC)",
        "Shri Madhwa Vadiraja Institute of Technology and Management (SMVIT)",
        "Shree Devi Institute of Engineering and Technology",
        "Siddaganga Institute of Technology",
        "SJEC - St Joseph Engineering College",
        "SJB Institute of Technology",
        "Sri Dharmasthala Manjunatheshwara Polytechnic (SDMP, Ujire)",
        "Sri Revana Siddeshwara Institute of Technology",
        "Srinivas Institute of Technology (SIT)",
        "Sri Krishna School of Engineering and Management",
        "Sri Taralabalu Jagadguru Institute of Technology",
        "Vemana Institute of Technology",
        "Vivekananda College of Engineering and Technology",
        "Vivekananda Polytechnic (VC Polytechnic)",
        "Yenepoya Institute of Technology (YIT)",
        "Other",
    ];


    const { data, setData } = useContext(StoreContext)
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }
 

    return (
        <div className="registration-form-div">

            <form action="" className='registration-form'>

                <h2>ENTER YOUR DETAILS</h2>
                <p className='team-event-warning'><i className="fa-solid fa-circle-exclamation">&nbsp;&nbsp;</i>For team events, all team members must register individually.</p>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    onChange={onChangeHandler}
                    value={data.name}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter USN"
                    name="usn"
                    onChange={onChangeHandler}
                    value={data.usn}
                    required
                />
                <select
                    name="college"
                    onChange={onChangeHandler}
                    value={data.college}
                    required
                >
                    <option value="" disabled>Select College</option>
                    {collegeNames.map((college, index) => (
                        <option key={index} value={college}>{college}</option>
                    ))}
                </select>
                {
                    data.college == "Other" ? <input
                        type="text"
                        placeholder="Enter College Name"
                        name="Othercollege"
                        onChange={onChangeHandler}
                        value={data.Othercollege}
                        required
                    /> : <>
                    </>
                }

                <input
                    type="number"
                    placeholder="Enter Your Mobile Number"
                    name="mobile"
                    onChange={onChangeHandler}
                    value={data.mobile}
                    required
                />
            </form>


        </div>
    )


}

export default RegistrationForm;